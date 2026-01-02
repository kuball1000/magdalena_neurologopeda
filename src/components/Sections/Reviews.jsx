import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: "Anna Nowak",
      text: "Pani Magdalena ma wspaniałe podejście do dzieci. Mój synek chętnie chodzi na zajęcia, a postępy widać z tygodnia na tydzień. Polecam z całego serca!",
    },
    {
      name: "Katarzyna Kowalska",
      text: "Profesjonalizm i ogromna wiedza. Diagnoza była trafna, a terapia przynosi efekty. Bardzo ciepła i empatyczna osoba.",
    },
    {
      name: "Tomasz Wiśniewski",
      text: "Jesteśmy bardzo zadowoleni z terapii miofunkcjonalnej. Pani Magda potrafi zmotywować do ćwiczeń nawet najbardziej oporne dziecko :)",
    }
  ];

  return (
    <section className="py-20 bg-brand-beige/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-brand-dark mb-4">Opinie Pacjentów</h2>
          <div className="w-20 h-1 bg-brand-sage mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm relative pt-12"
            >
              <Quote className="absolute top-6 left-6 text-brand-sage/20 w-10 h-10" />
              <p className="text-gray-600 mb-6 italic relative z-10 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-sage/20 rounded-full flex items-center justify-center text-brand-sage font-bold">
                  {review.name.charAt(0)}
                </div>
                <span className="font-bold text-brand-dark">{review.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
