import { APP_COPYRIGHT } from '@/constants/base.constants';
import styles from './style.module.scss';
import { SocialItems } from '../_ui/social-items/social-items';
import Link from 'next/link';
import Image from 'next/image';
import { NIFTABLES_LOGO_ALT } from '@/constants/image-alts.constants';
import niftablesLogo from '@/public/img/logos/niftables-logo.svg'

export function Footer() {
    return (
        <footer>
            <div className="container">
                <div className={styles.wrapper}>
                    <p className={styles.copyright}>
                        {APP_COPYRIGHT}
                    </p>

                    <div className={styles.social}>
                        <SocialItems />
                    </div>

                    <div className={styles.poweredBy}>
                        <span>
                            Powered by
                        </span>

                        <Link 
                            href="https://www.niftables.com/"
                            target='_blank'
                        >
                            <Image 
                                src={niftablesLogo}
                                width={101}
                                height={18}
                                alt={NIFTABLES_LOGO_ALT}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
