import Link from "next/link";
import styles from './style.module.scss';
import { ButtonProps } from "./button.config";
import clsx from "clsx";

export function Button(
    {
        children,
        link,
        aditionalStyles,
        newTab
    }: ButtonProps
) {
    return (
        <Link
            href={ link }
            className={clsx(
                styles.button,
                aditionalStyles
            )}
            {...(newTab && { target: "_blank" })}
        >
            { children }
        </Link>
    );
}

export function ButtonFilled(
    {
        children,
        link,
        aditionalStyles,
        newTab
    }: ButtonProps
) {
    return (
        <Button
            link={link}
            aditionalStyles={
                clsx(
                    styles.buttonFilled,
                    aditionalStyles
                )
            }
            newTab={newTab}
        >
            <span
                className="
                    z-10
                "
            >
                { children }
            </span>
        </Button>
    );
}
