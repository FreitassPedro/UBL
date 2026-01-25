import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronRight, HomeIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface LessonBreadcrumbProps {
  subjectName: string;
  lessonTitle?: string;
}

export const LessonBreadcrumb = ({
  subjectName,
  lessonTitle,
}: LessonBreadcrumbProps) => {
  return (
    <Breadcrumb className="shrink-0">
      <BreadcrumbList className="text-sm text-gray-400 flex-nowrap overflow-hidden min-w-0">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/" className="hover:text-gray-200">
              <HomeIcon size={14} />
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator>
          <ChevronRight size={14} />
        </BreadcrumbSeparator>

        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/meu-curso" className="hover:text-gray-200">
              Cadeira
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator>
          <ChevronRight size={14} />
        </BreadcrumbSeparator>

        <BreadcrumbItem className="min-w-0">
          <BreadcrumbLink asChild>
            <Link
              to="/meu-curso"
              className="hover:text-gray-200 block truncate"
            >
              {subjectName}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator>
          <ChevronRight size={14} />
        </BreadcrumbSeparator>

        <BreadcrumbItem className="min-w-0 flex-1">
          <BreadcrumbPage className="text-gray-200 font-medium block truncate">
            {lessonTitle}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
