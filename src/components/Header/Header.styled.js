import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const HeaderBlock = styled.div`
  /* max-width: 1200px; */
  display: flex;
  padding: 10px;

  margin-left: auto;
  margin-right: auto;

  color: white;
  height: 60px;
  background: blue;

  align-items: center;
  justify-content: center;
`;
export const HeaderWrapper = styled.div`
  /* max-width: 1200px; */

  padding: 30px;
  font-weight: 600;
  font-size: 26px;
  justify-content: center;
  /* margin-left: 30px; */
  color: white;

  /* padding-bottom: 24px; */
  & a {
    color: white;
    padding: 15px;
    margin: 20px;
  }
  & a:hover {
    background: white;
    color: blue;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  line-height: 1.14;
  text-decoration: none;
  letter-spacing: 0.02em;
  border-radius: 5px;
  color: white;
  padding: 30px;
  margin: 20px;
  opacity: 0.9;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &.active {
    /* background: rgba(181, 175, 181, 0.5); */

    color: white;
    /* box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.5),
      0px 2px 2px 0px rgba(0, 0, 0, 0.54), 0px 1px 5px 0px rgba(0, 0, 0, 0.52); */
    opacity: 1;
  }
`;
