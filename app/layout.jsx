import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] })

import './globals.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

import Navbar from '../components/Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ul className="circles absolute top-0 left-0 z-0">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <Navbar />
        {children}
      </body>
    </html>
  )
}