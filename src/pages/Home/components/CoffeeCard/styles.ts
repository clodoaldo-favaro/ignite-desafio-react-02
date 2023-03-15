import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  width: 100%;
  max-width: 16rem;
  height: 19.375rem;

  background: ${(props) => props.theme.card};

  border-radius: 6px 36px 6px 36px;

  > div {
    position: relative;
    padding: 0 1.5rem 1.25rem 1.5rem;
    top: -1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    gap: 0.4rem;
    position: relative;
    margin-bottom: 1rem;
  }

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-bottom: 0.75rem;
  }

  h4 {
    margin-bottom: 0.5rem;
  }

  p {
    color: ${(props) => props.theme.label};
    text-align: center;
    font-size: ${(props) => props.theme['text-s']};
  }

  footer {
    margin-top: 2rem;

    display: flex;
    justify-content: space-between;
    width: 100%;

    > div:first-of-type {
      display: flex;
      align-items: center;

      p {
        color: ${(props) => props.theme.text};
        font-weight: bold;
        font-size: ${(props) => props.theme['title-m']};
        font-family: 'Baloo 2', cursive;
      }

      p::before {
        content: 'R$';
        margin-right: 0.2rem;
        font-weight: normal;
        font-family: 'Roboto', sans-serif;
        font-size: ${(props) => props.theme['text-s']};
      }
    }

    > div:last-of-type {
      display: flex;
      align-items: center;
      justify-content: end;
      gap: 0.8rem;

      button {
        padding: 0.5rem;
        width: 2.375rem;
        height: 2.375rem;

        display: flex;
        align-items: center;
        justify-content: center;
        background: ${(props) => props.theme['purple-dark']};
        color: ${(props) => props.theme.white};
        border-radius: 8px;
        border: none;
      }

      button > img {
        width: 100%;
        height: 100%;
        margin-bottom: 0;
      }

      button:hover {
        cursor: pointer;
      }
    }
  }
`
