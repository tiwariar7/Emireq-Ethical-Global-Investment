export interface RiskFactor {
  id: string;
  category: 'market' | 'ethical' | 'operational';
  name: string;
  description: string;
  mitigation: string;
  severity: number;
  color: string;
}

export const riskFactors: RiskFactor[] = [
  {
    id: "market-risk",
    category: "market",
    name: "Market Risk",
    description: "The value of investments can fall due to broad economic downturns, interest-rate changes, or geopolitical events.",
    mitigation: "Broad global diversification across sectors and regions; long-term horizon to smooth volatility.",
    severity: 3,
    color: "#FFD93D"
  },
  {
    id: "currency-risk",
    category: "market",
    name: "Currency Risk",
    description: "Fluctuations in foreign exchange rates may affect the value of international investments.",
    mitigation: "Natural hedging through geographic diversification and selective currency hedging strategies.",
    severity: 2,
    color: "#FFD93D"
  },
  {
    id: "concentration-risk",
    category: "ethical",
    name: "Concentration Risk",
    description: "Heavy ethical screening can reduce diversification, potentially concentrating exposure in fewer sectors.",
    mitigation: "Our positive screening actively builds a diversified portfolio across multiple high-impact themes.",
    severity: 2,
    color: "#05BFDB"
  },
  {
    id: "greenwashing-risk",
    category: "ethical",
    name: "Greenwashing Risk",
    description: "Companies may overstate their environmental or social credentials, leading to misallocation.",
    mitigation: "Rigorous due diligence process with independent third-party verification of ESG claims.",
    severity: 2,
    color: "#05BFDB"
  },
  {
    id: "liquidity-risk",
    category: "operational",
    name: "Liquidity Risk",
    description: "Some ethical investments may be less liquid than mainstream alternatives.",
    mitigation: "Maintaining 5% liquidity buffer and investing primarily in publicly traded securities.",
    severity: 1,
    color: "#A3B763"
  }
];

export interface RiskProfile {
  name: string;
  equityBondRatio: { equity: number; bond: number };
  sectorAdjustments: { sector: string; change: number }[];
  marketVolatility: number;
  concentrationRisk: number;
  impactPotential: number;
  incomeStability: number;
}

export const riskProfiles: Record<'cautious' | 'balanced' | 'growth', RiskProfile> = {
  cautious: {
    name: "Cautious",
    equityBondRatio: { equity: 70, bond: 30 },
    sectorAdjustments: [
      { sector: "Renewable Energy", change: -10 },
      { sector: "Liquidity Reserve", change: +10 }
    ],
    marketVolatility: 2,
    concentrationRisk: 2,
    impactPotential: 2,
    incomeStability: 4
  },
  balanced: {
    name: "Balanced",
    equityBondRatio: { equity: 85, bond: 15 },
    sectorAdjustments: [],
    marketVolatility: 3,
    concentrationRisk: 3,
    impactPotential: 3,
    incomeStability: 3
  },
  growth: {
    name: "Growth",
    equityBondRatio: { equity: 95, bond: 5 },
    sectorAdjustments: [
      { sector: "Renewable Energy & Tech", change: +10 },
      { sector: "Liquidity Reserve", change: -5 }
    ],
    marketVolatility: 4,
    concentrationRisk: 4,
    impactPotential: 4,
    incomeStability: 2
  }
};
