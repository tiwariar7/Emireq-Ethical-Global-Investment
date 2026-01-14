import { motion } from 'framer-motion';
import { portfolioAllocation, type Sector } from '@/data/portfolioData';
import { Wind, Heart, Leaf, GraduationCap, Shield } from 'lucide-react';

const MotionDiv = motion.div as any;

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'wind': Wind,
  'heart': Heart,
  'leaf': Leaf,
  'graduation-cap': GraduationCap,
  'shield': Shield,
};

const MoneyFlow2D = () => {
  const sectors = portfolioAllocation.balanced.sectors;

  return (
    <section className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-6">
        <MotionDiv
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
        </MotionDiv>

        <div className="max-w-4xl mx-auto">
          {/* Simplified 2D Flow Visualization */}
          <MotionDiv
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-64 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 rounded-2xl p-8 mb-8 overflow-hidden"
          >
            {/* Flowing particles animation */}
            <div className="absolute inset-0">
              {Array.from({ length: 20 }).map((_, i) => (
                <MotionDiv
                  key={i}
                  className="absolute w-2 h-2 bg-accent rounded-full opacity-60"
                  initial={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    left: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                    top: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            {/* Central hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground font-bold text-sm">100%</span>
              </div>
              <p className="text-xs text-center mt-2 text-muted-foreground">Allocated</p>
            </div>
          </MotionDiv>

          {/* Sector List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, index) => {
              const IconComponent = iconMap[sector.icon] || Shield;

              return (
                <MotionDiv
                  key={sector.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${sector.color}20` }}
                    >
                      <IconComponent className="w-6 h-6" style={{ color: sector.color }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{sector.name}</h3>
                      <p className="text-2xl font-bold text-primary">
                        {(sector.allocation * 100).toFixed(0)}%
                      </p>
                    </div>
                  </div>

                  <div className="w-full bg-border rounded-full h-2 mb-4">
                    <MotionDiv
                      className="h-2 rounded-full"
                      style={{ backgroundColor: sector.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${sector.allocation * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>

                  <ul className="text-sm text-muted-foreground space-y-1">
                    {sector.activities.slice(0, 2).map((activity, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: sector.color }} />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </MotionDiv>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoneyFlow2D;