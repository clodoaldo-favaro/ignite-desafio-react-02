import styled from 'styled-components'

export const OrderSuccessContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }

  .header {
    h2 {
      color: ${(props) => props.theme['yellow-dark']};
      font-size: ${(props) => props.theme['title-l']};
    }

    p {
      font-size: ${(props) => props.theme['text-l']};
    }
  }

  .deliveryInfo {
    margin-top: 2.5rem;
    width: 130%;
    max-width: 526px;
    height: 270px;
    position: relative;

    border-radius: 6px 36px;
    background: linear-gradient(
      to right bottom,
      ${(props) => props.theme.yellow},
      ${(props) => props.theme.purple}
    );

    .inner {
      background: ${(props) => props.theme.background};
      width: calc(100% - 2px);
      height: calc(100% - 2px);
      border-radius: 6px 36px;
      padding: 2.5rem;
      position: absolute;
      left: 1px;
      top: 1px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 2rem;

      .row {
        display: flex;
        align-items: center;
        gap: 0.75rem;

        .icon-container {
          width: 2rem;
          height: 2rem;
          padding: 0.5rem;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }

      .purple-bg {
        background-color: ${(props) => props.theme.purple};
      }

      .yellow-bg {
        background-color: ${(props) => props.theme.yellow};
      }

      .yellow-dark-bg {
        background-color: ${(props) => props.theme['yellow-dark']};
      }

      .bold {
        font-weight: bold;
      }
    }
  }
`
