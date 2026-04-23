import React from "react";
import { styled } from "styled-components";
import GameMedia from "./GameMedia";
import { Game as GameInterface } from "../types";
import GameInfo from "./GameInfo";
import { Row } from "../Styles/StyledComponents";

interface GameProps {
  game: GameInterface;
}

const GameContainer = styled(Row)`
  align-items: flex-start;
  
  & > * {
    flex: 1;
    max-width: 50%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  & > * {
    flex: 1;
    max-width: 100%;
  }
    
`;

const Game: React.FC<GameProps> = ({ game }) => {
  return (
    <GameContainer>
      <GameInfo game={game} />
      <GameMedia media={game.media} />
    </GameContainer>
  );
};

export default Game;
