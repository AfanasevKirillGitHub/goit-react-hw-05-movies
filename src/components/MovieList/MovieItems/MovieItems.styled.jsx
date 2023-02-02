import { Link } from "react-router-dom";
import styled from "styled-components";

export const MovieItem = styled.li`
  transition: all 0.25s ease-out;

  :hover {
    transform: scale(1.02);
    transition: all 0.25s ease-out;
    box-shadow: 0 5px 20px rgb(255 60 82 / 25%),
      0 10px 20px rgb(255 60 82 / 25%);
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