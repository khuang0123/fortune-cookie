import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

type HomeButtonProps = {
  onClick?: () => void;
};

const HomeButton: React.FC<HomeButtonProps> = ({ onClick }) => {
  return (
    <Button onClick={onClick} className="flex items-center gap-2 p-2 rounded-lg shadow-md hover:bg-gray-100 transition">
      <Home className="w-5 h-5" />
      <span>Home</span>
    </Button>
  );
};

export default HomeButton;
