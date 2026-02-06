 "use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ChevronRight, HomeIcon } from "lucide-react";
import Link from "next/link";

interface LessonBreadcrumbProps {
  subjectName: string;
  lessonName: string;
}

export const MyLessonBreadcrumb = ({ subjectName, lessonName }: LessonBreadcrumbProps) => {
  return (
    <TooltipProvider>
      <Breadcrumb className="shrink-0">
        <BreadcrumbList className="text-sm text-gray-400 flex-nowrap overflow-hidden min-w-0">
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/" className="hover:text-gray-200">
                <HomeIcon size={14} />
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator>
            <ChevronRight size={14} />
          </BreadcrumbSeparator>

          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/meu-curso" className="hover:text-gray-200">
                Disciplina
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator>
            <ChevronRight size={14} />
          </BreadcrumbSeparator>

          <BreadcrumbItem className="min-w-0">
            <Tooltip>
              <TooltipTrigger asChild>
                <BreadcrumbLink asChild>
                  <Link
                    href="/meu-curso"
                    className="hover:text-gray-200 block truncate"
                  >
                    {subjectName}
                  </Link>
                </BreadcrumbLink>
              </TooltipTrigger>
              <TooltipContent>{subjectName}</TooltipContent>
            </Tooltip>
          </BreadcrumbItem>

          <BreadcrumbSeparator>
            <ChevronRight size={14} />
          </BreadcrumbSeparator>

          <BreadcrumbItem className="min-w-0 flex-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <BreadcrumbPage className="text-muted-foreground font-medium block truncate">
                  {lessonName}
                </BreadcrumbPage>
              </TooltipTrigger>
              <TooltipContent>{lessonName}</TooltipContent>
            </Tooltip>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </TooltipProvider>
  );
};

export default MyLessonBreadcrumb;
