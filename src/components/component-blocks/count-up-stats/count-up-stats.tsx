"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type CountUpStatsProps = {
  header: string;
  stats: {
    num: number;
    suffix?: string;
    decimals?: number;
    subheading?: string;
  }[];
};

export const CountUpStats = ({ header, stats }: CountUpStatsProps) => {
  return (
    <div className="mx-auto px-4 py-20 md:py-24">
      <h2 className="mb-8 text-center text-base text-primary sm:text-4xl md:mb-16 font-semibold">
        {header}
      </h2>

      <div className="flex flex-col items-center justify-center lg:flex-row">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col lg:flex-row items-center">
            {index !== 0 && (
              <div className="h-[1px] w-12 bg-indigo-200 lg:h-12 lg:w-[1px]" />
            )}
            <Stat {...stat} />
          </div>
        ))}
      </div>
    </div>
  );
};

interface Props {
  num: number;
  suffix?: string;
  decimals?: number;
  subheading?: string;
}

const Stat = ({ num, suffix, decimals = 0, subheading }: Props) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    if (hasAnimated) return;

    animate(0, num, {
      duration: 2.5,
      onUpdate(value) {
        if (!ref.current) return;

        ref.current.textContent = value.toLocaleString("en-US", {
          maximumFractionDigits: 0
        });
        setHasAnimated(true);
      }
    });
  }, [num, decimals, isInView, hasAnimated]);

  return (
    <div className="flex w-96 flex-col items-center py-8 lg:py-0">
      <p className="mb-2 text-center text-7xl font-semibold lg:text-6xl">
        <span ref={ref}></span> {suffix && isInView && suffix}
      </p>
      <p className="max-w-48 text-center text-neutral-600">
        {subheading && subheading}
      </p>
    </div>
  );
};
