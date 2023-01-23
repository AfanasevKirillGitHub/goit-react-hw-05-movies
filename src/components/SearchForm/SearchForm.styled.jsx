import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center; 
  align-items: center;
  gap: 25px;
  /* width: 150px; */
`;

export const SubmitButton = styled.button`
  cursor: pointer;
  position: relative;
  width: 150px;
  height: 37px;
  font-size: 20px;
  line-height: 1.5;
  padding: 2px 10px;
  color: white;
  background: white;
  border: none;
  border-radius: 15px;
  background: linear-gradient(to right, #E13C52 50%, transparent 50%);
  background-color: rgba(0, 0, 0, 1);
  background-size: 200% 100%;
  background-position: 100% 0;
  transition: all 0.5s ease;

  :before {
    position: absolute;
    font-size: 20px;
    letter-spacing: 3px;
    justify-content: center;
    top: 2px;
    bottom: 2px;
    left: 2px;
    right: 2px;
    display: block;
    border-radius: 15px;
    background-color: rgba(0, 0, 0, 0.3);
  }
  :active,
  :focus,
  :hover {
    border: none;
    background-position: 0 0;
    color: white;
    transition: all 0.5s ease;
  }
`;

export const Input = styled.input`
text-align: center;
  padding: 5px 10px;
  font-size: 20px;
  margin-top: 0;
  outline: none;
  border-color: black;
  border-radius: 20px;
  width: 250px;

  :focus {
    outline: none;
    border-color: #E13C52;
  }
`;
