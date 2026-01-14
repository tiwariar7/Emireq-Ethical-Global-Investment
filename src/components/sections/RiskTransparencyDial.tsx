import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { riskProfiles, riskFactors } from '@/data/riskData';
import { AlertTriangle, Shield, TrendingUp, Info } from 'lucide-react';

type ProfileKey = 'cautious' | 'balanced' | 'growth';

const RiskTransparencyDial = () => {
  const [selectedProfile, setSelectedProfile] = useState<ProfileKey>('balanced');
  const [hoveredRisk, setHoveredRisk] = useState<string | null>(null);

  const currentProfile = riskProfiles[selectedProfile];
  const marketRisks = riskFactors.filter(r => r.category === 'market');
  const ethicalRisks = riskFactors.filter(r => r.category === 'ethical');

  const profileConfig = {
    cautious: { 
      angle: -40, 
      icon: Shield, 
      color: 'bg-success',
      description: 'Lower volatility, steady growth focus'
    },
    balanced: { 
      angle: 0, 
      icon: TrendingUp, 
      color: 'bg-secondary',
      description: 'Optimal risk-return balance'
    },
    growth: { 
      angle: 40, 
      icon: AlertTriangle, 
      color: 'bg-warning',
      description: 'Higher potential, more volatility'
    },
  };

  const riskMetrics = [
    { label: 'Market Volatility', value: currentProfile.marketVolatility },
    { label: 'Concentration Risk', value: currentProfile.concentrationRisk },
    { label: 'Impact Potential', value: currentProfile.impactPotential },
    { label: 'Income Stability', value: currentProfile.incomeStability },
  ];

  return (
    <section id="risk" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Risk Transparency
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Adjust your risk tolerance to see how it affects portfolio composition and potential returns.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Interactive Dial Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-card rounded-2xl shadow-lg border border-border p-8">
              {/* Profile Selector */}
              <div className="flex justify-center gap-4 mb-8">
                {(Object.keys(riskProfiles) as ProfileKey[]).map((key) => {
                  const config = profileConfig[key];
                  const IconComponent = config.icon;
                  const isActive = key === selectedProfile;
                  
                  return (
                    <motion.button
                      key={key}
                      onClick={() => setSelectedProfile(key)}
                      className={`relative flex flex-col items-center gap-2 p-6 rounded-xl transition-all ${
                        isActive
                          ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                          : 'bg-muted hover:bg-muted/80 text-foreground'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <IconComponent className="w-6 h-6" />
                      <span className="font-semibold">{riskProfiles[key].name}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-accent rounded-full"
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* Dial Visualization */}
              <div className="relative h-48 mb-8">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Dial Arc */}
                  <svg width="300" height="150" viewBox="0 0 300 150" className="overflow-visible">
                    {/* Background Arc */}
                    <path
                      d="M 30 140 A 120 120 0 0 1 270 140"
                      fill="none"
                      stroke="hsl(var(--muted))"
                      strokeWidth="20"
                      strokeLinecap="round"
                    />
                    {/* Gradient Arc */}
                    <defs>
                      <linearGradient id="dialGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(var(--success))" />
                        <stop offset="50%" stopColor="hsl(var(--secondary))" />
                        <stop offset="100%" stopColor="hsl(var(--warning))" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 30 140 A 120 120 0 0 1 270 140"
                      fill="none"
                      stroke="url(#dialGradient)"
                      strokeWidth="20"
                      strokeLinecap="round"
                      opacity="0.3"
                    />
                    
                    {/* Needle */}
                    <motion.g
                      animate={{ rotate: profileConfig[selectedProfile].angle }}
                      transition={{ type: 'spring', stiffness: 80, damping: 15 }}
                      style={{ transformOrigin: '150px 140px' }}
                    >
                      <line
                        x1="150"
                        y1="140"
                        x2="150"
                        y2="50"
                        stroke="hsl(var(--primary))"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                      <circle
                        cx="150"
                        cy="140"
                        r="12"
                        fill="hsl(var(--primary))"
                      />
                      <circle
                        cx="150"
                        cy="50"
                        r="8"
                        fill="hsl(var(--accent))"
                        className="animate-pulse"
                      />
                    </motion.g>
                  </svg>
                </div>
              </div>

              {/* Portfolio Impact */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedProfile}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-muted/50 rounded-xl p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-foreground text-lg">
                      {currentProfile.name} Portfolio
                    </h4>
                    <span className="text-sm text-muted-foreground">
                      {profileConfig[selectedProfile].description}
                    </span>
                  </div>
                  
                  {/* Equity/Bond Ratio */}
                  <div className="mb-6">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">Equity / Bond Mix</span>
                      <span className="font-bold text-primary">
                        {currentProfile.equityBondRatio.equity}% / {currentProfile.equityBondRatio.bond}%
                      </span>
                    </div>
                    <div className="w-full h-3 bg-border rounded-full overflow-hidden flex">
                      <motion.div
                        className="h-full bg-gradient-to-r from-secondary to-accent"
                        animate={{ width: `${currentProfile.equityBondRatio.equity}%` }}
                        transition={{ duration: 0.5 }}
                      />
                      <motion.div
                        className="h-full bg-muted-foreground/30"
                        animate={{ width: `${currentProfile.equityBondRatio.bond}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>

                  {/* Risk Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {riskMetrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <div className="text-sm text-muted-foreground mb-1">{metric.label}</div>
                        <div className="flex justify-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              className={`w-2 h-6 rounded-sm ${
                                i < metric.value ? 'bg-secondary' : 'bg-border'
                              }`}
                              initial={{ scaleY: 0 }}
                              animate={{ scaleY: 1 }}
                              transition={{ delay: i * 0.05 }}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Risk Details Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Market Risks */}
            <div className="bg-card rounded-2xl shadow-lg border border-border p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-warning" />
                Market Risks
              </h3>
              <div className="space-y-3">
                {marketRisks.map((risk) => (
                  <motion.div
                    key={risk.id}
                    className={`p-4 rounded-lg cursor-pointer transition-all ${
                      hoveredRisk === risk.id
                        ? 'bg-warning/10 ring-1 ring-warning/30'
                        : 'bg-muted/50 hover:bg-muted'
                    }`}
                    onMouseEnter={() => setHoveredRisk(risk.id)}
                    onMouseLeave={() => setHoveredRisk(null)}
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-foreground">{risk.name}</h4>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full ${
                              i < risk.severity ? 'bg-warning' : 'bg-border'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <AnimatePresence>
                      {hoveredRisk === risk.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm text-muted-foreground mb-2">{risk.description}</p>
                          <div className="flex items-start gap-2 text-xs">
                            <Info className="w-3 h-3 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-accent">{risk.mitigation}</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Ethical Risks */}
            <div className="bg-card rounded-2xl shadow-lg border border-border p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-accent" />
                Ethical-Specific Risks
              </h3>
              <div className="space-y-3">
                {ethicalRisks.map((risk) => (
                  <motion.div
                    key={risk.id}
                    className={`p-4 rounded-lg cursor-pointer transition-all ${
                      hoveredRisk === risk.id
                        ? 'bg-accent/10 ring-1 ring-accent/30'
                        : 'bg-muted/50 hover:bg-muted'
                    }`}
                    onMouseEnter={() => setHoveredRisk(risk.id)}
                    onMouseLeave={() => setHoveredRisk(null)}
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-foreground">{risk.name}</h4>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full ${
                              i < risk.severity ? 'bg-accent' : 'bg-border'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <AnimatePresence>
                      {hoveredRisk === risk.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm text-muted-foreground mb-2">{risk.description}</p>
                          <div className="flex items-start gap-2 text-xs">
                            <Info className="w-3 h-3 text-secondary mt-0.5 flex-shrink-0" />
                            <span className="text-secondary">{risk.mitigation}</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RiskTransparencyDial;
