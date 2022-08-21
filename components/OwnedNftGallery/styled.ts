import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  padding: 4rem 0 10rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardsRow = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0.5rem 0;
`;

export const NFTCard = styled.div`
  cursor: pointer;
  border-radius: 8px;
  height: 22.5rem;
  width: 20rem;
  margin: 1rem;
  text-align: center;
  line-height: 22rem;
  font-size: 1rem;
  border: 1px solid #fff;
`;
