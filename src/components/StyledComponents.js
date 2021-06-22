import styled from "styled-components";

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
  color: ${(props) => (props.primary ? "#f9f9f9" : "#ee6e7a")};
  background-color: ${(props) => (props.primary ? "#ee6e7a" : "#f9f9f9")};
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

export const CartCard = styled.div`
  width: 5rem;
  height: 2rem;
  border-radius: 15px;
  border: none;
  padding: 1rem;
  padding-bottom: 3rem;
  margin-top: 1.5rem;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgb(253, 232, 236);
  box-shadow: -4px 6px 41px -35px rgba(0, 0, 0, 0.9);
`;

export const CardImg = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 20px;
  border: none;
  padding: 0.5rem;
  /*background-color: #ee6e7a;*/
  background-color: rgb(253, 232, 236);
  margin-left: 1rem;
  margin-top: 1.3rem;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center;
`;
