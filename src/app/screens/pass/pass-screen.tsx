import { MainSection } from "@/components/_layouts/main-section/main-section";
import styles from "./style.module.scss";
import clsx from "clsx";
import { monument } from "@/font.config";
import routes from "@/config/routes.config.json";
import content from "./pass.data.json";
import { PassRouteType, StepsType } from "./pass.config";
import { ButtonFilled } from "@/components/_ui/button/button";

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
        <video width="1920" height="1080" preload="auto" autoPlay loop muted>
            <source src="/videos/nft-video.mp4" type="video/mp4" />
        </video>
    </div>
  );
};

const Content = () => {
  const buyPassRouter: PassRouteType = routes.actions.buyPass;
  const steps: string[] = content.steps;

  return (
    <div className={styles.content}>
      <h2 
        className={clsx(
            styles.title, "title", monument.className
        )}
        >
        {content.title}
      </h2>

      <div className={styles.divider}></div>

      <p className={clsx(styles.subtitle, "subtitle")}>
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
    return (
        <div className={styles.steps}>
            {steps.map(el => 
                <div 
                    key={el}
                    className={styles.step}
                >
                    { el }
                </div>
            )}
        </div>
    )
}
