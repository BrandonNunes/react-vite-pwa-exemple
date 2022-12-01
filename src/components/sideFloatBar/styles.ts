import styled, {keyframes} from "styled-components";
import {COLORBAR} from "@/GlobalStyles";

interface Props {
    opeBar: boolean
}

const breatheAnimation = keyframes`
 0% { height: 100px; width: 100px; }
 30% { height: 400px; width: 400px; opacity: 1 }
 40% { height: 405px; width: 405px; opacity: 0.3; }
 100% { height: 100px; width: 100px; opacity: 0.6; }
`
export const SidebarContainer = styled.nav<Props>`
  background-color: ${COLORBAR};
  width: ${prop => prop.opeBar ? '9rem' : '4rem' } ;
  height: 100%;
  border-radius: 10px;
  padding: 5px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  transition: all 0.5s;
`

export const NavContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 0px!important;
  gap: 10px;
`
export const NavItem = styled.li<Props>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${prop => prop.opeBar ? 'left' : 'center'};
  gap: 15px;
  cursor: pointer;
  transition: all 0.5s;
`
export const ProfileCard = styled.div<Props>`
  width: 100%;
  display: flex;
  padding: 5px;
  gap: 5px;
  align-items: center;
  justify-content: ${prop => prop.opeBar ? 'left' : 'center'};
  position: relative;
  .action-bar {
    cursor: pointer;
    color: #dd0000;
    position: absolute;
    right: -2%;
  }
`
export const NameUser = styled.span`
  color: #fff;
  transition: all 0.5s;
`
export const RouterName = styled.span`
  color: #fff;
  transition: all 0.5s;
`

