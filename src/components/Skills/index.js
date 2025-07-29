import React from 'react'
import styled, { keyframes } from 'styled-components'
import { skills } from '../../data/constants'

// Animations
const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(1deg); }
`

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(132, 76, 230, 0.3); }
  50% { box-shadow: 0 0 40px rgba(132, 76, 230, 0.6), 0 0 60px rgba(132, 76, 230, 0.3); }
`

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const rotateIn = keyframes`
  from {
    opacity: 0;
    transform: rotate(-10deg) scale(0.8);
  }
  to {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  background: linear-gradient(135deg, 
    rgba(132, 76, 230, 0.05) 0%, 
    rgba(23, 92, 230, 0.05) 50%,
    rgba(132, 76, 230, 0.05) 100%
  );
  min-height: 100vh;
  padding: 4rem 2rem;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 80%, rgba(132, 76, 230, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(23, 92, 230, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  gap: 2rem;
  z-index: 2;

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`

const Title = styled.h1`
  font-size: clamp(2.5rem, 6vw, 4rem);
  text-align: center;
  font-weight: 800;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  background: linear-gradient(135deg, ${({ theme }) => theme.text_primary} 0%, #854CE6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  animation: ${fadeInUp} 0.8s ease-out;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #854CE6, #175CE6);
    border-radius: 2px;
    animation: ${fadeInUp} 1s ease-out 0.3s both;
  }
`

const Desc = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  text-align: center;
  max-width: 700px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.8;
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;
  font-weight: 400;
  opacity: 0.9;

  &::before {
    content: '✨';
    margin-right: 8px;
  }

  &::after {
    content: '✨';
    margin-left: 8px;
  }
`

const SkillsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  margin-top: 50px;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const Skill = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.card};
  backdrop-filter: blur(20px);
  border: 1px solid rgba(132, 76, 230, 0.2);
  box-shadow: 
    0 8px 32px rgba(132, 76, 230, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 2rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 500px) {
    padding: 1.25rem;
  }
`

const SkillTitle = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 1.5rem;
  text-align: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 3px;
    background: linear-gradient(90deg, #854CE6, #175CE6);
    border-radius: 2px;
  }
`

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`

const SkillItem = styled.div`
  font-size: 0.95rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  background: linear-gradient(135deg, 
    rgba(132, 76, 230, 0.1) 0%, 
    rgba(23, 92, 230, 0.1) 100%);
  border: 1px solid rgba(132, 76, 230, 0.3);
  border-radius: 16px;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  animation: ${rotateIn} 0.5s ease-out ${props => props.index * 0.05}s both;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg, 
      transparent, 
      rgba(255, 255, 255, 0.1), 
      transparent
    );
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-4px) scale(1.05);
    background: linear-gradient(135deg, 
      rgba(132, 76, 230, 0.2) 0%, 
      rgba(23, 92, 230, 0.2) 100%);
    border-color: rgba(132, 76, 230, 0.6);
    box-shadow: 0 8px 25px rgba(132, 76, 230, 0.3);
    animation: ${float} 3s ease-in-out infinite;

    &::before {
      left: 100%;
    }
  }
`

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  transition: all 0.3s ease;
  filter: drop-shadow(0 2px 8px rgba(132, 76, 230, 0.3));

  ${SkillItem}:hover & {
    transform: rotate(360deg) scale(1.1);
    filter: drop-shadow(0 4px 15px rgba(132, 76, 230, 0.5));
  }

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`

const FloatingElement = styled.div`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: linear-gradient(135deg, rgba(132, 76, 230, 0.1), rgba(23, 92, 230, 0.1));
  border-radius: 50%;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  animation: ${float} ${props => props.duration}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  pointer-events: none;
  z-index: 1;
`

const Skills = () => {
  return (
    <Container id="skills">
      {/* Floating elements */}
      <FloatingElement size={60} top={10} left={5} duration={6} delay={0} />
      <FloatingElement size={40} top={70} left={90} duration={8} delay={2} />
      <FloatingElement size={80} top={40} left={95} duration={7} delay={1} />
      <FloatingElement size={35} top={20} left={85} duration={9} delay={3} />

      <Wrapper>
        <Title>⚡ Skills & Expertise</Title>
        <Desc>
          Here's my arsenal of cutting-edge technologies and frameworks that I've mastered over the past 2 years of intensive development
        </Desc>
        <SkillsContainer>
          {skills.map((skill) => (
            <Skill key={skill.title}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item, index) => (
                  <SkillItem key={item.name} index={index}>
                    <SkillImage src={item.image} alt={item.name} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills
