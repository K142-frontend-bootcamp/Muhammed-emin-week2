import Styled from 'styled-components';

export const Wrapper = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1450px;
  margin: 0 auto;
`;


export const Input = Styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  &:hover {
    box-shadow: -8px 2px 35px -3px rgba(0,0,0,0.75);
  }
`;

export const ToggleButton = Styled.button`
  background-color: green;
  padding: 12px;
  margin: 12px 0;
  color: white;
  border-radius: 4px;
  border:none;
  cursor: pointer;
  &.active {
    background-color: #aa4444;
  }
`;

export const LoginButton = Styled.button`
  background-color: green;
  padding: 14px 20px;
  margin: 8px 0;
  width: 100%;
  color: white;
  border-radius: 4px;
  border:none;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const LogoutButton = Styled.button`
  background-color: tomato;
  padding: 12px;
  margin: 12px 0;
  color: white;
  border-radius: 4px;
  border:none;
  cursor: pointer;
  &:hover {
    background: red;
  }

`;

export const LoginForm = Styled.div`



padding: 60px;


  & input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}
`;