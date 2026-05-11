// src/components/AboutUsSection.tsx
import Link from 'next/link'
import CounterNumber from '@/components/CounterNumber'
export default function AboutUsSection() {
  return (
    <section className="aboutus-section home-section bg-white py-30">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* --- COLONNE GAUCHE : TEXTE --- */}
        <div className="flex flex-col space-y-8">
          {/* Petit label avec ligne */}
          <div className="flex items-center gap-4">
            <span className="w-10 h-[1px] bg-[#c6c6c6]"></span>
            <span className="text-[#c6c6c6] tracking-widest text-sm">À propos de nous</span>
          </div>

          {/* Titre principal */}
          <h2 className="text-black text-[32px] md:text-[35px] lg:text-[40px] font-bold uppercase leading-tight">
            Batir l'afrique de <br /> demain
          </h2>

          {/* Paragraphes */}
          <div className="space-y-6 text-black text-[16px] leading-relaxed max-w-lg">
            <p>
              Xalimart Group est un groupe pluridisciplinaire basé à Dakar, spécialisé dans la transformation des environnements urbains africains. Notre approche fusionne l'héritage architectural local avec les standards internationaux contemporains.
            </p>
            <p>
              De la conception à la livraison, nous accompagnons particuliers, entreprises et institutions dans la réalisation de leurs projets les plus ambitieux — résidentiels, commerciaux ou institutionnels.
            </p>
          </div>

          {/* Bouton Noir Arrondi */}
          <div className="link mt-2">
            <Link 
              href="/fr/about-us" 
              className="group transition-all duration-300 inline-flex bg-black gap-2 text-white px-10 py-4 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              En savoir plus
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 20 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="transition-all duration-300 group-hover:-rotate-45 hidden group-hover:block"
              >
                <path 
                  fillRule="evenodd" 
                  clipRule="evenodd" 
                  d="M4.55827 4.55833C4.67546 4.44129 4.83431 4.37555 4.99994 4.37555C5.16556 4.37555 5.32442 4.44129 5.44161 4.55833L14.3749 13.4917V7.5C14.3749 7.33424 14.4408 7.17527 14.558 7.05806C14.6752 6.94085 14.8342 6.875 14.9999 6.875C15.1657 6.875 15.3247 6.94085 15.4419 7.05806C15.5591 7.17527 15.6249 7.33424 15.6249 7.5V15C15.6249 15.1658 15.5591 15.3247 15.4419 15.4419C15.3247 15.5592 15.1657 15.625 14.9999 15.625H7.49994C7.33418 15.625 7.17521 15.5592 7.058 15.4419C6.94079 15.3247 6.87494 15.1658 6.87494 15C6.87494 14.8342 6.94079 14.6753 7.058 14.5581C7.17521 14.4408 7.33418 14.375 7.49994 14.375H13.4916L4.55827 5.44167C4.44123 5.32448 4.37549 5.16562 4.37549 5C4.37549 4.83437 4.44123 4.67552 4.55827 4.55833Z" 
                  fill="white"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* --- COLONNE DROITE : COMPOSITION D'IMAGES --- */}
        <div className="relative flex flex-wrap gap-4 sm:gap-0 sm:justify-end sm:pl-[20px] md:pl-[80px]">
          {/* Image Principale (Immeuble) */}
          <div className="relative z-10 overflow-hidden sm:w-[562px] sm:h-[469px] sm:mb-[100px]">
            <img 
              src="/media/about-construction.jpg" 
              alt="Architecture Xalimart" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image Secondaire (Chantier) - Chevauchement en bas à gauche */}
          <div className="sm:absolute bottom-0 left-0 z-20 overflow-hidden sm:border-4 border-white sm:w-[347px] sm:h-[316px]">
            <img 
              src="/media/about-building.jpg"
              alt="Chantier en cours" 
              className="h-full w-full aspect-square object-cover object-bottom"
            />
          </div>

          {/* Badge Expérience - Noir en bas à droite */}
          <div className="sm:absolute bottom-0 right-0 z-30 bg-black text-white py-3 px-4 flex items-center gap-5 min-w-[200px]">
            <span className="text-[40px] font-normal countnumber"><CounterNumber value={10}/>+</span>
            <div className="text-[18px] uppercase tracking-tighter leading-[28px] font-light">
              Années <br /> d'expériences
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
