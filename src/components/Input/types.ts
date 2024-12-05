import { ChangeEvent } from "react";

export interface InputProps {
  name: string;
  id?: string;
  type?: "text" | "email" | "password" | "tel";
  placeholder?: string;
  label?: string;
  // временно делаем прпсы value и onChange необязательними 
  value?: string;
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
}
