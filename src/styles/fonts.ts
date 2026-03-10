import { Archivo, Geist, Geist_Mono, Rajdhani, Roboto_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const archivo = Archivo({
    variable: "--font-archivo",
    subsets: ["latin"],
})

const roboto = Roboto_Mono({
    variable: "--font-roboto",
    subsets: ["latin"],
})

const rajdhani = Rajdhani({
    variable: "--font-rajdhani",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
})

export { geistSans, geistMono, archivo, roboto, rajdhani };