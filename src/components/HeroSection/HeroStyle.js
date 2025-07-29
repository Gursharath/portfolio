import styled, { keyframes } from "styled-components";

// Enhanced animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
`;

const glow = keyframes`
  0%, 100% { 
    box-shadow: 0 0 20px rgba(148, 93, 214, 0.3),
                0 0 40px rgba(148, 93, 214, 0.2),
                0 0 60px rgba(148, 93, 214, 0.1);
  }
  50% { 
    box-shadow: 0 0 30px rgba(148, 93, 214, 0.5),
                0 0 60px rgba(148, 93, 214, 0.3),
                0 0 90px rgba(148, 93, 214, 0.2);
  }
`;

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const typewriter = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const blink = keyframes`
  from, to { border-color: transparent; }
  50% { border-color: ${({ theme }) => theme.primary}; }
`;

export const HeroContainer = styled.div`
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.card_light} 0%, 
    ${({ theme }) => theme.card_light}f0 50%, 
    ${({ theme }) => theme.card_light} 100%);
  display: flex;
  justify-content: center;
  position: relative;
  padding: 100px 30px 80px;
  overflow: hidden;
  
  // Enhanced clip path for modern look
  clip-path: polygon(0 0, 100% 0, 100% 95%, 85% 100%, 0 100%);
  
  // Background pattern
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(148, 93, 214, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(244, 103, 55, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 60%, rgba(19, 173, 199, 0.1) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
  }
  
  // Animated gradient overlay
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(
      from 0deg at 50% 50%,
      rgba(148, 93, 214, 0.05) 0deg,
      rgba(244, 103, 55, 0.05) 120deg,
      rgba(19, 173, 199, 0.05) 240deg,
      rgba(148, 93, 214, 0.05) 360deg
    );
    animation: ${pulse} 8s ease-in-out infinite;
    pointer-events: none;
    z-index: 0;
  }
  
  @media (max-width: 960px) {
    padding: 80px 16px 60px;
    clip-path: polygon(0 0, 100% 0, 100% 96%, 80% 100%, 0 100%);
  }
  
  @media (max-width: 640px) {
    padding: 60px 16px 40px;
    clip-path: polygon(0 0, 100% 0, 100% 97%, 75% 100%, 0 100%);
  }
  
  z-index: 1;
`;

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  z-index: 1;

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  z-index: 2;
  gap: 40px;

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 60px;
  }
`;

export const HeroLeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: ${fadeInLeft} 0.8s ease-out;
  
  @media (max-width: 960px) {
    order: 2;
    align-items: center;
    text-align: center;
    animation: ${fadeInUp} 0.8s ease-out 0.3s both;
  }
`;

export const HeroRightContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeInRight} 0.8s ease-out 0.2s both;
  
  @media (max-width: 960px) {
    order: 1;
    animation: ${fadeInUp} 0.8s ease-out both;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  
  // Animated border rings
  &::before {
    content: '';
    position: absolute;
    width: 120%;
    height: 120%;
    border: 2px solid rgba(148, 93, 214, 0.3);
    border-radius: 50%;
    animation: ${pulse} 3s ease-in-out infinite;
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 140%;
    height: 140%;
    border: 1px solid rgba(244, 103, 55, 0.2);
    border-radius: 50%;
    animation: ${pulse} 4s ease-in-out infinite reverse;
    z-index: -2;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 420px;
  max-height: 420px;
  border-radius: 50%;
  border: 4px solid;
  border-image: linear-gradient(135deg, 
    ${({ theme }) => theme.primary}, 
    #ff6b35, 
    #13adc7
  ) 1;
  animation: ${float} 6s ease-in-out infinite, ${glow} 4s ease-in-out infinite;
  transition: all 0.3s ease;
  
  // Enhanced glow effect
  filter: drop-shadow(0 10px 30px rgba(148, 93, 214, 0.3));
  
  &:hover {
    transform: translateY(-5px) scale(1.02);
    filter: drop-shadow(0 15px 40px rgba(148, 93, 214, 0.4));
  }

  @media (max-width: 768px) {
    max-width: 350px;
    max-height: 350px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

export const Title = styled.div`
  font-weight: 800;
  font-size: clamp(32px, 8vw, 58px);
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.2;
  margin-bottom: 10px;
  
  // Enhanced text styling
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.text_primary}, 
    ${({ theme }) => theme.primary}
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  // Text shadow for depth
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.1));
  
  animation: ${fadeInUp} 0.8s ease-out 0.4s both;
  
  @media (max-width: 960px) {
    text-align: center;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: clamp(20px, 5vw, 36px);
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.4;
  margin-bottom: 20px;
  animation: ${fadeInUp} 0.8s ease-out 0.6s both;
  
  @media (max-width: 960px) {
    justify-content: center;
    text-align: center;
  }
  
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  position: relative;
  font-weight: 700;
  
  // Animated gradient text
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.primary}, 
    #ff6b35, 
    #13adc7
  );
  background-size: 200% 200%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${shimmer} 3s ease-in-out infinite;
  
  // Underline effect
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, 
      ${({ theme }) => theme.primary}, 
      #ff6b35
    );
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: scaleX(1);
  }
  
  &:hover {
    transform: translateY(-2px);
    transition: all 0.3s ease;
  }
