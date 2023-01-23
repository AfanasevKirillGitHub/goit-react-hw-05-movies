import { Link } from 'react-router-dom';
import styled from 'styled-components';
import bg from "../../images/bg.png"

export const HomePageWrapper = styled.div`
  background-image: url(${bg});
  background-size: cover;
  padding: 50px 0;
`

export const Title = styled.h2`
  text-align: center;
  margin: 0  0  20px 0;
  color: #fff;
  font-size: 32px;
  line-height: 37px;
`;

export const MovieList = styled.ul`
  margin: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;
  list-style: none;
  text-align: center;
`;

export const MovieItem = styled.li`
  background-color: #000;

  :hover {
    transform: scale(1.02);
    transition: all 0.25s ease-out;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export const MovieLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: #fff;
`;

export const MovieImage = styled.img`
  display: block;
`;

export const MovieTitle = styled.p`
  margin: 0;
  padding: 10px 0 10px 0;
  font-size: 18px;
`;
