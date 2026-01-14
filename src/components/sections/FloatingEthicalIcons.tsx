import { motion } from 'framer-motion';
import { Wind, Heart, Leaf, GraduationCap, Shield, Globe, Sun, Droplets, TreeDeciduous, Users } from 'lucide-react';
import { useMemo } from 'react';

interface FloatingEthicalIconsProps {
  count?: number;
}

const iconComponents = [Wind, Heart, Leaf, GraduationCap, Shield, Globe, Sun, Droplets, TreeDeciduous, Users];
const iconColors = [
  'text-accent',
  'text-emireq-coral',
  'text-success',
  'text-emireq-purple',
  'text-muted-foreground',
  'text-secondary',
  'text-warning',
  'text-accent',
  'text-success',
  'text-secondary'
];

const FloatingEthicalIcons = ({ count = 12 }: FloatingEthicalIconsProps) => {
  const icons = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const IconComponent = iconComponents[i % iconComponents.length];
      const color = iconColors[i % iconColors.length];
      
      // Distribute icons across the screen
      const left = 5 + Math.random() * 90;
      const top = 10 + Math.random() * 80;
      const size = 16 + Math.random() * 24;
      const duration = 15 + Math.random() * 20;
      const delay = Math.random() * 5;
      
      return {
        id: i,
        Icon: IconComponent,
        color,
        style: {
          left: `${left}%`,
          top: `${top}%`,
          width: `${size}px`,
          height: `${size}px`,
        },
        duration,
        delay,
      };
    });
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ id, Icon, color, style, duration, delay }) => (
        <motion.div
          key={id}
          className="absolute opacity-20"
          style={style}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.1, 0.25, 0.1],
            scale: [1, 1.1, 1],
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon className={`w-full h-full ${color}`} />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingEthicalIcons;
