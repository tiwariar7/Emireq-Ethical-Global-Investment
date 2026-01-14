// Number and currency formatters
export const formatCurrency = (amount: number, currency: string = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

export const formatPercentage = (value: number, decimals: number = 1): string => {
  return `${(value * 100).toFixed(decimals)}%`;
};

export const formatNumber = (num: number, options?: Intl.NumberFormatOptions): string => {
  return new Intl.NumberFormat('en-US', options).format(num);
};

// Date formatters
export const formatDate = (date: Date | string, options?: Intl.DateTimeFormatOptions): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options
  }).format(dateObj);
};

// Text formatters
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const titleCase = (str: string): string => {
  return str.split(' ').map(capitalize).join(' ');
};

export const truncate = (str: string, maxLength: number, suffix: string = '...'): string => {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - suffix.length) + suffix;
};

// Portfolio specific formatters
export const formatAllocation = (allocation: number): string => {
  return formatPercentage(allocation, 1);
};

export const formatFee = (fee: number): string => {
  return formatPercentage(fee, 2);
};

export const formatRiskLevel = (level: number): string => {
  const levels = ['Very Low', 'Low', 'Medium', 'High', 'Very High'];
  return levels[Math.min(Math.max(Math.floor(level) - 1, 0), levels.length - 1)];
};

// Color utilities for data visualization
export const getColorForValue = (value: number, min: number, max: number): string => {
  const normalized = (value - min) / (max - min);
  const hue = (1 - normalized) * 120; // Green to red
  return `hsl(${hue}, 70%, 50%)`;
};