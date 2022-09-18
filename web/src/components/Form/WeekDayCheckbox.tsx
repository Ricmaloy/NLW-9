import { ButtonHTMLAttributes } from 'react';

type WeekDayCheckboxProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function WeekDayCheckbox({ children, ...rest }: WeekDayCheckboxProps) {
  return (
    <button className="w-10 h-10 rounded bg-zinc-900" {...rest}>
      {children}
    </button>
  );
}
