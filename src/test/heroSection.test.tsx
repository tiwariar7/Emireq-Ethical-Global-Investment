import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import HeroSection from '../components/sections/HeroSection';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  },
}));

// Mock lucide-react icons
vi.mock('lucide-react', () => ({
  Shield: () => <div data-testid="shield-icon" />,
  Award: () => <div data-testid="award-icon" />,
  Check: () => <div data-testid="check-icon" />,
  ChevronDown: () => <div data-testid="chevron-down-icon" />,
}));

describe('HeroSection', () => {
  it('should render the main heading', () => {
    render(<HeroSection />);

    expect(screen.getByText('Emireq')).toBeTruthy();
    expect(screen.getByText('Ethical Global Investment')).toBeTruthy();
  });

  it('should render the main description', () => {
    render(<HeroSection />);

    expect(screen.getByText(/Invest with clarity, transparency, and measurable impact/)).toBeTruthy();
    expect(screen.getByText(/No hidden agendas/)).toBeTruthy();
  });

  it('should render trust badges', () => {
    render(<HeroSection />);

    expect(screen.getByText('FCA Regulated')).toBeTruthy();
    expect(screen.getByText('B-Corp Certified')).toBeTruthy();
    expect(screen.getByText('ESG Verified')).toBeTruthy();
  });

  it('should render call-to-action buttons', () => {
    render(<HeroSection />);

    expect(screen.getByText('Start Investing')).toBeTruthy();
    expect(screen.getByText('See How It Works')).toBeTruthy();
  });

  it('should render trust badge icons', () => {
    render(<HeroSection />);

    expect(screen.getByTestId('shield-icon')).toBeTruthy();
    expect(screen.getByTestId('award-icon')).toBeTruthy();
    expect(screen.getByTestId('check-icon')).toBeTruthy();
  });

  it('should render scroll indicator', () => {
    render(<HeroSection />);

    expect(screen.getByText('Explore')).toBeTruthy();
    expect(screen.getByTestId('chevron-down-icon')).toBeTruthy();
  });
});