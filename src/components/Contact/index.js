import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(132, 76, 230, 0.3); }
  50% { box-shadow: 0 0 40px rgba(132, 76, 230, 0.6); }
`

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
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
    rgba(99, 102, 241, 0.05) 50%, 
    rgba(139, 92, 246, 0.05) 100%);
  min-height: 100vh;
  padding: 40px 20px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 20%, rgba(132, 76, 230, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 70%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
    pointer-events: none;
    z-index: -1;
  }
  
  @media (max-width: 960px) {
    padding: 20px 15px;
  }
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  gap: 32px;
  animation: ${fadeInUp} 0.8s ease-out;
  
  @media (max-width: 960px) {
    flex-direction: column;
    gap: 24px;
  }
`

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 700;
  margin-top: 20px;
  background: linear-gradient(135deg, #854CE6 0%, #6366f1 50%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  animation: ${float} 6s ease-in-out infinite;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #854CE6, #6366f1, #8b5cf6);
    border-radius: 2px;
    animation: ${shimmer} 2s linear infinite;
    background-size: 200% 100%;
  }
  
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 36px;
    
    &::after {
      width: 80px;
      height: 3px;
    }
  }
`;

const Desc = styled.div`
  font-size: 20px;
  text-align: center;
  max-width: 700px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
  margin-top: 20px;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    margin-top: 16px;
    font-size: 16px;
    max-width: 90%;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.1) 0%, 
    rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(20px);
  padding: 40px;
  border-radius: 24px;
  border: 1px solid rgba(132, 76, 230, 0.3);
  box-shadow: 
    0 20px 60px rgba(23, 92, 230, 0.15),
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  margin-top: 40px;
  gap: 20px;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #854CE6, transparent);
    animation: ${shimmer} 3s linear infinite;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 
      0 30px 80px rgba(23, 92, 230, 0.25),
      0 12px 40px rgba(0, 0, 0, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    border-color: rgba(132, 76, 230, 0.5);
  }
  
  @media (max-width: 768px) {
    padding: 30px 24px;
    margin-top: 30px;
    gap: 16px;
  }
`

const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 10px;
  font-weight: 700;
  background: linear-gradient(135deg, #854CE6 0%, #6366f1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  position: relative;
  
  @media (max-width: 768px) {
    font-size: 24px;
  }
`

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 8px;
`

const ContactInput = styled.input`
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(132, 76, 230, 0.3);
  outline: none;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 16px;
  padding: 16px 20px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  box-sizing: border-box;
  
  &::placeholder {
    color: ${({ theme }) => theme.text_secondary + '80'};
    transition: all 0.3s ease;
  }
  
  &:focus {
    border: 2px solid #854CE6;
    background: rgba(132, 76, 230, 0.1);
    transform: translateY(-2px);
    box-shadow: 
      0 10px 30px rgba(132, 76, 230, 0.2),
      0 0 0 4px rgba(132, 76, 230, 0.1);
    
    &::placeholder {
      opacity: 0.7;
      transform: translateY(-2px);
    }
  }
  
  &:hover:not(:focus) {
    border-color: rgba(132, 76, 230, 0.5);
    background: rgba(255, 255, 255, 0.08);
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
    padding: 14px 16px;
  }
`

const ContactInputMessage = styled.textarea`
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(132, 76, 230, 0.3);
  outline: none;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 16px;
  padding: 16px 20px;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  box-sizing: border-box;
  
  &::placeholder {
    color: ${({ theme }) => theme.text_secondary + '80'};
    transition: all 0.3s ease;
  }
  
  &:focus {
    border: 2px solid #854CE6;
    background: rgba(132, 76, 230, 0.1);
    transform: translateY(-2px);
    box-shadow: 
      0 10px 30px rgba(132, 76, 230, 0.2),
      0 0 0 4px rgba(132, 76, 230, 0.1);
    
    &::placeholder {
      opacity: 0.7;
      transform: translateY(-2px);
    }
  }
  
  &:hover:not(:focus) {
    border-color: rgba(132, 76, 230, 0.5);
    background: rgba(255, 255, 255, 0.08);
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
    padding: 14px 16px;
    min-height: 100px;
  }
`

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: linear-gradient(135deg, #854CE6 0%, #6366f1 50%, #8b5cf6 100%);
  background-size: 200% 200%;
  padding: 18px 24px;
  margin-top: 12px;
  border-radius: 16px;
  border: none;
  color: white;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 1px;
  
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
    transform: translateY(-3px) scale(1.02);
    box-shadow: 
      0 15px 40px rgba(132, 76, 230, 0.4),
      0 5px 15px rgba(0, 0, 0, 0.2);
    animation: ${glow} 2s ease-in-out infinite;
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(-1px) scale(1.01);
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
    padding: 16px 20px;
  }
`

const FloatingElement = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, rgba(132, 76, 230, 0.2), rgba(99, 102, 241, 0.2));
  border-radius: 50%;
  animation: ${float} 4s ease-in-out infinite;
  z-index: -1;
  
  &:nth-child(1) {
    top: 10%;
    left: 10%;
    animation-delay: 0s;
  }
  
  &:nth-child(2) {
    top: 20%;
    right: 15%;
    animation-delay: 1s;
    width: 40px;
    height: 40px;
  }
  
  &:nth-child(3) {
    bottom: 30%;
    left: 20%;
    animation-delay: 2s;
    width: 80px;
    height: 80px;
  }
  
  &:nth-child(4) {
    bottom: 10%;
    right: 10%;
    animation-delay: 3s;
    width: 50px;
    height: 50px;
  }
`

const Contact = () => {
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_tox7kqs', 'template_nv7k7mj', form.current, 'SybVGsYS52j2TfLbi')
      .then((result) => {
        setOpen(true);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <Container>
      <FloatingElement />
      <FloatingElement />
      <FloatingElement />
      <FloatingElement />
      
      <Wrapper>
        <Title>Get In Touch</Title>
        <Desc>
          Ready to bring your ideas to life? Let's collaborate and create something amazing together! 
          Drop me a message and I'll get back to you as soon as possible.
        </Desc>
        
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Send me a message 🚀</ContactTitle>
          
          <InputWrapper>
            <ContactInput 
              placeholder="Your Email Address" 
              name="from_email" 
              type="email"
              required
            />
          </InputWrapper>
          
          <InputWrapper>
            <ContactInput 
              placeholder="Your Full Name" 
              name="from_name" 
              required
            />
          </InputWrapper>
          
          <InputWrapper>
            <ContactInput 
              placeholder="Subject" 
              name="subject" 
              required
            />
          </InputWrapper>
          
          <InputWrapper>
            <ContactInputMessage 
              placeholder="Tell me about your project or just say hello!" 
              rows="5" 
              name="message" 
              required
            />
          </InputWrapper>
          
          <ContactButton type="submit" value="Send Message" />
        </ContactForm>
        
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="🎉 Message sent successfully! I'll get back to you soon."
          severity="success"
        />
      </Wrapper>
    </Container>
  )
}

export default Contact