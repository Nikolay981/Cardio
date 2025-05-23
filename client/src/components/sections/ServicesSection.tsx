import React from "react";
import { motion } from "framer-motion";
import { Stethoscope, Heart, HeartPulse, Pill, Apple, FileText } from "lucide-react";
import { services } from "@/lib/constants";

const ServicesSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const getIcon = (icon: string) => {
    switch(icon) {
      case 'stethoscope':
        return <Stethoscope className="text-primary text-2xl" />;
      case 'heartbeat':
        return <HeartPulse className="text-primary text-2xl" />;
      case 'heart':
        return <Heart className="text-primary text-2xl" />;
      case 'pills':
        return <Pill className="text-primary text-2xl" />;
      case 'apple':
        return <Apple className="text-primary text-2xl" />;
      case 'file-medical':
        return <FileText className="text-primary text-2xl" />;
      default:
        return <Heart className="text-primary text-2xl" />;
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-neutral mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Нашите Кардиологични Услуги
          </motion.h2>
          <motion.p 
            className="text-lg text-neutral/70 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Всеобхватни сърдечно-съдови грижи, използващи най-новите диагностични и лечебни технологии за поддържане на сърцето ви здраво.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl"
              variants={itemVariants}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-bold mb-3 text-neutral">{service.title}</h3>
              <p className="text-neutral/70">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
