'use client';

import {
  ChevronRight,
  ChevronUp,
  CircleGauge,
  CircleHelp,
  Settings,
  User2,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../ui/collapsible';
import { Button } from '../ui/button';
import { useAppDispatch, useAppSelector } from '@/redux-store/hooks';
import { toggleAsideMenu } from '@/redux-store/slices/dashboardSlice';

const menu = [
  {
    name: 'Dashboard',
    link: '/dashboard',
    icon: <CircleGauge size={20} />,
    subMenu: [
      {
        name: 'Dashboard',
      },
      {
        name: 'Dashboard',
      },
      {
        name: 'Dashboard',
      },
      {
        name: 'Dashboard',
      },
    ],
  },
  {
    name: 'Members',
    icon: <CircleGauge size={20} />,
    subMenu: [
      {
        name: 'All Members',
      },
      {
        name: 'Subscribed Members',
      },
    ],
  },

  {
    name: 'Settings',
    icon: <Settings size={20} />,
  },
  {
    name: 'Support',
    icon: <CircleHelp size={20} />,
  },
] as any;

const SidebarMenu = () => {
  const dispatch = useAppDispatch();
  const { isAsideMenuOpen } = useAppSelector((state) => state.dashboard);

  const toggleSideMenu = () => dispatch(toggleAsideMenu());

  return (
    <div
      className={`p-3 relative h-[100vh] ${isAsideMenuOpen ? 'w-[240px]' : 'w-[90px]'} transition-all`}
    >
      <div className="p-4 sticky top-0 left-0 border rounded-xl h-full bg-background flex flex-col justify-between">
        <SidebarHeader isAsideMenuOpen={isAsideMenuOpen} />

        <SidebarContent
          isAsideMenuOpen={isAsideMenuOpen}
          toggleSideMenu={toggleSideMenu}
        />

        <SidebarFooter isAsideMenuOpen={isAsideMenuOpen} />
      </div>
    </div>
  );
};

export default SidebarMenu;

const SidebarHeader = ({ isAsideMenuOpen }: { isAsideMenuOpen: boolean }) => {
  return (
    <h1 className="py-4 text-2xl text-stone-600 overflow-hidden">
      {isAsideMenuOpen ? 'Enroll IQ' : 'IQ'}
    </h1>
  );
};

const SidebarContent = ({
  isAsideMenuOpen,
  toggleSideMenu,
}: {
  isAsideMenuOpen: boolean;
  toggleSideMenu: () => void;
}) => {
  return (
    <div className="flex-1 mt-6">
      <div className="flex justify-between items-center">
        {isAsideMenuOpen && (
          <span className="text-sm text-stone-500">Main Menu</span>
        )}
        <Button variant="ghost" size="icon" onClick={toggleSideMenu}>
          <ChevronRight />
        </Button>
      </div>

      <div className="mt-5 flex flex-col gap-2">
        {menu?.map((menuItem: any, idx: number) => (
          <Collapsible key={menuItem.name + idx} className="group/collapsible">
            <CollapsibleTrigger asChild>
              <h5 className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center justify-start gap-4">
                  {menuItem.icon}
                  {isAsideMenuOpen && (
                    <span className="text-stone-600">{menuItem.name}</span>
                  )}
                </div>
                {isAsideMenuOpen && menuItem?.subMenu?.length && (
                  <ChevronRight size={16} />
                )}
              </h5>
            </CollapsibleTrigger>

            {isAsideMenuOpen && (
              <CollapsibleContent className="flex flex-col gap-2 mt-2 border-l-2">
                {menuItem.subMenu?.map((subMenuItem: any, idx: number) => (
                  <span
                    key={subMenuItem.name + idx}
                    className="text-stone-600 ml-4 text-sm cursor-pointer"
                  >
                    {subMenuItem.name}
                  </span>
                ))}
              </CollapsibleContent>
            )}
          </Collapsible>
        ))}
      </div>
    </div>
  );
};

const SidebarFooter = ({ isAsideMenuOpen }: { isAsideMenuOpen: boolean }) => {
  return (
    <div className="">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex gap-4">
            <User2 />
            {isAsideMenuOpen && (
              <>
                <span>User</span>
                <ChevronUp className="ml-auto" />
              </>
            )}
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
