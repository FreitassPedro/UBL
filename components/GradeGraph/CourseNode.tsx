import type React from "react"
import { Handle, Position } from "reactflow"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"

export type CourseStatus = "default" | "completed" | "in-progress"

interface CourseNodeProps {
  data: {
    id: string
    label: string
    isSelected: boolean
    isConnected: boolean
    semesterIndex: number
    status: CourseStatus
    onStatusChange: (id: string, status: CourseStatus) => void
  }
}

const CourseNode: React.FC<CourseNodeProps> = ({ data }) => {
  const getBackgroundColor = () => {
    if (data.isSelected) return "bg-primary text-primary-foreground"
    if (data.status === "completed") return "bg-green-500 text-white"
    if (data.status === "in-progress") return "bg-yellow-500 text-white"
    if (data.isConnected) return "bg-secondary"
    return "bg-background"
  }

  return (
    <Card className={`w-48 transition-all duration-300 ${getBackgroundColor()}`}>
      <CardContent className="p-4 relative">
        <Handle type="target" position={Position.Top} className="w-3 h-3 !bg-muted-foreground" />
        <div className="font-semibold text-sm">{data.label}</div>
        <div className="text-xs text-muted-foreground mt-1">Semestre {data.semesterIndex + 1}</div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300">
              <MoreHorizontal size={16} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onSelect={() => data.onStatusChange(data.id, "default")}>Padrão</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => data.onStatusChange(data.id, "in-progress")}>Em Curso</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => data.onStatusChange(data.id, "completed")}>Concluído</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Handle type="source" position={Position.Bottom} className="w-3 h-3 !bg-muted-foreground" />
      </CardContent>
    </Card>
  )
}

export default CourseNode

