
import { MainSection } from "@/components/_layouts/main-section/main-section";
import styles from "./style.module.scss"
import content from "./features.data.json";
import VerticalCard from "@/components/_ui/vertical-card.tsx/vertical-card";

export default function FeaturesScreen() {
  return (
    <>
      <MainSection>
        <div className={styles.wrapper}>
          <Content />
        </div>
      </MainSection>
    </>
  );
}

const Content = () => {
    const articles = content
    
    return (
        <div className={styles.content}>
            {
                articles.map(el => 
                    <VerticalCard 
                        key={el.id}
                        title={el.title}
                        paragraph={el.paragraph}
                        subtitle={el.subtitle}
                        previewSrc={el.previewSrc}
                        link={
                            (el.id === "") ? "" : `/features/${el.id}-slot`
                        }
                    />
                )
            }
        </div>
    )
}
