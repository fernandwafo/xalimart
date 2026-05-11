'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const PROJECTS = [
  {
    id: 1,
    title: 'VIRTUOSE',
    category: 'Bureaux',
    year: '2025',
    slug: 'villa-suisse',
    specs: ['520 2 - Res. Villa R+1, Saly'],
    description: 'Immeuble de grande hauteur alliant espaces de bureaux premium et surfaces commerciales au cœur du nouveau',
    image: '/media/projet/virtuose.jpg',
  },
  {
    id: 2,
    title: 'VILLA I.CHRISS',
    category: 'Hôtellerie',
    year: '2026',
    slug: 'villa-suisse',
    specs: ['305 m² - Type : Res. RDC + Mez + 8 étages - 2026'],
    description: 'Immeuble de grande hauteur alliant espaces de bureaux premium et surfaces commerciales au cœur du nouveau',
    image: '/media/projet/villa-chriss.jpg',
  },
  {
    id: 3,
    title: 'Musée des Forces Armées',
    category: 'Bureaux, Hôtellerie',
    year: '2023',
    slug: 'villa-suisse',
    specs: ['623 m² - Type: Edifice Publics - 2023'],
    description: 'Immeuble de grande hauteur alliant espaces de bureaux premium et surfaces commerciales au cœur du nouveau',
    image: '/media/projet/musee-armees.jpg',
  },
  {
    id: 4,
    title: 'SADIYA TOWER',
    category: 'Bureaux, Hôtellerie',
    year: '2025',
    slug: 'villa-suisse',
    specs: ['Superficie: 1742 m² - Type : Bâtiments Mixte (Résidences, bureaux, Hôtellerie)'],
    description: 'Immeuble de grande hauteur alliant espaces de bureaux premium et surfaces commerciales au cœur du nouveau',
    image: '/media/projet/sadiya-tower.jpg',
  },
  {
    id: 5,
    title: 'SCI DOMBADIA',
    category: 'Résidentiel, Commercial',
    year: '2024',
    slug: 'villa-suisse',
    specs: ['Superficie: 512 m² - Résidentiel - 2025'],
    description: "Ensemble résidentiel haut de gamme conçu autour d'un concept de vie communautaire et d'espaces verts généreux.",
    image: '/media/projet/sci-diombadio.jpg',
  },
  {
    id: 6,
    title: 'VILLA SUISSE',
    category: 'Résidentiel, Urbanisme',
    year: '2022',
    slug: 'villa-suisse',
    specs: ['447 m² - Bur. SS+RDC+MEZZ+10 étages'],
    description: "Ensemble résidentiel haut de gamme conçu autour d'un concept de vie communautaire et d'espaces verts généreux.",
    image: '/media/projet/villa-suisse.jpg',
  },
  {
    id: 7,
    title: 'THE EDITION',
    category: 'Édifices publics, Bureaux',
    year: '2023',
    slug: 'villa-suisse',
    specs: ['Superficie: 550 m² - Type: Résidentiel - 2024'],
    description: "Ensemble résidentiel haut de gamme conçu autour d'un concept de vie communautaire et d'espaces verts généreux.",
    image: '/media/projet/the-edition.jpg',
  },
]

const CATEGORIES = ['Tous', 'Résidentiel', 'Commercial', 'Hôtellerie', 'Bureaux', 'Édifices publics', 'Urbanisme']
const YEARS = ['Tous', '2026', '2025', '2024', '2023', '2022']

