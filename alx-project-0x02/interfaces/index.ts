import { ButtonHTMLAttributes } from 'react';
export interface User {
  name: string;
  email: string;
}

export interface CardProps {
    title: string;
    content: string;
}
export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string, content: string) => void;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  children: React.ReactNode;
}
