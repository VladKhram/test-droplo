'use client';

interface ButtonIconProps extends React.ComponentProps<'button'> {
  children: React.ReactNode;
}

export default function ButtonIcon({ children, ...props }: ButtonIconProps) {
  return (
    <button
      className='w-10 h-10 flex items-center justify-center bg-background-primary hover:brightness-90'
      {...props}
    >
      {children}
    </button>
  );
}