export default function PortfolioClient({ lang = 'fr' }: { lang?: string }) {
  const [activeFilter, setActiveFilter] = useState('Tous')
  const [activeYear, setActiveYear] = useState('Tous')
  const [isYearMenuOpen, setIsYearMenuOpen] = useState(false)

  const filteredProjects = PROJECTS.filter(p => {
    const matchCat = activeFilter === 'Tous' || p.category.includes(activeFilter)
    const matchYear = activeYear === 'Tous' || p.year === activeYear
    return matchCat && matchYear
  })

  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">

        <div className="mb-16">
          <h1 className="text-[35px] md:text-[40px] lg:text-[45px] font-bold uppercase mb-4 text-black">
            Chaque projet.<br />Une signature.
          </h1>
          <div className="text-[16px] text-black/50 font-light max-w-xl">
            De Dakar au monde, découvrez l'ensemble de nos réalisations.
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-3 md:gap-4 lg:gap-6">
          <div className="flex flex-wrap gap-2 md:gap-4 lg:gap-6">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`cursor-pointer text-[16px] font-light text-black/50 hover:border-b-2 hover:border-black hover:font-semibold hover:text-black transition-all ${
                  activeFilter === cat
                  ? 'font-semibold text-black border-b-2 border-black pb-1'
                  : ''
                }`}
              >
                {cat} {cat === 'Tous' && <span className="text-[10px] align-top ml-1">{PROJECTS.length}</span>}
              </button>
            ))}
          </div>

          <div className="relative">
            <div
              onClick={() => setIsYearMenuOpen(!isYearMenuOpen)}
              className="text-[16px] font-light text-black border border-black/50 px-3 py-2 flex items-center gap-2 rounded-[30px] cursor-pointer hover:bg-gray-50 transition-all"
            >
              Par année :
              <span className="text-black font-semibold cursor-pointer flex gap-2 items-center">{activeYear}
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-transform duration-300 ${isYearMenuOpen ? 'rotate-180' : ''}`}>
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.69153 7.09334C3.74497 7.03099 3.81017 6.97978 3.88341 6.94264C3.95665 6.9055 4.03649 6.88315 4.11837 6.87688C4.20025 6.87062 4.28257 6.88055 4.36061 6.9061C4.43865 6.93166 4.51089 6.97235 4.57319 7.02584L9.99986 11.6767L15.4265 7.02584C15.553 6.92428 15.7141 6.8759 15.8756 6.89093C16.0372 6.90595 16.1866 6.98321 16.2922 7.10636C16.3978 7.22951 16.4514 7.38891 16.4416 7.55085C16.4319 7.7128 16.3595 7.8646 16.2399 7.97417L10.4065 12.9742C10.2933 13.0712 10.149 13.1246 9.99986 13.1246C9.8507 13.1246 9.70646 13.0712 9.59319 12.9742L3.75986 7.97417C3.63418 7.86627 3.55648 7.71289 3.54382 7.54773C3.53116 7.38256 3.58459 7.21913 3.69236 7.09334" fill="black"/>
                </svg>
              </span>
            </div>

            {isYearMenuOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setIsYearMenuOpen(false)}></div>
                <ul className="absolute top-full mt-2 right-0 w-40 bg-white border border-black/10 rounded-[20px] shadow-xl z-20 overflow-hidden">
                  {YEARS.map(y => (
                    <li
                      key={y}
                      onClick={() => { setActiveYear(y); setIsYearMenuOpen(false) }}
                      className="px-5 py-2 text-[14px] font-medium hover:font-semibold cursor-pointer transition-colors"
                    >
                      {y}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        <div className="flex flex-col">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="projet-element flex flex-wrap border-b border-black/30 pb-10 mb-10 last:border-none last:pb-0 last:mb-0"
            >
              <div className="project-image relative overflow-hidden w-1/1 md:w-1/2 md:pr-10 lg:pr-20">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="relative object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="project-infos pt-8 md-py-10 flex items-center flex-wrap w-1/1 md:w-1/2">
                <div className="box-title">
                  <h3 className="text-[32px] font-bold uppercase mb-0">
                    <Link href={`/${lang}/portfolio/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.specs.map((spec, i) => (
                      <span key={i} className="text-[16px] text-black/50 font-light px-1 py-1">{spec}</span>
                    ))}
                  </div>
                </div>
                <div className="text-[16px] text-black font-light mb-8 hidden w-full">{project.description}</div>
                <div className="link w-full">
                  <Link
                    href={`/${lang}/portfolio/${project.slug}`}
                    className="inline-flex items-center gap-4 group/btn text-[16px] bg-black/40 text-black font-light px-5 py-3 rounded-[30px] hover:bg-black hover:text-white"
                  >
                    Voir le projet
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-300 group-hover/btn:rotate-[45deg] group-hover/btn:fill-white">
                      <path fillRule="evenodd" clipRule="evenodd" d="M6.00022 4.5C5.86761 4.5 5.74044 4.44732 5.64667 4.35355C5.5529 4.25979 5.50022 4.13261 5.50022 4C5.50022 3.86739 5.5529 3.74021 5.64667 3.64645C5.74044 3.55268 5.86761 3.5 6.00022 3.5H12.0002C12.1328 3.5 12.26 3.55268 12.3538 3.64645C12.4475 3.74021 12.5002 3.86739 12.5002 4V10C12.5002 10.1326 12.4475 10.2598 12.3538 10.3536C12.26 10.4473 12.1328 10.5 12.0002 10.5C11.8676 10.5 11.7404 10.4473 11.6467 10.3536C11.5529 10.2598 11.5002 10.1326 11.5002 10V5.20667L4.35356 12.3533C4.25877 12.4417 4.13341 12.4897 4.00387 12.4874C3.87434 12.4852 3.75075 12.4327 3.65914 12.3411C3.56753 12.2495 3.51506 12.1259 3.51277 11.9963C3.51049 11.8668 3.55857 11.7414 3.64689 11.6467L10.7936 4.5H6.00022Z" fill="black" className="group-hover/btn:fill-white"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {filteredProjects.length === 0 && (
            <div className="py-20 text-center text-gray-400 italic">
              Aucun projet.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
