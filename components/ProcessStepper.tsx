'use client';

import React, { useState } from 'react';

interface Step {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Inquiry',
    tagline: 'Confidential Initial Outreach',
    description: 'Athletic Directors, University leadership, or estate representatives reach out to establish initial dialogue and determine baseline alignment.',
    deliverables: ['Confidentiality Agreement', 'Preliminary Narrative Brief', 'Discovery Scope'],
  },
  {
    number: '02',
    title: 'Fit Review',
    tagline: 'Historical & Institutional Audit',
    description: 'We evaluate the depth of available archival materials, existing institutional assets, historical significance, and potential risk factors.',
    deliverables: ['Narrative Capital Audit', 'Archival Viability Report', 'Stakeholder Mapping'],
  },
  {
    number: '03',
    title: 'Discovery Call',
    tagline: 'Strategic Alignment & Goal Setting',
    description: 'Structured working session with institutional leadership to align storytelling priorities with recruiting, alumni, and donor initiatives.',
    deliverables: ['Campaign Objectives', 'Key Stakeholder Roles', 'Initial Timeline Proposal'],
  },
  {
    number: '04',
    title: 'Scope & Fee',
    tagline: 'Transparent Deliverables & Governance',
    description: 'Comprehensive agreement outlining the 90–120 day build, tangible deliverables, commercial rights boundaries, and pilot investment.',
    deliverables: ['Formal Engagement SOW', 'Rights Before Reach™ Charter', 'Fixed Pilot Fee Schedule'],
  },
  {
    number: '05',
    title: 'Build & Activate',
    tagline: 'Execution & Narrative Compounding',
    description: 'We execute asset recovery, legal verification, multi-format media production, and campus/game-week activation rollouts.',
    deliverables: ['Published Media & Archival Assets', 'Campus Activation Kit', 'Long-term Compounding Roadmap'],
  },
];

export const ProcessStepper: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="w-full">
      {/* Step Numbers Nav */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
        {steps.map((step, index) => {
          const isActive = activeStep === index;
          return (
            <button
              key={step.number}
              onClick={() => setActiveStep(index)}
              className={`p-4 text-left border rounded-sm transition-all duration-300 ${
                isActive
                  ? 'bg-card-dark border-crimson shadow-lg shadow-crimson/10'
                  : 'bg-true-black/60 border-white/10 hover:border-white/25'
              }`}
            >
              <div
                className={`font-heading text-2xl font-bold mb-1 ${
                  isActive ? 'text-crimson' : 'text-gray-500'
                }`}
              >
                {step.number}
              </div>
              <div className="text-sm font-heading tracking-wide uppercase text-white truncate">
                {step.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Step Details Card */}
      <div className="bg-card-dark border border-white/10 p-8 md:p-10 rounded-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
          <div>
            <span className="text-crimson font-heading text-sm tracking-widest uppercase">
              Phase {steps[activeStep].number} of 05
            </span>
            <h3 className="text-3xl font-heading text-white mt-1">
              {steps[activeStep].title}: <span className="text-gray-400 text-xl font-normal">{steps[activeStep].tagline}</span>
            </h3>
          </div>
          <span className="text-xs font-mono uppercase bg-white/5 border border-white/10 px-3 py-1.5 rounded-sm text-gray-300">
            INI™ Implementation Phase
          </span>
        </div>

        <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed mb-8 max-w-3xl">
          {steps[activeStep].description}
        </p>

        <div>
          <h4 className="text-xs uppercase tracking-widest font-heading text-gray-400 mb-4">
            Key Milestone Deliverables
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {steps[activeStep].deliverables.map((item, idx) => (
              <div
                key={idx}
                className="bg-true-black/50 border border-white/10 p-4 rounded-sm flex items-center space-x-3"
              >
                <div className="w-2 h-2 rounded-full bg-crimson flex-shrink-0" />
                <span className="text-sm text-gray-200 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
