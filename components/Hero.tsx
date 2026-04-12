import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <header className="pt-8 pb-7">
      <div className="max-w-[1180px] mx-auto w-[calc(100%-32px)]">
        <div className="min-h-[auto] sm:min-h-[78vh] rounded-[32px] overflow-hidden relative shadow-[0_18px_48px_rgba(0,0,0,0.32)] border border-white/10 bg-black flex flex-col group">
          <div className="absolute inset-0">
            <Image 
              src="/images/Varaavilla-front-view.jpeg" 
              alt="Varaa Villa entrance"
              fill
              className="object-cover scale-105 transition-transform duration-[10s] group-hover:scale-110"
              priority
            />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-r from-[#05080b]/90 via-[#05080b]/60 to-[#05080b]/20 bg-[linear-gradient(180deg,rgba(0,0,0,0.16)_0%,rgba(0,0,0,0.58)_100%)] z-10" />
          
          <div className="relative z-20 p-8 sm:p-16 max-w-[700px] flex flex-col justify-end flex-grow">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-white/10 border border-white/10 w-max text-[#f7e6c4] text-sm font-medium backdrop-blur-sm mb-4">
              Private Villa • Pool • Terrace • Mysore
            </div>
            
            <h2 className="font-serif text-[clamp(42px,6vw,76px)] leading-[0.95] my-4 tracking-[-0.03em] text-white">
              A design-forward stay for peaceful luxury in Mysore.
            </h2>
            
            <p className="text-lg leading-relaxed text-[#d3dde6] max-w-[610px] mb-8">
              Discover a premium villa experience with warm interiors, a private indoor pool, terrace sit-outs, stylish social spaces, fast Wi‑Fi and direct host assistance on WhatsApp.
            </p>
            
            <div className="flex gap-3.5 flex-wrap">
              <a 
                href="#book"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-bold transition-transform hover:-translate-y-0.5 bg-gradient-to-br from-gold to-[#b98a43] text-[#1a1308] shadow-lg"
              >
                Book Direct
              </a>
              
              <a 
                href="https://wa.me/918197333646?text=Hi%20Varaa%20Villa%2C%20I%20would%20like%20to%20check%20availability."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-bold transition-transform hover:-translate-y-0.5 bg-accent text-[#082013]"
              >
                WhatsApp Us
              </a>
              
              <a 
                href="#portals"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-bold transition-transform hover:-translate-y-0.5 border border-gold-light/40 text-gold-light bg-white/5 backdrop-blur-sm hover:bg-white/10"
              >
                View Portals
              </a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 mt-10">
              <div className="p-4 sm:p-[18px] rounded-[20px] bg-white/10 border border-white/10 backdrop-blur-md">
                <strong className="block text-[19px] mb-1 text-white">6 Guests</strong>
                <span className="text-[13px] text-[#c0ced8]">Ideal for families & friends</span>
              </div>
              <div className="p-4 sm:p-[18px] rounded-[20px] bg-white/10 border border-white/10 backdrop-blur-md">
                <strong className="block text-[19px] mb-1 text-white">2 Bedrooms</strong>
                <span className="text-[13px] text-[#c0ced8]">Comfortable premium stay</span>
              </div>
              <div className="p-4 sm:p-[18px] rounded-[20px] bg-white/10 border border-white/10 backdrop-blur-md">
                <strong className="block text-[19px] mb-1 text-white">2 Baths</strong>
                <span className="text-[13px] text-[#c0ced8]">Spacious setup</span>
              </div>
              <div className="p-4 sm:p-[18px] rounded-[20px] bg-white/10 border border-white/10 backdrop-blur-md">
                <strong className="block text-[19px] mb-1 text-white">Indoor Pool</strong>
                <span className="text-[13px] text-[#c0ced8]">Private and available all year</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
