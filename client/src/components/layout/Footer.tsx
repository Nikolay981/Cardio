import React from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import { workingHours } from "@/lib/constants";

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <div className="text-accent mr-2">
                <i className="fas fa-heartbeat text-2xl"></i>
              </div>
              <div>
                <h2 className="text-xl font-bold">Dr. Sarah Johnson</h2>
                <p className="text-sm text-white/70">Cardiology Specialist</p>
              </div>
            </div>
            <p className="text-white/70 mb-6">
              Providing compassionate cardiac care with cutting-edge treatments for optimal heart health.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-white/70 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors">
                  About Dr. Johnson
                </a>
              </li>
              <li>
                <a href="#hours" className="text-white/70 hover:text-white transition-colors">
                  Office Hours
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">
                  Cardiac Consultation
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">
                  ECG & Stress Tests
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">
                  Echocardiography
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">
                  Medication Management
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">
                  Cardiac Risk Assessment
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Office Hours</h3>
            <ul className="space-y-3 text-white/70">
              <li className="flex justify-between">
                <span>Monday - Thursday</span>
                <span>8:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Friday</span>
                <span>8:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 1:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Dr. Sarah Johnson Cardiology. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/70 text-sm hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/70 text-sm hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/70 text-sm hover:text-white transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
