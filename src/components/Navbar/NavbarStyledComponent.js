import { Link as LinkR } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

// Smooth floating animation
const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-3px) rotate(1deg); }
`;

// Gradient shimmer effect
const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

// Pulse glow animation
const pulseGlow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(138, 43, 226, 0.3); }
  50% { box-shadow: 0 0 40px rgba(138, 43, 226, 0.6), 0 0 60px rgba(138, 43, 226, 0.2); }
`;

// Modern backdrop blur navigation
export const Nav = styled.div`
  background: rgba(15, 15, 35, 0.85);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(138, 43, 226, 0.6), transparent);
  }
  
  @media (max-width: 960px) {
    height: 75px;
    backdrop-filter: blur(15px);
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 32px;
  max-width: 1400px;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  text-decoration: none;
  position: relative;
  z-index: 1001;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    animation: ${float} 2s ease-in-out infinite;
  }
`;

export const Span = styled.div`
  font-weight: 800;
  font-size: 24px;
  background: linear-gradient(135deg, #8A2BE2, #FF6B6B, #4ECDC4, #45B7D1);
  background-size: 300% 300%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${shimmer} 3s ease-in-out infinite;
  letter-spacing: -0.5px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #8A2BE2, #FF6B6B);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  ${NavLogo}:hover & {
    &:after {
      transform: scaleX(1);
    }
  }
  
  @media (max-width: 640px) {
    font-size: 20px;
  }
`;

export const NavItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50px;
  padding: 8px 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  padding: 12px 20px;
  border-radius: 25px;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  font-size: 15px;
  letter-spacing: 0.3px;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    color: #fff;
    background: rgba(138, 43, 226, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(138, 43, 226, 0.3);
    
    &:before {
      left: 100%;
    }
  }

  &.active {
    background: linear-gradient(135deg, rgba(138, 43, 226, 0.3), rgba(255, 107, 107, 0.2));
    color: #fff;
    box-shadow: 0 4px 15px rgba(138, 43, 226, 0.4);
    
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 6px;
      height: 6px;
      background: #8A2BE2;
      border-radius: 50%;
      animation: ${pulseGlow} 2s ease-in-out infinite;
    }
  }
`;

export const GitHubButton = styled.a`
  background: linear-gradient(135deg, rgba(138, 43, 226, 0.1), rgba(255, 107, 107, 0.1));
  border: 2px solid transparent;
  background-clip: padding-box;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  border-radius: 25px;
  color: #fff;
  cursor: pointer;
  padding: 0 24px;
  font-weight: 600;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    padding: 2px;
    background: linear-gradient(135deg, #8A2BE2, #FF6B6B, #4ECDC4);
    border-radius: inherit;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: xor;
    -webkit-mask-composite: xor;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 15px 35px rgba(138, 43, 226, 0.4);
    
    &:after {
      left: 100%;
    }
  }
  
  @media screen and (max-width: 768px) {
    font-size: 12px;
    padding: 0 18px;
    height: 40px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 28px;
    height: 28px;
    cursor: pointer;
    z-index: 1001;
    
    span {
      width: 100%;
      height: 3px;
      background: linear-gradient(90deg, #8A2BE2, #FF6B6B);
      border-radius: 2px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      transform-origin: center;
      
      &:nth-child(1) {
        transform: ${({ isOpen }) => isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'rotate(0)'};
      }
      
      &:nth-child(2) {
        opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
        transform: ${({ isOpen }) => isOpen ? 'translateX(20px)' : 'translateX(0)'};
      }
      
      &:nth-child(3) {
        transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'rotate(0)'};
      }
    }
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 75px;
  right: 0;
  width: 100%;
  height: calc(100vh - 75px);
  background: rgba(15, 15, 35, 0.95);
  backdrop-filter: blur(20px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  z-index: ${({ isOpen }) => (isOpen ? '999' : '-1')};
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(138, 43, 226, 0.6), transparent);
  }
`;

export const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  list-style: none;
  width: 100%;
  height: 100%;
  padding: 40px 20px;
  margin: 0;
`;

export const MobileMenuLink = styled(LinkR)`
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  text-decoration: none;
  padding: 16px 32px;
  border-radius: 15px;
  transition: all 0.3s ease;
  position: relative;
  width: 80%;
  text-align: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    color: #fff;
    background: rgba(138, 43, 226, 0.2);
    transform: scale(1.05);
    box-shadow: 0 8px 25px rgba(138, 43, 226, 0.3);
  }

  &.active {
    background: linear-gradient(135deg, rgba(138, 43, 226, 0.3), rgba(255, 107, 107, 0.2));
    color: #fff;
    box-shadow: 0 4px 15px rgba(138, 43, 226, 0.4);
  }
`;

export const MobileMenuButton = styled.a`
  background: linear-gradient(135deg, rgba(138, 43, 226, 0.2), rgba(255, 107, 107, 0.2));
  border: 2px solid rgba(138, 43, 226, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 80%;
  border-radius: 25px;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 20px;

  &:hover {
    background: linear-gradient(135deg, rgba(138, 43, 226, 0.4), rgba(255, 107, 107, 0.3));
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(138, 43, 226, 0.4);
  }
`;

export const MobileLink = styled.a`
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  text-decoration: none;
  padding: 16px 32px;
  border-radius: 15px;
  transition: all 0.3s ease;
  position: relative;
  width: 80%;
  text-align: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    color: #fff;
    background: rgba(138, 43, 226, 0.2);
    transform: scale(1.05);
    box-shadow: 0 8px 25px rgba(138, 43, 226, 0.3);
  }

  &.active {
    background: linear-gradient(135deg, rgba(138, 43, 226, 0.3), rgba(255, 107, 107, 0.2));
    color: #fff;
    box-shadow: 0 4px 15px rgba(138, 43, 226, 0.4);
  }
`;

export const MobileNavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  text-decoration: none;
  position: relative;
  z-index: 1001;
  
  @media (max-width: 640px) {
    padding: 0;
  }
`;