import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const CallButton = () => {
  const phoneNumber = '+971000000000'; // Replace with actual number

  return (
    <motion.a
      href={`tel:${phoneNumber}`}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
      className="floating-btn bottom-6 right-4 gradient-primary text-primary-foreground hover:glow"
      aria-label="Call us"
    >
      <Phone size={24} />
    </motion.a>
  );
};

export default CallButton;
