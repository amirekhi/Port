import { motion } from 'framer-motion';
import { FiX, } from 'react-icons/fi';
import { HiMenu } from 'react-icons/hi';
interface CloseButtonProps {
  onClick: () => void;
  isOpen: boolean; // You can control the state of the button (open or close)
}

export default function Closebutton({ onClick, isOpen }: CloseButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ rotate: 90, scale: 1.1, borderRadius: '50%' }}
      whileTap={{ scale: 0.9 }}
      initial={{ borderRadius: '10%' }}  // Start as square
      transition={{ duration: 0.3 }}
      className="p-1 bg-stone-200 hover:bg-gradient-to-r light:bg-purple-400 light:text-white from-indigo-300 to-purple-300 text-black transition-colors"
      aria-label={isOpen ? "Close" : "Open"}
    >
      {/* Toggle between close (FiX) and open (FiPlus) icons */}
      {isOpen ? <FiX className="w-5 h-5" /> : < HiMenu  className="w-6 h-6" />}
    </motion.button>
  );
}

