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
  firstName: z.string().min(2, { message: "Името трябва да е поне 2 символа" }),
  lastName: z.string().min(2, { message: "Фамилията трябва да е поне 2 символа" }),
  email: z.string().email({ message: "Моля, въведете валиден имейл адрес" }),
  phone: z.string().min(10, { message: "Моля, въведете валиден телефонен номер" }),
  reason: z.string({ required_error: "Моля, изберете причина за посещението" }),
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
        title: "Заявката е изпратена",
        description: "Получихме вашата заявка за час и ще се свържем с вас скоро.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/appointments"] });
    } catch (error) {
      toast({
        title: "Възникна грешка",
        description: "Имаше грешка при изпращането на вашата заявка. Моля, опитайте отново.",
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
            Свържете се с нас
          </motion.h2>
          <motion.p 
            className="text-lg text-neutral/70 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ние сме тук, за да отговорим на вашите въпроси и да планираме вашите посещения. Свържете се с нас по начина, който е най-удобен за вас.
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
              <h3 className="text-2xl font-bold mb-6 text-neutral">Запишете час</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-neutral/70">Име</FormLabel>
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
                          <FormLabel className="text-neutral/70">Фамилия</FormLabel>
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
                        <FormLabel className="text-neutral/70">Имейл адрес</FormLabel>
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
                        <FormLabel className="text-neutral/70">Телефонен номер</FormLabel>
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
                        <FormLabel className="text-neutral/70">Причина за посещението</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary">
                              <SelectValue placeholder="Изберете причина" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="new-consultation">Консултация на нов пациент</SelectItem>
                            <SelectItem value="follow-up">Последващ преглед</SelectItem>
                            <SelectItem value="ecg">ЕКГ или стрес тест</SelectItem>
                            <SelectItem value="medication">Преглед на медикаменти</SelectItem>
                            <SelectItem value="emergency">Спешен сърдечен проблем</SelectItem>
                            <SelectItem value="other">Друго</SelectItem>
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
                        <FormLabel className="text-neutral/70">Допълнителна информация</FormLabel>
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
                    {isSubmitting ? "Изпращане..." : "Заявете час"}
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
              <h3 className="text-2xl font-bold mb-6 text-neutral">Информация за офиса</h3>
              <div className="space-y-6">
                <div className="flex">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral">Локация</h4>
                    <p className="text-neutral/70">гр. Левски, ул. "Н. Вапцаров" №5</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <PhoneCall className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral">Телефон</h4>
                    <p className="text-neutral/70">Основен: (02) 123-4567<br />Спешен: (02) 555-1234</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral">Имейл</h4>
                    <p className="text-neutral/70">appointments@drjohnsoncardiology.com<br />info@drjohnsoncardiology.com</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <FileText className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral">Пациентски портал</h4>
                    <p className="text-neutral/70">Достъп до вашите медицински записи и резултати от изследвания чрез нашия сигурен пациентски портал.</p>
                    <a href="#" className="text-primary font-medium hover:text-primary/80 transition-colors">Вход в портала</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden h-80">
              <Map 
                address="гр. Левски, ул. Н. Вапцаров 5, България" 
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
