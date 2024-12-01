'use client';

const ButtonVariants = {
  primary:
    'text-button-primary-text bg-button-primary border-button-primary-border hover:brightness-110',
  secondary:
    'text-button-secondary-text bg-button-secondary border-button-secondary-border',
  secondaryColor:
    'text-button-secondaryColor-text bg-button-secondaryColor border-button-secondaryColor-border',
};

type ButtonVariantNames = keyof typeof ButtonVariants;

interface ButtonProps extends React.ComponentProps<'button'> {
  variant?: ButtonVariantNames;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`py-2.5 px-3.5 rounded-lg border shadow-xs font-semibold text-sm
        ${ButtonVariants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}
