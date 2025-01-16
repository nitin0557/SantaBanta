import React, { useRef, useState } from 'react';
import './tooltip.css';

type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

interface TooltipProps {
  children: React.ReactNode;
  text: string;
  position?: TooltipPosition; 
}

const Tooltip: React.FC<TooltipProps> = ({ children, text, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      <div
        ref={tooltipRef}
        className={`tooltip tooltip-${position} ${isVisible ? 'visible' : ''}`}
      >
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
