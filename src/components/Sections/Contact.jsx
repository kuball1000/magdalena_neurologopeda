import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // NOTE: Requires EmailJS Service ID, Template ID, and Public Key
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    
    // Simulating success for now
    setTimeout(() => {
        setStatus('success');
        form.current.reset();
    }, 1500);

    /* 
    emailjs.sendForm('service_id', 'template_id', form.current, 'public_key')
      .then((result) => {
          setStatus('success');
          form.current.reset();
      }, (error) => {
          setStatus('error');
      });
    */
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
         <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-brand-dark mb-4">Kontakt</h2>
          <div className="w-20 h-1 bg-brand-sage mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600">
            Masz pytania? Chcesz umówić wizytę?<br/> Zapraszam do kontaktu telefonicznego lub przez formularz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 self-center">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 bg-brand-sage/10 rounded-full flex items-center justify-center text-brand-sage shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-dark mb-1">Telefon</h3>
                <a href="tel:572911659" className="text-brand-sage text-lg hover:underline font-medium">572 911 659</a>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 bg-brand-sage/10 rounded-full flex items-center justify-center text-brand-sage shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-dark mb-1">Email</h3>
                <a href="mailto:magdalena_chlebowicz@wp.pl" className="text-brand-sage text-lg hover:underline font-medium break-all">magdalena_chlebowicz@wp.pl</a>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 bg-brand-sage/10 rounded-full flex items-center justify-center text-brand-sage shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-dark mb-1">Gabinet</h3>
                <p className="text-gray-600 text-lg">ul. Konopackich 7a/5<br/>87-100 Toruń</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-brand-light-gray p-8 rounded-2xl shadow-sm border border-gray-100"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Imię i nazwisko</label>
                <input type="text" name="user_name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-sage focus:border-transparent outline-none transition-all" placeholder="Twoje imię" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" name="user_email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-sage focus:border-transparent outline-none transition-all" placeholder="twoj@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Wiadomość</label>
                <textarea name="message" required rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-sage focus:border-transparent outline-none transition-all" placeholder="Treść wiadomości..."></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="w-full py-4 bg-brand-sage text-white rounded-lg font-bold hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Wysyłanie...' : status === 'success' ? 'Wysłano!' : 'Wyślij wiadomość'}
                {!status && <Send size={18} />}
              </button>
              
               {status === 'success' && (
                <p className="text-green-600 text-sm text-center mt-2">Dziękuję! Odezwie się najszybciej jak to możliwe.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
