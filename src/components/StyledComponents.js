import styled, { css } from 'styled-components';

export const Search = styled.input`
  width: 95%;
  padding: 1rem;
  border: none;
  border-radius: 12px;
  background-color: rgb(253, 232, 236);
`;

export const Button = styled.button`
  background-color: rgb(253, 232, 236);
  color: #ee6e7a;
  border: none;
  border-radius: 12px;
  padding: 0.75rem;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const CategoryButton = styled.button`
  width: 80px;
  heigth: 35px;
  padding: 0.5rem;
  margin-right: 15px;
  border-radius: 20px;
  border: none;
  color: ${(props) => (props.primary ? '#f9f9f9' : '#ee6e7a')};
  background-color: ${(props) => (props.primary ? '#ee6e7a' : '#f9f9f9')};
  box-shadow: -4px 6px 41px -14px rgba(0, 0, 0, 0.9);
  &:hover {
    transition: 1s;
    color: #f9f9f9;
    background-color: #ee6e7a;
  }
`;

export const Card = styled.div`
  width: 24rem;
  heigth: 20px;
  border-radius: 40px;
  border: none;
  padding: 0.4rem;
  background-color: #f9f9f9;
  box-shadow: -4px 6px 41px -35px rgba(0, 0, 0, 0.9);
`;
