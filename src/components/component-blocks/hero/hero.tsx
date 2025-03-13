import { TypeComponentHero } from "@/lib/types";

type HeroProps = {
  data: TypeComponentHero;
};

function Hero({ data }: HeroProps) {
  return (
    <section
      style={{ backgroundImage: `url(${data.heroImage.basicMediaImage.url})` }}
      className="flex flex-col flex-1 bg-cover bg-top bg-no-repeat relative"
    >
      <div className="absolute h-full w-full top-0 left-0 bg-black bg-opacity-30 z-0"></div>
      <div className="container py-20 px-4 z-10">
        {data.heroTitle && (
          <h1 className="font-extrabold text-4xl text-white">
            {data.heroTitle}
          </h1>
        )}
      </div>
    </section>
  );
}

export default Hero;
