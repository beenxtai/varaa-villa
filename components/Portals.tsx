import Link from "next/link";

export function Portals() {
  return (
    <section id="portals" className="py-9">
      <div className="max-w-[1180px] mx-auto w-[calc(100%-32px)]">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-5 mb-6">
          <h3 className="font-serif text-[clamp(34px,5vw,42px)] leading-[1.02] m-0 text-foreground">
            Book through your preferred channel
          </h3>
          <p className="m-0 max-w-[560px] text-muted leading-[1.7]">
            Guests can discover the villa through third-party portals or contact you directly for a faster, more personal booking flow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-[22px] rounded-3xl bg-gradient-to-b from-[#0e171f] to-[#0b131a] dark:from-[#0e171f] dark:to-[#0b131a] border border-panel-border flex flex-col items-start h-full">
            <span className="inline-flex px-2.5 py-2 rounded-full bg-gold-light/10 text-gold-light text-xs border border-gold-light/25 font-medium mb-4">
              Live listing
            </span>
            <h4 className="m-0 mb-1.5 font-semibold text-[18px] text-foreground">Airbnb</h4>
            <p className="m-0 mb-5 flex-grow text-muted text-sm leading-[1.6]">
              Existing Airbnb property page for Varaa Villa.
            </p>
            <a 
              href="https://www.airbnb.com/rooms/34594340"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-full font-bold transition-transform hover:-translate-y-0.5 border border-gold-light/40 text-gold-light bg-white/5 backdrop-blur-sm hover:bg-white/10 w-full text-center"
            >
              Open Airbnb
            </a>
          </div>
          
          <div className="p-[22px] rounded-3xl bg-gradient-to-b from-[#0e171f] to-[#0b131a] dark:from-[#0e171f] dark:to-[#0b131a] border border-panel-border flex flex-col items-start h-full">
            <span className="inline-flex px-2.5 py-2 rounded-full bg-gold-light/10 text-gold-light text-xs border border-gold-light/25 font-medium mb-4">
              Live listing
            </span>
            <h4 className="m-0 mb-1.5 font-semibold text-[18px] text-foreground">MakeMyTrip</h4>
            <p className="m-0 mb-5 flex-grow text-muted text-sm leading-[1.6]">
              Current MakeMyTrip property page for Varaa Villa for 4.
            </p>
            <a 
              href="https://www.makemytrip.com/hotels/varaa_villa_for_4-details-mysore.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-full font-bold transition-transform hover:-translate-y-0.5 border border-gold-light/40 text-gold-light bg-white/5 backdrop-blur-sm hover:bg-white/10 w-full text-center"
            >
              Open MakeMyTrip
            </a>
          </div>
          
          <div className="p-[22px] rounded-3xl bg-gradient-to-b from-[#0e171f] to-[#0b131a] dark:from-[#0e171f] dark:to-[#0b131a] border border-panel-border flex flex-col items-start h-full">
            <span className="inline-flex px-2.5 py-2 rounded-full bg-gold-light/10 text-gold-light text-xs border border-gold-light/25 font-medium mb-4">
              Add link
            </span>
            <h4 className="m-0 mb-1.5 font-semibold text-[18px] text-foreground">Booking.com</h4>
            <p className="m-0 mb-5 flex-grow text-muted text-sm leading-[1.6]">
              Slot prepared in the website. Add your Booking.com property URL once it is shared.
            </p>
            <a 
              href="#book"
              className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-full font-bold transition-transform hover:-translate-y-0.5 border border-gold-light/40 text-gold-light bg-white/5 backdrop-blur-sm hover:bg-white/10 w-full text-center"
            >
              Connect later
            </a>
          </div>
          
          <div className="p-[22px] rounded-3xl bg-gradient-to-b from-[#0e171f] to-[#0b131a] dark:from-[#0e171f] dark:to-[#0b131a] border border-panel-border flex flex-col items-start h-full">
            <span className="inline-flex px-2.5 py-2 rounded-full bg-gold-light/10 text-gold-light text-xs border border-gold-light/25 font-medium mb-4 text-[#f0d7aa]">
              Best conversion
            </span>
            <h4 className="m-0 mb-1.5 font-semibold text-[18px] text-foreground">Book Direct</h4>
            <p className="m-0 mb-5 flex-grow text-muted text-sm leading-[1.6]">
              Capture direct leads with WhatsApp and a booking request form below.
            </p>
            <a 
              href="#book"
              className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-full font-bold transition-transform hover:-translate-y-0.5 bg-gradient-to-br from-gold to-[#b98a43] text-[#1a1308] shadow-[0_18px_48px_rgba(0,0,0,0.32)] w-full text-center"
            >
              Direct Booking
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
