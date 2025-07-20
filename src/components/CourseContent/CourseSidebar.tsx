import { Card, CardHeader, CardTitle } from "../ui/card";


import { VideoList } from "./VideoList";

import { Separator } from "@radix-ui/react-separator";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Progress } from "@radix-ui/react-progress";
import type { MyCadeiraProgress, MyLesson } from "../../data/myCourseProgress";


interface CourseSidebarProps {
    cadeira: MyCadeiraProgress;
    selectedLesson: MyLesson;
    onSelectLesson: (lesson: MyLesson) => void
}


export function CourseSidebar({ cadeira, selectedLesson, onSelectLesson }: CourseSidebarProps) {
    return (
        <Card className="flex flex-col h-[100vh]">
            <CardHeader>
                <CardTitle className="text-lg">Aulas</CardTitle>
                <div className="space-y-2">
                    <Progress value={50} />
                    <p className="text-sm text-muted-foreground">
                        {Math.round(50)}% concluído
                    </p>
                </div>
            </CardHeader>
            <Separator />
            <ScrollArea className="flex-grow overflow-y-auto">
                <VideoList
                    lessons={cadeira.lessons}
                    selectedLesson={selectedLesson}
                    onSelectLesson={onSelectLesson}
                />
            </ScrollArea>
        </Card>
    );
}