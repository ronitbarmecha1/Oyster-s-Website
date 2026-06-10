import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Calendar, Users, Send, CheckCircle, ShieldAlert, Key, Edit, Eye, EyeOff } from 'lucide-react';
import { restaurantInfo as defaultInfo, menuItems as defaultMenuItems } from '../data';
import { RestaurantInfo, MenuItem } from '../types';

interface ContactProps {
  onInfoUpdate?: (newInfo: RestaurantInfo) => void;
  onMenuUpdate?: (newMenu: MenuItem[]) => void;
  currentInfo: RestaurantInfo;
}

export default function Contact({ onInfoUpdate, onMenuUpdate, currentInfo }: ContactProps) {
  // Enquiry/Reservation state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '07:00 PM',
    guests: '2',
    request: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [inquiries, setInquiries] = useState<any[]>([]);

  // Load recorded inquiries on mount
  useEffect(() => {
    const saved = localStorage.getItem('oyster_inquiries');
    if (saved) {
      try {
        setInquiries(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, [submitted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const newInquiry = {
      id: 'inq-' + Date.now(),
      ...formData,
      timestamp: new Date().toLocaleString(),
      status: 'Pending Call Confirmation'
    };

    const updated = [newInquiry, ...inquiries];
    setInquiries(updated);
    localStorage.setItem('oyster_inquiries', JSON.stringify(updated));
    setSubmitted(true);

    // Reset except a few settings
    setFormData({
      name: '',
      phone: '',
      date: '',
      time: '07:00 PM',
      guests: '2',
      request: '',
    });
  };

  // Owner Panel State
  const [showAdmin, setShowAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [editedPhone, setEditedPhone] = useState(currentInfo.formattedPhone);
  const [editedWhatsapp, setEditedWhatsapp] = useState(currentInfo.formattedWhatsapp);
  const [editedHoursWeek, setEditedHoursWeek] = useState(currentInfo.timings[0].hours);
  const [editedHoursWeekend, setEditedHoursWeekend] = useState(currentInfo.timings[1].hours);
  const [adminMessage, setAdminMessage] = useState('');

  const handleAdminVerify = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple developer credential for restaurant owner as requested: "easy to update later"
    // Password is 'admin123' or 'oyster'
    if (adminPassword.toLowerCase() === 'admin' || adminPassword.toLowerCase() === 'oyster') {
      setIsAuthorized(true);
      setAdminMessage('');
    } else {
      setAdminMessage('Invalid credential. Try entering "oyster" to access.');
    }
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    if (!onInfoUpdate) return;

    const newInfo: RestaurantInfo = {
      ...currentInfo,
      formattedPhone: editedPhone,
      phone: editedPhone.replace(/\s+/g, ''),
      formattedWhatsapp: editedWhatsapp,
      whatsapp: editedWhatsapp.replace(/\s+/g, ''),
      timings: [
        { days: "Mon - Thu", hours: editedHoursWeek },
        { days: "Fri - Sun", hours: editedHoursWeekend }
      ]
    };

    onInfoUpdate(newInfo);
    setAdminMessage('Restaurant details saved successfully and updated live!');
    
    // Clear message after 3s
    setTimeout(() => {
      setAdminMessage('');
    }, 5000);
  };

  const clearInquiries = () => {
    localStorage.removeItem('oyster_inquiries');
    setInquiries([]);
    setAdminMessage('All inquiries cleared.');
    setTimeout(() => setAdminMessage(''), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-cream text-ink relative overflow-hidden border-b border-gold/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-sans text-[10px] font-bold text-gold tracking-[0.3em] uppercase block">
            VISIT & RESERVE
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-ink tracking-tight">
            Contact & Enquiries
          </h2>
          <div className="h-[1px] w-20 bg-gold mx-auto" />
          <p className="font-sans text-gray-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Planning a celebration, anniversary dinner, or corporate event? Book your lakeside space or drop us an instant WhatsApp reservation signal.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Info Cards & Maps (Col Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address & Hours */}
            <div className="bg-[#FDFBF7] border border-gold/25 rounded-none p-8 space-y-6">
              
              <div className="flex items-start space-x-4">
                <div className="p-2.5 bg-gold/10 border border-gold/30 rounded-none text-gold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-ink text-base">Location & Address</h4>
                  <p className="font-sans text-xs text-gray-600 mt-2 leading-relaxed">
                    {currentInfo.address}
                  </p>
                  <a
                    href={currentInfo.mapDirectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-[10px] uppercase tracking-widest text-gold hover:text-ink font-bold mt-3"
                  >
                    <span>Get Drive Directions</span>
                    <span>→</span>
                  </a>
                </div>
              </div>

              <div className="h-[1px] bg-gold/10 w-full" />

              <div className="flex items-start space-x-4">
                <div className="p-2.5 bg-gold/10 border border-gold/30 rounded-none text-gold">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-ink text-base">Opening Timings</h4>
                  <div className="mt-2 space-y-1.5">
                    {currentInfo.timings.map((t, idx) => (
                      <p key={idx} className="font-sans text-[11px] text-gray-600 flex justify-between gap-4">
                        <span className="font-bold text-ink">{t.days}:</span>
                        <span>{t.hours}</span>
                      </p>
                    ))}
                  </div>
                  <p className="font-sans text-[10px] text-gold mt-3 italic">
                    *Golden hours typically commence around 05:45 PM for perfect lake sunsets.
                  </p>
                </div>
              </div>

            </div>

            {/* Tap-to-Call Buttons (Dual Actions Grid) */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={`tel:${currentInfo.phone}`}
                id="contact-action-call"
                className="flex flex-col items-center justify-center p-5 bg-gold hover:bg-[#B38E46] rounded-none text-ink transition-all shadow-lg shadow-gold/10 text-center cursor-pointer"
              >
                <Phone className="w-5 h-5 mb-2 stroke-[2.5]" />
                <span className="font-sans text-[10px] uppercase tracking-widest font-bold">Tap to Call</span>
                <span className="font-mono text-[9px] opacity-95 mt-1">{currentInfo.formattedPhone}</span>
              </a>

              <a
                href={`https://wa.me/${currentInfo.whatsapp.replace('+', '')}?text=Hi%2C%20I%20would%20like%20to%20reserve%20a%20table%20at%20Oyster%20Ajmer.`}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-action-whatsapp"
                className="flex flex-col items-center justify-center p-5 bg-[#25D366] hover:bg-[#20ba56] rounded-none text-white transition-all shadow-lg shadow-[#25D366]/10 text-center"
              >
                <MessageCircle className="w-5 h-5 mb-2 fill-current" />
                <span className="font-sans text-[10px] uppercase tracking-widest font-bold">WhatsApp Chat</span>
                <span className="font-mono text-[9px] opacity-95 mt-1">{currentInfo.formattedWhatsapp}</span>
              </a>
            </div>

            {/* Map Embed Container */}
            <div className="rounded-none overflow-hidden border border-gold/25 bg-[#FDFBF7] aspect-video sm:aspect-square md:aspect-video relative">
              <iframe
                title="Oyster Restaurant Location Map"
                src={currentInfo.mapEmbedUrl}
                className="w-full h-full border-0 filter grayscale invert contrast-125 brightness-75"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

          {/* Column 2: Reservation form (Col Span 7) */}
          <div className="lg:col-span-7">
            <div className="bg-[#FDFBF7] border border-gold/25 rounded-none p-8 relative">
              
              <div className="mb-8">
                <h3 className="font-serif font-bold text-2xl text-ink">Table Booking & General Enquiry</h3>
                <p className="font-sans text-xs text-gray-500 mt-1">
                  Fill out this form and we'll record it. Please follow up via phone to hold tables instantly on busy weekends.
                </p>
              </div>

              {submitted ? (
                <div id="enquiry-success-message" className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-gold/10 border border-gold/30 rounded-none flex items-center justify-center mx-auto text-gold">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif font-bold text-xl text-ink">Preregistration Logged!</h4>
                  <p className="font-sans text-xs text-gray-600 max-w-md mx-auto leading-relaxed">
                    We have securely logged your table preference. Look up "Owner Settings" below if you want to inspect details.
                  </p>
                  <p className="font-sans text-xs text-ink bg-gold/10 py-3.5 px-4 rounded-none border border-gold/30 max-w-md mx-auto font-bold uppercase tracking-wider">
                    Please call us at <a href={`tel:${currentInfo.phone}`} className="underline font-bold text-gold whitespace-nowrap">{currentInfo.formattedPhone}</a> to instantly secure your specific table.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-none text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-ink border border-gold/20 hover:border-gold transition-all cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form id="reservation-form" onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Your Name */}
                    <div className="space-y-2">
                      <label htmlFor="res-name" className="block font-sans text-[10px] font-bold text-ink uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        id="res-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ronit Barmecha"
                        className="w-full bg-[#FCFAF5] border border-gold/25 rounded-none py-3 px-4 text-xs text-ink focus:outline-none focus:border-gold transition-colors font-sans"
                      />
                    </div>

                    {/* Contact Number */}
                    <div className="space-y-2">
                      <label htmlFor="res-phone" className="block font-sans text-[10px] font-bold text-ink uppercase tracking-wider">
                        Phone Number *
                      </label>
                      <input
                        id="res-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98765 XXXXX"
                        className="w-full bg-[#FCFAF5] border border-gold/25 rounded-none py-3 px-4 text-xs text-ink focus:outline-none focus:border-gold transition-colors font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {/* Date */}
                    <div className="space-y-2">
                      <label htmlFor="res-date" className="block font-sans text-[10px] font-bold text-ink uppercase tracking-wider">
                        Preferred Date
                      </label>
                      <div className="relative">
                        <input
                          id="res-date"
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full bg-[#FCFAF5] border border-gold/25 rounded-none py-3 px-4 text-xs text-ink focus:outline-none focus:border-gold transition-colors font-sans"
                        />
                      </div>
                    </div>

                    {/* Time */}
                    <div className="space-y-2">
                      <label htmlFor="res-time" className="block font-sans text-[10px] font-bold text-ink uppercase tracking-wider">
                        Dining Time
                      </label>
                      <select
                        id="res-time"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full bg-[#FCFAF5] border border-gold/25 rounded-none py-3 px-4 text-xs text-ink focus:outline-none focus:border-gold transition-colors font-sans cursor-pointer"
                      >
                        <option value="12:30 PM">12:30 PM</option>
                        <option value="01:30 PM">01:30 PM</option>
                        <option value="02:30 PM">02:30 PM</option>
                        <option value="06:30 PM">06:30 PM</option>
                        <option value="07:00 PM">07:00 PM</option>
                        <option value="07:30 PM">07:30 PM (Sunset Peak)</option>
                        <option value="08:00 PM">08:00 PM (Sunset Peak)</option>
                        <option value="08:30 PM">08:30 PM</option>
                        <option value="09:30 PM">09:30 PM</option>
                        <option value="10:00 PM">10:00 PM</option>
                      </select>
                    </div>

                    {/* Number of Guests */}
                    <div className="space-y-2">
                      <label htmlFor="res-guests" className="block font-sans text-[10px] font-bold text-ink uppercase tracking-wider">
                        Number of Persons
                      </label>
                      <select
                        id="res-guests"
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full bg-[#FCFAF5] border border-gold/25 rounded-none py-3 px-4 text-xs text-ink focus:outline-none focus:border-gold transition-colors font-sans cursor-pointer"
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 Persons</option>
                        <option value="3">3 Persons</option>
                        <option value="4">4 Persons</option>
                        <option value="5">5 Persons</option>
                        <option value="6">6 Persons</option>
                        <option value="8">8+ (Requires follow-up)</option>
                        <option value="15">Large Group / Event (15+)</option>
                      </select>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div className="space-y-2">
                    <label htmlFor="res-request" className="block font-sans text-[10px] font-bold text-ink uppercase tracking-wider">
                      Special Celebration Details / Exclusions
                    </label>
                    <textarea
                      id="res-request"
                      value={formData.request}
                      onChange={(e) => setFormData({ ...formData, request: e.target.value })}
                      placeholder="Anniversary cake coordinate? Vegetarian exclusions? Lakefront view preference?..."
                      rows={3}
                      className="w-full bg-[#FCFAF5] border border-gold/25 rounded-none py-3 px-4 text-xs text-ink focus:outline-none focus:border-gold transition-colors font-sans"
                    />
                  </div>

                  {/* CTA Submit Button */}
                  <button
                    type="submit"
                    id="submit-enquiry-btn"
                    className="w-full flex items-center justify-center space-x-2.5 py-4 rounded-none font-sans text-xs uppercase tracking-widest font-bold text-[#F5F2ED] bg-ink hover:bg-gold hover:text-ink active:scale-[0.99] transition-all shadow-lg shadow-gold/5 cursor-pointer border border-gold/10 hover:border-gold"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Reservation Inquiry</span>
                  </button>

                  <p className="font-sans text-[10px] text-gray-500 text-center leading-relaxed">
                    *We collect no internet transaction fees or pre-payment deposits. All confirmations are settled live by voice call, preserving maximum privacy and family trust.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

        {/* OWNER ADMIN PORTAL WORKBENCH SECTION */}
        <div className="mt-16 border-t border-gold/15 pt-12">
          <div className="flex flex-col items-center justify-center">
            <button
              onClick={() => setShowAdmin(!showAdmin)}
              id="admin-portal-toggle"
              className="flex items-center space-x-2 px-5 py-2.5 rounded-none bg-[#FDFBF7] border border-gold/25 font-sans text-[10px] tracking-widest uppercase font-bold text-gray-600 hover:text-ink hover:border-gold/60 transition-all cursor-pointer"
            >
              <Key className="w-3.5 h-3.5 text-gold" />
              <span>{showAdmin ? "Hide Owner Portal Settings" : "Restaurant Owner Settings Login"}</span>
            </button>
            <p className="font-sans text-[9px] text-gray-500 mt-1 text-center">
              Provides local browser session storage for testing live parameter updates & reviewing inquiries.
            </p>
          </div>

          {showAdmin && (
            <div className="mt-8 max-w-4xl mx-auto bg-[#FDFBF7] border border-gold/30 rounded-none p-8 shadow-xl">
              <div className="flex items-center space-x-3 mb-6">
                <ShieldAlert className="w-5 h-5 text-gold shrink-0" />
                <div>
                  <h4 className="font-serif font-bold text-lg text-ink">Owner / Manager Panel</h4>
                  <p className="font-sans text-xs text-gray-500">
                    Verify owner passcode to adjust live phone details, review submitted reservation enquiries, and clear session entries.
                  </p>
                </div>
              </div>

              {!isAuthorized ? (
                <form onSubmit={handleAdminVerify} className="flex flex-col sm:flex-row gap-4 max-w-md">
                  <input
                    type="password"
                    placeholder="Enter Owner Passcode (e.g. oyster)"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    className="flex-1 bg-[#FCFAF5] border border-gold/25 rounded-none py-2.5 px-4 text-xs text-ink focus:outline-none focus:border-gold"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-ink text-[#F5F2ED] hover:bg-gold hover:text-ink font-sans text-[10px] tracking-widest uppercase font-bold rounded-none transition-all cursor-pointer border border-gold/10"
                  >
                    Unlock Portal
                  </button>
                </form>
              ) : (
                <div className="space-y-8">
                  {/* Row 1: Read Submitted Enquiries */}
                  <div>
                    <h5 className="font-sans font-bold text-xs text-gold uppercase tracking-[0.2em] mb-4 flex items-center justify-between">
                      <span>Submitted Enquiries ({inquiries.length})</span>
                      {inquiries.length > 0 && (
                        <button
                          onClick={clearInquiries}
                          className="text-[10px] text-red-600 hover:underline hover:text-red-500 font-bold cursor-pointer"
                        >
                          Clear Inquiries
                        </button>
                      )}
                    </h5>

                    {inquiries.length > 0 ? (
                      <div className="space-y-4 max-h-60 overflow-y-auto pr-2 scrollbar-thin">
                        {inquiries.map((inq: any) => (
                          <div key={inq.id} className="p-4 bg-[#FCFAF5] rounded-none border border-gold/20 space-y-2 text-xs text-ink">
                            <div className="flex justify-between text-ink font-bold font-serif">
                              <span>👤 {inq.name} ({inq.phone})</span>
                              <span className="text-[10px] text-gold">{inq.timestamp}</span>
                            </div>
                            <div className="grid grid-cols-3 gap-2 text-[10px] text-gray-500 font-sans">
                              <span>📅 Date: {inq.date || "Not Spec."}</span>
                              <span>🕒 Time: {inq.time}</span>
                              <span>👥 Guests: {inq.guests}</span>
                            </div>
                            {inq.request && (
                              <p className="text-gray-600 bg-gold/5 p-2 rounded-none italic text-[11px] border border-gold/10">
                                "{inq.request}"
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-xs text-gray-400 italic p-4 bg-[#FCFAF5] rounded-none border border-gold/15 text-center">
                        No enquiries registered in this browser session. Test the reservation form to see submissions populate here.
                      </p>
                    )}
                  </div>

                  {/* Row 2: Live Info Updation Form */}
                  <form onSubmit={handleSaveSettings} className="space-y-6 pt-6 border-t border-gold/15 text-ink">
                    <h5 className="font-sans font-bold text-xs text-gold uppercase tracking-[0.2em]">
                      Update Live Details (Saves immediately)
                    </h5>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-[10px] uppercase tracking-wider text-gray-500 font-bold">Owner Contact Phone Number</label>
                        <input
                          type="text"
                          value={editedPhone}
                          onChange={(e) => setEditedPhone(e.target.value)}
                          className="w-full bg-[#FCFAF5] border border-gold/25 rounded-none py-2 px-3 text-xs text-ink focus:outline-none focus:border-gold"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-[10px] uppercase tracking-wider text-gray-500 font-bold">Owner WhatsApp Coordinate</label>
                        <input
                          type="text"
                          value={editedWhatsapp}
                          onChange={(e) => setEditedWhatsapp(e.target.value)}
                          className="w-full bg-[#FCFAF5] border border-gold/25 rounded-none py-2 px-3 text-xs text-ink focus:outline-none focus:border-gold"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-[10px] uppercase tracking-wider text-gray-500 font-bold">Weekdays Timings Descriptor</label>
                        <input
                          type="text"
                          value={editedHoursWeek}
                          onChange={(e) => setEditedHoursWeek(e.target.value)}
                          className="w-full bg-[#FCFAF5] border border-gold/25 rounded-none py-2 px-3 text-xs text-ink focus:outline-none focus:border-gold"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-[10px] uppercase tracking-wider text-gray-500 font-bold">Weekends Timings Descriptor</label>
                        <input
                          type="text"
                          value={editedHoursWeekend}
                          onChange={(e) => setEditedHoursWeekend(e.target.value)}
                          className="w-full bg-[#FCFAF5] border border-gold/25 rounded-none py-2 px-3 text-xs text-ink focus:outline-none focus:border-gold"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-center bg-[#FCFAF5] p-4 rounded-none border border-gold/20 gap-4">
                      <span className="text-[10px] text-gray-500 font-sans">
                        Editing values updates the header, footer, hero, and sticky widgets in real-time.
                      </span>
                      <button
                        type="submit"
                        className="px-6 py-2.5 bg-ink hover:bg-gold text-[#F5F2ED] hover:text-ink font-sans text-[10px] tracking-widest uppercase font-bold rounded-none transition-all border border-gold/15 cursor-pointer shrink-0"
                      >
                        Apply Changes
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {adminMessage && (
                <div className="mt-4 p-3 rounded-none bg-gold/10 text-gold text-xs border border-gold/30 text-center font-bold">
                  {adminMessage}
                </div>
              )}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
