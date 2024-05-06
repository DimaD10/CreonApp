
import { MainSection } from "@/components/_layouts/main-section/main-section";
import styles from "./style.module.scss"
import content from "./news.data.json";
import HorizontalCard from "@/components/_ui/horizontal-card/horizontal-card";

export default function NewsScreen() {
  return (
    <>
      <MainSection
        sectionStyles="
            relative
            after:content-['']
            after:absolute
            after:bottom-0
            after:left-0
            after:right-0
            after:h-full
            after:bg-gradient-to-t 
            after:from-black 
            after:to-transparent
            before:content-['']
            before:absolute
            before:top-0
            before:left-0
            before:right-0
            before:h-full
            before:bg-gradient-to-t 
            before:from-transparent 
            before:to-black
            before:z-[1]
            overflow-hidden
            mb-[-80px]
        ">
        <div className={styles.wrapper}>
          <VideoBg />

          <Content />
        </div>
      </MainSection>
    </>
  );
}

const VideoBg = () => {
    return (
        <div className={styles.videoBg}>
            <video
              src={require("@/public/videos/roadmap-video.mp4")}
              autoPlay
              muted
              loop
            />
        </div>
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
