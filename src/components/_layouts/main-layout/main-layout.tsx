import { type PropsWithChildren } from "react";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";

export function MainLayout({ children }: PropsWithChildren) {
    return (
        <div 
            className="
                min-h-screen
                min-h-dvh
                flex
                flex-col
                max-w-[100vw]
                overflow-x-hidden
            "
        >
            <Header />

            <main
                className="
                    flex-auto
                "
            >
                {children}
            </main>
            
            <Footer />
        </div>
    );
}
