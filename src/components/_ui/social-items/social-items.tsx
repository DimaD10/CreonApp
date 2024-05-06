

import Link from "next/link";
import routes from "@/config/routes.config.json";
import styles from "./style.module.scss";
import { TelegramIcon } from "@/components/_icons/social/telegram-icon";
import { DiscordIcon } from "@/components/_icons/social/discord-icon";
import { TwitterIcon } from "@/components/_icons/social/twitter-icon";

export const SocialItems = () => {
    const socialItems = routes.social;
    
    return (
        <div className={styles.social}>
            <Link 
                href={socialItems.telegram.path}
                target="_blank"
            >
                <TelegramIcon />
            </Link>
            <Link 
                href={socialItems.discord.path}
                target="_blank"
            >
                <DiscordIcon />
            </Link>
            <Link 
                href={socialItems.twitter.path}
                target="_blank"
            >
                <TwitterIcon />
            </Link>
        </div>
    );
}
