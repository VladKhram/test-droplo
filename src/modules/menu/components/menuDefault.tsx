'use client';

import Button from '@/library/button/button';
import PlusCircule from '@/assets/icons/plus-circle.svg';

interface MenuDefaultProps {
  onStartAddFirstItem: () => void;
}

export default function MenuDefault({ onStartAddFirstItem }: MenuDefaultProps) {
  return (
    <div className='py-6 px-4 border border-border-secondary bg-background-secondary rounded-lg flex flex-col items-center'>
      <p className='font-semibold text-base mb-1 text-text-primary'>
        Menu jest puste
      </p>
      <p className='font-normal text-sm text-text-tertiary mb-6'>
        W tym menu nie ma jeszcze żadnych linków.
      </p>
      <Button variant='primary' onClick={onStartAddFirstItem}>
        <div className='text-sm font-semibold flex items-center gap-x-1'>
          <PlusCircule className='w-5 h-5' />
          <p className='px-0.5'>Dodaj pozycję menu</p>
        </div>
      </Button>
    </div>
  );
}
