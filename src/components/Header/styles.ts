import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  height: 6.5rem;
  z-index: 1000;

  background: ${(props) => props.theme.background};

  nav {
    padding: 2rem 0;
    width: 100%;

    > ul {
      display: flex;
      justify-content: space-between;
      list-style: none;

      a {
        display: block;
        height: 100%;
        width: 100%;
      }

      > li {
        height: 2.5rem;
      }

      div {
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 1.2rem;

        li:first-child {
          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 6px;
          background: ${(props) => props.theme['purple-light']};
          color: ${(props) => props.theme['purple-dark']};
          align-self: center;
          height: 2.375rem;
          padding: 0.5rem;
          font-size: ${(props) => props.theme['text-s']};

          img {
            width: 1.375rem;
            height: 1.375rem;
          }
        }

        li:last-child {
          border-radius: 6px;
          width: 2.375rem;
          height: 2.375rem;
          position: relative;
          background: ${(props) => props.theme['yellow-light']};

          a {
            padding: 0.5rem;
          }

          span {
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
      }
    }
  }
`
