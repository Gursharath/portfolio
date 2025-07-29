import React from 'react'
import styled from 'styled-components'

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
        transform: scale(1.05);
    }
`

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    margin-bottom: 10px;
    line-height: 1.6;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Span = styled.span`
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    transition: all 0.3s ease-in-out;
`

const Card = styled.div`
    width: 650px;
    border-radius: 16px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(132, 76, 230, 0.3);
    box-shadow: 
        0 8px 32px rgba(23, 92, 230, 0.15),
        0 2px 8px rgba(0, 0, 0, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    padding: 20px 24px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 16px;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    
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
    
    &:hover {
        box-shadow: 
            0 20px 60px rgba(23, 92, 230, 0.25),
            0 8px 32px rgba(0, 0, 0, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        transform: translateY(-8px) scale(1.02);
        border-color: rgba(132, 76, 230, 0.5);
        
        &::before {
            opacity: 1;
        }
    }
    
    @media only screen and (max-width: 768px){
        padding: 16px 20px;
        gap: 12px;
        width: 320px;
        border-radius: 12px;
    }

    &:hover ${Document}{
        display: flex;
        animation: slideIn 0.3s ease-out;
    }

    &:hover ${Span}{
        overflow: visible;
        -webkit-line-clamp: unset;
    }
    
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
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
`

const Image = styled.img`
    height: 60px;
    width: 60px;
    object-fit: cover;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 12px;
    margin-top: 4px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    
    &:hover {
        transform: scale(1.1) rotate(5deg);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }
    
    @media only screen and (max-width: 768px){
        height: 48px;
        width: 48px;
    }
`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;
`

const Name = styled.div`
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary + 99};
    background: linear-gradient(135deg, #854CE6, #6366f1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 2px;
    
    @media only screen and (max-width: 768px){
        font-size: 16px;
    }
`

const Degree = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary + 99};
    margin-bottom: 4px;
    
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const Date = styled.div`
    font-size: 13px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 80};
    background: rgba(132, 76, 230, 0.1);
    padding: 4px 12px;
    border-radius: 20px;
    display: inline-block;
    width: fit-content;
    border: 1px solid rgba(132, 76, 230, 0.2);
    
    @media only screen and (max-width: 768px){
        font-size: 11px;
        padding: 3px 10px;
    }
`

const GradeContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    background: linear-gradient(135deg, rgba(132, 76, 230, 0.1), rgba(99, 102, 241, 0.1));
    border-radius: 12px;
    border: 1px solid rgba(132, 76, 230, 0.2);
    margin: 8px 0;
    transition: all 0.3s ease;
    
    &:hover {
        background: linear-gradient(135deg, rgba(132, 76, 230, 0.15), rgba(99, 102, 241, 0.15));
        border-color: rgba(132, 76, 230, 0.3);
        transform: translateX(4px);
    }
`

const GradeLabel = styled.span`
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary + 99};
    
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const GradeValue = styled.span`
    font-size: 16px;
    font-weight: 700;
    color: #854CE6;
    
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const DescriptionContainer = styled.div`
    position: relative;
    padding: 16px;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    margin-top: 4px;
    transition: all 0.3s ease;
    
    &:hover {
        background: rgba(255, 255, 255, 0.05);
        border-color: rgba(132, 76, 230, 0.2);
    }
`

const EducationCard = ({ education }) => {
    return (
        <Card>
            <Top>
                <ImageContainer>
                    <Image src={education.img} alt={education.school} />
                </ImageContainer>
                <Body>
                    <Name>{education.school}</Name>
                    <Degree>{education.degree}</Degree>
                    <Date>{education.date}</Date>
                </Body>
            </Top>
            
            <GradeContainer>
                <GradeLabel>Grade:</GradeLabel>
                <GradeValue>{education.grade}</GradeValue>
            </GradeContainer>
            
            <DescriptionContainer>
                <Description>
                    <Span>{education.desc}</Span>
                </Description>
            </DescriptionContainer>
            
            {education.document && (
                <Document src={education.document} alt="Document" />
            )}
        </Card>
    )
}

export default EducationCard