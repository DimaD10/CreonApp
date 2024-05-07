"use client"

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TextAnimationProps {
    text: string
}

const TextAnimation = ({ text }: TextAnimationProps) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true});

    return (
        <motion.span
            className="flex flex-wrap"
            animate={{ opacity: isInView ? 1 : 0 }}
        >
            <div ref={ref}></div>
            
            {text.split(" ").map((el, i) => (
                <motion.span
                    initial={{ 
                        opacity: 0,
                        transform: "translateY(10px)" 
                    }}
                    animate={{ 
                        opacity: isInView ? 1 : 0,
                        transform: isInView ? "translateY(0px)" : "translateY(10px)" 
                    }}
                    transition={{
                        duration: 0.25,
                        delay: isInView ? (i / 8 + 0.3) : 0
                    }}
                    key={i}
                >
                    {el}{"\xa0"}
                </motion.span>
            ))}
        </motion.span>
    );
};

export default TextAnimation;
