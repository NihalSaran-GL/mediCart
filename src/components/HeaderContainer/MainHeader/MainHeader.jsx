import React from 'react';
import { useNavigate } from "react-router-dom"
import {
    MainHeader,
    LeftSection,
    CenterSection,
    LogoContainer,
    MenuOption,
    RightSection,
    CustomLink
  } from "./MainHeaderStyles";
import Logo from '../../ReusableComponents/Logo';
import { BoxHover } from '../../ReusableComponents/BoxHover';
export default function Main_Header(){
    const navigate = useNavigate();
    function handleLogoClick(){
        navigate("/")
        return
    }
        
  return (
    
    <>
        <MainHeader>
            <LeftSection>
                <BoxHover onClick={handleLogoClick}>
                        <LogoContainer>
                            <Logo
                             image="https://www.1mg.com/images/tata_1mg_logo.svg"
                             logoName="1mg"
                             width='80px'
                             margin='1px'
                            />
                        </LogoContainer>
                </BoxHover>
            </LeftSection>
            <CenterSection>
                <MenuOption>
                    MEDICINES
                </MenuOption>
                <MenuOption>
                    CONSULT DOCTORS
                </MenuOption>
            </CenterSection>
            <RightSection>
                <CustomLink href=''>Login</CustomLink>
                <CustomLink href=''>Sign Up</CustomLink>
                <CustomLink href=''>Cart</CustomLink>
            </RightSection>
            
        </MainHeader>
    
    </>
  );
}
