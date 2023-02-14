import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  height: 6.5rem;
  z-index: 1000;

  background: ${(props) => props.theme.background};

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 2rem 0;
    gap: 1.2rem;
    width: 100%;

    > img {
      height: 2.5rem;
    }

    > div {
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

      img {
        width: 1.375rem;
        height: 1.375rem;
      }

      a {
        border-radius: 6px;
        width: 2.375rem;
        height: 2.375rem;
        padding: 0.5rem;
        position: relative;

        > span {
          position: absolute;
          top: calc(-1.25rem / 2);
          right: calc(-1.25rem / 2);
          border-radius: 50%;
          width: 1.25rem;
          height: 1.25rem;
          background: ${(props) => props.theme['yellow-dark']};
          color: ${(props) => props.theme.white};
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
          font-size: ${(props) => props.theme['text-s']};
        }
      }

      a:last-of-type {
        background: ${(props) => props.theme['yellow-light']};
      }
    }
  }
`
