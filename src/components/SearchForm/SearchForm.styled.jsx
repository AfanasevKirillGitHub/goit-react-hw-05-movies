import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (min-width: 768px) {
    gap: 30px;
  }
`;

export const SubmitButton = styled.button`
  align-items: center;
  padding-top: 5px;
  cursor: pointer;
  position: relative;
  width: 60px;
  height: 30px;
  font-size: 20px;
  color: white;
  border: none;
  border-radius: 20px;
  background: linear-gradient(to right, #e13c52 50%, transparent 50%);
  background-color: rgba(0, 0, 0, 1);
  background-size: 200% 100%;
  background-position: 100% 0;
  transition: all 0.5s ease;

  :before {
    position: absolute;
    justify-content: center;
    top: 2px;
    bottom: 2px;
    left: 2px;
    right: 2px;
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
  @media (min-width: 767px) {
    height: 37px;
    width: 80px;
  }
`;

export const Input = styled.input`
  text-align: center;
  padding: 5px 10px;
  font-size: 14px;
  margin-top: 0;
  outline: none;
  border-color: black;
  border-radius: 20px;

  width: 180px;

  :focus {
    outline: none;
    border-color: #e13c52;
  }

  @media (min-width: 767px) {
    width: 250px;
    font-size: 20px;
  }
`;
