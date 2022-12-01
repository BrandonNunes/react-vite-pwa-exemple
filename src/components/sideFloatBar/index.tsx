import React from "react";
import {
    NameUser,
    NavContainer,
    NavItem,
    ProfileCard, RouterName,
    SidebarContainer
} from "@/components/sideFloatBar/styles";
import { FaReact, FaUser, FaAngleRight, FaAngleLeft } from "react-icons/fa";
import appStore from "@/store";

const SideFloatBar = () => {
    const { openBar, changebar } = appStore((state) => state)
    return(
        <SidebarContainer opeBar={openBar} >
            <ProfileCard opeBar={openBar} >
                <FaUser color='yellow' size={35} />
                {openBar&&<NameUser>UserName </NameUser>}
                {!openBar&&<FaAngleRight className='action-bar' onClick={changebar}/>}
                {openBar&&<FaAngleLeft className='action-bar' onClick={changebar}/>}
            </ProfileCard>
            <NavContainer>
                <NavItem opeBar={openBar} ><FaReact size={40} />{openBar&&<RouterName>Item</RouterName>}</NavItem>
                <NavItem opeBar={openBar} ><FaReact size={40} />{openBar&&<RouterName>Item</RouterName>}</NavItem>
                <NavItem opeBar={openBar} ><FaReact size={40} />{openBar&&<RouterName>Item</RouterName>}</NavItem>
                <NavItem opeBar={openBar} ><FaReact size={40} />{openBar&&<RouterName>Item</RouterName>}</NavItem>
                <NavItem opeBar={openBar} ><FaReact size={40} />{openBar&&<RouterName>Item</RouterName>}</NavItem>
                <NavItem opeBar={openBar} ><FaReact size={40} />{openBar&&<RouterName>Item</RouterName>}</NavItem>
                <NavItem opeBar={openBar} ><FaReact size={40} />{openBar&&<RouterName>Item</RouterName>}</NavItem>
                <NavItem opeBar={openBar} ><FaReact size={40} />{openBar&&<RouterName>Item</RouterName>}</NavItem>
                <NavItem opeBar={openBar} ><FaReact size={40} />{openBar&&<RouterName>Item</RouterName>}</NavItem>
            </NavContainer>
        </SidebarContainer>
    )
}

export default SideFloatBar;
