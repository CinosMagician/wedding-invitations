import { motion } from 'framer-motion';
import ContactForm from "../ContactForm";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact topGap">
      <motion.h1
        className="text-center con"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.2 }}
      >
        Want to hire me?
      </motion.h1>
      <motion.p
        className="text-center mediaP"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.4 }}
      >
        If your interested to hire me or even have a chat with me, please leave your name, email and message below or directly email me at: <a>lachyhughes@bigpond.com</a>
      </motion.p>
      <ContactForm />
    </div>
  );
}
