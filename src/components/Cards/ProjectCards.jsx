import React from 'react'
import styled, { keyframes } from 'styled-components'

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
`

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`

const Button = styled.button`
  opacity: 0;
  width: 100%;
  padding: 14px 20px;
  background: linear-gradient(135deg, #854CE6 0%, #6366f1 50%, #8b5cf6 100%);
  background-size: 200% 200%;
  color: white;
  font-size: 14px;
  font-weight: 700;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: auto;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    background-position: 100% 100%;
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 10px 25px rgba(132, 76, 230, 0.4);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(0) scale(1);
  }
`

const Card = styled.div`
  width: 350px;
  height: 520px;
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.1) 0%, 
    rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(20px);
  cursor: pointer;
  border-radius: 20px;
  border: 1px solid rgba(132, 76, 230, 0.3);
  box-shadow: 
    0 15px 35px rgba(23, 92, 230, 0.1),
    0 5px 15px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  overflow: hidden;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #854CE6, #6366f1, #8b5cf6);
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
    background: radial-gradient(circle, rgba(132, 76, 230, 0.05) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }
  
  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 
      0 25px 50px rgba(23, 92, 230, 0.2),
      0 10px 25px rgba(0, 0, 0, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    border-color: rgba(132, 76, 230, 0.5);
    
    &::before {
      opacity: 1;
    }
    
    &::after {
      opacity: 1;
    }
  }
  
  &:hover ${Button} {
    opacity: 1;
    animation: ${slideUp} 0.3s ease-out;
  }
  
  @media only screen and (max-width: 768px) {
    width: 320px;
    height: 480px;
    padding: 20px;
  }
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 180px;
  border-radius: 16px;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
    background-size: 200% 200%;
    animation: ${shimmer} 3s linear infinite;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  ${Card}:hover &::before {
    opacity: 1;
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: ${({ theme }) => theme.white};
  transition: all 0.4s ease;
  
  ${Card}:hover & {
    transform: scale(1.05);
  }
`

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`

const Tag = styled.span`
  font-size: 11px;
  font-weight: 600;
  color: #854CE6;
  background: linear-gradient(135deg, rgba(132, 76, 230, 0.15), rgba(99, 102, 241, 0.15));
  padding: 6px 12px;
  border-radius: 20px;
  border: 1px solid rgba(132, 76, 230, 0.3);
  transition: all 0.3s ease;
  text-transform: capitalize;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: linear-gradient(135deg, rgba(132, 76, 230, 0.25), rgba(99, 102, 241, 0.25));
    border-color: rgba(132, 76, 230, 0.5);
    transform: translateY(-2px);
    animation: ${pulse} 0.6s ease-in-out;
  }
`

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0px 2px;
  flex: 1;
`

const Title = styled.div`
  font-size: 22px;
  font-weight: 700;
  background: linear-gradient(135deg, ${({ theme }) => theme.text_primary || '#333'} 0%, #854CE6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  line-height: 1.3;
  margin-bottom: 4px;
`

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 8px;
`

const Date = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + '80' || 'rgba(100, 100, 100, 0.8)'};
  background: rgba(132, 76, 230, 0.1);
  padding: 4px 10px;
  border-radius: 12px;
  border: 1px solid rgba(132, 76, 230, 0.2);
  
  @media only screen and (max-width: 768px) {
    font-size: 10px;
    padding: 3px 8px;
  }
`

const Description = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary + '99' || 'rgba(100, 100, 100, 0.9)'};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  line-height: 1.5;
  opacity: 0.9;
`

const Members = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  gap: 4px;
  margin-top: auto;
`

const AvatarContainer = styled.div`
  position: relative;
  transition: all 0.3s ease;
  
  &:not(:first-child) {
    margin-left: -12px;
  }
  
  &:hover {
    transform: translateY(-3px) scale(1.1);
    z-index: 10;
  }
`

const Avatar = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.15),
    0 0 0 3px rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(132, 76, 230, 0.3);
  object-fit: cover;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 
      0 8px 20px rgba(132, 76, 230, 0.3),
      0 0 0 4px rgba(132, 76, 230, 0.2);
    border-color: #854CE6;
  }
`

const MemberCount = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(132, 76, 230, 0.2), rgba(99, 102, 241, 0.2));
  backdrop-filter: blur(10px);
  border: 2px solid rgba(132, 76, 230, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  color: #854CE6;
  margin-left: -12px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px) scale(1.1);
    background: linear-gradient(135deg, rgba(132, 76, 230, 0.3), rgba(99, 102, 241, 0.3));
    border-color: #854CE6;
  }
`

const ProjectCards = ({ project, setOpenModal }) => {
  const displayMembers = project.member?.slice(0, 3) || [];
  const remainingCount = (project.member?.length || 0) - 3;

  return (
    <Card onClick={() => setOpenModal({ state: true, project: project })}>
      <ImageContainer>
        <Image src={project.image} alt={project.title} />
      </ImageContainer>
      
      <Tags>
        {project.tags?.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>
      
      <Details>
        <Title>{project.title}</Title>
        
        <DateContainer>
          <Date>{project.date}</Date>
        </DateContainer>
        
        <Description>{project.description}</Description>
      </Details>
      
      <Members>
        {displayMembers.map((member, index) => (
          <AvatarContainer key={index}>
            <Avatar src={member.img} alt={member.name || 'Team member'} />
          </AvatarContainer>
        ))}
        {remainingCount > 0 && (
          <AvatarContainer>
            <MemberCount>+{remainingCount}</MemberCount>
          </AvatarContainer>
        )}
      </Members>
      
      <Button>View Project Details</Button>
    </Card>
  )
}

export default ProjectCards