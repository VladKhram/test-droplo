interface LabelProps {
  forInput?: string;
  children: React.ReactNode;
}

export default function Label({ forInput, children }: LabelProps) {
  return (
    <label
      htmlFor={forInput}
      className='mb-1.5 font-medium text-sm text-text-secondary'
    >
      {children}
    </label>
  );
}
