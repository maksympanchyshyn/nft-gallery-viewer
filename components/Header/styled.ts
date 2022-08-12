import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Logo = styled.div`
  color: #fff;
  font-size: 24px;
  width: 256px;
  height: 48px;
  position: relative;
`;

export const AccountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ConnectBtn = styled.button`
  cursor: pointer;
  padding: 8px 12px;
  background: rgb(117, 90, 250);
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
`;

export const Balance = styled.div`
  padding: 8px 12px;
  background: rgb(117, 90, 250);
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
`;
