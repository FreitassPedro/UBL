import { BookRecommendation } from "@/components/curriculum/BookRecommendation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Asterisk, BookOpen, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface SubjectProps {
  subject: {
    name: string;
    prerequisites: string[];
    books?: { name: string; url: string }[];
  };
  index: number;
}

export const Subject = ({ subject, index }: SubjectProps) => {
  const [showBooks, setShowBooks] = useState(false);
  const getColorBackground = (): string => {
    return index % 2 === 0 ? "bg-zinc-900/75" : "bg-zinc-800/75";
  };

  return (
    <li key={index} className="relative group">
      <div className={cn("relative px-4 py-2 shadow-sm", getColorBackground())}>
        {/* Content Container */}
        <div className="flex justify-between items-center">
          <div className="flex-1">
            {/* Subject Header */}
            <div className="flex items-center gap-3">
              {/* Animated Pulse Dot */}
              <div className="w-3 h-3 bg-linear-to-r from-ubl-blue to-ubl-green rounded-full animate-pulse" />
              <h3 className="font-md text-xl text-white tracking-tight">
                {subject.name}
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <Badge
                variant="secondary"
                className={cn(
                  "flex items-center gap-1 px-3 py-1 bg-linear-to-r border-white/20 text-gray-100 bg-black/20",
                  subject.prerequisites.length > 0
                    ? "from-purple-500/30 to-pink-700/30"
                    : "",
                )}
              >
                <Asterisk className="h-3 w-3 text-yellow-400" />
                <span className="text-xs">
                  {subject.prerequisites.length > 0
                    ? "Pré-requisitos"
                    : "Sem pré-requisitos"}{" "}
                </span>
              </Badge>
              {subject.prerequisites.length > 0 && (
                <ul className="flex flex-wrap gap-2">
                  {subject.prerequisites.map((prereq, i) => (
                    <li key={i}>
                      <Badge
                        variant="outline"
                        className="bg-linear-to-r from-purple-500/10 to-pink-800/20 text-purple-200 border-purple-500/30 px-2 py-1"
                      >
                        {prereq}
                      </Badge>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Show Books Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowBooks(!showBooks)}
            className="cursor-pointer ml-4 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <BookOpen className="h-4 w-4" />
            <span className="hidden sm:inline cursor-pointer">
              Recomendações
            </span>
            <div className="flex items-center">
              {showBooks ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </div>
          </Button>
        </div>

        {/* Books Section */}
        {showBooks && <BookRecommendation subject={subject} />}
      </div>
    </li>
  );
};
