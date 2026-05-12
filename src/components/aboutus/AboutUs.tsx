// src/components/aboutus/AboutUs.tsx

export default function AboutUs() {
    return (
        <section className="about-us bg-white py-24 overflow-hidden">
            <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                
                {/* --- PARTIE GAUCHE : COMPOSITION D'IMAGES ASYMÉTRIQUE --- */}
                <div className="w-full lg:w-1/2 flex flex-wrap sm:flex-nowrap items-start gap-4 md:gap-8">
                    {/* Image 1 : Plus haute et décalée vers le haut */}
                    <div className="w-1/1 sm:w-1/2">
                        <div className="aspect-[3/4] w-full overflow-hidden">
                        <img 
                            src="/media/aboutus/about1.jpg" 
                            alt="Détail architectural" 
                            className="w-full h-full object-cover"
                        />
                        </div>
                    </div>
                    
                    {/* Image 2 : Décalée vers le bas */}
                    <div className="w-1/1 sm:w-1/2 pt-0 sm:pt-20 md:pt-30">
                        <div className="aspect-[3/4] w-full overflow-hidden">
                        <img 
                            src="/media/aboutus/about2.jpg" 
                            alt="L'équipe Xalimart en plein travail" 
                            className="w-full h-full object-cover"
                        />
                        </div>
                    </div>
                </div>

                {/* --- PARTIE DROITE : TEXTE --- */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6">
                    {/* Label avec petite ligne */}
                    <div className="flex items-center gap-4">
                        <span className="w-8 h-[1px] bg-black/50"></span>
                        <span className="text-black/50 uppercase tracking-widest text-xs font-medium">À propos de nous</span>
                    </div>

                    {/* Titre principal en ExtraBold */}
                    <h2 className="text-[30px] md:text-[32px] lg:text-[36px] font-bold text-black uppercase">
                        Né à Dakar. <br />
                        Bâti pour le monde.
                    </h2>

                    {/* Paragraphes de description */}
                    <div className="flex flex-col gap-6 leading-relaxed max-w-xl text-[16px]">
                        <p>
                            Xalimart Group est un cabinet pluridisciplinaire d'architecture, d'ingénierie et de conseil, né d'une conviction : l'Afrique mérite une architecture à la hauteur de son ambition.
                        </p>
                        <p>
                            Nous offrons un mariage inédit d'expertises — architecture, design, ingénierie et conseil — au service d'une expérience centrée sur les usages et les besoins de nos clients.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}
