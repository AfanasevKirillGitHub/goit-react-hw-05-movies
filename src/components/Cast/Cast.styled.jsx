import styled from 'styled-components';

export const CastWrapper = styled.div`
  margin: 0 auto;
  padding: 30px;
`;

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  list-style: none;
  margin: 0 auto;
  max-width: 1200px;
  text-align: center;
`;

export const CastItem = styled.li`
  width: 200px;
  background-color: #ffffff30;
  border-radius: 6px;
`;
export const Photo = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 4px 4px 0 0;
`;
export const Name = styled.p`
  color: #fff;
  margin: 8px;
  font-family: 'Ubuntu';
  font-style: normal;
  font-size: 14px;
`;

export const Character = styled.p`
  color: #fff;
  margin: 8px;
  font-family: 'Ubuntu';
  font-style: normal;
  font-size: 14px;
`;
