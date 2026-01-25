import CurriculumGraph from "@/components/node-graphs/CurriculumGraph";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Curriculum as CurriculumType } from "@/types/curriculum";
import { X } from "lucide-react";

interface CurriculumGraphModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  grade: CurriculumType;
}

const CurriculumGraphModal = ({
  open,
  onOpenChange,
  grade,
}: CurriculumGraphModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="bg-bg-card rounded-xl border border-zinc-600 w-[80vw] h-[80vh] max-w-none sm:max-w-none p-0 overflow-hidden"
      >
        <div className="py-2 px-4 bg-bg-black border-b border-white/20 justify-between flex items-center">
          <DialogTitle className="text-2xl font-semibold text-white">
            {grade.name}
          </DialogTitle>
          <DialogClose asChild>
            <Button
              size="icon"
              variant="ghost"
              className="cursor-pointer h-9 w-9 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              aria-label="Fechar grafo"
            >
              <X className="w-4 h-4" />
            </Button>
          </DialogClose>
        </div>
        <div className="flex-1 w-full overflow-hidden flex items-center justify-center h-full">
          <CurriculumGraph grade={grade} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CurriculumGraphModal;
