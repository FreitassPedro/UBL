import { Card, CardHeader, CardTitle } from "../ui/card";


import { VideoList } from "./VideoList";

import { Separator } from "@radix-ui/react-separator";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Progress } from "@radix-ui/react-progress";
import type { Course, Video } from "../../../types/course";

interface CourseSidebarProps {
    courseData: Course;
    progress: number;
    selectedVideo: Video
    onSelectVideo: (video: Video) => void
}

export function CourseSidebar({ courseData, progress, selectedVideo, onSelectVideo }: CourseSidebarProps) {
    return (
        <Card className="flex flex-col h-[100vh]">
            <CardHeader>
                <CardTitle className="text-lg">Aulas</CardTitle>
                <div className="space-y-2">
                    <Progress value={progress} />
                    <p className="text-sm text-muted-foreground">
                        {Math.round(progress)}% concluído
                    </p>
                </div>
            </CardHeader>
            <Separator />
            <ScrollArea className="flex-grow overflow-y-auto">
                <VideoList
                    videos={courseData.videos}
                    selectedVideo={selectedVideo}
                    onSelectVideo={onSelectVideo}
                />
            </ScrollArea>
        </Card>
    );
}