import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-brand-dark mb-4"
          >
            O mnie
          </motion.h2>
          <div className="w-20 h-1 bg-brand-sage mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif font-semibold mb-6 flex items-center gap-3">
              <Briefcase className="text-brand-sage" />
              Doświadczenie
            </h3>
            <div className="space-y-8 border-l-2 border-brand-beige pl-8 relative">
              {[
                { place: "Przedszkole Koci Łapci w Toruniu", role: "Logopeda", date: "2023 - obecnie", desc: "Terapia dzieci z zaburzeniami rozwojowym, ORM, niedosłuch, afazja." },
                { place: "Przedszkole Słoneczko w Toruniu", role: "Logopeda", date: "2024 - obecnie", desc: "Terapia indywidualna i grupowa, ORM, dyslalia." },
                { place: "Fundacja Dorotkowo w Toruniu", role: "Neurologopeda", date: "2024 - obecnie", desc: "Indywidualna terapia neurologopedyczna." },
                 { place: "Fundacja Arkadia w Toruniu", role: "Logopeda", date: "2024 - obecnie", desc: "Trening komunikacyjny i poznawczy dla dzieci i młodzieży." },
                 { place: "Pracownia Wspierania Rozwoju AiM", role: "Pedagog, Neurologopeda", date: "2019 - 2024", desc: "Diagnoza i terapia dla dzieci z różnymi zaburzeniami." }
              ].map((job, index) => (
                <div key={index} className="relative">
                  <span className="absolute -left-[41px] top-1 w-5 h-5 bg-brand-sage rounded-full border-4 border-white"></span>
                  <h4 className="font-bold text-lg text-brand-dark">{job.place}</h4>
                  <p className="text-sm text-brand-sage font-medium mb-1">{job.date}</p>
                  <p className="text-gray-600 font-medium">{job.role}</p>
                  <p className="text-gray-500 text-sm mt-1">{job.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
             <h3 className="text-2xl font-serif font-semibold mb-6 flex items-center gap-3">
              <GraduationCap className="text-brand-sage" />
              Wykształcenie
            </h3>
            <div className="space-y-6">
               <div className="bg-brand-beige/30 p-6 rounded-xl border border-brand-beige hover:border-brand-sage transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-brand-dark">Wyższa Szkoła Nauk o Zdrowiu w Toruniu</h4>
                  <span className="text-sm font-medium bg-white px-2 py-1 rounded shadow-sm">2023 - 2025</span>
                </div>
                <p className="text-gray-700">Diagnoza, edukacja i terapia osób z zaburzeniami ze spektrum autyzmu</p>
                <p className="text-sm text-gray-500 mt-1">Studia podyplomowe</p>
              </div>

               <div className="bg-brand-beige/30 p-6 rounded-xl border border-brand-beige hover:border-brand-sage transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-brand-dark">Uniwersytet Mikołaja Kopernika w Toruniu</h4>
                  <span className="text-sm font-medium bg-white px-2 py-1 rounded shadow-sm">2021 - 2022</span>
                </div>
                <p className="text-gray-700">Neurologopedia</p>
                <p className="text-sm text-gray-500 mt-1">Studia podyplomowe</p>
              </div>

              <div className="bg-brand-beige/30 p-6 rounded-xl border border-brand-beige hover:border-brand-sage transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-brand-dark">Wyższa Szkoła Bankowa w Toruniu</h4>
                  <span className="text-sm font-medium bg-white px-2 py-1 rounded shadow-sm">2017 - 2019</span>
                </div>
                <p className="text-gray-700">Logopedia</p>
                <p className="text-sm text-gray-500 mt-1">Studia podyplomowe</p>
              </div>

               <div className="bg-brand-beige/30 p-6 rounded-xl border border-brand-beige hover:border-brand-sage transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-brand-dark">Uniwersytet Mikołaja Kopernika w Toruniu</h4>
                  <span className="text-sm font-medium bg-white px-2 py-1 rounded shadow-sm">2008 - 2013</span>
                </div>
                <p className="text-gray-700">Pedagogika</p>
                <p className="text-sm text-gray-500 mt-1">Magister (Resocjalizacja, Edukacja Dorosłych)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
