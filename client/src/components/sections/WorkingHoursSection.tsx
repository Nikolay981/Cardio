import React from "react";
import { motion } from "framer-motion";
import { Clock, Info, Check, AlertCircle, Phone } from "lucide-react";
import { workingHours, specialNotes } from "@/lib/constants";
import { Card } from "@/components/ui/card";

const WorkingHoursSection: React.FC = () => {
  return (
    <section id="hours" className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-neutral mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Работно Време
            </motion.h2>
            <motion.p 
              className="text-lg text-neutral/70"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Предлагаме гъвкаво насрочване на часове, за да отговорим на нуждите на нашите пациенти. Възможни са и часове за същия ден при спешни сърдечни проблеми.
            </motion.p>
          </div>
          
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8 md:p-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 md:border-r border-gray-200 md:pr-8 mb-8 md:mb-0">
                <h3 className="text-xl font-semibold mb-6 flex items-center text-neutral">
                  <Clock className="text-primary mr-3" /> Редовно Работно Време
                </h3>
                <div className="grid grid-cols-[1fr_auto] gap-x-8 gap-y-2 text-lg">
                  {workingHours.map((day, index) => (
                    <React.Fragment key={index}>
                      <div className="font-medium">{day.day}</div>
                      <div className="text-neutral/70">{day.hours}</div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              
              <div className="w-full md:w-1/2 md:pl-8">
                <h3 className="text-xl font-semibold mb-6 flex items-center text-neutral">
                  <Info className="text-primary mr-3" /> Специални Часове и Бележки
                </h3>
                <ul className="space-y-4 text-neutral/70">
                  {specialNotes.map((note, index) => (
                    <li className="flex" key={index}>
                      {note.type === 'info' ? (
                        <Check className="text-success mt-1 mr-3 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="text-accent mt-1 mr-3 flex-shrink-0" />
                      )}
                      <div>
                        <span className="font-medium text-neutral block">{note.title}</span>
                        {note.description}
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <a href="#contact" className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
                    Запишете час
                    <svg className="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-12 bg-white rounded-xl shadow-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Phone className="text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-neutral">Нужда от спешна сърдечна помощ?</h4>
                <p className="text-neutral/70">Обадете се на нашата приоритетна линия за незабавна помощ</p>
              </div>
            </div>
            <a href="tel:+18005551234" className="bg-accent text-white font-medium px-5 py-3 rounded-lg hover:bg-accent/90 transition-colors whitespace-nowrap">
              (800) 555-1234
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkingHoursSection;
