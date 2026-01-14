import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import RiskTransparencyDial from '../components/sections/RiskTransparencyDial';
import { riskProfiles } from '../data/riskData';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
    g: ({ children, ...props }: any) => <g {...props}>{children}</g>,
    path: ({ children, ...props }: any) => <path {...props}>{children}</path>,
    line: ({ children, ...props }: any) => <line {...props}>{children}</line>,
    circle: ({ children, ...props }: any) => <circle {...props}>{children}</circle>,
  },
  AnimatePresence: ({ children }: any) => children,
}));

describe('RiskTransparencyDial', () => {
  it('should render with default balanced profile', () => {
    render(<RiskTransparencyDial />);

    expect(screen.getByText('Risk Transparency')).toBeTruthy();
    expect(screen.getByText('Balanced')).toBeTruthy();
  });

  it('should change portfolio allocation when risk level changes', async () => {
    render(<RiskTransparencyDial />);

    const growthButton = screen.getByText('Growth');
    fireEvent.click(growthButton);

    await waitFor(() => {
      expect(screen.getByText('95% / 5%')).toBeTruthy();
    });
  });

  it('should show risk details on hover', async () => {
    render(<RiskTransparencyDial />);

    const riskElement = screen.getByText('Market Risk');
    fireEvent.mouseEnter(riskElement);

    await waitFor(() => {
      expect(screen.getByText(/Mitigation:/)).toBeTruthy();
    });
  });

  it('should display correct risk metrics for each profile', () => {
    render(<RiskTransparencyDial />);

    // Check balanced profile metrics
    expect(screen.getByText('85% / 15%')).toBeTruthy();

    // Change to growth profile
    const growthButton = screen.getByText('Growth');
    fireEvent.click(growthButton);

    expect(screen.getByText('95% / 5%')).toBeTruthy();
  });

  it('should render risk severity indicators', () => {
    render(<RiskTransparencyDial />);

    // Should have multiple risk severity dots
    const severityDots = document.querySelectorAll('[class*="rounded-full"]');
    expect(severityDots.length).toBeGreaterThan(0);
  });
});