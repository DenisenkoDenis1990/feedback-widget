import styled from '@emotion/styled';

export const Button = styled.button`
  padding: 10px;
  border-radius: 6px;
  font-size: 18px;
  font-weight: normal;
  background-color: white;
  margin-right: 10px;
  width: 90px;
  background-color: ${props => {
    switch (props.option) {
      case 'good':
        return '#15b415';

      case 'neutral':
        return '#dfca0c';
      case 'bad':
        return '#cf3636';

      default:
        return 'white';
    }
  }};
  &:hover {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    cursor: pointer;
  }
  &:focus {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;
