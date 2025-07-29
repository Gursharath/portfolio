import React from 'react'
import styled, { keyframes } from 'styled-components'

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
`

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
`

const Document = styled.img`
  opacity: 0;
  height: 80px;
  width: fit-content;
  background: linear-gradient(135deg, #854CE6 0%, #6366f1 100%);
  border-radius: 12px;
  padding: 8px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 8px 25px rgba(132, 76, 230, 0.3);
  border: 2px solid rgba(132, 76, 230, 0.3);
  
  &:hover {
    cursor: pointer;
    opacity: 0.9;
    transform: scale(1.05) rotate(2deg);
    box-shadow: 0 12px 35px rgba(132, 76, 230, 0.4);
    border-color: #854CE6;
  }
`

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 16px;
  line-height: 1.6;
  
  @media only screen and (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 12px;
  }
`

const Span = styled.span`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  transition: all 0.4s ease;
  opacity: 0.9;
`

const Card = styled.div`
  width: 680px;
  border-radius: 20px;
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.1) 0%, 
    rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(20px);
  padding: 24px 28px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 18px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(48, 110, 232, 0.3);
  box-shadow: 
    0 15px 35px rgba(23, 92, 230, 0.15),
    0 5px 15px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #306EE8, #854CE6, #6366f1);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(48, 110, 232, 0.05) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }
  
  &:hover {
    box-shadow: 
      0 25px 50px rgba(23, 92, 230, 0.25),
      0 10px 25px rgba(0, 0, 0, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    transform: translateY(-8px) scale(1.02);
    border-color: rgba(48, 110, 232, 0.5);
    
    &::before {
      opacity: 1;
    }
    
    &::after {
      opacity: 1;
    }
  }
  
  @media only screen and (max-width: 768px) {
    padding: 20px;
    gap: 14px;
    width: 320px;
  }

  &:hover ${Document} {
    opacity: 1;
    animation: ${slideIn} 0.4s ease-out;
  }

  &:hover ${Span} {
    overflow: visible;
    -webkit-line-clamp: unset;
  }
`

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  align-items: flex-start;
`

const ImageContainer = styled.div`
  position: relative;
  flex-shrink: 0;
  animation: ${float} 4s ease-in-out infinite;
`

const Image = styled.img`
  height: 60px;
  width: 60px;
  object-fit: cover;
  background: linear-gradient(135deg, #306EE8 0%, #854CE6 100%);
  border-radius: 16px;
  margin-top: 4px;
  box-shadow: 0 8px 25px rgba(48, 110, 232, 0.3);
  border: 2px solid rgba(48, 110, 232, 0.3);
  transition: all 0.4s ease;
  
  &:hover {
    transform: scale(1.1) rotate(-5deg);
    box-shadow: 0 12px 35px rgba(48, 110, 232, 0.4);
    border-color: #306EE8;
  }
  
  @media only screen and (max-width: 768px) {
    height: 48px;
    width: 48px;
  }
`

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`

const Role = styled.div`
  font-size: 22px;
  font-weight: 700;
  background: linear-gradient(135deg, #306EE8 0%, #854CE6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 4px;
  line-height: 1.2;
  
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`

const Company = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary + 99};
  margin-bottom: 6px;
  
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`

const Date = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 80};
  background: linear-gradient(135deg, rgba(48, 110, 232, 0.1), rgba(132, 76, 230, 0.1));
  padding: 6px 14px;
  border-radius: 20px;
  display: inline-block;
  width: fit-content;
  border: 1px solid rgba(48, 110, 232, 0.3);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(135deg, rgba(48, 110, 232, 0.15), rgba(132, 76, 230, 0.15));
    border-color: rgba(48, 110, 232, 0.5);
    transform: translateY(-1px);
  }
  
  @media only screen and (max-width: 768px) {
    font-size: 11px;
    padding: 4px 10px;
  }
`

const SkillsSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 8px;
  padding: 16px;
  background: linear-gradient(135deg, rgba(48, 110, 232, 0.05), rgba(132, 76, 230, 0.05));
  border-radius: 16px;
  border: 1px solid rgba(48, 110, 232, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(135deg, rgba(48, 110, 232, 0.08), rgba(132, 76, 230, 0.08));
    border-color: rgba(48, 110, 232, 0.3);
    transform: translateX(4px);
  }
`

const SkillsHeader = styled.div`
  font-size: 16px;
  font-weight: 700;
  background: linear-gradient(135deg, #306EE8 0%, #854CE6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &::before {
    content: '⚡';
    font-size: 18px;
    background: linear-gradient(135deg, #306EE8, #854CE6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

const Skill = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: #306EE8;
  background: linear-gradient(135deg, rgba(48, 110, 232, 0.1), rgba(132, 76, 230, 0.1));
  padding: 6px 12px;
  border-radius: 20px;
  border: 1px solid rgba(48, 110, 232, 0.3);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    background: linear-gradient(135deg, rgba(48, 110, 232, 0.2), rgba(132, 76, 230, 0.2));
    border-color: rgba(48, 110, 232, 0.5);
    transform: translateY(-2px) scale(1.05);
    color: #854CE6;
    box-shadow: 0 4px 12px rgba(48, 110, 232, 0.2);
    animation: ${pulse} 0.6s ease-in-out;
    
    &::before {
      left: 100%;
    }
  }
  
  @media only screen and (max-width: 768px) {
    font-size: 11px;
    padding: 4px 8px;
  }
`

const DocumentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
  
  a {
    text-decoration: none;
    transition: all 0.3s ease;
    
    &:hover {
      transform: scale(1.02);
    }
  }
`

const ExperienceCard = ({ experience }) => {
  return (
    <Card>
      <Top>
        <ImageContainer>
          <Image src={experience.img} alt={experience.company} />
        </ImageContainer>
        <Body>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          <Date>{experience.date}</Date>
        </Body>
      </Top>
      
      <Description>
        {experience?.desc && <Span>{experience?.desc}</Span>}
      </Description>
      
      {experience?.skills && (
        <SkillsSection>
          <SkillsHeader>Skills & Technologies</SkillsHeader>
          <ItemWrapper>
            {experience?.skills?.map((skill, index) => (
              <Skill key={index}>{skill}</Skill>
            ))}
          </ItemWrapper>
        </SkillsSection>
      )}
      
      {experience.doc && (
        <DocumentContainer>
          <a href={experience.doc} target="_blank" rel="noopener noreferrer">
            <Document src={experience.doc} alt="Experience document" />
          </a>
        </DocumentContainer>
      )}
    </Card>
  )
}

export default ExperienceCard