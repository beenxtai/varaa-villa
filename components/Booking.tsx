"use client";

import * as React from "react";
import Image from "next/image";

export function Booking() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    checkin: "",
    checkout: "",
    guests: "6",
    portal: "Direct with host",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Call POST /api/booking
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error("Failed to submit booking");
      }
      
      // WhatsApp predefined message
      const text = `Hi Varaa Villa, I would like to enquire about a stay.

Name: ${formData.name}
Phone: ${formData.phone}
Check-in: ${formData.checkin}
Check-out: ${formData.checkout}
Guests: ${formData.guests}
Preferred booking option: ${formData.portal}${formData.message ? `\nSpecial request: ${formData.message}` : ''}`;
      
      window.open(`https://wa.me/918197333646?text=${encodeURIComponent(text)}`, '_blank');
      
      // Optional: reset form after successful redirect
      // setFormData({ ...initialState });
      
    } catch (error) {
      console.error("Booking err:", error);
      alert("Something went wrong. Please try contacting via WhatsApp directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="book" className="py-9">
      <div className="max-w-[1180px] mx-auto w-[calc(100%-32px)] grid grid-cols-1 md:grid-cols-[0.95fr_1.05fr] gap-[22px]">
        
        {/* Form Panel */}
        <div className="p-6 md:p-8 rounded-[24px] bg-panel border border-panel-border shadow-[0_18px_48px_rgba(0,0,0,0.32)]">
          <div className="mb-4">
            <h3 className="font-serif text-[clamp(28px,4vw,34px)] leading-[1.02] m-0 text-foreground">
              Direct booking request
            </h3>
          </div>
          
          <p className="text-muted leading-[1.7] mb-6 text-sm">
            This form is designed for a direct-lead flow. For now, it sends a pre-filled WhatsApp enquiry to your number. In the next phase, it can be connected to email, CRM, Google Sheets, GoDaddy forms, or a booking engine.
          </p>
          
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
            <div>
              <label htmlFor="name" className="text-[13px] text-muted block mb-1.5 font-medium">Guest name</label>
              <input 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                className="w-full px-4 py-3.5 rounded-[16px] border border-panel-border bg-background focus:ring-2 focus:ring-gold-light/50 outline-none transition-all placeholder:text-muted/60" 
                placeholder="Your full name" 
                required 
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="text-[13px] text-muted block mb-1.5 font-medium">Phone number</label>
              <input 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                className="w-full px-4 py-3.5 rounded-[16px] border border-panel-border bg-background focus:ring-2 focus:ring-gold-light/50 outline-none transition-all placeholder:text-muted/60" 
                placeholder="Your mobile number" 
                required 
              />
            </div>
            
            <div>
              <label htmlFor="checkin" className="text-[13px] text-muted block mb-1.5 font-medium">Check-in</label>
              <input 
                id="checkin" 
                name="checkin" 
                type="date" 
                value={formData.checkin} 
                onChange={handleChange} 
                className="w-full px-4 py-3.5 rounded-[16px] border border-panel-border bg-background focus:ring-2 focus:ring-gold-light/50 outline-none transition-all" 
                required 
              />
            </div>
            
            <div>
              <label htmlFor="checkout" className="text-[13px] text-muted block mb-1.5 font-medium">Check-out</label>
              <input 
                id="checkout" 
                name="checkout" 
                type="date" 
                value={formData.checkout} 
                onChange={handleChange} 
                className="w-full px-4 py-3.5 rounded-[16px] border border-panel-border bg-background focus:ring-2 focus:ring-gold-light/50 outline-none transition-all" 
                required 
              />
            </div>
            
            <div>
              <label htmlFor="guests" className="text-[13px] text-muted block mb-1.5 font-medium">Guests</label>
              <select 
                id="guests" 
                name="guests" 
                value={formData.guests} 
                onChange={handleChange} 
                className="w-full px-4 py-3.5 rounded-[16px] border border-panel-border bg-background focus:ring-2 focus:ring-gold-light/50 outline-none transition-all appearance-none"
              >
                <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="portal" className="text-[13px] text-muted block mb-1.5 font-medium">Preferred option</label>
              <select 
                id="portal" 
                name="portal" 
                value={formData.portal} 
                onChange={handleChange} 
                className="w-full px-4 py-3.5 rounded-[16px] border border-panel-border bg-background focus:ring-2 focus:ring-gold-light/50 outline-none transition-all appearance-none"
              >
                <option>Direct with host</option>
                <option>Airbnb</option>
                <option>MakeMyTrip</option>
                <option>Booking.com</option>
              </select>
            </div>
            
            <div className="sm:col-span-2">
              <label htmlFor="message" className="text-[13px] text-muted block mb-1.5 font-medium">Special request</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                className="w-full px-4 py-3.5 rounded-[16px] border border-panel-border bg-background focus:ring-2 focus:ring-gold-light/50 outline-none transition-all min-h-[120px] resize-y placeholder:text-muted/60" 
                placeholder="Anything we should know?"
              ></textarea>
            </div>
            
            <div className="sm:col-span-2 flex gap-3 flex-wrap mt-2">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="inline-flex flex-1 items-center justify-center gap-2 px-5 py-3.5 rounded-full font-bold transition-transform hover:-translate-y-0.5 bg-accent text-[#082013] disabled:opacity-75 disabled:hover:translate-y-0"
              >
                {isSubmitting ? "Processing..." : "Send on WhatsApp"}
              </button>
              
              <a 
                href="tel:+918197333646"
                className="inline-flex flex-1 items-center justify-center gap-2 px-5 py-3.5 rounded-full font-bold transition-transform hover:-translate-y-0.5 border border-gold-light/40 text-gold-light bg-panel-border/30 hover:bg-panel-border/50 text-center"
              >
                Call 81973 33646
              </a>
            </div>
          </form>
          
          <p className="mt-4 text-[13px] text-[#d9c69b] dark:text-gold">Rates and logo placeholders can be added once shared.</p>
        </div>

        {/* Contact Info Panel */}
        <div className="flex flex-col gap-4">
          <div className="p-6 md:p-8 rounded-[24px] bg-panel border border-panel-border shadow-[0_18px_48px_rgba(0,0,0,0.32)]">
            <h3 className="font-serif text-[clamp(28px,4vw,34px)] leading-[1.02] m-0 mb-4 text-foreground">
              Contact & location
            </h3>
            
            <div className="flex flex-col gap-4">
              <div className="p-[18px] rounded-[20px] bg-background border border-panel-border">
                <small className="block text-muted mb-1 text-sm">Phone / WhatsApp</small>
                <strong className="text-[22px] font-semibold text-foreground">81973 33646</strong>
              </div>
              
              <div className="p-[18px] rounded-[20px] bg-background border border-panel-border">
                <small className="block text-muted mb-1 text-sm">Area</small>
                <strong className="text-[18px] md:text-[22px] font-semibold text-foreground">Somanatha Nagar, Mysore</strong>
              </div>
              
              <div className="p-[18px] rounded-[20px] bg-background border border-panel-border">
                <small className="block text-muted mb-1 text-sm">Location help</small>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Somanatha+Nagar+Mysore" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-semibold text-gold-light hover:underline"
                >
                  Open in Google Maps
                </a>
              </div>
              
              <div className="p-[18px] rounded-[20px] bg-background border border-panel-border">
                <small className="block text-muted mb-1 text-sm">Website note</small>
                <span className="text-muted text-sm leading-[1.5] block">
                  Final logo, rates, payment flow and exact map pin can be updated in the launch version.
                </span>
              </div>
            </div>
          </div>
          
          <div className="rounded-[24px] overflow-hidden min-h-[300px] md:min-h-[420px] relative border border-panel-border shadow-[0_18px_48px_rgba(0,0,0,0.32)] flex-grow">
            <Image 
              src="/images/Varaavilla-Rooftop-View-1.jpeg" 
              alt="Terrace detail at Varaa Villa"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
}
