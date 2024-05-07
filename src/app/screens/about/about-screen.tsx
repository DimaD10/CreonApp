"use client"

import { MainSection } from "@/components/_layouts/main-section/main-section";
import styles from "./style.module.scss";
import clsx from "clsx";
import { monument } from "@/font.config";
import content from "./about.data.json";
import Image from "next/image";
import contentImage from '@/public/img/vision.png'
import AccordionBlock from "@/components/_ui/accordion/accordion";
import { useRef } from "react";
import { useInView } from "framer-motion";


export default function AboutScreen() {
  return (
    <>
      <MainSection>
        <div 
            className={styles.wrapper}
        >
          <Content />

          <AccordionBlock
            content={content.accordeonItems}
          />
        </div>
      </MainSection>
    </>
  );
}

const Content = () => {
    const container = useRef(null);
    const isInView = useInView(container, { once: true });
    const image = useRef(null);
    const imageInView = useInView(container, { once: true });

  return (
    <div className={styles.content} ref={container}>
        <h2 
            className={clsx(
                styles.title, "title", monument.className
            )}
            dangerouslySetInnerHTML={{ __html: content.title }}
            style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateX(0%)" : "translateX(-30%)",
            }}
        ></h2>

        <Image
            src={contentImage}
            width={836}
            height={502}
            className={styles.image}
            ref={image}
            style={{
                filter: imageInView ? "blur(0px)" : "blur(800px)",
                scale: imageInView ? 1 : 0.1,
            }}
            alt=""
        />
    </div>
  );
};
