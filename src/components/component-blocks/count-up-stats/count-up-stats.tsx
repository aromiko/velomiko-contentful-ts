"use client";

import CountUp from "./count-up";

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
    <section className="px-4 py-20 md:py-24 bg-destructive text-destructive-foreground">
      <h2 className="mb-8 text-center text-4xl md:mb-16 font-semibold">
        {header}
      </h2>

      <div className="flex flex-col items-center justify-center lg:flex-row">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col lg:flex-row items-center">
            {index !== 0 && (
              <div className="h-[2px] w-12 bg-destructive-foreground lg:h-12 lg:w-[2px]" />
            )}
            <Stat {...stat} />
          </div>
        ))}
      </div>
    </section>
  );
};

interface Props {
  num: number;
  suffix?: string;
  decimals?: number;
  subheading?: string;
}

const Stat = ({ num, suffix, subheading }: Props) => {
  return (
    <div className="flex w-96 min-h-[172px] lg:min-h-24 flex-col items-center py-8 lg:py-0">
      <p className="mb-2 text-center text-7xl font-semibold lg:text-6xl ">
        <CountUp
          from={0}
          to={num}
          separator=","
          direction="up"
          duration={0.5}
          className="count-up-text"
          suffix={suffix}
        />
      </p>
      <p className="max-w-48 text-center">{subheading && subheading}</p>
    </div>
  );
};
