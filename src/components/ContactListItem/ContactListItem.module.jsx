import styled from '@emotion/styled';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  padding: 7px;
`;

export const ContactName = styled.p`
  margin: 0;
  font-weight: 500;
  text-align: start;
`;

export const ContactNumber = styled.span`
  margin-left: 10px;
  text-align: end;
`;

export const Button = styled.button`
  margin: 5px;
  padding: 4px 14px;
  border-radius: 5px;
  cursor: pointer;
`;
export const FlexWrap = styled.div`
 display: flex;
flex-wrap: wrap;
 align-items: center;
   justify-content: center;
 //justify-content: space-between;
// gap: 5px;
`;