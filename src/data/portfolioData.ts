export const portfolioAllocation = {
  balanced: {
    sectors: [
      { 
        id: "renewable",
        name: "Renewable Energy & Efficiency", 
        allocation: 0.45, 
        color: "#05BFDB",
        icon: "wind",
        activities: [
          "Solar/wind farms",
          "Green building tech",
          "Energy-smart grid infrastructure"
        ]
      },
      { 
        id: "healthcare",
        name: "Healthcare Innovation", 
        allocation: 0.25, 
        color: "#FF6B6B",
        icon: "heart",
        activities: [
          "Affordable medicines",
          "Medical access in emerging markets",
          "Ethical biotech research"
        ]
      },
      { 
        id: "agriculture",
        name: "Sustainable Agriculture", 
        allocation: 0.15, 
        color: "#A3B763",
        icon: "leaf",
        activities: [
          "Regenerative farming",
          "Clean water technology",
          "Reduced-waste supply chains"
        ]
      },
      { 
        id: "education",
        name: "Education Technology", 
        allocation: 0.10, 
        color: "#9368B7",
        icon: "graduation-cap",
        activities: [
          "Ed-tech for underserved communities",
          "Digital literacy platforms",
          "Vocational training programs"
        ]
      },
      { 
        id: "liquidity",
        name: "Liquidity Reserve", 
        allocation: 0.05, 
        color: "#6C757D",
        icon: "shield",
        activities: [
          "High-grade green bonds",
          "Cash equivalents",
          "Market stability buffer"
        ]
      }
    ],
    geographic: [
      { region: "North America", percentage: 50, coordinates: [-100, 40] },
      { region: "Europe", percentage: 30, coordinates: [15, 54] },
      { region: "Asia-Pacific", percentage: 15, coordinates: [110, 30] },
      { region: "Other Regions", percentage: 5, coordinates: [20, -20] }
    ]
  }
};

export const feeStructure = {
  total: 0.75,
  breakdown: [
    { name: "Platform & Management", value: 0.45, description: "Portfolio construction, monitoring, and reporting" },
    { name: "Underlying Fund Costs", value: 0.25, description: "Average Total Expense Ratio (TER)" },
    { name: "Custody & Administration", value: 0.05, description: "Third-party bank custody services" }
  ]
};

export type Sector = typeof portfolioAllocation.balanced.sectors[number];
