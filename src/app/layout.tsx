
import "./globals.scss";
import { MainLayout } from "@/components/_layouts/main-layout/main-layout";
import { Providers } from "./providers";
import { baseMetadata } from "./metadata";
import { fonts, satoshi } from "../font.config";
import clsx from "clsx";

export const metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={clsx(fonts, satoshi.className)}>
                <Providers>
                    <MainLayout>
                        { children }
                    </MainLayout>
                </Providers>
            </body>
        </html>
    );
}