`;

export const SubTitle = styled.div`
  font-size: clamp(16px, 4vw, 22px);
  line-height: 1.6;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.text_primary}dd;
  font-weight: 400;
  animation: ${fadeInUp} 0.8s ease-out 0.8s both;
  
  // Enhanced readability
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 960px) {
    text-align: center;
    margin-bottom: 30px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  animation: ${fadeInUp} 0.8s ease-out 1s both;
  
  @media (max-width: 960px) {
    justify-content: center;
  }
  
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 15px;
    width: 100%;
  }
`;

export const ResumeButton = styled.a`
  appearance: none;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 32px;
  color: ${({ theme }) => theme.white};
  border-radius: 50px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  border: none;
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  // Enhanced gradient background
  background: linear-gradient(135deg, 
    hsla(271, 100%, 50%, 1) 0%, 
    hsla(294, 100%, 50%, 1) 50%,
    hsla(320, 100%, 50%, 1) 100%
  );
  background-size: 200% 200%;
  
  // Enhanced shadow
  box-shadow: 
    0 8px 32px rgba(148, 93, 214, 0.3),
    0 4px 16px rgba(148, 93, 214, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  
  // Shimmer effect overlay
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(255, 255, 255, 0.2), 
      transparent
    );
    transition: left 0.6s ease;
  }
  
  &:hover {
    transform: translateY(-3px) scale(1.02);
    background-position: 100% 100%;
    box-shadow: 
      0 12px 40px rgba(148, 93, 214, 0.4),
      0 6px 20px rgba(148, 93, 214, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(-1px) scale(0.98);
  }
  
  @media (max-width: 640px) {
    width: 100%;
    max-width: 300px;
    padding: 14px 28px;
    font-size: 16px;
  }
`;

export const SecondaryButton = styled.a`
  appearance: none;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 32px;
  color: ${({ theme }) => theme.primary};
  background: transparent;
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 50px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  // Hover fill effect
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: ${({ theme }) => theme.primary};
    transition: width 0.3s ease;
    z-index: -1;
  }
  
  &:hover {
    color: ${({ theme }) => theme.white};
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(148, 93, 214, 0.3);
    
    &::before {
      width: 100%;
    }
  }
  
  @media (max-width: 640px) {
    width: 100%;
    max-width: 300px;
    padding: 14px 28px;
    font-size: 16px;
  }
`;

// Additional utility components
export const HighlightText = styled.span`
  position: relative;
  color: ${({ theme }) => theme.primary};
  font-weight: 700;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, 
      ${({ theme }) => theme.primary}, 
      #ff6b35
    );
    border-radius: 2px;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  animation: ${fadeInUp} 0.8s ease-out 1.2s both;
  
  @media (max-width: 960px) {
    justify-content: center;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: rgba(148, 93, 214, 0.1);
  color: ${({ theme }) => theme.primary};
  border: 1px solid rgba(148, 93, 214, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    transform: translateY(-3px) scale(1.1);
    box-shadow: 0 8px 25px rgba(148, 93, 214, 0.3);
  }
  
  svg {
    font-size: 20px;
  }
`;