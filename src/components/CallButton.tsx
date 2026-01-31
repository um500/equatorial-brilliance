import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const CallButton = () => {
  const phoneNumber = '+971000000000';

  return (
    <motion.a
      href={`tel:${phoneNumber}`}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
      className="floating-btn bottom-6 right-4 bg-primary text-primary-foreground"
      aria-label="Call us"
    >
      <Phone size={20} />
    </motion.a>
  );
};

export default CallButton;
