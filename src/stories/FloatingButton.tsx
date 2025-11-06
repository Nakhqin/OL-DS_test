import React from 'react';

import './floating-button.css';

export interface FloatingButtonProps {
  /** Is the button enabled */
  enabled?: boolean;
  /** Optional click handler */
  onClick?: () => void;
  /** Theme variant */
  theme?: 'light' | 'dark';
}

/** Floating action button for creating new content */
export const FloatingButton = ({
  enabled = true,
  onClick,
  theme = 'light',
  ...props
}: FloatingButtonProps) => {
  const themeClass = theme === 'dark' ? 'floating-button--dark' : 'floating-button--light';
  return (
    <div className={`floating-button ${themeClass} ${enabled ? 'floating-button--enabled' : 'floating-button--disabled'}`} {...props}>
      <button
        className="floating-button__circle"
        disabled={!enabled}
        onClick={onClick}
        aria-label="Create new content"
      >
        <div className="floating-button__icon">
          <div className="floating-button__icon-bounds"></div>
          <svg className="floating-button__icon-shape" width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.47545 19.5978L21.8039 6.26944C22.689 5.38425 22.689 3.94908 21.8039 3.06389C20.9187 2.1787 19.4835 2.1787 18.5983 3.06389L5.2699 16.3923L3.21562 21.6521L8.47545 19.5978ZM23.5009 1.36684C21.6785 -0.45561 18.7237 -0.455613 16.9013 1.36683L3.41481 14.8533C3.28454 14.9835 3.18268 15.1394 3.11565 15.311L0.0946497 23.0461C-0.328038 24.1283 0.739428 25.1958 1.82169 24.7731L9.55673 21.7521C9.72834 21.6851 9.8842 21.5832 10.0145 21.4529L23.5009 7.9665C25.3234 6.14405 25.3234 3.18928 23.5009 1.36684ZM18.7341 22.0254H14.6008V19.6254H18.7341V15.3587H21.1341V19.6254H25.2675V22.0254H21.1341V26.0254L18.7341 26.0254V22.0254Z" fill="white"/>
          </svg>
        </div>
      </button>
    </div>
  );
};
