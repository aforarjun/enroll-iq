import { ChevronUp, User2 } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

const SidebarMenu = () => {
  return (
    <div className="p-4 relative h-[100vh] w-[240px]">
      <div className="p-4 sticky top-0 left-0 border rounded-xl h-full bg-background flex flex-col justify-between">
        <SidebarHeader />

        <SidebarContent />

        <SidebarFooter />
      </div>
    </div>
  );
};

export default SidebarMenu;

const SidebarHeader = () => {
  return <h1>Enroll Iq</h1>;
};

const SidebarContent = () => {
  return <aside className="flex-1">main Aside menu</aside>;
};

const SidebarFooter = () => {
  return (
    <div className="">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex gap-4">
            <User2 /> Username
            <ChevronUp className="ml-auto" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side="top"
          className="w-[--radix-popper-anchor-width]"
        >
          <DropdownMenuItem>
            <span>Account</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Billing</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Sign out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
