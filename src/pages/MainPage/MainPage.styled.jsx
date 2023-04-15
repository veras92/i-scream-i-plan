import styled from '@emotion/styled';

export const Svg = styled.svg`
  fill: transparent;
  stroke: #0c0000;
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
/* 
  &:hover,
  &:focus {
    stroke: rgba(17, 17, 17, 0.1);
  } */
`;



export const ArrowLeft = styled.button `
  border: none;
   background-color: transparent;   
  position: absolute;
  bottom: -50%;
  right: 49%;
  transform: translateX(-50%);  
`;

export const ArrowRight = styled.button `
    border: none;
   background-color: transparent;
   position: absolute;
   bottom: -50%;
   left: 51%;
   transform: translateX(-50%);
   margin-left:24px;
  
`;

export const SliderContainer = styled.div `
  width: 580px;
  height: 187px;
  border: 1px solid rgba(17, 17, 17, 0.1);
  border-radius: 8px;
  padding: 32px;
  height: 187px;
  margin-right: 24px;
  display: flex;
  column-gap: 18px;
  position: relative;
`;

export const Avatar = styled.img `
    border-radius: 50%;
    max-width: 50px;
    height: 50px; 
    object-fit: cover;
    
`;


export const Comment = styled.p `
  
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.3;
  /* or 129% */

  color: rgba(17, 17, 17, 0.7); 
  margin-top: 24px;

`;

export const Name = styled.h3 `
  
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  /* identical to box height, or 100% */

  margin-bottom: 13px;

  color: #343434; 

`;