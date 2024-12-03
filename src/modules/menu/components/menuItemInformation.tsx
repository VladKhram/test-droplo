'use client';

import MoveIcon from '@/assets/icons/move.svg';
import ButtonIcon from '@/library/buttonIcon/buttonIcon';
import ButtonsGroup from '@/library/buttonsGroup/buttonsGroup';
import { MenuItemFieldsType } from '../types';

interface MenuItemInformationProps extends MenuItemFieldsType {
  isBorderBottom?: boolean;
  isBorderTop?: boolean;
  isBorderLeft?: boolean;
  isBorderRounded?: boolean;
  onCreateChild: () => void;
  onDeleteThis: () => void;
  onUpdateThis: () => void;
}

export default function MenuItemInformation({
  name,
  link,
  isBorderBottom = true,
  isBorderTop = false,
  isBorderLeft = false,
  isBorderRounded = false,
  onCreateChild,
  onDeleteThis,
  onUpdateThis,
}: MenuItemInformationProps) {
  return (
    <div>
      <div
        className={`py-4 px-6 bg-background-primary flex items-center 
          justify-between border-border-secondary 
          ${isBorderTop && 'border-t'} 
          ${isBorderBottom && 'border-b'}
          ${isBorderRounded && 'rounded-bl-lg'}
          ${isBorderLeft && 'border-l'}
          `}
      >
        <div className='flex gap-[3px]'>
          <ButtonIcon>
            <MoveIcon className='w-5 h-5' />
          </ButtonIcon>
          <div className='flex flex-col justify-between'>
            <p className='font-semibold text-sm text-text-primary'>{name}</p>
            <p className='font-normal text-sm text-text-tertiary'>{link}</p>
          </div>
        </div>

        <ButtonsGroup
          buttons={[
            { name: 'Usuń', onClick: onDeleteThis },
            { name: 'Edytuj', onClick: onUpdateThis },
            { name: 'Dodaj pozycję menu', onClick: onCreateChild },
          ]}
        />
      </div>
    </div>
  );
}
