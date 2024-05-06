
import { MainSection } from "@/components/_layouts/main-section/main-section";
import styles from "./style.module.scss"
import content from "./features.data.json";
import HorizontalCard from "@/components/_ui/horizontal-card/horizontal-card";

export default function NewsScreen() {
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
                    <HorizontalCard 
                        key={el.id}
                        title={el.title}
                        paragraph={el.paragraph}
                        previewSrc={el.previewSrc}
                        link={`/news/${el.id}-article`}
                    />
                )
            }
        </div>
    )
}
