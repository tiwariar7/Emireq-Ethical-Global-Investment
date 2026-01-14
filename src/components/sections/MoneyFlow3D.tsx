import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { portfolioAllocation, type Sector } from '@/data/portfolioData';
import { Wind, Heart, Leaf, GraduationCap, Shield } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import MoneyFlow2D from './MoneyFlow2D';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'wind': Wind,
  'heart': Heart,
  'leaf': Leaf,
  'graduation-cap': GraduationCap,
  'shield': Shield,
};

const MoneyFlow3D = () => {
  const [hoveredSector, setHoveredSector] = useState<string | null>(null);
  const sectors = portfolioAllocation.balanced.sectors;
  const isMobile = useIsMobile();

  // Use 2D fallback on mobile devices
  if (isMobile) {
    return <MoneyFlow2D />;
  }

  return (
    <section id="money-flow" className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            How Your Capital Moves
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch your investment flow through sectors making real-world positive impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Visual Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-primary/5 to-secondary/10 border border-border flex items-center justify-center"
          >
            <div className="relative w-80 h-80">
              {/* Circular visualization */}
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {sectors.map((sector, index) => {
                  const startAngle = sectors.slice(0, index).reduce((acc, s) => acc + s.allocation * 360, 0);
                  const endAngle = startAngle + sector.allocation * 360;
                  const midAngle = (startAngle + endAngle) / 2;
                  const isHovered = hoveredSector === sector.id;
                  
                  const startRad = (startAngle - 90) * Math.PI / 180;
                  const endRad = (endAngle - 90) * Math.PI / 180;
                  const largeArc = sector.allocation > 0.5 ? 1 : 0;
                  
                  const outerR = isHovered ? 85 : 80;
                  const innerR = 50;
                  
                  const x1 = 100 + outerR * Math.cos(startRad);
                  const y1 = 100 + outerR * Math.sin(startRad);
                  const x2 = 100 + outerR * Math.cos(endRad);
                  const y2 = 100 + outerR * Math.sin(endRad);
                  const x3 = 100 + innerR * Math.cos(endRad);
                  const y3 = 100 + innerR * Math.sin(endRad);
                  const x4 = 100 + innerR * Math.cos(startRad);
                  const y4 = 100 + innerR * Math.sin(startRad);
                  
                  const path = `M ${x1} ${y1} A ${outerR} ${outerR} 0 ${largeArc} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerR} ${innerR} 0 ${largeArc} 0 ${x4} ${y4} Z`;
                  
                  return (
                    <motion.path
                      key={sector.id}
                      d={path}
                      fill={sector.color}
                      opacity={isHovered ? 1 : 0.85}
                      className="cursor-pointer transition-all duration-300"
                      onMouseEnter={() => setHoveredSector(sector.id)}
                      onMouseLeave={() => setHoveredSector(null)}
                      whileHover={{ scale: 1.02 }}
                      style={{ filter: isHovered ? 'drop-shadow(0 4px 12px rgba(0,0,0,0.2))' : 'none' }}
                    />
                  );
                })}
                <circle cx="100" cy="100" r="45" fill="hsl(var(--background))" />
                <text x="100" y="95" textAnchor="middle" className="fill-primary font-serif text-lg font-bold">100%</text>
                <text x="100" y="112" textAnchor="middle" className="fill-muted-foreground text-xs">Allocated</text>
              </svg>
            </div>
          </motion.div>

          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-card rounded-2xl shadow-lg border border-border"
          >
            <h3 className="text-2xl font-serif font-semibold text-secondary mb-6">
              Portfolio Breakdown
            </h3>
            <div className="space-y-4">
              {sectors.map((sector) => {
                const IconComponent = iconMap[sector.icon] || Shield;
                const isActive = hoveredSector === sector.id;
                
                return (
                  <motion.div
                    key={sector.id}
                    className={`p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'ring-2 ring-accent bg-accent/5 shadow-md'
                        : 'bg-muted/50 hover:bg-muted'
                    }`}
                    onMouseEnter={() => setHoveredSector(sector.id)}
                    onMouseLeave={() => setHoveredSector(null)}
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${sector.color}20` }}
                      >
                        <IconComponent className="w-5 h-5" style={{ color: sector.color }} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-foreground">{sector.name}</span>
                          <span className="font-bold text-primary">{(sector.allocation * 100).toFixed(0)}%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="w-full bg-border rounded-full h-2 mb-3">
                      <motion.div
                        className="h-2 rounded-full"
                        style={{ backgroundColor: sector.color }}
                        initial={{ width: 0 }}
                        animate={{ width: `${sector.allocation * 100}%` }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                    </div>
                    
                    <AnimatePresence>
                      {isActive && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-sm text-muted-foreground space-y-1 pl-4 overflow-hidden"
                        >
                          {sector.activities.map((activity, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: sector.color }} />
                              {activity}
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MoneyFlow3D;
