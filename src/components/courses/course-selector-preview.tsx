import CourseSelectorLink from "@/components/courses/course-selector-link";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image, { StaticImageData } from "next/image";

interface CourseSelectorPreviewProps {
  course: {
    slug: string;
    name: string;
    description: string;
    image: string | StaticImageData;
    className: string;
  };
}

export const CourseSelectorPreview = ({ course }: CourseSelectorPreviewProps) => {
  return (
    <Card
      key={course.slug}
      className="overflow-hidden rounded-lg border-0 bg-zinc-900 p-0 transition duration-300 ease-in-out hover:scale-102 hover:shadow-xl"
    >
      <CourseSelectorLink slug={course.slug} className="block h-full">
        <div className="h-64 sm:h-72 lg:h-80 overflow-hidden">
          <Image
            src={course.image}
            alt={course.name}
            className="w-full h-full object-cover"
          />
        </div>
        <Separator className={course.className} />
        <CardContent className="flex flex-col items-center justify-center space-y-2 px-6 pb-6 pt-4 sm:px-8 sm:pb-8 sm:pt-5">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-100">
            {course.name}
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 text-center">
            {course.description}
          </p>
        </CardContent>
      </CourseSelectorLink>
    </Card>
  );
};

export default CourseSelectorPreview;
