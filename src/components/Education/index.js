import React from 'react'
import styled, { keyframes } from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education } from '../../data/constants';
import EducationCard from '../Cards/EducationCard';

// Animations
const float = keyframes`
  0%, 100% { transform: translate3d(0, 0px, 0); }
  50% { transform: translate3d(0, -8px, 0); }
`

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 30px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-50px, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translate3d(50px, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
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

  @media (max-width: 960px) {
    padding: 2rem 1rem;
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

  @media (max-width: 768px) {
    margin-top: 12px;
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
    content: '🎓';
    margin-right: 8px;
  }

  &::after {
    content: '📚';
    margin-left: 8px;
  }
`

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  position: relative;

  .MuiTimeline-root {
    padding: 0;
  }

  .MuiTimelineItem-root {
    min-height: 120px;
    
    &:before {
      content: none;
    }
  }

  .MuiTimelineSeparator-root {
    position: relative;
  }

  .MuiTimelineDot-root {
    background: linear-gradient(135deg, #854CE6, #175CE6);
    border: 3px solid rgba(132, 76, 230, 0.3);
    box-shadow: 0 0 20px rgba(132, 76, 230, 0.4);
    transition: all 0.3s ease;
    width: 20px;
    height: 20px;

    &:hover {
      transform: scale(1.2);
      box-shadow: 0 0 30px rgba(132, 76, 230, 0.6);
    }
  }

  .MuiTimelineConnector-root {
    background: linear-gradient(180deg, #854CE6, #175CE6);
    width: 3px;
    opacity: 0.6;
  }

  @media (max-width: 660px) {
    align-items: flex-end;
    
    .MuiTimeline-root {
      .MuiTimelineItem-root {
        flex-direction: row-reverse;
        
        .MuiTimelineContent-root {
          text-align: right;
        }
      }
    }
  }
`

const StyledTimelineItem = styled(TimelineItem)`
  animation: ${props => props.index % 2 === 0 ? slideInRight : slideInLeft} 0.6s ease-out ${props => props.index * 0.2}s both;
  
  .MuiTimelineContent-root {
    transition: all 0.3s ease;
    
    &:hover {
      transform: translate3d(${props => props.index % 2 === 0 ? '-5px' : '5px'}, -5px, 0);
    }
  }

  @media (max-width: 660px) {
    animation: ${slideInLeft} 0.6s ease-out ${props => props.index * 0.2}s both;
    
    .MuiTimelineContent-root:hover {
      transform: translate3d(-5px, -5px, 0);
    }
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

const EducationWrapper = styled.div`
  position: relative;
  
  &:hover {
    .education-card {
      transform: translate3d(0, -5px, 0);
      box-shadow: 0 20px 40px rgba(132, 76, 230, 0.15);
    }
  }
`

const Education = () => {
  return (
    <Container id="education">
      {/* Floating background elements */}
      <FloatingElement size={45} top={20} left={8} duration={7} delay={0} />
      <FloatingElement size={60} top={75} left={88} duration={6} delay={1.5} />
      <FloatingElement size={35} top={50} left={92} duration={8} delay={0.5} />
      <FloatingElement size={55} top={10} left={85} duration={9} delay={2} />
      
      <Wrapper>
        <Title>🎓 Education Journey</Title>
        <Desc>
          My educational journey has been a path of continuous learning, growth, and self-discovery that shaped my career
        </Desc>
        
        <TimelineSection>
          <Timeline>
            {education.map((edu, index) => (
              <StyledTimelineItem key={edu.id || index} index={index}>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <EducationWrapper>
                    <div className="education-card">
                      <EducationCard education={edu} />
                    </div>
                  </EducationWrapper>
                </TimelineContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" />
                  {index !== education.length - 1 && (
                    <TimelineConnector />
                  )}
                </TimelineSeparator>
              </StyledTimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  )
}

export default Education