import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.h2`
  margin: 0;
  padding-left: 10px;
  color: #fff;
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 37px;
`;

export const MovieList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
`;

export const MovieItem = styled.li`
  transition: all 0.25s ease-out;

  :hover {
    transform: scale(1.02);
    transition: all 0.25s ease-out;
    box-shadow: 0 5px 20px rgb(255 60 82 / 25%), 0 10px 20px rgb(255 60 82 / 25%)
  }
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
`;

export const MovieImage = styled.img`
  border-radius: 4px;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// export const MovieTitle = styled.p`
//   margin: 0;
//   padding: 4px 0 4px 0;
//   font-family: 'Ubuntu';
//   font-style: normal;
//   font-weight: 400;
//   font-size: 9px;

//   @media (min-width: 768px) {
//      padding: 10px 0 10px 0;
//   }
//    @media (min-width: 1024px) {
//   font-size: 14px;
//   }
//   `

export const TrendWrapper = styled.div`
padding-left: 12px;
padding-right: 12px;
padding-top: 140px;
padding-bottom: 40px;
margin: 0 auto;

@media (min-width: 768px) {
  padding-left: 20px;
  padding-right: 20px;
}
  @media (min-width: 1024px) {
  padding-left: 50px;
  padding-right: 50px;
}
`