import { Service, WorkingHour, SpecialNote, Testimonial } from "./types";

export const services: Service[] = [
  {
    title: "Кардиологична консултация",
    description: "Всеобхватна оценка на здравето на сърцето ви с персонализирани планове за лечение и препоръки.",
    icon: "stethoscope"
  },
  {
    title: "ЕКГ и стрес тестове",
    description: "Съвременна електрокардиограма и стрес тестове за оценка на сърдечната функция и диагностициране на състояния.",
    icon: "heartbeat"
  },
  {
    title: "Ехокардиография",
    description: "Модерно сърдечно изследване за визуализиране на структурата и функцията на сърцето с ултразвукова технология.",
    icon: "heart"
  },
  {
    title: "Управление на медикаменти",
    description: "Текущо проследяване и корекция на сърдечните лекарства за оптимизиране на ефективността на лечението.",
    icon: "pills"
  },
  {
    title: "Съвети за начин на живот",
    description: "Персонализирани насоки за диета, упражнения и промени в начина на живот за подобряване на здравето на сърцето.",
    icon: "apple"
  },
  {
    title: "Оценка на сърдечния риск",
    description: "Всеобхватна оценка на рисковите фактори за сърцето с персонализирани превантивни стратегии.",
    icon: "file-medical"
  }
];

export const workingHours: WorkingHour[] = [
  { day: "Понеделник", hours: "Затворено" },
  { day: "Вторник", hours: "8:00 - 18:30" },
  { day: "Сряда", hours: "Затворено" },
  { day: "Четвъртък", hours: "15:00 - 20:00" },
  { day: "Петък", hours: "Затворено" },
  { day: "Събота", hours: "Затворено" },
  { day: "Неделя", hours: "Затворено" }
];

export const specialNotes: SpecialNote[] = [
  {
    title: "Вторник - Амбулаторни прегледи",
    description: "8:00 - 18:30 часа",
    type: "info"
  },
  {
    title: "Четвъртък - Летница",
    description: "15:00 - 20:00 часа",
    type: "info"
  },
  {
    title: "Предварително записване",
    description: "Необходимо е предварително записване за час",
    type: "info"
  },
  {
    title: "Празнично разписание",
    description: "Моля, обадете се за промени в работното време по време на празници",
    type: "warning"
  }
];

export const testimonials: Testimonial[] = [
  {
    text: "Д-р Янакиева отдели време да изслуша всичките ми притеснения. Тя обясни състоянието ми и възможностите за лечение ясно, карайки ме да се чувствам комфортно през целия процес.",
    name: "Роберт М.",
    fullStars: 5,
    hasHalfStar: false
  },
  {
    text: "След няколко несигурни посещения другаде, д-р Янакиева диагностицира състоянието ми бързо. Нейният опит и състрадателен подход направиха трудния период много по-лесен за преодоляване.",
    name: "Дженифър К.",
    fullStars: 5,
    hasHalfStar: false
  },
  {
    text: "Аз съм пациент от над 5 години. Д-р Янакиева винаги е в крак с най-новите сърдечни лечения и има холистичен подход към грижите ми. Силно препоръчвам!",
    name: "Давид Т.",
    fullStars: 4,
    hasHalfStar: true
  }
];
