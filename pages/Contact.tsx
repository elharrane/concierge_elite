import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyDetails: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you. A concierge specialist will contact you shortly.");
  };

  return (
    <div className="pt-24 pb-16">
       <div className="container mx-auto px-6">
         <div className="text-center mb-16">
            <h4 className="text-gold-600 uppercase tracking-widest font-semibold text-sm mb-3">{t('contact.label')}</h4>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-black mb-6">{t('contact.title')}</h1>
            <p className="text-neutral-600 max-w-2xl mx-auto text-lg font-light">
              {t('contact.desc')}
            </p>
         </div>

         <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
           {/* Contact Info */}
           <div className="lg:w-1/3 space-y-10">
             <div>
               <h3 className="font-serif text-2xl font-bold mb-6">{t('contact.info.title')}</h3>
               <div className="space-y-6">
                 <div className="flex items-start">
                   <Phone className="text-gold-600 mt-1 me-4" size={24} />
                   <div>
                     <p className="font-bold text-black uppercase text-sm tracking-wider mb-1">{t('contact.info.phone')}</p>
                     <p className="text-neutral-600">+1 (555) 123-4567</p>
                     <p className="text-neutral-400 text-sm mt-1">Mon-Fri, 9am - 6pm EST</p>
                   </div>
                 </div>
                 <div className="flex items-start">
                   <Mail className="text-gold-600 mt-1 me-4" size={24} />
                   <div>
                     <p className="font-bold text-black uppercase text-sm tracking-wider mb-1">{t('contact.info.email')}</p>
                     <p className="text-neutral-600">hello@conciergeelite.com</p>
                     <p className="text-neutral-400 text-sm mt-1">24/7 Support for Partners</p>
                   </div>
                 </div>
                 <div className="flex items-start">
                   <MapPin className="text-gold-600 mt-1 me-4" size={24} />
                   <div>
                     <p className="font-bold text-black uppercase text-sm tracking-wider mb-1">{t('contact.info.hq')}</p>
                     <p className="text-neutral-600">100 Luxury Ave, Suite 500</p>
                     <p className="text-neutral-600">New York, NY 10001</p>
                   </div>
                 </div>
               </div>
             </div>

             {/* Map Placeholder */}
             <div className="w-full h-64 bg-neutral-200 rounded-sm relative overflow-hidden grayscale">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1645564756836!5m2!1sen!2sus" 
                 width="100%" 
                 height="100%" 
                 style={{border:0}} 
                 loading="lazy"
                 title="map"
               ></iframe>
             </div>
           </div>

           {/* Form */}
           <div className="lg:w-2/3 bg-white p-8 md:p-12 shadow-lg border border-neutral-100">
             <form onSubmit={handleSubmit} className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">{t('contact.form.name')}</label>
                   <input 
                     type="text" 
                     id="name" 
                     name="name"
                     required
                     value={formData.name}
                     onChange={handleChange}
                     className="w-full border-b border-neutral-300 py-3 text-black focus:outline-none focus:border-gold-600 transition-colors bg-transparent"
                     placeholder="John Doe"
                   />
                 </div>
                 <div>
                   <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">{t('contact.form.email')}</label>
                   <input 
                     type="email" 
                     id="email" 
                     name="email"
                     required
                     value={formData.email}
                     onChange={handleChange}
                     className="w-full border-b border-neutral-300 py-3 text-black focus:outline-none focus:border-gold-600 transition-colors bg-transparent"
                     placeholder="john@example.com"
                   />
                 </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">{t('contact.form.phone')}</label>
                   <input 
                     type="tel" 
                     id="phone" 
                     name="phone"
                     value={formData.phone}
                     onChange={handleChange}
                     className="w-full border-b border-neutral-300 py-3 text-black focus:outline-none focus:border-gold-600 transition-colors bg-transparent"
                     placeholder="+1 (555) 000-0000"
                   />
                 </div>
                 <div>
                   <label htmlFor="propertyDetails" className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">{t('contact.form.location')}</label>
                   <input 
                     type="text" 
                     id="propertyDetails" 
                     name="propertyDetails"
                     value={formData.propertyDetails}
                     onChange={handleChange}
                     className="w-full border-b border-neutral-300 py-3 text-black focus:outline-none focus:border-gold-600 transition-colors bg-transparent"
                     placeholder="e.g. Manhattan, NY"
                   />
                 </div>
               </div>

               <div>
                 <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">{t('contact.form.message')}</label>
                 <textarea 
                   id="message" 
                   name="message"
                   rows={4}
                   value={formData.message}
                   onChange={handleChange}
                   className="w-full border-b border-neutral-300 py-3 text-black focus:outline-none focus:border-gold-600 transition-colors bg-transparent resize-none"
                   placeholder="..."
                 ></textarea>
               </div>

               <div className="pt-4">
                 <Button type="submit" className="w-full md:w-auto">
                   {t('contact.form.send')}
                 </Button>
               </div>
             </form>
           </div>
         </div>
       </div>
    </div>
  );
};