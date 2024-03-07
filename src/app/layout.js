import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/component/Navbar/Navbar'
import Footer from '@/component/Footer/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  icons: {
    icon: '/blogLogo.jpeg',
  },
  title: 'BlogHaven',
  description: 'BlogWebsite',
}
// Here {children} represents the other pages like Admin , Blog , About etc. we can add Layout to any other pages also.

// app directory only for pages

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Navbar/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  )
}