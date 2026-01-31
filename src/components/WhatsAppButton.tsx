import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '+971000000000';
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
      className="floating-btn bottom-20 right-4 bg-[#25D366] text-white"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={22} />
    </motion.a>
  );
};

export default WhatsAppButton;
