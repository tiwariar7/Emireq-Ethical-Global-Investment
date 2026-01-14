import { motion } from 'framer-motion';
import { Wind, Heart, Leaf, Shield } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Mission', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
    ],
    resources: [
      { label: 'Investment Guide', href: '#' },
      { label: 'Risk Disclosure', href: '#' },
      { label: 'Fee Structure', href: '#' },
      { label: 'FAQs', href: '#' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Regulatory Info', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                <span className="text-accent-foreground font-serif font-bold text-xl">E</span>
              </div>
              <span className="font-serif text-2xl font-bold text-primary-foreground">
                Emireq
              </span>
            </motion.div>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Ethical global investing with clarity, transparency, and measurable impact. 
              No hidden agendas—just honest capital allocation.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                <Wind className="w-5 h-5 text-accent" />
              </div>
              <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                <Heart className="w-5 h-5 text-emireq-coral" />
              </div>
              <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                <Leaf className="w-5 h-5 text-success" />
              </div>
              <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                <Shield className="w-5 h-5 text-muted-foreground" />
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/60 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/60 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/60 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {currentYear} Emireq. All rights reserved.
          </p>
          <p className="text-primary-foreground/50 text-sm text-center md:text-right max-w-lg">
            Investment involves risk. Past performance is not a guarantee of future results. 
            Please read all risk disclosures before investing.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
