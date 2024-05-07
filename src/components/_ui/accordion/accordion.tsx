"use client";

import ExpandIcon from "@/components/_icons/expand-icon";
import { useState } from "react";
import IconShield from "@/components/_icons/icon-shield";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import clsx from "clsx";
import styles from "./style.module.scss";
import { AccordionBlockProps } from "./accordion.config";
import Image from "next/image";
import { ACCORDION_ICON_ALT } from "@/constants/image-alts.constants";

const AccordionBlock = ({content}: AccordionBlockProps) => {
    const [expanded, setExpanded] = useState<string | false>("panel-0");

    const handleChange =
      (panel: string) => (e: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
      };

    return (
        <div>
            {content.map((el, i) => 
                <Accordion
                    key={i}
                    className={
                        clsx(
                            styles.accordion,
                            { [styles.active]: expanded === `panel-${i}` }
                        )
                    }
                    expanded={expanded === `panel-${i}`} onChange={handleChange(`panel-${i}`)}
                >
                    <AccordionSummary
                        aria-controls="panel1-content"
                        expandIcon={
                            <ExpandIcon />
                        }
                        className={styles.accordionHeader}
                    >
                        <div
                            className={styles.accordionHeaderPlate}
                        >
                            <div
                                className={styles.accordionIcon}
                            >
                                <IconShield />

                                <Image
                                    src={el.icon}
                                    width={26}
                                    height={26} 
                                    className={styles.icon}
                                    alt={ACCORDION_ICON_ALT}
                                />
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: el.title }} ></div>
                        </div>
                    </AccordionSummary>
                    
                    <AccordionDetails
                        className={
                            styles.accordionDetails
                        }
                    >
                        { el.paragraph }
                    </AccordionDetails>
                </Accordion>
            )}
        </div>
    )
}

export default AccordionBlock;
