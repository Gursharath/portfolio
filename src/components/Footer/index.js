import styled, { keyframes } from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Bio } from '../../data/constants';

// Animations
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

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const glow = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(0, 102, 255, 0.2);
  }
  50% {
    box-shadow: 0 0 20px rgba(0, 102, 255, 0.4), 0 0 30px rgba(150, 0, 225, 0.3);
  }
  100% {
    box-shadow: 0 0 5px rgba(0, 102, 255, 0.2);
  }
`;

const FooterContainer = styled.div`
  width: 100%;
  padding: 3rem 0 1rem;
  display: flex;
  justify-content: center;
  background: linear-gradient(135deg, 
    rgba(0, 102, 255, 0.08) 0%, 
    rgba(150, 0, 225, 0.08) 50%, 
    rgba(0, 102, 255, 0.08) 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent 0%, 
      ${({ theme }) => theme.primary}40 50%, 
      transparent 100%);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(0, 102, 255, 0.03) 0%, transparent 70%);
    animation: ${glow} 4s ease-in-out infinite;
    pointer-events: none;
  }
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  padding: 2rem;
  color: ${({ theme }) => theme.text_primary};
  position: relative;
  z-index: 1;
  animation: ${fadeInUp} 0.8s ease-out;
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const Logo = styled.h1`
  font-weight: 700;
  font-size: 2.2rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}, #9333ea);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    animation: ${pulse} 0.6s ease;
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Tagline = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0;
  text-align: center;
  font-style: italic;
  opacity: 0.8;
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: row;
  gap: 2.5rem;
  justify-content: center;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 1.5rem;
    max-width: 100%;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0.5rem 1rem;
  border-radius: 25px;
  
  &::before {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, ${({ theme }) => theme.primary}, #9333ea);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-3px);
    background: rgba(0, 102, 255, 0.05);
    
    &::before {
      width: 80%;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.4rem 0.8rem;
  }
`;

const ContactSection = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1rem 0;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-2px);
  }
  
  svg {
    font-size: 1.2rem;
  }
`;

const SocialMediaSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const SocialMediaTitle = styled.h3`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;
  font-weight: 600;
`;

const SocialMediaIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const SocialMediaIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: ${({ theme }) => theme.text_primary};
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover {
    color: white;
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    
    &::before {
      left: 100%;
    }
  }
  
  &:nth-child(1):hover {
    background: linear-gradient(135deg, #1877f2, #42a5f5);
  }
  
  &:nth-child(2):hover {
    background: linear-gradient(135deg, #1da1f2, #0d8bd9);
  }
  
  &:nth-child(3):hover {
    background: linear-gradient(135deg, #0077b5, #00a0dc);
  }
  
  &:nth-child(4):hover {
    background: linear-gradient(135deg, #e4405f, #fd1d1d, #fcb045);
  }
  
  svg {
    font-size: 1.4rem;
    z-index: 1;
  }
  
  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    
    svg {
      font-size: 1.2rem;
    }
  }
`;

const Divider = styled.div`
  width: 100%;
  max-width: 800px;
  height: 1px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    ${({ theme }) => theme.text_secondary}30 50%, 
    transparent 100%);
  margin: 1rem 0;
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  margin: 0;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const MadeWithLove = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  margin: 0;
  opacity: 0.7;
  
  .heart {
    color: #e74c3c;
    animation: ${pulse} 1.5s ease-in-out infinite;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <LogoSection>
          <Logo>Gursharath</Logo>
          <Tagline>Building Digital Experiences</Tagline>
        </LogoSection>
        
        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </Nav>
        
        <ContactSection>
          <ContactItem>
            <EmailIcon />
            <span>gursharath@example.com</span>
          </ContactItem>
          <ContactItem>
            <LocationOnIcon />
            <span>India</span>
          </ContactItem>
        </ContactSection>
        
        <SocialMediaSection>
          <SocialMediaTitle>Connect With Me</SocialMediaTitle>
          <SocialMediaIcons>
            <SocialMediaIcon href={Bio.facebook} target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </SocialMediaIcon>
            <SocialMediaIcon href={Bio.twitter} target="_blank" rel="noopener noreferrer">
              <TwitterIcon />
            </SocialMediaIcon>
            <SocialMediaIcon href={Bio.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </SocialMediaIcon>
            <SocialMediaIcon href={Bio.insta} target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </SocialMediaIcon>
          </SocialMediaIcons>
        </SocialMediaSection>
        
        <Divider />
        
        <BottomSection>
          <Copyright>
            &copy; 2025 Gursharath. All rights reserved.
          </Copyright>
          <MadeWithLove>
            Made with <span className="heart">♥</span> in India
          </MadeWithLove>
        </BottomSection>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;