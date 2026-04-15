export function Rules() {
  return (
    <section id="rules" className="py-9">
      <div className="max-w-[1180px] mx-auto w-[calc(100%-32px)]">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-5 mb-6">
          <h3 className="font-serif text-[clamp(34px,5vw,42px)] leading-[1.02] m-0 text-foreground">
            House rules & guest guidance
          </h3>
          <p className="m-0 max-w-[560px] text-muted leading-[1.7]">
            Find clear house rules and guest guidelines for a safe, comfortable, and hassle-free stay at Varaa Villa. Everything you need to know before booking your private villa stay in Mysore.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div className="p-5 rounded-[22px] bg-panel border border-panel-border shadow-sm">
            <h4 className="m-0 mb-2.5 font-semibold text-[18px] text-foreground">Stay basics</h4>
            <ul className="pl-[18px] m-0 list-disc marker:text-gold-light/60">
              <li className="m-0 mb-2.5 text-muted leading-[1.6]">Check-in: 2:00 PM to 6:00 PM</li>
              <li className="m-0 mb-2.5 text-muted leading-[1.6]">Check-out before 11:00 AM</li>
              <li className="m-0 mb-2.5 text-muted leading-[1.6]">Maximum occupancy: 6 guests</li>
              <li className="m-0 text-muted leading-[1.6]">Primary guest must be at least 18 years old</li>
            </ul>
          </div>
          
          <div className="p-5 rounded-[22px] bg-panel border border-panel-border shadow-sm">
            <h4 className="m-0 mb-2.5 font-semibold text-[18px] text-foreground">Property conduct</h4>
            <ul className="pl-[18px] m-0 list-disc marker:text-gold-light/60">
              <li className="m-0 mb-2.5 text-muted leading-[1.6]">No parties or loud music inside the property</li>
              <li className="m-0 mb-2.5 text-muted leading-[1.6]">Smoking is not allowed inside the house; outdoor smoking only</li>
              <li className="m-0 mb-2.5 text-muted leading-[1.6]">Groups with only male guests are not allowed</li>
              <li className="m-0 text-muted leading-[1.6]">Pets are not allowed</li>
            </ul>
          </div>
          
          <div className="p-5 rounded-[22px] bg-panel border border-panel-border shadow-sm">
            <h4 className="m-0 mb-2.5 font-semibold text-[18px] text-foreground">Safety notes</h4>
            <ul className="pl-[18px] m-0 list-disc marker:text-gold-light/60">
              <li className="m-0 mb-2.5 text-muted leading-[1.6]">Kids should be supervised due to steps and open areas</li>
              <li className="m-0 mb-2.5 text-muted leading-[1.6]">Pool / hot tub area should be used carefully</li>
              <li className="m-0 mb-2.5 text-muted leading-[1.6]">CCTV cameras are installed at key exterior points for security</li>
              <li className="m-0 text-muted leading-[1.6]">Extra caution is recommended for elderly guests</li>
            </ul>
          </div>
          
          <div className="p-5 rounded-[22px] bg-panel border border-panel-border shadow-sm">
            <h4 className="m-0 mb-2.5 font-semibold text-[18px] text-foreground">Guest convenience</h4>
            <ul className="pl-[18px] m-0 list-disc marker:text-gold-light/60">
              <li className="m-0 mb-2.5 text-muted leading-[1.6]">Fast internet and OTT streaming setup available</li>
              <li className="m-0 mb-2.5 text-muted leading-[1.6]">Complimentary breakfast may be enabled after confirmation</li>
              <li className="m-0 mb-2.5 text-muted leading-[1.6]">Food ordering and on-call assistance available for a smoother and more comfortable stay</li>
              <li className="m-0 text-muted leading-[1.6]">Government ID and Aadhaar required during check-in</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
