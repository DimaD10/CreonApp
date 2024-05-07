"use client"

import { MainSection } from "@/components/_layouts/main-section/main-section";
import styles from "./style.module.scss"
import clsx from "clsx";
import { monument } from "@/font.config";
import Link from "next/link";
import routes from '@/config/routes.config.json'
import content from './hero.data.json'
import { useRef } from "react";
import { useInView } from "framer-motion";
import TextAnimation from "@/components/_ui/text-animation/text-animation";

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
        <video
          width="1920"
          height="1080"
          preload="auto"
          autoPlay
          loop
          muted
          playsInline>
          <source src="/videos/main-background-video.mp4" type="video/mp4" />
        </video>
      </div>
    );
}

const Content = () => {
    const passRouter: string = routes.actions.creonPass.path;
    const container = useRef(null);
    const titleInView = useInView(container, { once: true });

    return (
        <div className={styles.content} ref={container}>
            <h1
                className={clsx(
                    styles.title,
                    "title",
                    monument.className,

                    "max-w-full"
                )}
            >
                <TextAnimation 
                    text={content.title}
                />
            </h1>
            

            <Link
                href={passRouter}
                className={clsx(
                    styles.link,
                    "subtitle"
                )}
                style={ {
                    opacity: titleInView ? 1 : 0,
                    transform: titleInView ? 
                        "translateY(0px)" : "translateY(20px)"
                }}
            >
                { content.action }
            </Link>
        </div>
    )
}
