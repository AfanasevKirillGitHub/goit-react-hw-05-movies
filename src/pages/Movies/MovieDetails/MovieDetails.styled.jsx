import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const GoBackLink = styled(NavLink)`
  display: inline-block;
  margin-top: 10px;
  margin-left: 30px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  padding: 2px 15px;
  border-radius: 60px;
  font-size: 18px;
  font-weight: 500;
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 500;
  background-color: #e13c52;
  color: #fff;

  &:hover,
  &:focus {
    transform: scale(1.1);
    transition: all 0.25s ease-out;
    color: #e13c52;
    background-color: #fff;
  }

  @media (min-width: 768px) {
    flex-direction: column;
    font-size: 24px;
    padding: 4px 18px;
    margin-top: 20px;
    margin-left: 50px;
  }
`;

export const MovieDetailsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px 30px;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
    padding: 20px 50px;
  }
`;

export const MovieDetailsImage = styled.img`
  display: block;
  width: 260px;
  border-radius: 8px 8px 0px 0px;

  @media (min-width: 768px) {
    width: 320px;
    border-radius: 8px 0px 0px 8px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #ffffff30;
  border-radius: 0px 0px 8px 8px;
  width: 320px;
  padding: 15px;

  @media (min-width: 768px) {
    border-radius: 0px 8px 8px 0px;
  }
`;

export const TitleInfo = styled.h2`
  font-family: 'Ubuntu';
  font-style: normal;
  font-size: 18px;
  color: #fff;
  text-align: center;
  margin: 15px 0 25px 0;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

export const SubTitle = styled.h3`
  font-family: 'Ubuntu';
  font-style: normal;
  font-size: 18px;
  color: #fff;
  margin: 0 0 10px 0;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const Text = styled.p`
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #fff;
  margin: 0;
  line-height: 140%;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const InfoList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 80px;
  list-style: none;
  margin: 0;
`;
export const InfoLink = styled(NavLink)`
  display: inline-block;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  padding: 2px 15px;
  border-radius: 60px;
  font-size: 18px;
  font-weight: 500;
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 500;
  background-color: #e13c52;
  color: #fff;

  &.active {
    color: #e13c52;
    background-color: #fff;
    transition: all 1s ease-out;
  }

  &:hover:not(.active),
  &:focus:not(.active) {
    transform: scale(1.1);
    transition: all 0.25s ease-out;
    color: #e13c52;
    background-color: #fff;
  }

  @media (min-width: 768px) {
    flex-direction: column;
    font-size: 24px;
    padding: 4px 18px;
  }
`;
