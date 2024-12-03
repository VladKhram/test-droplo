'use client';

import Button from '@/library/button/button';
import TrashIcon from '@/assets/icons/trash-03.svg';
import SearchIcon from '@/assets/icons/search-lg.svg';
import Input from '@/library/input/input';
import Label from '@/library/input/label';
import { useForm } from 'react-hook-form';
import ButtonIcon from '@/library/buttonIcon/buttonIcon';
import { MenuItemFieldsType } from '../../types';

interface MenuItemFormProps {
  onSubmit: (data: MenuItemFieldsType) => void;
  onClose: () => void;
  defaultValues?: MenuItemFieldsType;
}

export default function MenuItemForm({
  onSubmit,
  onClose,
  defaultValues,
}: MenuItemFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MenuItemFieldsType>({ defaultValues });

  return (
    <form
      className='py-5 px-6 border border-border-primary bg-background-primary rounded-lg flex flex-col gap-5'
      onSubmit={handleSubmit((data) => onSubmit(data))}
      onReset={() => {
        onClose();
      }}
    >
      <div className='flex gap-4'>
        <div className='flex flex-col gap-2 w-full'>
          <div className='relative'>
            <Label forInput='name'>Nazwa</Label>
            <Input
              {...register('name', { required: 'Nie musi być pusty' })}
              placeholder='np. Promocje'
              error={errors.name?.message}
            />
          </div>
          <div>
            <Label forInput='link'>Link</Label>
            <Input
              {...register('link')}
              icon={<SearchIcon className='w-[15px] h-[15px]' />}
              placeholder='Wklej lub wyszukaj'
            />
          </div>
        </div>
        <ButtonIcon type='reset'>
          <TrashIcon className='w-[15px] h-[15px]' />
        </ButtonIcon>
      </div>

      <div className='flex flex-row gap-2'>
        <Button variant='secondary' type='reset'>
          Anuluj
        </Button>
        <Button variant='secondaryColor' type='submit'>
          Dodaj
        </Button>
      </div>
    </form>
  );
}
