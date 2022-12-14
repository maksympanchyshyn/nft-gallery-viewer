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
  border-radius: 8px;
  height: 22.5rem;
  width: 20rem;
  margin: 1rem;
  text-align: center;
  line-height: 22rem;
  font-size: 1.25rem;
  background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
  transition: transform 0.5s cubic-bezier(0.39, 0.26, 0.28, 0.54);
  &:hover {
    transform: scale(1.1);
    transition: transform 0.5s cubic-bezier(0.39, 0.26, 0.28, 0.54);
  }
`;
