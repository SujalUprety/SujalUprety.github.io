import React from "react";
import styled from "styled-components";
import { PersonalInfo } from "../data";
import { Column } from "../Styles/StyledComponents";

const Container = styled(Column)`
  align-items: center;
  margin-top: 40px;
  gap: 20px;
  text-align: center;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid rgb(238, 231, 166);

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const AboutText = styled.p`
  line-height: 1.6;
  max-width: 75vw;
  margin: 10px;
  white-space: pre-line;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const CVButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const AboutMe: React.FC = () => {
  return (
    <Container>
      <ProfileImage src={PersonalInfo.image} alt="Your Name" />
      <AboutText>
        {PersonalInfo.description}
      </AboutText>
      <CVButton
        href={PersonalInfo.cvUri}
        target="_blank"
        rel="noopener noreferrer"
      >
        View My CV
      </CVButton>

    </Container>
  );
};

export default AboutMe;