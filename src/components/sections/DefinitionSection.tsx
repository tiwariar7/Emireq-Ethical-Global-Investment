import { motion } from 'framer-motion';
import { Target, Eye, Scale, TrendingUp } from 'lucide-react';

const DefinitionSection = () => {
  const values = [
    {
      icon: Target,
      title: 'Purpose-Driven',
      description: 'Every investment decision is guided by measurable positive impact alongside financial returns.',
      color: 'bg-accent/10 text-accent',
    },
    {
      icon: Eye,
      title: 'Fully Transparent',
      description: 'See exactly where your money goes, with clear reporting on fees, holdings, and impact metrics.',
      color: 'bg-secondary/10 text-secondary',
    },
    {
      icon: Scale,
      title: 'Rigorously Screened',
      description: 'Multi-layer ESG screening ensures only genuinely ethical companies make the cut.',
      color: 'bg-success/10 text-success',
    },
    {
      icon: TrendingUp,
      title: 'Growth Focused',
      description: 'Ethical investing doesn\'t mean sacrificing returns. We optimize for long-term wealth creation.',
      color: 'bg-emireq-purple/10 text-emireq-purple',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
            What We Stand For
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Ethical Investment,
            <br />
            <span className="text-secondary">Redefined</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Emireq isn't just another investment platform. We're building a new standard for how 
            capital should flow—toward companies and projects that create genuine positive change 
            while delivering competitive returns.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-lg transition-all duration-300 group"
              whileHover={{ y: -4 }}
            >
              <div className={`w-14 h-14 rounded-xl ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <value.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 bg-gradient-to-br from-primary to-secondary rounded-3xl p-12 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '£500M+', label: 'Assets Under Management' },
              { value: '15,000+', label: 'Active Investors' },
              { value: '0.75%', label: 'Total Annual Fee' },
              { value: '12.4%', label: '5-Year Avg. Return' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/70">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DefinitionSection;
