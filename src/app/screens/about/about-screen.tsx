
import { MainSection } from "@/components/_layouts/main-section/main-section";
import styles from "./style.module.scss";
import clsx from "clsx";
import { monument } from "@/font.config";
import content from "./about.data.json";
import Image from "next/image";
import contentImage from '@/public/img/vision.png'
import AccordionBlock from "@/components/_ui/accordion/accordion";


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
  return (
    <div className={styles.content}>
        <h2 
            className={clsx(
                styles.title, "title", monument.className
            )}
            dangerouslySetInnerHTML={{ __html: content.title }}
        ></h2>

        <Image
            src={contentImage}
            width={836}
            height={502}
            className={styles.image}
            alt=""
        />
    </div>
  );
};
