import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Award, Check, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FloatingEthicalIcons from './FloatingEthicalIcons';

const TrustBadges = () => {
  const badges = [
    { icon: Shield, label: 'FCA Regulated', color: 'text-accent' },
    { icon: Award, label: 'B-Corp Certified', color: 'text-success' },
    { icon: Check, label: 'ESG Verified', color: 'text-secondary' },
  ];

  return (
    <motion.div 
      className="flex flex-wrap justify-center gap-6 mt-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
    >
      {badges.map((badge, index) => (
        <motion.div
          key={badge.label}
          className="glass px-5 py-3 rounded-full flex items-center gap-2 shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 + index * 0.1 }}
          whileHover={{ scale: 1.05, y: -2 }}
        >
          <badge.icon className={`w-5 h-5 ${badge.color}`} />
          <span className="text-sm font-medium text-foreground">{badge.label}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-background via-background to-muted"
    >
      {/* 3D Background Elements */}
      <FloatingEthicalIcons count={12} />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10 min-h-screen flex flex-col justify-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={childVariants} className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold tracking-wide">
              Ethical Global Investment
            </span>
          </motion.div>
          
          <motion.h1 
            variants={childVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-primary mb-6 tracking-tight"
          >
            Emireq
          </motion.h1>
          
          <motion.p 
            variants={childVariants}
            className="text-xl md:text-2xl text-foreground/80 font-serif mb-4"
          >
            Invest with clarity, transparency, and measurable impact.
          </motion.p>
          
          <motion.p 
            variants={childVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            No hidden agendas. Just honest capital allocation that aligns profit with purpose.
          </motion.p>
          
          <motion.div 
            variants={childVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground px-8 py-6 text-lg shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
            >
              Start Investing
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary/30 text-primary hover:bg-primary/5 px-8 py-6 text-lg"
            >
              See How It Works
            </Button>
          </motion.div>
          
          <TrustBadges />
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 cursor-pointer"
          >
            <span className="text-sm text-muted-foreground">Explore</span>
            <div className="w-8 h-12 border-2 border-secondary/50 rounded-full flex justify-center p-2">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <ChevronDown className="w-4 h-4 text-secondary" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
