'use client';

type Button = {
  name: string;
  onClick: Function;
};

interface ButtonsGroupProps {
  buttons: Button[];
}

export default function ButtonsGroup({ buttons }: ButtonsGroupProps) {
  return (
    <div className='rounded-lg shadow-xs border-border-primary border overflow-hidden divide-x'>
      {buttons.map((button, id) => (
        <button
          key={id}
          onClick={() => {
            button.onClick();
          }}
          className='bg-background-primary hover:brightness-95 border-border-primary 
            px-4 py-2 text-sm font-semibold text-text-secondary'
        >
          {button.name}
        </button>
      ))}
    </div>
  );
}
