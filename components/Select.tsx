'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  /** Also the `htmlFor` target of the visible label. */
  id: string;
  /** Submitted field name. Carried by a hidden input, so FormData is unchanged. */
  name: string;
  /** `id` of the visible <label>, for the accessible name. */
  labelId: string;
  options: SelectOption[];
  defaultValue?: string;
  required?: boolean;
}

/**
 * An accessible listbox that replaces the native <select>.
 *
 * A native select's popup is drawn by the OS, not the page: macOS anchors it
 * over the *selected* row — so it covers the fields above the control — and
 * iOS throws up a bottom wheel. Neither inherits any of the site's styling and
 * neither can be positioned. This renders the menu in the document instead.
 *
 * The value reaches the form through a hidden input under the same `name`, so
 * `new FormData(form)` serializes exactly as it did natively and the Netlify
 * schema in public/__forms.html needs no change.
 *
 * Follows the APG combobox pattern: focus stays on the trigger throughout and
 * the active option is tracked with `aria-activedescendant`.
 */
export const Select: React.FC<SelectProps> = ({
  id,
  name,
  labelId,
  options,
  defaultValue,
  required,
}) => {
  const [value, setValue] = useState(defaultValue ?? options[0]?.value ?? '');
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const wrapRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const typeahead = useRef<{ buffer: string; timer: ReturnType<typeof setTimeout> | null }>({
    buffer: '',
    timer: null,
  });

  const selectedIndex = Math.max(
    0,
    options.findIndex((o) => o.value === value),
  );
  const selected = options[selectedIndex];
  const optionId = (i: number) => `${id}-option-${i}`;

  const openList = useCallback(
    (index: number) => {
      setActiveIndex(index);
      setOpen(true);
    },
    [],
  );

  const closeList = useCallback((refocus = true) => {
    setOpen(false);
    if (refocus) buttonRef.current?.focus();
  }, []);

  const commit = useCallback(
    (index: number) => {
      setValue(options[index].value);
      closeList();
    },
    [options, closeList],
  );

  // Dismiss on an outside press or a focus escape, without stealing the click.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onFocusIn = (e: FocusEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    // The menu is anchored to the trigger, so scrolling the page would drag it
    // across the layout. Native menus dismiss instead; match that. Scroll
    // events from the list's own overflow do not reach window, so this only
    // fires on page scroll.
    //
    // The threshold matters: `scroll-behavior: smooth` means a scroll started
    // before the menu opened can still be settling, and iOS fires scroll as
    // the address bar collapses. Either would slam the menu shut on open.
    const openedAt = window.scrollY;
    const onScroll = () => {
      if (Math.abs(window.scrollY - openedAt) > 24) setOpen(false);
    };

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('focusin', onFocusIn);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('focusin', onFocusIn);
      window.removeEventListener('scroll', onScroll);
    };
  }, [open]);

  // Keep the active option within the scrollable list.
  useEffect(() => {
    if (!open) return;
    listRef.current
      ?.querySelector(`#${CSS.escape(optionId(activeIndex))}`)
      ?.scrollIntoView({ block: 'nearest' });
  }, [open, activeIndex]);

  useEffect(() => () => {
    if (typeahead.current.timer) clearTimeout(typeahead.current.timer);
  }, []);

  /** Jump to the next option matching what the user has typed so far. */
  const onType = (char: string) => {
    const t = typeahead.current;
    if (t.timer) clearTimeout(t.timer);
    t.buffer += char.toLowerCase();
    t.timer = setTimeout(() => {
      t.buffer = '';
    }, 500);

    const from = open ? activeIndex : selectedIndex;
    // Start just past the current option so repeated letters cycle.
    const order = options
      .map((_, i) => (from + 1 + i) % options.length)
      .concat(from);
    const hit = order.find((i) => options[i].label.toLowerCase().startsWith(t.buffer));
    if (hit === undefined) return;
    if (open) setActiveIndex(hit);
    else setValue(options[hit].value);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    const last = options.length - 1;

    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowUp': {
        e.preventDefault();
        const step = e.key === 'ArrowDown' ? 1 : -1;
        if (!open) {
          openList(Math.min(last, Math.max(0, selectedIndex + step)));
        } else {
          setActiveIndex((i) => Math.min(last, Math.max(0, i + step)));
        }
        return;
      }
      case 'Home':
      case 'End': {
        e.preventDefault();
        const target = e.key === 'Home' ? 0 : last;
        if (open) setActiveIndex(target);
        else openList(target);
        return;
      }
      case 'Enter':
      case ' ': {
        e.preventDefault();
        if (open) commit(activeIndex);
        else openList(selectedIndex);
        return;
      }
      case 'Escape': {
        if (open) {
          e.preventDefault();
          closeList();
        }
        return;
      }
      case 'Tab': {
        // Let focus move on, but do not leave an orphaned menu behind.
        if (open) setOpen(false);
        return;
      }
      default: {
        if (e.key.length === 1 && !e.metaKey && !e.ctrlKey && !e.altKey) {
          e.preventDefault();
          onType(e.key);
        }
      }
    }
  };

  return (
    <div ref={wrapRef} className="relative">
      {/* What the form actually submits. */}
      <input type="hidden" name={name} value={value} />

      <button
        ref={buttonRef}
        type="button"
        id={id}
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${id}-listbox`}
        aria-labelledby={`${labelId} ${id}`}
        aria-activedescendant={open ? optionId(activeIndex) : undefined}
        aria-required={required || undefined}
        onClick={() => (open ? setOpen(false) : openList(selectedIndex))}
        onKeyDown={onKeyDown}
        className="w-full flex items-center justify-between gap-2 text-left bg-true-black/60 border border-white/15 rounded-sm px-4 py-3 text-sm leading-5 text-white cursor-pointer focus:outline-none focus:border-crimson focus-visible:ring-2 focus-visible:ring-crimson/70 transition-colors"
      >
        <span className="truncate">{selected?.label}</span>
        <ChevronDown
          aria-hidden="true"
          className={`w-4 h-4 shrink-0 text-gray-400 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {open && (
        <ul
          ref={listRef}
          id={`${id}-listbox`}
          role="listbox"
          aria-labelledby={labelId}
          tabIndex={-1}
          // z-50 clears the scroll-to-top FAB (z-40), which otherwise sits over
          // the menu and swallows taps on the last option.
          className="absolute z-50 top-full left-0 right-0 mt-1 max-h-64 overflow-y-auto bg-true-black border border-white/20 rounded-sm shadow-2xl py-1"
        >
          {options.map((option, i) => {
            const isSelected = i === selectedIndex;
            const isActive = i === activeIndex;
            return (
              <li
                key={option.value}
                id={optionId(i)}
                role="option"
                aria-selected={isSelected}
                // Keep focus on the trigger so the button never blurs mid-click.
                onMouseDown={(e) => e.preventDefault()}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => commit(i)}
                className={`flex items-center justify-between gap-2 px-4 py-3 text-sm leading-5 cursor-pointer transition-colors ${
                  isActive ? 'bg-crimson text-white' : 'text-gray-200'
                }`}
              >
                <span>{option.label}</span>
                {isSelected && <Check aria-hidden="true" className="w-4 h-4 shrink-0" />}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
