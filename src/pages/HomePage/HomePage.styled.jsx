import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.h2`
  text-align: center;
  margin: 0 0 20px 0;
  color: #fff;

  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 37px;
`;

export const MovieList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;
  list-style: none;
  text-align: center;
`;

export const MovieItem = styled.li`
  background-color: #ffffff30;
  width: 231px;
  border-radius: 4px;
  transition: all 0.25s ease-out;
  :hover {
    transform: scale(1.02);
    transition: all 0.25s ease-out;
    box-shadow: 0 14px 28px rgba(255, 60, 82, 0.25),
      0 10px 10px rgba(255, 60, 82, 0.25);
  }
`;

export const MovieLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: #fff;
  transition: all 0.25s ease-out;
  :hover {
    transition: all 0.25s ease-out;
  }
`;

export const MovieImage = styled.img`
  display: block;
  width: 231px;
  border-radius: 4px 4px 0 0;
`;

export const MovieTitle = styled.p`
  margin: 0;
  padding: 10px 0 10px 0;
`;
