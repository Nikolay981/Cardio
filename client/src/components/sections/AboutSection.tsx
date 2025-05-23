import React from "react";
import { motion } from "framer-motion";
import { UserCircle2, Award, GraduationCap } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="w-full md:w-1/2 order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral mb-6">За Д-р Ася Янакиева</h2>
            <p className="text-lg text-neutral/70 mb-6">
              Д-р Ася Янакиева е сертифициран кардиолог с над 15 години опит в диагностицирането и лечението на сърдечни заболявания. Тя е завършила медицинското си образование в Медицински Университет Плевен, след което е специализирала в УМБАЛ Плевен и е била стипендиант по Кардиология в Университетската болница.
            </p>
            <p className="text-lg text-neutral/70 mb-8">
              Д-р Янакиева се специализира в превантивна кардиология и грижа за женското сърдечно здраве. Нейният подход, насочен към пациента, се фокусира върху персонализирани планове за грижи, които включват най-новите лечения, базирани на доказателства, като същевременно отчитат уникалните обстоятелства на всеки пациент.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <UserCircle2 className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Сертифициран</h4>
                  <p className="text-sm text-neutral/70">Американски борд по кардиология</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Award className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">15+ Години</h4>
                  <p className="text-sm text-neutral/70">Клиничен опит</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <GraduationCap className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Медицински Университет Плевен</h4>
                  <p className="text-sm text-neutral/70">Медицинска степен</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-5/12 order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=800" 
              alt="Портрет на Д-р Сара Джонсън" 
              className="rounded-lg shadow-xl h-auto max-w-full object-cover" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
