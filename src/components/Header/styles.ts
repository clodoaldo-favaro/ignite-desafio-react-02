import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 0;

  position: sticky;
  top: 0;
  width: 100%;
  height: 6.5rem;

  z-index: 1000;

  background: ${(props) => props.theme.background};

  img {
    height: 2.5rem;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.2rem;

    img {
      width: 1.375rem;
      height: 1.375rem;
    }

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.25rem;

      height: 2.375rem;

      padding: 0.5rem;

      border-radius: 6px;

      background: ${(props) => props.theme['purple-light']};
      color: ${(props) => props.theme['purple-dark']};

      font-size: ${(props) => props.theme['text-s']};
    }

    a {
      border-radius: 6px;
      width: 2.375rem;
      height: 2.375rem;
      padding: 0.5rem;
      background: ${(props) => props.theme['yellow-light']};
    }
  }
`
