import React from "react";
import { motion } from "framer-motion";
import doctorImage from "../../assets/doctor.jpg";

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative bg-gradient-to-r from-primary/95 to-primary py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="w-full md:w-1/2 text-white mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Модерни грижи за сърцето с личен подход</h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Специализирани кардиологични грижи, съобразени с вашите уникални нужди от Д-р Ася Янакиева, сертифициран кардиолог.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#contact" 
                className="bg-white text-primary font-medium px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all text-center"
              >
                Запишете час
              </a>
              <a 
                href="#hours" 
                className="bg-transparent border-2 border-white text-white font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition-all text-center"
              >
                Работно време
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src={doctorImage} 
              alt="Д-р Ася Янакиева, Кардиолог" 
              className="rounded-lg shadow-2xl h-auto w-64 md:w-80" 
            />
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto fill-current text-white">
          <path d="M0,64L80,58.7C160,53,320,43,480,53.3C640,64,800,96,960,96C1120,96,1280,64,1360,48L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
