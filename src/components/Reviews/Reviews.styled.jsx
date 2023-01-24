import styled from 'styled-components';

export const ReviewsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 20px;
  list-style: none;
  margin: 0 auto;
  max-width: 800px;
  text-align: center;
`;

export const ReviewsItem = styled.li`
  padding: 20px;
  background-color: #ffffff80;
  border-radius: 50px;
`;

export const Author = styled.b`
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: black;
`;
export const Content = styled.p`
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: black;
  font-weight: bold;
`;
