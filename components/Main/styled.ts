import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  padding: 4rem 0 10rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  margin: 0.5rem 0;
`;

export const CardsRow = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0.5rem 0;
`;

export const Card = styled.div`
  cursor: pointer;
  display: flex;
  border-radius: 8px;
  height: 22.5rem;
  width: 20rem;
  margin: 1rem;
  background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
  filter: blur(0.5px);
  transition: width 0.5s ease-out, height 0.5s ease-out;
  &:hover {
    height: 24.5rem;
    width: 22rem;
    transition: width 0.5s ease-out, height 0.5s ease-out;
  }
`;
