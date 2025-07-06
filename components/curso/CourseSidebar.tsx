import { Card, CardHeader, CardTitle } from "../ui/card";

import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { VideoList } from "../video-list";
import { Course } from "@/types/course";
import React from "react";
import type { Video } from "@/types/course"

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