import styled from "styled-components";

export const TrendWrapper = styled.div`
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 140px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (min-width: 1024px) {
    padding-left: 50px;
    padding-right: 50px;
  }
`;

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