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
    <div className="relative h-112 shadow-lg w-full mb-8 overflow-hidden">
      <div className="absolute inset-0 z-1 overflow-hidden w-full h-full">
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="h-full z-10 relative flex items-center justify-center px-6">
        <div className="max-w-2xl text-center transition-all duration-1000 ease-out">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            {title}
          </h1>
          <p className="text-xl text-white mb-6 font-light">{description}</p>
        </div>
      </div>
    </div>
  );
};
