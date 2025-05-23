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
            <h2 className="text-3xl md:text-4xl font-bold text-neutral mb-6">About Dr. Sarah Johnson</h2>
            <p className="text-lg text-neutral/70 mb-6">
              Dr. Sarah Johnson is a board-certified cardiologist with over 15 years of experience in diagnosing and treating heart conditions. She completed her medical degree at Harvard Medical School, followed by residency at Massachusetts General Hospital and a fellowship in Cardiology at Cleveland Clinic.
            </p>
            <p className="text-lg text-neutral/70 mb-8">
              Dr. Johnson specializes in preventive cardiology and women's heart health. Her patient-centered approach focuses on personalized care plans that incorporate the latest evidence-based treatments while considering each patient's unique circumstances.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <UserCircle2 className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Board Certified</h4>
                  <p className="text-sm text-neutral/70">American Board of Cardiology</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Award className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">15+ Years</h4>
                  <p className="text-sm text-neutral/70">Clinical Experience</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <GraduationCap className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Harvard Medical School</h4>
                  <p className="text-sm text-neutral/70">Medical Degree</p>
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
              alt="Portrait of Dr. Sarah Johnson" 
              className="rounded-lg shadow-xl h-auto max-w-full object-cover" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
