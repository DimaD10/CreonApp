"use client"

import { MainSection } from "@/components/_layouts/main-section/main-section";
import styles from "./style.module.scss";
import clsx from "clsx";
import { monument } from "@/font.config";
import content from "./article.data.json";
import TextAnimation from "@/components/_ui/text-animation/text-animation";
import { useRef } from "react";
import { useInView } from "framer-motion";

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
    const container = useRef(null);
    const isInView = useInView(container, { once: true });

  return (
    <div 
        className={styles.video}
        ref={container}
        style={{
          filter: isInView ? "blur(0px)" : "blur(800px)",
          transform: isInView ? "scale(1)" : "scale(0.1)",
        }}
    >
        <video width="1920" height="1080" preload="auto" autoPlay loop muted playsInline>
            <source src="/videos/creon-logo.mp4" type="video/mp4" />
        </video>
    </div>
  );
};

const Content = () => {
    const container = useRef(null);
    const isInView = useInView(container, { once: true });

  return (
    <div className={styles.content} ref={container}>
      <h2 className={clsx(styles.title, "title", monument.className)}>
        <TextAnimation text={content.title} />
      </h2>

      <p
        className={clsx(styles.subtitle, "subtitle", monument.className)}
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "translateY(0px)" : "translateY(20px)",
        }}
        >
        {content.subtitle}
      </p>

      <Article />
    </div>
  );
};

const Article = () => {
    const article = content.article;
    const container = useRef(null);
    const isInView = useInView(container, { once: true });

    return (
        <div 
            className={styles.article}
            ref={container}
        >
            <div className={styles.video}>
                <Video />
            </div>

            <div 
                className={styles.articleBody}
                style={{
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? "translateX(0%)" : "translateX(20%)",
                }}
            >
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
