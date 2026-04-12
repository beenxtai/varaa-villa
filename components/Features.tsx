export function Features() {
  return (
    <section id="stay" className="py-9">
      <div className="max-w-[1180px] mx-auto w-[calc(100%-32px)]">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-5 mb-6">
          <h3 className="font-serif text-[clamp(34px,5vw,42px)] leading-[1.02] m-0 text-foreground">
            Stay highlights
          </h3>
          <p className="m-0 max-w-[560px] text-muted leading-[1.7]">
            Structured around what guests usually look for first: space, amenities, convenience and comfort.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          <div className="p-5 rounded-[20px] bg-panel border border-panel-border transition-colors hover:bg-panel/80">
            <h4 className="m-0 mb-2 font-semibold text-base text-foreground">Kitchen</h4>
            <p className="m-0 text-muted text-sm leading-[1.6]">Self-use kitchen setup for convenient in-villa stays.</p>
          </div>
          
          <div className="p-5 rounded-[20px] bg-panel border border-panel-border transition-colors hover:bg-panel/80">
            <h4 className="m-0 mb-2 font-semibold text-base text-foreground">Dedicated Workspace</h4>
            <p className="m-0 text-muted text-sm leading-[1.6]">Suitable for light work, planning or remote catch-ups.</p>
          </div>
          
          <div className="p-5 rounded-[20px] bg-panel border border-panel-border transition-colors hover:bg-panel/80">
            <h4 className="m-0 mb-2 font-semibold text-base text-foreground">Free Parking</h4>
            <p className="m-0 text-muted text-sm leading-[1.6]">On-premises parking included for guests.</p>
          </div>
          
          <div className="p-5 rounded-[20px] bg-panel border border-panel-border transition-colors hover:bg-panel/80">
            <h4 className="m-0 mb-2 font-semibold text-base text-foreground">Air Conditioning</h4>
            <p className="m-0 text-muted text-sm leading-[1.6]">AC available in 2 rooms for added comfort.</p>
          </div>
          
          <div className="p-5 rounded-[20px] bg-panel border border-panel-border transition-colors hover:bg-panel/80">
            <h4 className="m-0 mb-2 font-semibold text-base text-foreground">Balcony / Terrace</h4>
            <p className="m-0 text-muted text-sm leading-[1.6]">Outdoor seating and open-air relaxation zones.</p>
          </div>
          
          <div className="p-5 rounded-[20px] bg-panel border border-panel-border transition-colors hover:bg-panel/80">
            <h4 className="m-0 mb-2 font-semibold text-base text-foreground">Housekeeping</h4>
            <p className="m-0 text-muted text-sm leading-[1.6]">Core support amenities for hassle-free stays.</p>
          </div>
          
          <div className="p-5 rounded-[20px] bg-panel border border-panel-border transition-colors hover:bg-panel/80">
            <h4 className="m-0 mb-2 font-semibold text-base text-foreground">Power Backup</h4>
            <p className="m-0 text-muted text-sm leading-[1.6]">Support for more reliable guest comfort.</p>
          </div>
          
          <div className="p-5 rounded-[20px] bg-panel border border-panel-border transition-colors hover:bg-panel/80">
            <h4 className="m-0 mb-2 font-semibold text-base text-foreground">Washing Machine</h4>
            <p className="m-0 text-muted text-sm leading-[1.6]">Useful for longer stays and family travel.</p>
          </div>
          
          <div className="p-5 rounded-[20px] bg-panel border border-panel-border transition-colors hover:bg-panel/80">
            <h4 className="m-0 mb-2 font-semibold text-base text-foreground">Library & Lounge Feel</h4>
            <p className="m-0 text-muted text-sm leading-[1.6]">Character-filled spaces with a calm, premium mood.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
