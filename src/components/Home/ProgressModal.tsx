"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { MyCadeiraProgress } from "@/types/progress";
import { ChevronUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export type WatchedCourse = MyCadeiraProgress & {
  etapaName: string;
  etapaNumber: number;
};

type HomeHighlightsDrawerProps = {
  watchedCourses: WatchedCourse[];
  sortBy: string;
  setSortBy: (value: string) => void;
  sortOptions: string[];
};

export const ProgressModal: React.FC<HomeHighlightsDrawerProps> = ({
  watchedCourses,
  sortBy,
  setSortBy,
  sortOptions,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Desabilita o scroll da página pai do modal
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }

    document.body.style.overflow = "";
  }, [isDrawerOpen]);

  return (
    <>
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}
      <Collapsible open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <CollapsibleTrigger asChild>
          <button
            type="button"
            className="cursor-pointer fixed bottom-6 left-1/2 z-[60] flex size-12 -translate-x-1/2 items-center justify-center rounded-full border border-white/10 bg-zinc-900 text-white transition hover:-translate-y-1"
            aria-label={isDrawerOpen ? "Fechar destaques" : "Abrir destaques"}
          >
            <ChevronUp
              className={`size-5 transition-transform ${
                isDrawerOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </CollapsibleTrigger>
        <div className="fixed inset-x-0 bottom-0 z-50">
          <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <div className="h-screen overflow-y-auto">
              <HeroHighlight
                className="w-full h-full"
                containerClassName="min-h-screen py-16 border-t border-zinc-800 dark:bg-bg-body"
              >
                {watchedCourses.length !== 0 && (
                  <Card className="p-0 max-w-6xl mx-auto overflow-hidden rounded-3xl bg-bg-card text-center">
                    <CardHeader className="px-8 pt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div className="text-left space-y-2">
                        <CardTitle className="text-4xl font-semibold text-white">
                          Continue onde parou
                        </CardTitle>
                        <CardDescription className="text-md text-zinc-400">
                          Retome rapidamente os cursos em andamento.
                        </CardDescription>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="uppercase text-xs text-zinc-400">
                          Ordenar por
                        </span>
                        <Select value={sortBy} onValueChange={setSortBy}>
                          <SelectTrigger className="w-32 cursor-pointer">
                            <SelectValue placeholder="Ordenar por" />
                          </SelectTrigger>
                          <SelectContent>
                            {sortOptions.map((option) => (
                              <SelectItem
                                key={option}
                                value={option}
                                className="cursor-pointer"
                              >
                                {option.charAt(0).toUpperCase() +
                                  option.slice(1)}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </CardHeader>

                    <CardContent className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {watchedCourses.map((course) => (
                        <Card
                          key={course.id}
                          className="text-left hover:border-zinc-700/80 hover:-translate-y-1 transition duration-300"
                        >
                          <CardHeader className="p-0">
                            <CardDescription className="font-semibold text-gray-400">
                              Etapa {course.etapaNumber}
                            </CardDescription>
                            <CardTitle className="text-xl text-white font-semibold">
                              {course.name}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="p-0 my-2">
                            <div className="flex items-center justify-between text-gray-400 text-sm">
                              <span>Progresso</span>
                              <span>{course.progress}%</span>
                            </div>
                            <Progress
                              value={course.progress}
                              className="my-2 bg-zinc-700"
                            />
                          </CardContent>
                          <CardFooter className="p-0">
                            <Button
                              asChild
                              variant="secondary"
                              className="w-full"
                            >
                              <Link to={`/curso/${course.id}`}>Retomar</Link>
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </CardContent>
                  </Card>
                )}

                <Card className="p-0 max-w-3xl mx-auto overflow-hidden mt-10 rounded-3xl text-center">
                  <CardHeader className="p-0 mt-8">
                    <CardTitle className="text-3xl font-semibold text-white mb-2">
                      Pronto para continuar?
                    </CardTitle>
                    <CardDescription className="text-md text-zinc-400 max-w-lg mx-auto">
                      Você tem cadeiras pendentes na etapa atual. Volte aos
                      estudos agora mesmo.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex justify-center mb-8 mt-6">
                    <Button
                      className="text-sm font-semibold bg-zinc-100 text-zinc-900 hover:bg-white transition-colors"
                      asChild
                    >
                      <Link to="/meu-curso">Ir para meu Dashboard</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </HeroHighlight>
            </div>
          </CollapsibleContent>
        </div>
      </Collapsible>
    </>
  );
};
