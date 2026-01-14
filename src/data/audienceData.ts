export interface AudienceSegment {
  id: string;
  name: string;
  description: string;
  size: number; // percentage of total audience
  characteristics: string[];
  painPoints: string[];
  motivations: string[];
  color: string;
  position: { x: number; y: number }; // For matrix positioning
}

export const audienceSegments: AudienceSegment[] = [
  {
    id: 'traditional-investors',
    name: 'Traditional Investors',
    description: 'Conservative investors focused on financial returns',
    size: 35,
    characteristics: ['Age 50+', 'High net worth', 'Risk averse', 'Long-term horizon'],
    painPoints: ['Lack of transparency', 'High fees', 'Limited impact options'],
    motivations: ['Capital preservation', 'Steady returns', 'Tax efficiency'],
    color: '#6C757D',
    position: { x: 20, y: 80 }
  },
  {
    id: 'millennial-conscious',
    name: 'Millennial Conscious Consumers',
    description: 'Young professionals who want to align money with values',
    size: 28,
    characteristics: ['Age 25-40', 'Middle income', 'Socially aware', 'Tech-savvy'],
    painPoints: ['Greenwashing concerns', 'Complex investment options', 'Limited accessibility'],
    motivations: ['Social impact', 'Environmental change', 'Personal values alignment'],
    color: '#05BFDB',
    position: { x: 70, y: 60 }
  },
  {
    id: 'gen-z-activists',
    name: 'Gen Z Activists',
    description: 'Young activists demanding systemic change through investments',
    size: 20,
    characteristics: ['Age 18-24', 'Student/early career', 'Highly engaged', 'Digital natives'],
    painPoints: ['Entry barriers', 'Lack of education', 'Trust issues with finance'],
    motivations: ['Climate action', 'Social justice', 'Future generations'],
    color: '#FF6B6B',
    position: { x: 85, y: 30 }
  },
  {
    id: 'corporate-sustainability',
    name: 'Corporate Sustainability Officers',
    description: 'Business leaders implementing ESG strategies',
    size: 12,
    characteristics: ['Corporate executives', 'ESG focused', 'Large portfolios', 'Influential'],
    painPoints: ['Measuring impact', 'Regulatory compliance', 'Stakeholder alignment'],
    motivations: ['Brand reputation', 'Risk management', 'Long-term value creation'],
    color: '#A3B763',
    position: { x: 60, y: 85 }
  },
  {
    id: 'family-offices',
    name: 'Family Offices',
    description: 'Multi-generational wealth management with ethical considerations',
    size: 5,
    characteristics: ['Ultra-high net worth', 'Multi-generational', 'Sophisticated', 'Philanthropic'],
    painPoints: ['Legacy preservation', 'Family governance', 'Impact measurement'],
    motivations: ['Family values', 'Intergenerational equity', 'Sustainable wealth'],
    color: '#9368B7',
    position: { x: 40, y: 90 }
  }
];

export const audienceMatrix = {
  axes: {
    x: {
      name: 'Investment Experience',
      low: 'Novice',
      high: 'Expert'
    },
    y: {
      name: 'Impact Priority',
      low: 'Financial Focus',
      high: 'Impact Focus'
    }
  },
  segments: audienceSegments
};