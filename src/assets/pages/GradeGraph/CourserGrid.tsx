import type React from "react"
import { useCallback, useEffect, useState } from "react"
import ReactFlow, {
  type Node,
  type Edge,
  type Connection,
  useNodesState,
  useEdgesState,
  addEdge,
  Background,
  Controls,
} from "reactflow"
import "reactflow/dist/style.css"
import CourseNode, { type CourseStatus } from "../GradePage/CourseNode"
import coursesNode from "../../../data/coursesNode"

const nodeTypes = {
  course: CourseNode,
}

const initialNodes: Node[] = coursesNode.flatMap((semester, semesterIndex) =>
  semester.map((course, courseIndex) => ({
    id: `${semesterIndex + 1}-${courseIndex + 1}`,
    type: "course",
    data: {
      id: `${semesterIndex + 1}-${courseIndex + 1}`,
      label: course,
      isSelected: false,
      isConnected: false,
      semesterIndex: semesterIndex,
      status: "default" as CourseStatus,
      onStatusChange: () => {},
    },
    position: { x: courseIndex * 200, y: semesterIndex * 150 },
  })),
)

const initialEdges: Edge[] = [
  { id: "e2-1-1-5", source: "2-1", target: "1-5" },
  { id: "e2-2-1-5", source: "2-2", target: "1-5" },
  { id: "e2-3-1-2", source: "2-3", target: "1-2" },
  { id: "e2-3-1-4", source: "2-3", target: "1-4" },
  { id: "e2-4-1-4", source: "2-4", target: "1-4" },
  { id: "e2-5-1-4", source: "2-5", target: "1-4" },
  { id: "e3-1-2-3", source: "3-1", target: "2-3" },
  { id: "e3-2-1-1", source: "3-2", target: "1-1" },
  { id: "e3-3-2-1", source: "3-3", target: "2-1" },
  { id: "e3-4-2-1", source: "3-4", target: "2-1" },
  { id: "e4-1-3-1", source: "4-1", target: "3-1" },
  { id: "e4-2-1-4", source: "4-2", target: "1-4" },
  { id: "e4-2-2-1", source: "4-2", target: "2-1" },
  { id: "e4-4-1-4", source: "4-4", target: "1-4" },
  { id: "e4-4-3-2", source: "4-4", target: "3-2" },
  { id: "e5-2-2-4", source: "5-2", target: "2-4" },
  { id: "e5-3-4-4", source: "5-3", target: "4-4" },
  { id: "e5-4-2-2", source: "5-4", target: "2-2" },
  { id: "e5-5-1-5", source: "5-5", target: "1-5" },
  { id: "e6-1-1-2", source: "6-1", target: "1-2" },
  { id: "e6-2-2-3", source: "6-2", target: "2-3" },
  { id: "e6-2-3-3", source: "6-2", target: "3-3" },
  { id: "e6-3-5-1", source: "6-3", target: "5-1" },
  { id: "e6-4-1-2", source: "6-4", target: "1-2" },
  { id: "e6-5-3-4", source: "6-5", target: "3-4" },
  { id: "e7-1-6-1", source: "7-1", target: "6-1" },
  { id: "e7-2-6-2", source: "7-2", target: "6-2" },
  { id: "e7-3-2-3", source: "7-3", target: "2-3" },
  { id: "e7-3-6-4", source: "7-3", target: "6-4" },
  { id: "e7-4-6-5", source: "7-4", target: "6-5" },
  { id: "e7-4-4-4", source: "7-4", target: "4-4" },
]

export function CourseGrid() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
    const [, setEdges, ] = useEdgesState(initialEdges)
    const [visibleEdges, setVisibleEdges] = useState<Edge[]>([]) 
    
    const onConnect = useCallback((params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)), [setEdges])
  
    const onNodeClick = useCallback(
      (event: React.MouseEvent, node: Node) => {
        
        const connectedEdges = initialEdges.filter(
          (edge) => edge.source === node.id || edge.target === node.id
        )
  
    
        setVisibleEdges(connectedEdges) 
  
        setNodes((nds) =>
          nds.map((n) => ({
            ...n,
            data: {
              ...n.data,
              isSelected: n.id === node.id,
              isConnected: connectedEdges.some(
                (edge) => edge.source === n.id || edge.target === n.id
              ),
            },
          }))
        )
      },
      [setNodes]
    )
  
    const handleStatusChange = useCallback((nodeId: string, newStatus: CourseStatus) => {
      setNodes((nds) =>
        nds.map((n) => {
          if (n.id === nodeId) {
            const updatedNode = {
              ...n,
              data: {
                ...n.data,
                status: newStatus,
              },
            }
            localStorage.setItem(`courseStatus_${nodeId}`, newStatus)
            return updatedNode
          }
          return n
        })
      )
    }, [])
  
    useEffect(() => {
      const loadSavedStatuses = () => {
        const savedNodes = initialNodes.map((node) => {
          const savedStatus = localStorage.getItem(`courseStatus_${node.id}`)
          if (savedStatus) {
            return {
              ...node,
              data: {
                ...node.data,
                status: savedStatus as CourseStatus,
              },
            }
          }
          return node
        })
        setNodes(savedNodes)
      }
  
      loadSavedStatuses()
    }, []) 
  
    const nodesWithStatusChange = nodes.map((node) => ({
      ...node,
      data: {
        ...node.data,
        onStatusChange: handleStatusChange,
      },
    }))
  
    return (
      <div className="w-full h-[600px] border border-gray-200 rounded-lg">
        <ReactFlow
          nodes={nodesWithStatusChange}
          edges={visibleEdges} 
          onNodesChange={onNodesChange}
          onConnect={onConnect}
          onNodeClick={onNodeClick}
          nodeTypes={nodeTypes}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    )
  }