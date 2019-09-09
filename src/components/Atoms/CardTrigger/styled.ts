import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ededed;
  padding: .6rem;
  border-radius: 0 0 0 20px;
  box-shadow: 0px 6px 9px 5px rgba(0,0,0,0.17);
  max-width: 300px;
  position: relative;
  overflow: hidden;
  // no the best solution but fast 
  & > span {
    background-color: grey; 
    width: 50px;
    height: 50px;
    position: absolute;
    right: -24px;
    bottom: -24px;
    transform: rotate(45deg);
    
    & > span {
      font-size: .7rem;
      position: absolute;
      transform: rotate(-45deg);
      color: white;
      left: 6px;
      top: 18px;
    }
  }

  &:hover {
    border-color: orangered;
    & > span {
      cursor: pointer;
      background-color: orangered; 
    }
  }
`;

export const CardContent = styled.div`
  color: #444;
  font-family: Verdana, sans-serif, Arial;
  
  margin: 5px;
  line-height: 1.5;

  & > p {
    font-size: .8rem;
    margin: 0;
  }

  & > h3 {
    font-size: .9rem;
    margin: 0;
  }
  
`;