import { TypeComponentHero } from "@/lib/types";

type HeroProps = {
  data: TypeComponentHero;
};

function Hero({ data }: HeroProps) {
  return <div>{data.heroTitle && data.heroTitle}</div>;
}

export default Hero;
