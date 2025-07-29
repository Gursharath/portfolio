import React from 'react';
import styled, { keyframes } from 'styled-components';

// Enhanced animations
const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-20px) rotate(120deg); }
  66% { transform: translateY(10px) rotate(240deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.1); }
`;

const glow = keyframes`
  0%, 100% { filter: drop-shadow(0 0 5px rgba(148, 93, 214, 0.3)); }
  50% { filter: drop-shadow(0 0 20px rgba(148, 93, 214, 0.8)); }
`;

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

// Styled components
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      ellipse at center,
      rgba(148, 93, 214, 0.1) 0%,
      rgba(244, 103, 55, 0.05) 30%,
      rgba(19, 173, 199, 0.05) 60%,
      transparent 100%
    );
    animation: ${pulse} 4s ease-in-out infinite;
    pointer-events: none;
  }
  
  .BgAnimation__svg {
    width: 100%;
    height: 100%;
    max-width: 600px;
    max-height: 600px;
    animation: ${float} 20s ease-in-out infinite;
    filter: drop-shadow(0 0 30px rgba(148, 93, 214, 0.2));
    
    @media (max-width: 768px) {
      max-width: 400px;
      max-height: 400px;
    }
    
    @media (max-width: 480px) {
      max-width: 300px;
      max-height: 300px;
    }
  }
  
  // Enhanced particle styles
  .particle {
    filter: drop-shadow(0 0 10px currentColor);
    
    &.primary {
      color: #945DD6;
      animation: ${glow} 2s ease-in-out infinite;
    }
    
    &.secondary {
      color: #F46737;
      animation: ${glow} 2.5s ease-in-out infinite reverse;
    }
    
    &.tertiary {
      color: #13ADC7;
      animation: ${glow} 3s ease-in-out infinite;
    }
  }
  
  // Path stroke enhancements
  .path-stroke {
    stroke-width: 2;
    filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.3));
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
      animation: ${shimmer} 3s ease-in-out infinite;
    }
  }
`;

