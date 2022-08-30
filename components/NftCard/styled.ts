import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;
  height: 22.5rem;
  width: 20rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  background: #202225;
  border-radius: 12px;
`;

export const Title = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  text-align: center;
`;

export const Collection = styled.div``;

export const Content = styled.img`
  width: 20rem;
  height: 20rem;
  overflow: hidden;
  border-radius: 12px 12px 0 0;
  object-fit: contain;
  border: none;
  outline: none;
`;

export const VideoContent = styled.video`
  width: 20rem;
  height: 20rem;
  overflow: hidden;
  border-radius: 12px 12px 0 0;
  object-fit: contain;
`;
