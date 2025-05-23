import React from "react";
import { motion } from "framer-motion";
import { QuoteIcon, Star, StarHalf } from "lucide-react";
import { testimonials } from "@/lib/constants";

const TestimonialsSection: React.FC = () => {
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

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-neutral mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Отзиви на пациенти
          </motion.h2>
          <motion.p 
            className="text-lg text-neutral/70 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Вижте какво казват нашите пациенти за своя опит с нас.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-secondary rounded-xl p-8 shadow"
              variants={itemVariants}
            >
              <div className="text-primary mb-4">
                <QuoteIcon className="h-8 w-8 opacity-30" />
              </div>
              <p className="text-neutral/80 mb-6">{testimonial.text}</p>
              <div className="flex items-center">
                <div className="text-amber-400 mr-2 flex">
                  {[...Array(testimonial.fullStars)].map((_, i) => (
                    <Star key={i} className="fill-current" size={16} />
                  ))}
                  {testimonial.hasHalfStar && (
                    <StarHalf className="fill-current" size={16} />
                  )}
                </div>
                <div className="font-medium">{testimonial.name}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
