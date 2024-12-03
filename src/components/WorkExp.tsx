'use client';

import React, { useState } from 'react';
import { DATA } from '@/data/resume';
import { ResumeCard } from './resume-card';
import BlurFade from './magicui/blur-fade';

const BLUR_FADE_DELAY = 0.04;
const WorkExp = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleToggle = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };
  return (
    <>
      {DATA.work.map((work, id) => (
        <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
          <ResumeCard
            key={work.company}
            logoUrl={work.logoUrl}
            altText={work.company}
            title={work.company}
            subtitle={work.title}
            href={work.href}
            badges={work.badges}
            period={`${work.start} - ${work.end ?? 'Present'}`}
            description={work.description}
            isExpanded={expandedIndex === id}
            onToggle={() => handleToggle(id)}
          />
        </BlurFade>
      ))}
    </>
  );
};

export default WorkExp;
