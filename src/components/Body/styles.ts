import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    margin-bottom: 20px;
    font-size: 1.4rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.text}
  }
`;