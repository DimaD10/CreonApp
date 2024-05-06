import { APP_DESCR, APP_TITLE } from "@/constants/base.constants";
import type { Metadata } from "next";

export const baseMetadata: Metadata = {
  title: APP_TITLE,
  description: APP_DESCR,
  openGraph: {
    title: APP_TITLE,
    description: APP_DESCR,
  },
  icons: {
    icon: [
        '/favicon.ico?v=4',
    ],
    apple: [
        '/apple-touch-icon.png?v=4',
    ],
    shortcut: [
        '/apple-touch-icon.png',
    ]
  },
  manifest: '/site.webmanifest'
};
