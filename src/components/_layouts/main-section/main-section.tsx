import { MainSectionProps } from "./main-section.config";

export function MainSection({ children, sectionStyles }: MainSectionProps) {
    return (
        <section className={sectionStyles}>
            <div className="container">
                { children }
            </div>
        </section>
    );
}
