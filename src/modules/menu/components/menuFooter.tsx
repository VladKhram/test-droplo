'use client';

import Button from '@/library/button/button';

interface MenuFooterProps {
  onStartCreation: () => void;
}

export default function MenuFooter({ onStartCreation }: MenuFooterProps) {
  return (
    <div className='px-6 py-5 bg-background-gray'>
      <Button variant='secondary' onClick={onStartCreation}>
        Dodaj pozycję menu
      </Button>
    </div>
  );
}
