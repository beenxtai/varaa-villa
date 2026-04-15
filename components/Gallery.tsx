import Image from "next/image";

export function Gallery() {
  return (
    <section id="gallery" className="py-9">
      <div className="max-w-[1180px] mx-auto w-[calc(100%-32px)]">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-5 mb-6">
          <h3 className="font-serif text-[clamp(34px,5vw,42px)] leading-[1.02] m-0 text-foreground">
            Villa gallery
          </h3>
          <p className="m-0 max-w-[560px] text-muted leading-[1.7]">
            A curated visual story across the entrance, courtyard, pool, living spaces, bedrooms and terrace decks.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-[1.25fr_0.75fr_0.75fr] gap-4">
          <div className="relative rounded-xl overflow-hidden min-h-[300px] md:min-h-[500px] md:row-span-2 border border-panel-border shadow-[0_18px_48px_rgba(0,0,0,0.32)] group">
            <Image 
              src="/images/Varaavilla-front-view-2.jpeg" 
              alt="Varaa Villa exterior"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <span className="absolute left-3.5 bottom-3.5 px-3.5 py-2.5 rounded-full bg-[#081017]/75 backdrop-blur-md text-[13px] border border-white/10 text-white">
              Premium facade
            </span>
          </div>
          
          <div className="relative rounded-xl overflow-hidden min-h-[240px] border border-panel-border shadow-[0_18px_48px_rgba(0,0,0,0.32)] group">
            <Image 
              src="/images/Varaavilla-Swimming-Pool-view.jpeg" 
              alt="Pool"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 30vw"
            />
            <span className="absolute left-3.5 bottom-3.5 px-3.5 py-2.5 rounded-full bg-[#081017]/75 backdrop-blur-md text-[13px] border border-white/10 text-white">
              Indoor pool
            </span>
          </div>
          
          <div className="relative rounded-xl overflow-hidden min-h-[240px] border border-panel-border shadow-[0_18px_48px_rgba(0,0,0,0.32)] group">
            <Image 
              src="/images/Varaavilla-Dining-view.jpeg" 
              alt="Dining"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 30vw"
            />
            <span className="absolute left-3.5 bottom-3.5 px-3.5 py-2.5 rounded-full bg-[#081017]/75 backdrop-blur-md text-[13px] border border-white/10 text-white">
              Dining area
            </span>
          </div>
          
          <div className="relative rounded-xl overflow-hidden min-h-[240px] border border-panel-border shadow-[0_18px_48px_rgba(0,0,0,0.32)] group">
            <Image 
              src="/images/Varaavilla-Bedroom-1.jpeg" 
              alt="Bedroom"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 30vw"
            />
            <span className="absolute left-3.5 bottom-3.5 px-3.5 py-2.5 rounded-full bg-[#081017]/75 backdrop-blur-md text-[13px] border border-white/10 text-white">
              Master bedroom
            </span>
          </div>
          
          <div className="relative rounded-xl overflow-hidden min-h-[240px] border border-panel-border shadow-[0_18px_48px_rgba(0,0,0,0.32)] group">
            <Image 
              src="/images/Varaavilla-Rooftop-View.jpeg" 
              alt="Terrace"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 30vw"
            />
            <span className="absolute left-3.5 bottom-3.5 px-3.5 py-2.5 rounded-full bg-[#081017]/75 backdrop-blur-md text-[13px] border border-white/10 text-white">
              Terrace garden
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
