
import { MainSection } from "@/components/_layouts/main-section/main-section";
import styles from "./style.module.scss"
import clsx from "clsx";
import { monument } from "@/font.config";
import Link from "next/link";
import routes from '@/config/routes.config.json'

export default function HeroScreen() {
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
            after:h-[60px]
            after:translate-y-[50%]
            after:bg-primary
            after:blur-2xl
            overflow-hidden
        "
      >
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
        <video width="1920" height="1080" preload="auto" autoPlay loop muted>
            <source src="/videos/main-background-video.mp4" type="video/mp4" />
        </video>
      </div>
    );
}

const Content = () => {
    const passRouter: string = routes.actions.creonPass.path;

    return (
        <div className={styles.content}>
            <h1
                className={clsx(
                    styles.title,
                    "title",
                    monument.className
                )}
            >
                The world&rsquo;s first platform for Tokenizing AI&nbsp;blockchain projects
            </h1>

            <Link
                href={passRouter}
                className={clsx(
                    styles.subtitle,
                    "subtitle"
                )}
            >
                Hold the Creon Pass NFT and earn passive income from AI Tools
            </Link>
        </div>
    )
}
