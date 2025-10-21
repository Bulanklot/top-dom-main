import type { Metadata } from 'next'
import '@app/styles/globals.scss'
import { roboto } from '@/source/app/fonts'
import { HeaderUI } from '@/source/widgets/headerUI'
import { NavMenuUI } from '@/source/widgets/nav-menu/nav-menuUI'
import { FooterUIDesktop } from '@/source/widgets/footerUI-desktop'

export const metadata: Metadata = {
  title: 'ТопДом',
  description: 'Строительство домов под ключ в Москве и МО | ТопДом'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" data-scroll-behavior="smooth">
      <body className={`${roboto.variable}`}>
        <HeaderUI />
        <div className="main-container">{children}</div>
        <NavMenuUI />
        <FooterUIDesktop />
      </body>
    </html>
  )
}
