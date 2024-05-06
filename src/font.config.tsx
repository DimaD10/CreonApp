import localFont from "next/font/local";

const satoshi = localFont({
    src: [
        {
            path: "../public/fonts/satoshi/Satoshi-Regular.woff2",
            weight: "400",
            style: "normal"
        },
        {
            path: "../public/fonts/satoshi/Satoshi-Medium.woff2",
            weight: "500",
            style: "normal"
        },
        {
            path: "../public/fonts/satoshi/Satoshi-Bold.woff2",
            weight: "700",
            style: "normal"
        }
    ],
    variable: "--font-satoshi"
});

const monument = localFont({
    src: [
        {
            path: "../public/fonts/monument/MonumentExtended-Regular.woff2",
            weight: "400",
            style: "normal"
        }
    ],
    variable: "--font-monument"
});

const fonts = `${satoshi.variable} ${monument.variable}`;

export {
    fonts,
    satoshi,
    monument
};