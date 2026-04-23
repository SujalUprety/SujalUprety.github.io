import React from 'react';
import styled from 'styled-components';

interface LogoProps {
  source: string;
  size: number;
  margin?: number;
  linkTo: string;
}

const LogoContainer = styled.a<{ size: number; margin: number }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  margin:  ${({ margin }) => margin}px;

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }

  @media (max-width: 768px) {
    width: ${({ size }) => size * 0.5}px;
    height: ${({ size }) => size * 0.5}px;
    margin:  ${({ margin }) => margin * 0.5}px;
  }
`;

const LogoImage = styled.img<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 768px) {
    width: ${({ size }) => size * 0.5}px;
    height: ${({ size }) => size * 0.5}px;
  }
`;

const LogoButton: React.FC<LogoProps> = ({ source, size, margin = 0, linkTo }) => {
  return (
    <LogoContainer href={linkTo} target="_blank" rel="noopener noreferrer" size={size} margin={margin}>
      <LogoImage src={`${process.env.PUBLIC_URL}${source}`} alt="logo" size={size} />
    </LogoContainer>
  );
};

export default LogoButton;

