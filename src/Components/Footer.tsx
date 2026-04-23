import React from 'react';
import styled from 'styled-components';
import { Row } from '../Styles/StyledComponents';

const FooterContainer = styled(Row)`
    align-items: center;
    color: silver;
    height: 30px;
    padding: 0 16px;
    font-size: 12px;
    gap: 4px;
    border-top: 1px solid rgba(255, 255, 255, 0.18);

    a {
        color: teal;
    }
`;

const MyLink = styled.a`
    color: white !important;
`

const Icon = styled.img`
height: 16px;
`

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <p>This Portfolio was made by</p>
            <MyLink href="https://solilius.github.io/portfolio/#/about-me" target="_blank"> Sol Elan</MyLink>
            <Icon src={`${process.env.PUBLIC_URL}/favicon.ico`} />
            <a href="https://github.com/solilius/portfolio-template" target="_blank"> click for free template</a>
        </FooterContainer>
    );
};

export default Footer;