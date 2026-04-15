import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-9">
      <div className="max-w-[1180px] mx-auto w-[calc(100%-32px)] grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-6">
        
        <div className="min-h-[400px] lg:min-h-[560px] rounded-xl overflow-hidden relative border border-panel-border shadow-[0_18px_48px_rgba(0,0,0,0.32)]">
          <Image 
            src="/images/Varaavilla-cortyard-view-1.jpeg" 
            alt="Courtyard seating at Varaa Villa"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        
        <div className="bg-panel border border-panel-border rounded-xl shadow-[0_18px_48px_rgba(0,0,0,0.32)] p-7 lg:p-10 flex flex-col justify-center">
          <div className="mb-6">
            <h3 className="font-serif text-[clamp(34px,5vw,42px)] leading-[1.02] m-0 text-foreground">
              About Varaa Villa
            </h3>
          </div>
          
          <p className="text-muted leading-[1.8] mb-4">
            Varaa Villa blends bold architecture, tropical landscaping and calming sit-out decks and premium interiors to create a standout stay experience in Mysore. The property offers privacy, warm hospitality and thoughtful guest essentials for short leisure getaways.
          </p>
          
          <p className="text-muted leading-[1.8] mb-8">
            Enjoy a hassle-free booking experience with direct WhatsApp enquiries and real-time assistance. From your first message to final confirmation, everything is simple, quick and reliable.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
            <div className="p-[18px] rounded-[20px] bg-background border border-panel-border">
              <h4 className="m-0 mb-2 font-semibold text-base text-foreground">Private Indoor Pool</h4>
              <p className="m-0 text-muted text-sm leading-[1.6]">Elegant covered pool area for all-season enjoyment.</p>
            </div>
            
            <div className="p-[18px] rounded-[20px] bg-background border border-panel-border">
              <h4 className="m-0 mb-2 font-semibold text-base text-foreground">Terrace Deck</h4>
              <p className="m-0 text-muted text-sm leading-[1.6]">Open rooftop vibe with deck seating and lush planters.</p>
            </div>
            
            <div className="p-[18px] rounded-[20px] bg-background border border-panel-border">
              <h4 className="m-0 mb-2 font-semibold text-base text-foreground">Premium Social Spaces</h4>
              <p className="m-0 text-muted text-sm leading-[1.6]">Courtyard, dining and living spaces built for memorable stays.</p>
            </div>
            
            <div className="p-[18px] rounded-[20px] bg-background border border-panel-border">
              <h4 className="m-0 mb-2 font-semibold text-base text-foreground">Fast Internet + OTT</h4>
              <p className="m-0 text-muted text-sm leading-[1.6]">Wi‑Fi with entertainment options for relaxed indoor time.</p>
            </div>
            
            <div className="p-[18px] rounded-[20px] bg-background border border-panel-border">
              <h4 className="m-0 mb-2 font-semibold text-base text-foreground">Parking & Security</h4>
              <p className="m-0 text-muted text-sm leading-[1.6]">Free parking with CCTV monitoring at key exterior points.</p>
            </div>
            
            <div className="p-[18px] rounded-[20px] bg-background border border-panel-border">
              <h4 className="m-0 mb-2 font-semibold text-base text-foreground">Host Support</h4>
              <p className="m-0 text-muted text-sm leading-[1.6]">Direct booking and guest support through WhatsApp.</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
