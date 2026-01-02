import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';

const Certificates = () => {
  const certs = [
    { year: "2025", title: "System aparatów miofunkcjonalnych w terapii logopedycznej oraz ortodoncji funkcjonalnej", issuer: "Alicja Kopertyńska, Discurso" },
    { year: "2024", title: "Miogopedia - praktyczna terapia miofunkcjonalna", issuer: "Aleksandra Rosińska, Łódź LogopedyczneSOS" },
    { year: "2024", title: "Od wady zgryzu do dysfunkcji narządowych i mięśniowo-szkieletowych", issuer: "Marian Majchrzycki, Warszawa ODNOVA" },
    { year: "2024", title: "Stawy Skroniowo-Żuchwowe - diagnostyka i leczenie", issuer: "Dominika Kłębłowska, Bydgoszcz ODNOVA" },
    { year: "2023", title: "Terapia manualna w gabinecie logopedy", issuer: "Marian Majchrzycki, Poznań ODNOVA" },
    { year: "2023", title: "Integracja bilateralna - program szkolny", issuer: "Jacek Szmalec, Toruń" },
    { year: "2023", title: "Strategiczna metoda usprawniania realizacji fonemów w dyslalii obwodowej SMURF", issuer: "Danuta Pluta-Wojciechowska, Gdańsk Neurosensus" },
    { year: "2022", title: "Niedokształcenie mowy o typie afazji - diagnoza i terapia KOJD-AFA", issuer: "Anna Paluch i Elżbieta Drewniak-Wołosz, Bydgoszcz Afalog" },
    { year: "2022", title: "Terapia dziecięcej apraksji mowy, ORM, afazji według zasad motorycznego uczenia się", issuer: "Ewa Grzelak, Bydgoszcz Afalog" },
    { year: "2019", title: "Terapia ręki I i II stopnia. Diagnoza, terapia, warsztat", issuer: "Emilia Mikołajewska, Bydgoszcz" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-brand-dark mb-4">Szkolenia i Certyfikaty</h2>
          <div className="w-20 h-1 bg-brand-sage mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
             Stale podnoszę swoje kwalifikacje, aby zapewnić pacjentom opiekę zgodną z najnowszą wiedzą medyczną.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="flex gap-4 p-6 rounded-xl border border-gray-100 hover:border-brand-sage/30 hover:bg-brand-sage/5 transition-all group"
            >
              <div className="flex-shrink-0 mt-1">
                 <BadgeCheck className="text-brand-sage group-hover:text-brand-dark transition-colors" />
              </div>
              <div>
                <span className="text-xs font-bold text-brand-sage bg-brand-sage/10 px-2 py-1 rounded mb-2 inline-block">
                  {cert.year}
                </span>
                <h3 className="text-lg font-bold text-brand-dark leading-tight mb-2">{cert.title}</h3>
                <p className="text-sm text-gray-500">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
