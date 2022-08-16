import styled from 'styled-components';

export const AccountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Balance = styled.div`
  padding: 8px 12px;
  background: #171a26;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
`;

export const ConnectBtn = styled(Balance)`
  cursor: pointer;
`;