const HeroBgAnimation = () => (
  <Div>
    <svg
      className="BgAnimation__svg"
      viewBox="0 0 602 602"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Enhanced Gradients */}
        <radialGradient
          id="paint0_radial_enhanced"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(301 301) rotate(90) scale(300)"
        >
          <stop offset="0%" stopColor="rgba(148, 93, 214, 0.4)" />
          <stop offset="30%" stopColor="rgba(244, 103, 55, 0.3)" />
          <stop offset="60%" stopColor="rgba(19, 173, 199, 0.3)" />
          <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
        </radialGradient>
        
        <radialGradient
          id="paint1_radial_enhanced"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(301 301) rotate(90) scale(300)"
        >
          <stop offset="0%" stopColor="rgba(19, 173, 199, 0.4)" />
          <stop offset="50%" stopColor="rgba(148, 93, 214, 0.3)" />
          <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
        </radialGradient>
        
        <radialGradient
          id="paint2_radial_enhanced"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(301 301) rotate(90) scale(300)"
        >
          <stop offset="0%" stopColor="rgba(244, 103, 55, 0.4)" />
          <stop offset="50%" stopColor="rgba(19, 173, 199, 0.3)" />
          <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
        </radialGradient>

        {/* Enhanced Linear Gradients for particles */}
        <linearGradient id="gradient_primary" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#945DD6" />
          <stop offset="50%" stopColor="#B794F6" />
          <stop offset="100%" stopColor="#945DD6" stopOpacity="0" />
        </linearGradient>
        
        <linearGradient id="gradient_secondary" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F46737" />
          <stop offset="50%" stopColor="#FF8A65" />
          <stop offset="100%" stopColor="#F46737" stopOpacity="0" />
        </linearGradient>
        
        <linearGradient id="gradient_tertiary" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#13ADC7" />
          <stop offset="50%" stopColor="#4FD1C7" />
          <stop offset="100%" stopColor="#13ADC7" stopOpacity="0" />
        </linearGradient>

        {/* Glow filters */}
        <filter id="glow_primary" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        
        <filter id="glow_secondary" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        
        <filter id="glow_tertiary" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Main geometric paths with enhanced styling */}
      <g opacity="0.25">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z"
          stroke="url(#paint0_radial_enhanced)"
          strokeWidth="2"
          className="path-stroke"
          id="path_0"
        />
        <path
          d="M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z"
          stroke="url(#paint1_radial_enhanced)"
          strokeWidth="2"
          className="path-stroke"
          id="path_1"
        />
        <path
          d="M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z"
          stroke="url(#paint2_radial_enhanced)"
          strokeWidth="2"
          className="path-stroke"
          id="path_2"
        />
      </g>

      {/* Enhanced animated particles */}
      
      {/* Primary Purple Particles */}
      <g className="particle primary">
        <circle
          cx="295.027"
          cy="193.118"
          r="2.5"
          fill="url(#gradient_primary)"
          filter="url(#glow_primary)"
        >
          <animateMotion dur="8s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#path_2" />
          </animateMotion>
          <animate attributeName="r" values="2.5;4;2.5" dur="2s" repeatCount="indefinite" />
        </circle>
        <path
          d="M294.685 193.474L268.932 219.258"
          stroke="url(#gradient_primary)"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#glow_primary)"
        >
          <animateMotion dur="8s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#path_2" />
          </animateMotion>
        </path>
      </g>

      <g className="particle primary">
        <circle
          cx="295.027"
          cy="193.118"
          r="2"
          fill="url(#gradient_primary)"
          filter="url(#glow_primary)"
        >
          <animateMotion dur="6s" begin="1s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#path_2" />
          </animateMotion>
          <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <path
          d="M294.685 193.474L268.932 219.258"
          stroke="url(#gradient_primary)"
          strokeWidth="2"
          strokeLinecap="round"
          filter="url(#glow_primary)"
        >
          <animateMotion dur="6s" begin="1s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#path_2" />
          </animateMotion>
        </path>
      </g>

      {/* Secondary Orange Particles */}
      <g className="particle secondary">
        <circle
          cx="476.525"
          cy="363.313"
          r="3"
          fill="url(#gradient_secondary)"
          filter="url(#glow_secondary)"
        >
          <animateMotion dur="12s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#path_0" />
          </animateMotion>
          <animate attributeName="r" values="3;5;3" dur="3s" repeatCount="indefinite" />
        </circle>
        <path
          d="M476.171 362.952L450.417 337.168"
          stroke="url(#gradient_secondary)"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#glow_secondary)"
        >
          <animateMotion dur="12s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#path_0" />
          </animateMotion>
        </path>
      </g>

      <g className="particle secondary">
        <circle
          cx="382.164"
          cy="155.029"
          r="2.5"
          fill="url(#gradient_secondary)"
          filter="url(#glow_secondary)"
        >
          <animateMotion dur="9s" begin="2s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#path_0" />
          </animateMotion>
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
        </circle>
        <path
          d="M381.81 154.669L356.057 128.885"
          stroke="url(#gradient_secondary)"
          strokeWidth="2"
          strokeLinecap="round"
          filter="url(#glow_secondary)"
        >
          <animateMotion dur="9s" begin="2s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#path_0" />
          </animateMotion>
        </path>
      </g>

      {/* Tertiary Cyan Particles */}
      <g className="particle tertiary">
        <circle
          cx="333.324"
          cy="382.691"
          r="2.8"
          fill="url(#gradient_tertiary)"
          filter="url(#glow_tertiary)"
        >
          <animateMotion dur="7s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#path_1" />
          </animateMotion>
          <animate attributeName="r" values="2.8;4.5;2.8" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <path
          d="M333.667 382.335L359.42 356.551"
          stroke="url(#gradient_tertiary)"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#glow_tertiary)"
        >
          <animateMotion dur="7s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#path_1" />
          </animateMotion>
        </path>
      </g>

      <g className="particle tertiary">
        <circle
          cx="476.525"
          cy="363.313"
          r="2.2"
          fill="url(#gradient_tertiary)"
          filter="url(#glow_tertiary)"
        >
          <animateMotion dur="10s" begin="3s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#path_0" />
          </animateMotion>
          <animate attributeName="opacity" values="0.7;1;0.7" dur="1.8s" repeatCount="indefinite" />
        </circle>
        <path
          d="M476.171 362.952L450.417 337.168"
          stroke="url(#gradient_tertiary)"
          strokeWidth="2"
          strokeLinecap="round"
          filter="url(#glow_tertiary)"
        >
          <animateMotion dur="10s" begin="3s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#path_0" />
          </animateMotion>
        </path>
      </g>

      {/* Additional floating particles */}
      <g className="particle secondary">
        <circle
          cx="165.524"
          cy="93.9596"
          r="3.2"
          fill="url(#gradient_secondary)"
          filter="url(#glow_secondary)"
        >
          <animateMotion dur="11s" begin="4s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#path_0" />
          </animateMotion>
          <animate attributeName="r" values="3.2;5.5;3.2" dur="4s" repeatCount="indefinite" />
        </circle>
        <path
          d="M165.182 94.3159L139.429 120.1"
          stroke="url(#gradient_secondary)"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#glow_secondary)"
        >
          <animateMotion dur="11s" begin="4s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#path_0" />
          </animateMotion>
        </path>
      </g>

      {/* Extra ambient particles for richness */}
      <g className="particle primary" opacity="0.6">
        <circle cx="150" cy="150" r="1.5" fill="url(#gradient_primary)">
          <animate attributeName="cx" values="150;450;150" dur="15s" repeatCount="indefinite" />
          <animate attributeName="cy" values="150;300;450;150" dur="20s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
        </circle>
      </g>
      
      <g className="particle tertiary" opacity="0.7">
        <circle cx="450" cy="450" r="2" fill="url(#gradient_tertiary)">
          <animate attributeName="cx" values="450;150;450" dur="18s" repeatCount="indefinite" />
          <animate attributeName="cy" values="450;200;100;450" dur="22s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite" />
        </circle>
      </g>
      
      <g className="particle secondary" opacity="0.5">
        <circle cx="300" cy="100" r="1.8" fill="url(#gradient_secondary)">
          <animate attributeName="cx" values="300;500;100;300" dur="25s" repeatCount="indefinite" />
          <animate attributeName="cy" values="100;400;500;100" dur="20s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.2;0.7;0.2" dur="4s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  </Div>
);

export default HeroBgAnimation;