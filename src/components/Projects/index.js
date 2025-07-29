import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'

// ========== Animations ==========
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
const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`

// ========== Styled Components ==========

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  position: relative;
  background: linear-gradient(135deg, rgba(132, 76, 230, 0.05), rgba(23, 92, 230, 0.05));
  overflow: hidden;

  @media (max-width: 960px) {
    padding: 2rem 1rem;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 20% 80%, rgba(132, 76, 230, 0.08) 0%, transparent 60%),
                radial-gradient(circle at 80% 20%, rgba(23, 92, 230, 0.08) 0%, transparent 60%);
    pointer-events: none;
  }
`

const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`

const Title = styled.h1`
  font-size: clamp(2.5rem, 6vw, 4rem);
  text-align: center;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
  background: linear-gradient(135deg, ${({ theme }) => theme.text_primary}, #854CE6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${fadeInUp} 0.8s ease-out;

  &::after {
    content: '';
    display: block;
    margin: 12px auto 0;
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #854CE6, #175CE6);
    border-radius: 2px;
  }
`

const Desc = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  max-width: 700px;
  line-height: 1.8;
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;
  opacity: 0.9;
`

const ToggleButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1rem;
  animation: ${fadeInUp} 0.8s ease-out 0.3s both;
`

const ToggleButton = styled.button`
  padding: 0.6rem 1.2rem;
  border-radius: 30px;
  border: 1px solid ${({ active }) => active ? '#854CE6' : 'rgba(132, 76, 230, 0.4)'};
  background: ${({ active }) => active ? 'linear-gradient(135deg, #854CE6, #175CE6)' : 'transparent'};
  color: ${({ active }) => active ? '#fff' : '#854CE6'};
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ active }) => active ? 'linear-gradient(135deg, #854CE6, #175CE6)' : 'rgba(132, 76, 230, 0.1)'};
  }
`

const CardContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  animation: ${fadeInUp} 0.8s ease-out 0.4s both;
`

const FloatingElement = styled.div`
  position: absolute;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background: linear-gradient(135deg, rgba(132, 76, 230, 0.1), rgba(23, 92, 230, 0.1));
  border-radius: 50%;
  top: ${({ top }) => top}%;
  left: ${({ left }) => left}%;
  animation: ${float} ${({ duration }) => duration}s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay}s;
  pointer-events: none;
  z-index: 1;
`

// ========== Main Component ==========

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  const filteredProjects = toggle === 'all'
    ? projects
    : projects.filter(project => project.category === toggle);

  return (
    <Container id="projects">
      {/* Floating circles */}
      <FloatingElement size={50} top={10} left={5} duration={6} delay={0} />
      <FloatingElement size={60} top={85} left={90} duration={7} delay={1.5} />
      <FloatingElement size={40} top={50} left={95} duration={8} delay={0.5} />
      <FloatingElement size={45} top={25} left={80} duration={6} delay={1} />

      <Wrapper>
        <Title>🚀 Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>

        <ToggleButtonGroup>
          {['all', 'web app', 'android app', 'machine learning'].map((type) => (
            <ToggleButton
              key={type}
              active={toggle === type}
              onClick={() => setToggle(type)}
            >
              {type.toUpperCase().replace('APP', "APP'S")}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>

        <CardContainer>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects
