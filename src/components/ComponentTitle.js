import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem 0;
  justify-content: center;
  height: 60px;
  margin: 1rem 0 0 0;
  border-bottom: 1px solid #bbb;
`;

const ComponentTitle = ({ title, children }) => {
  return (
    <StyledDiv>
      <h3>{title}</h3>
      {children}
    </StyledDiv>
  );
};

export default ComponentTitle;
