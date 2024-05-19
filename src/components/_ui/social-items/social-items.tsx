

import Link from "next/link";
import routes from "@/config/routes.config.json";
import styles from "./style.module.scss";
import { Linkedin, Github } from "lucide-react";

export const SocialItems = () => {
    const socialItems = routes.social;
    
    return (
        <div className={styles.social}>
            <Link 
                href={socialItems.linkedin.path}
                target="_blank"
            >
                <Linkedin />
            </Link>
            <Link 
                href={socialItems.github.path}
                target="_blank"
            >
                <Github />
            </Link>
        </div>
    );
}
