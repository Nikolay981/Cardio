import React, { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { MapPin, PhoneCall, Mail, FileText } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { apiRequest } from "@/lib/queryClient";
import { useQueryClient } from "@tanstack/react-query";
import Map from "@/components/ui/map";

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  reason: z.string({ required_error: "Please select a reason for your visit" }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      reason: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/appointment", data);
      toast({
        title: "Appointment requested",
        description: "We've received your appointment request and will contact you shortly.",
        variant: "success",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/appointments"] });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "There was an error submitting your appointment request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-neutral mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h2>
          <motion.p 
            className="text-lg text-neutral/70 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We're here to answer your questions and schedule your appointments. Reach out to us in the way that's most convenient for you.
          </motion.p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-neutral">Schedule an Appointment</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-neutral/70">First Name</FormLabel>
                          <FormControl>
                            <Input {...field} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-neutral/70">Last Name</FormLabel>
                          <FormControl>
                            <Input {...field} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-neutral/70">Email Address</FormLabel>
                        <FormControl>
                          <Input {...field} type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-neutral/70">Phone Number</FormLabel>
                        <FormControl>
                          <Input {...field} type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="reason"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-neutral/70">Reason for Visit</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary">
                              <SelectValue placeholder="Select a reason" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="new-consultation">New Patient Consultation</SelectItem>
                            <SelectItem value="follow-up">Follow-up Appointment</SelectItem>
                            <SelectItem value="ecg">ECG or Stress Test</SelectItem>
                            <SelectItem value="medication">Medication Review</SelectItem>
                            <SelectItem value="emergency">Urgent Cardiac Concern</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-neutral/70">Additional Information</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            rows={4} 
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    className="w-full bg-primary text-white font-medium py-3 px-6 rounded-lg hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Request Appointment"}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-neutral">Office Information</h3>
              <div className="space-y-6">
                <div className="flex">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral">Location</h4>
                    <p className="text-neutral/70">123 Heartcare Avenue, Suite 400<br />Metropolis, CA 90210</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <PhoneCall className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral">Phone</h4>
                    <p className="text-neutral/70">Main: (555) 123-4567<br />Urgent: (800) 555-1234</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral">Email</h4>
                    <p className="text-neutral/70">appointments@drjohnsoncardiology.com<br />info@drjohnsoncardiology.com</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <FileText className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral">Patient Portal</h4>
                    <p className="text-neutral/70">Access your records and test results through our secure patient portal.</p>
                    <a href="#" className="text-primary font-medium hover:text-primary/80 transition-colors">Login to Portal</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden h-80">
              <Map 
                address="123 Heartcare Avenue, Metropolis, CA 90210" 
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
