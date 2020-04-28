import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledHeader = styled.div`
  padding: 3rem;
  text-align: center;
`;

const Header = ({ title }) => {
  return (
    <StyledHeader>
      <h2>{title}</h2>
      <hr />
    </StyledHeader>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
