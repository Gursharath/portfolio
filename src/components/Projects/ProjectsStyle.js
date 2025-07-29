import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(
    343.07deg, 
    rgba(132, 59, 206, 0.06) 5.71%, 
    rgba(132, 59, 206, 0) 64.83%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
  min-height: 100vh;
  padding: 2rem 1rem;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 10px 0 100px 0;
  gap: 12px;
  
  @media (max-width: 960px) {
    flex-direction: column;
    padding: 10px 0 60px 0;
  }
  
  @media (max-width: 640px) {
    padding: 10px 0 40px 0;
  }
`;

export const Title = styled.h1`
  font-size: clamp(28px, 5vw, 42px);
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.2;
  
  @media (max-width: 768px) {
    margin-top: 12px;
  }
`;

export const Desc = styled.p`
  font-size: clamp(14px, 2.5vw, 18px);
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
  margin: 1rem 0;
  
  @media (max-width: 768px) {
    margin-top: 12px;
    padding: 0 1rem;
  }
`;

export const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0;
  overflow: hidden;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    font-size: 12px;
    margin: 16px 0;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    border-radius: 8px;
  }
`;

export const ToggleButton = styled.div`
  padding: 8px 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  user-select: none;
  
  ${({ active, theme }) =>
    active &&
    `
    background: ${theme.primary}20;
    color: ${theme.primary};
  `}
  
  &:hover {
    background: ${({ theme }) => theme.primary}08;
  }
  
  &:first-child {
    border-radius: 10px 0 0 10px;
  }
  
  &:last-child {
    border-radius: 0 10px 10px 0;
  }
  
  @media (max-width: 768px) {
    padding: 6px 12px;
  }
  
  @media (max-width: 480px) {
    border-radius: 0 !important;
    padding: 10px 16px;
    
    &:first-child {
      border-radius: 6px 6px 0 0 !important;
    }
    
    &:last-child {
      border-radius: 0 0 6px 6px !important;
    }
  }
`;

export const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
  
  @media (max-width: 480px) {
    width: 100%;
    height: 1.5px;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 28px;
  width: 100%;
  max-width: 1200px;
  padding: 2rem 0;
  
  @media (max-width: 960px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
    padding: 1.5rem 0;
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 1rem 0;
  }
  
  @media (max-width: 480px) {
    gap: 16px;
  }
`;

// Additional utility components for better structure
export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Loading state for cards
export const LoadingCard = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.card}00 0%,
    ${({ theme }) => theme.text_secondary}20 50%,
    ${({ theme }) => theme.card}00 100%
  );
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 12px;
  
  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;