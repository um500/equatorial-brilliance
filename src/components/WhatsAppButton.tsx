import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '+971000000000'; // Replace with actual number
  const message = 'Hello! I would like to inquire about your IT services.';
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      className="floating-btn bottom-24 right-4 bg-[#25D366] text-white hover:shadow-[0_0_20px_rgba(37,211,102,0.5)]"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} />
    </motion.a>
  );
};

export default WhatsAppButton;
