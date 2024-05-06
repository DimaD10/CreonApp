import { ReactNode } from "react";

export interface ButtonProps {
    children: ReactNode,
    link: string,
    aditionalStyles?: string | undefined,
    newTab?: boolean | undefined
}
