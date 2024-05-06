import { MainSection } from "@/components/_layouts/main-section/main-section";
import styles from "./style.module.scss";
import clsx from "clsx";
import { monument } from "@/font.config";
import content from "./article.data.json";

export default function ArticleScreen() {
  return (
    <>
      <MainSection>
        <div 
            className={styles.wrapper}
        >
          <Content />
        </div>
      </MainSection>
    </>
  );
}

const Video = () => {
  return (
    <div className={styles.video}>
        <video width="1920" height="1080" preload="auto" autoPlay loop muted playsInline>
            <source src="/videos/creon-logo.mp4" type="video/mp4" />
        </video>
    </div>
  );
};

const Content = () => {
  return (
    <div className={styles.content}>
      <h2 
        className={clsx(
            styles.title, "title", monument.className
        )}
        >
        {content.title}
      </h2>

      <p className={clsx(styles.subtitle, "subtitle", monument.className)}>
        {content.subtitle}
      </p>

      <Article />
    </div>
  );
};

const Article = () => {
    const article = content.article;

    return (
        <div className={styles.article}>
            <div className={styles.video}>
                <Video />
            </div>

            <div className={styles.articleBody}>
                <h5 className={styles.articleHeadline}>
                    {article.headline}
                </h5>

                <p className={styles.articleText}>
                    {article.paragraph}
                </p>
            </div>
        </div>
    )
}
