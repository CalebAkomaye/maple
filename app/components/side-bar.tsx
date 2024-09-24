import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { ModeToggle } from './toggle';

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <FiMenu className='h-5 w-8 cursor-pointer ' />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className='border-b border-t mt-5 mb-2 py-3'>
            <ModeToggle />
          </SheetTitle>
          <SheetDescription>Text here</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
