import studyIllustration2 from "@/assets/imgs/studyIllustion2.png";
import studyIllustration from "@/assets/imgs/studyIllustration.png";
import HomeHero from "@/components/home/HomeHero";
import { HomeProgress } from "@/components/home/HomeProgress";
import { HomeSection } from "@/components/home/HomeSection";
import { BackgroundGrid } from "@/components/layout/BackgroundGrid";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessagesSquare } from "lucide-react";

export const HomePage = () => {
  return (
    <div className="relative min-h-full h-full bg-[#06070b] text-zinc-100 selection:bg-blue-500/30 font-sans overflow-hidden">
      <BackgroundGrid />
      <HomeHero />
      <HomeProgress />
      <HomeSection
        title="Customize sua trilha"
        description="Nós organizamos uma completa biblioteca de conteúdos bem avaliados, para então você escolher o jeito que mais combina com seu estilo de aprendizado."
        imageSrc={studyIllustration}
        imageAlt=""
        className="bg-zinc-900"
      />

      <HomeSection
        title="Nossa comunidade pronta para ajudar"
        description="Una-se a outros estudantes e compartilhe suas dúvidas e conhecimentos no nosso Discord."
        imageSrc={studyIllustration2}
        imageAlt=""
        imageReverse
        className="bg-[#141414]"
      >
        <Button
          asChild
          size="lg"
          variant="secondary"
          className="cursor-pointer mt-6"
        >
          <a
            href="https://discord.com/invite/eXUBTY6HAu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <MessagesSquare className="w-4 h-4" />
            <span>Entrar no Discord</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </Button>
      </HomeSection>
    </div>
  );
};

export default HomePage;
