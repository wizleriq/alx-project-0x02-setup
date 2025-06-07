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
