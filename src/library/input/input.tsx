'use client';

interface InputProps extends React.ComponentProps<'input'> {
  icon?: React.ReactNode;
  error?: string;
}

export default function Input({ icon, error, ...props }: InputProps) {
  return (
    <div className='relative flex items-center'>
      {error && (
        <div
          className='absolute text-xs w-fit text-white font-bold bg-error bottom-[-15px] py-1.5 px-2
        border-border-primary border rounded-lg mr-0'
        >
          {error}
        </div>
      )}
      {icon && (
        <span className='absolute flex items-center justify-center w-5 h-5 left-3.5'>
          {icon}
        </span>
      )}
      <input
        className={`px-3 py-2 border-border-primary border rounded-lg bg-background-primary shadow-xs 
      placeholder:text-base placeholder:font-normal text-text-placeholder 
      hover:border-border-secondary focus:outline-none w-full 
      ${icon && 'pl-10.5'} ${error && 'border-error'}`}
        {...props}
      />
    </div>
  );
}
