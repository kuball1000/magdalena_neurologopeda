import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const Offer = () => {
  const services = [
    {
      title: "Diagnoza Neurologopedyczna",
      desc: "Kompleksowa ocena funkcji mowy, połykania oraz budowy aparatu artykulacyjnego.",
      details: ["Badanie odruchów", "Ocena wędzidełka", "Ocena napięcia mięśniowego"]
    },
    {
      title: "Terapia Logopedyczna",
      desc: "Indywidualne zajęcia dla dzieci z wadami wymowy, ORM oraz trudnościami w komunikacji.",
      details: ["Korekcja wad wymowy", "Rozwijanie słownictwa", "Ćwiczenia oddechowe"]
    },
    {
      title: "Terapia Osób z ASD",
      desc: "Specjalistyczne podejście do dzieci ze spektrum autyzmu, wspierające komunikację.",
      details: ["Metody alternatywne (AAC)", "Trening umiejętności społecznych", "Wsparcie rodziny"]
    },
    {
      title: "Terapia Miofunkcjonalna",
      desc: "Praca nad prawidłową pozycją spoczynkową języka, połykaniem i oddychaniem.",
      details: ["Przygotowanie do leczenia orto", "Ćwiczenia mięśni twarzy", "Korekta połykania"]
    },
    {
      title: "Terapia Afazji",
      desc: "Rehabilitacja mowy po udarach, urazach mózgu oraz w przypadkach afazji dziecięcej.",
      details: ["Odbudowa systemu językowego", "Ćwiczenia rozumienia", "Funkcjonalna komunikacja"]
    },
    {
      title: "Terapia Ręki",
      desc: "Usprawnianie motoryki małej, co bezpośrednio wpływa na rozwój ośrodka mowy w mózgu.",
      details: ["Ćwiczenia manualne", "Stymulacja czuciowa", "Poprawa grafomotoryki"]
    }
  ];

  return (
    <section className="py-20 bg-brand-light-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-brand-dark mb-4">Oferta i Usługi</h2>
          <div className="w-20 h-1 bg-brand-sage mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferuję kompleksowe wsparcie w zakresie diagnozy i terapii. Każde spotkanie dostosowane jest indywidualnie do potrzeb pacjenta.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <h3 className="text-xl font-bold text-brand-dark mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed min-h-[60px]">{service.desc}</p>
              <ul className="space-y-2">
                {service.details.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                    <CheckCircle2 size={16} className="text-brand-sage flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
            <p className="text-gray-500 italic">
                * Cennik usług ustalany jest indywidualnie po wstępnej konsultacji.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Offer;
