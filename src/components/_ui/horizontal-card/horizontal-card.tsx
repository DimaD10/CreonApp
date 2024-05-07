"use client"

import Link from 'next/link';
import { CardProps } from './horizontal-card.config';
import styles from './style.module.scss'
import Image from 'next/image';
import clsx from 'clsx';
import { monument } from '@/font.config';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function HorizontalCard({ title, paragraph, previewSrc, link }: CardProps) {
    const container = useRef(null);
    const isInView = useInView(container, { once: true });

  return (
    <div
        className={styles.card}
        ref={container}
        style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0px)" : "translateY(80px)",
            scale: isInView ? 1 : 0.8
        }}
    >
      <div className={styles.body}>
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
            <p
                className={styles.paragraph}
            >
                { paragraph }
            </p>
      </div>

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
    </div>
  );
}
