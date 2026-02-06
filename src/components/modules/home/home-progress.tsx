// "use client";

// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import Link from "next/link";
// import { useState } from "react";

// export const HomeProgress = () => {
//   const [orderBy, setOrderBy] = useState<string>("etapas");

//   return (
//     <>
//       {mySubjects.length !== 0 && (
//         <div className="max-w-7xl px-6 sm:px-10 lg:px-14 mx-auto mb-20 sm:mb-24">
//           <Card className="w-full overflow-hidden border-0 bg-[#141414]">
//             <CardHeader className="p-6 sm:p-8">
//               <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
//                 <CardTitle className="text-4xl sm:text-5xl md:text-[3.5rem] font-semibold leading-[1.05] tracking-[-0.03em] bg-clip-text text-transparent bg-linear-to-br from-zinc-100 via-zinc-300 to-zinc-400">
//                   Continue onde parou
//                 </CardTitle>
//                 <div className="flex items-center gap-3">
//                   <span className="uppercase text-xs text-zinc-400">
//                     Ordenar por
//                   </span>
//                   <Select value={orderBy} onValueChange={setOrderBy}>
//                     <SelectTrigger className="w-32 cursor-pointer">
//                       <SelectValue placeholder="Ordenar por" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       {["etapas", "progresso", "curso"].map((option) => (
//                         <SelectItem
//                           key={option}
//                           value={option}
//                           className="cursor-pointer"
//                         >
//                           {option.charAt(0).toUpperCase() + option.slice(1)}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </div>
//               <CardDescription className="mt-4 text-base sm:text-lg text-zinc-200/90 font-light leading-relaxed">
//                 Retome rapidamente os cursos em andamento.
//               </CardDescription>
//             </CardHeader>

//             <ScrollArea className="h-60">
//               <div className="px-6 pb-6 sm:px-8 sm:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {mySubjects.map((subject) => (
//                   <Card
//                     key={subject.id}
//                     className="h-50 text-left hover:border-zinc-700/80"
//                   >
//                     <CardHeader className="p-0">
//                       <CardDescription className="font-semibold text-gray-400">
//                         {subject.curriculumName} - Etapa {subject.stepNumber}
//                       </CardDescription>
//                       <CardTitle className="p-0 text-left text-xl text-white font-semibold line-clamp-1">
//                         {subject.name}
//                       </CardTitle>
//                     </CardHeader>
//                     <CardContent className="p-0 my-2">
//                       {(() => {
//                         return (
//                           <>
//                             <div className="flex items-center justify-between text-gray-400 text-base">
//                               <span>Progresso</span>
//                               <span>{subject.progress}%</span>
//                             </div>
//                             <Progress
//                               value={subject.progress}
//                               className="my-2 bg-zinc-700"
//                             />
//                           </>
//                         );
//                       })()}
//                     </CardContent>
//                     <CardFooter className="p-0">
//                       <Button asChild variant="secondary" className="w-full">
//                         <Link
//                           href={`/meu-curso/${subject.curriculumAcronym}/etapas/${subject.stepNumber}/disciplinas/${subject.id}`}
//                         >
//                           Retomar
//                         </Link>
//                       </Button>
//                     </CardFooter>
//                   </Card>
//                 ))}
//               </div>
//             </ScrollArea>
//           </Card>
//         </div>
//       )}
//     </>
//   );
// };

// export default HomeProgress;
