import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;
const MotionButton = motion.button as any;
import { useState } from 'react';
import { audienceMatrix, type AudienceSegment } from '@/data/audienceData';
import { Users, TrendingUp, Target, Award } from 'lucide-react';

const AudienceMatrix = () => {
  const [selectedSegment, setSelectedSegment] = useState<AudienceSegment | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section id="audience" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-6">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Who We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Understanding our diverse audience helps us deliver tailored ethical investment solutions.
          </p>
          </MotionDiv>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Matrix Visualization */}
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-card rounded-2xl shadow-lg border border-border p-8">
              <h3 className="text-2xl font-serif font-semibold text-secondary mb-6 text-center">
                Audience Matrix
              </h3>

              {/* Matrix Grid */}
              <div className="relative h-96 bg-muted/30 rounded-lg p-4">
                {/* Grid lines */}
                <div className="absolute inset-4 grid grid-cols-4 grid-rows-4">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="border border-border/20" />
                  ))}
                </div>

                {/* Axes labels */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-sm text-muted-foreground">
                  {audienceMatrix.axes.x.low} ← {audienceMatrix.axes.x.name} → {audienceMatrix.axes.x.high}
                </div>
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2 -rotate-90 text-sm text-muted-foreground whitespace-nowrap origin-center">
                  {audienceMatrix.axes.y.low} ← {audienceMatrix.axes.y.name} → {audienceMatrix.axes.y.high}
                </div>

                {/* Audience segments */}
                {audienceMatrix.segments.map((segment) => (
                  <MotionButton
                    key={segment.id}
                    className={`absolute w-4 h-4 rounded-full border-2 border-white shadow-lg transition-all ${
                      selectedSegment?.id === segment.id
                        ? 'scale-150 shadow-xl'
                        : 'hover:scale-125'
                    }`}
                    style={{
                      left: `${segment.position.x}%`,
                      top: `${segment.position.y}%`,
                      backgroundColor: segment.color,
                      transform: 'translate(-50%, -50%)'
                    }}
                    onClick={() => setSelectedSegment(segment)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>

              {/* Legend */}
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#6C757D]" />
                  <span>Traditional Investors</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#05BFDB]" />
                  <span>Millennial Conscious</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF6B6B]" />
                  <span>Gen Z Activists</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#A3B763]" />
                  <span>Corporate Leaders</span>
                </div>
              </div>
            </div>
            </MotionDiv>
          {/* Segment Details */}
          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {selectedSegment ? (
              <MotionDiv
                key={selectedSegment.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card rounded-2xl shadow-lg border border-border p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${selectedSegment.color}20` }}
                  >
                    <Users className="w-6 h-6" style={{ color: selectedSegment.color }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-foreground">
                      {selectedSegment.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {selectedSegment.size}% of our audience
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{selectedSegment.description}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      Characteristics
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {selectedSegment.characteristics.map((char, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          {char}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Motivations
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {selectedSegment.motivations.map((motivation, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {motivation}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </MotionDiv>
            ) : (
              <MotionDiv
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-muted/50 rounded-2xl p-8 text-center"
              >
                <Award className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  Select an Audience Segment
                </h3>
                <p className="text-muted-foreground">
                  Click on any point in the matrix to learn more about that audience segment.
                </p>
              </MotionDiv>
            )}

            {/* Summary Stats */}
            <MotionDiv
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {audienceMatrix.segments.slice(0, 4).map((segment) => (
                <MotionDiv
                  key={segment.id}
                  variants={itemVariants}
                  className="bg-card rounded-lg p-4 border border-border text-center"
                >
                  <div className="text-2xl font-bold text-primary mb-1">
                    {segment.size}%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {segment.name.split(' ')[0]}
                  </div>
                </MotionDiv>
              ))}
            </MotionDiv>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default AudienceMatrix;