"use client";

import { MainSection } from "@/components/_layouts/main-section/main-section";
import styles from "./style.module.scss";
import clsx from "clsx";
import { monument } from "@/font.config";
import routes from "@/config/routes.config.json";
import content from "./pass.data.json";
import { PassRouteType, StepsType } from "./pass.config";
import { ButtonFilled } from "@/components/_ui/button/button";
import TextAnimation from "@/components/_ui/text-animation/text-animation";
import { useRef } from "react";
import { delay, useInView } from "framer-motion";

export default function PassScreen() {
  return (
    <>
      <MainSection>
        <div 
            className={styles.wrapper}
            id="creon-pass"
        >
          <Content />

          <Video />
        </div>
      </MainSection>
    </>
  );
}

const Video = () => {
  return (
    <div className={styles.video}>
        <video width="1920" height="1080" preload="auto" autoPlay loop muted playsInline>
            <source src="/videos/nft-video.mp4" type="video/mp4" />
        </video>
    </div>
  );
};

const Content = () => {
  const buyPassRouter: PassRouteType = routes.actions.buyPass;
  const steps: string[] = content.steps;

  const container = useRef(null);
  const isInView = useInView(container, { once: true });

  return (
    <div className={styles.content} ref={container}>
      <h2 className={clsx(styles.title, "title", monument.className)}>
        <TextAnimation text={content.title} />
      </h2>

      <div className={styles.divider}></div>

        <p 
            className={clsx(styles.subtitle, "subtitle")}
            style={ {
                opacity: isInView ? 1 : 0,
                transform: isInView ? 
                    "translateY(0px)" : "translateY(20px)"
            }}
        >
            {content.subtitle}
        </p>

      <Steps steps={steps} />

        <ButtonFilled
            link={buyPassRouter.path}
            aditionalStyles="lg:min-w-[450px] min-w-[290px] max-sm:w-full mt-[15px] lg:mt-[40px] h-[48px] md:h-[54px]"
        >
            {buyPassRouter.page}
        </ButtonFilled>
    </div>
  );
};

const Steps = ({ steps }: StepsType) => {
    const container = useRef(null);
    const isInView = useInView(container, { once: true });

    return (
        <div 
            className={clsx(
                styles.steps, "delay-900 duration-300"
            )}
            ref={container}
            style={ {
                opacity: isInView ? 1 : 0,
                transform: isInView ? 
                    "translateY(0px)" : "translateY(40px)"
            }}
        >
            {steps.map((el) => 
                <div 
                    key={el}
                    className={
                        styles.step
                    }
                >
                    { el }
                </div>
            )}
        </div>
    )
}
