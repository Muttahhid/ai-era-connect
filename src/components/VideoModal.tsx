import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

export const VideoModal = ({ isOpen, onClose, videoUrl }: VideoModalProps) => {
  // Convert YouTube URL to embed format
  const getEmbedUrl = (url: string) => {
    const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full h-[80vh] p-0 bg-black border-primary/20">
        <DialogHeader className="absolute top-4 right-4 z-10">
          <button
            onClick={onClose}
            className="text-white hover:text-primary transition-colors bg-black/50 p-2 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </DialogHeader>
        <div className="w-full h-full">
          <iframe
            src={getEmbedUrl(videoUrl)}
            title="Demo Video"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};