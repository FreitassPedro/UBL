interface CurriculumHeroProps {
  title: string;
  description: string;
  image: string;
}

export const CurriculumHero = ({
  title,
  description,
  image,
}: CurriculumHeroProps) => {
  return (
    <div className="relative min-h-72 sm:min-h-88 md:min-h-112 shadow-lg w-full mb-8 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-1 overflow-hidden w-full h-full">
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="z-10 relative flex items-center justify-center w-full px-6 sm:px-10 py-10">
        <div className="max-w-2xl text-center transition-all duration-1000 ease-out">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white mb-6 font-light">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
