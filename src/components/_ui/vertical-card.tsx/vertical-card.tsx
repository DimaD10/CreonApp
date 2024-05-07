"use client"

import Link from 'next/link';
import { CardProps } from './vertical-card.config';
import styles from './style.module.scss'
import Image from 'next/image';
import clsx from 'clsx';
import { monument } from '@/font.config';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function VerticalCard({ title, paragraph, subtitle, previewSrc, link }: CardProps) {
    const container = useRef(null);
    const isInView = useInView(container, { once: true });

  return (
    <div
        className={
            clsx(
                styles.card,
                (link === "" ? styles.soon : "")
            )
        }
        ref={container}
        style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0px)" : "translateY(80px)",
            scale: isInView ? 1 : 0.8
        }}
    >

        {(link === "") && 
            <div className={styles.soonLabel}>COMING SOON</div>
        }

        <div className={styles.head}>
            {(link === "") ? 
            <h4
                className={
                    clsx(
                        styles.title,
                        "title",
                        monument.className
                    )
                }
            >
                { title }
            </h4>
            
            :

            <Link
                href={link}
                className={
                    clsx(
                        styles.title,
                        "title",
                        monument.className
                    )
                }
            >
                { title }
            </Link>
        }

            <p className={
                clsx(
                    styles.subtitle,
                    "subtitle"
                )
            }>
                { subtitle }
            </p>
        </div>

        {(link === "") ? 
            <div
                className={
                    clsx(
                        styles.imageLink,
                        styles.default
                    )
                }
            >
                <Image 
                    src={previewSrc}
                    width={453}
                    height={302}
                    alt={title}
                />
            </div>
            
            :

            <Link 
                href={link}
                className={styles.imageLink}
            >
                <Image 
                    src={previewSrc}
                    width={453}
                    height={302}
                    alt={title}
                />
            </Link> 
        }
        

        <p
            className={styles.paragraph}
        >
            { paragraph }
        </p>
    </div>
  );
}
