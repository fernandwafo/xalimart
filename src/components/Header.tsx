'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { Menu, X } from 'lucide-react'

const staticData = {
  logoMain: { url: '/media/white-logo.png' },
  logoBlack: { url: '/media/black-logo.png' },
  navItems: [
    { label: 'Accueil', link: '/' },
    { label: 'À propos', link: '/about-us' },
    { label: 'Services', link: '/#services-section' },
    { label: 'Portfolio', link: '/portfolio' },
  ],
}

export default function Header({ data = staticData }: { data?: any }) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // 1. Nettoyage du chemin pour les conditions de style (ignore le /fr, /en, etc.)
  const segments = pathname.split('/').filter(Boolean)
  const currentLang = segments[0] || 'fr'
  const cleanPathname = segments.length > 1 
    ? `/${segments.slice(1).join('/')}` 
    : (locales.includes(segments[0]) ? '/' : pathname)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    
    // Classe body dynamique basée sur le chemin nettoyé
    const pageClass = cleanPathname === '/' 
      ? 'home' 
      : `page${cleanPathname.replace(/\//g, '-')}`
    document.body.className = pageClass
    
    setIsOpen(false)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.body.className = ''
    }
  }, [pathname, cleanPathname])

  // 2. Correction de la condition de bannière (doit ignorer la langue)
  const isBannerPage = cleanPathname === '/' || cleanPathname.startsWith('/about-us')
  
  const shouldShowWhiteBg = isScrolled || !isBannerPage
  const activeLogo = shouldShowWhiteBg ? data?.logoBlack : data?.logoMain
  const navItems = data?.navItems || []
  const burgerColor = shouldShowWhiteBg ? 'text-black' : 'text-white'

  const headerStyles = shouldShowWhiteBg
    ? 'bg-white/95 text-black shadow-sm py-4'
    : 'bg-transparent text-white py-6'

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${headerStyles}`}>
		  <div className="container mx-auto">							 
        <div className="flex justify-between items-center transition-all duration-500">
          
          {/* 1. LOGO - Lien vers la home de la langue actuelle */}
          <Link href={`/${currentLang}`} className="relative w-[80px] lg:w-[80px] h-[62px] transition-transform duration-300">
            {activeLogo?.url && (
              <Image 
                src={activeLogo.url} 
                alt="Logo" 
                fill
                className="object-contain object-left"
                priority
              />
            )}
          </Link>

          {/* 2. NAVIGATION */}
          <nav className={`
            nav-site absolute top-full left-0 w-full bg-black/95 md:bg-transparent md:static md:w-auto md:flex transition-all duration-300
            ${isOpen ? 'max-h-[500px] opacity-100 py-8 md:py-0' : 'max-h-0 opacity-0 md:max-h-none md:opacity-100 overflow-hidden'}
          `}>
            <ul className="flex flex-col md:flex-row items-md-center gap-6 lg:gap-10">

              {navItems.map((item: any, index: number) => {
                
                const cleanLink = item.link.startsWith('/') ? item.link : `/${item.link}`
                const itemLinkWithLang = `/${currentLang}${cleanLink === '/' ? '' : cleanLink}`
                
                const normalize = (p: string) => p.replace(/\/$/, '') || '/'
                
                const normalizedPathname = normalize(pathname)
                const normalizedTarget = normalize(itemLinkWithLang)
                
                const isHomeActive = item.link === '/' && (normalizedPathname === `/${currentLang}` || normalizedPathname === '/')
                
                const isActive = isHomeActive || normalizedPathname === normalizedTarget

                return (
                  <li key={index}>
                    <Link 
                      href={itemLinkWithLang}
                      className={`text-[16px] transition-all hover:opacity-100 
                        ${isActive ? 'opacity-100 font-bold' : 'opacity-60 font-normal'}
                        ${shouldShowWhiteBg ? 'md:text-black' : 'md:text-white'}
                      `}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* 3. ACTIONS */}
          <div className="flex items-center gap-4 md:gap-8">
            <Link 
              href={`/${currentLang}/contact`} 
              className={`px-6 py-2 text-[16px] font-[500] transition-all rounded-lg border
                ${shouldShowWhiteBg 
                  ? 'bg-black text-white border-black hover:bg-transparent hover:text-black' 
                  : 'bg-white text-black border-white hover:bg-transparent hover:text-white'}
              `}
            >
              Contact
            </Link>

            <LanguageSwitcher />

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`cursor-pointer md:hidden transition-transform active:scale-90 ${burgerColor}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

const locales = ['fr', 'en', 'ar']
