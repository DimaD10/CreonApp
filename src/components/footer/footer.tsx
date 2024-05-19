import { APP_COPYRIGHT } from '@/constants/base.constants';
import styles from './style.module.scss';
import { SocialItems } from '../_ui/social-items/social-items';
import Link from 'next/link';

const WEBSITE_LINK = "https://benko-cv.vercel.app/";

export function Footer() {
    return (
      <footer>
        <div className="container">
          <div className={styles.wrapper}>
            <p className={styles.copyright}>{APP_COPYRIGHT}</p>

            <div className={styles.social}>
              <SocialItems />
            </div>

            <div className={styles.poweredBy}>
              <span>Developed by</span>

              <Link href={WEBSITE_LINK} target="_blank">
                <b>BENKO</b>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    );
}
