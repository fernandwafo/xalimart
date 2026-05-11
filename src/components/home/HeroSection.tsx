// src/components/home/HeroSection.tsx

import Link from 'next/link'
export default function HeroSection() {
  return (
    <section className="hero-section home-section relative h-screen w-full overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        preload="auto"
        poster="/media/hero-pc.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/media/studio_virtuose.webm" type="video/webm" />
        <source src="/media/studio_virtuose.mp4" type="video/mp4" />
        
      </video>
      <div className="portfolio-link absolute bottom-[64px] left-0 right-0">
        <div className="container mx-auto text-right">
          <Link 
            href="/fr/portfolio" 
            className="relative group uppercase text-white text-[16px] font-light transition-all inline-flex flex-wrap items-center gap-2 pb-1"
          >
            <span className="flex w-full">
              Portfolio
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 20 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:-rotate-90"
              >
                <path 
                  fillRule="evenodd" 
                  clipRule="evenodd" 
                  d="M4.55827 4.55833C4.67546 4.44129 4.83431 4.37555 4.99994 4.37555C5.16556 4.37555 5.32442 4.44129 5.44161 4.55833L14.3749 13.4917V7.5C14.3749 7.33424 14.4408 7.17527 14.558 7.05806C14.6752 6.94085 14.8342 6.875 14.9999 6.875C15.1657 6.875 15.3247 6.94085 15.4419 7.05806C15.5591 7.17527 15.6249 7.33424 15.6249 7.5V15C15.6249 15.1658 15.5591 15.3247 15.4419 15.4419C15.3247 15.5592 15.1657 15.625 14.9999 15.625H7.49994C7.33418 15.625 7.17521 15.5592 7.058 15.4419C6.94079 15.3247 6.87494 15.1658 6.87494 15C6.87494 14.8342 6.94079 14.6753 7.058 14.5581C7.17521 14.4408 7.33418 14.375 7.49994 14.375H13.4916L4.55827 5.44167C4.44123 5.32448 4.37549 5.16562 4.37549 5C4.37549 4.83437 4.44123 4.67552 4.55827 4.55833Z" 
                  fill="white"
                />
              </svg>
            </span>
            <span className="absolute bottom-0 left-0 right-0 w-full h-[1px] bg-white transition-all group-hover:w-5"></span>
          </Link>
        </div>
      </div>
    </section>
  )
}
