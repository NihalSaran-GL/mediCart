import React, { useState } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useNavigate } from "react-router-dom";
import {
    MainHeader,
    LeftSection,
    CenterSection,
    LogoContainer,
    RightSection,
    CustomLink
  } from "./MainHeaderStyles";
  import {useAuth} from '../../../contexts/AuthContexts';
import CustomButton from '../../ReusableComponents/MenuOption';
import Logo from '../../ReusableComponents/Logo';
import { BoxHover } from '../../ReusableComponents/BoxHover';
import { LuFileX } from 'react-icons/lu';
export default function Main_Header(){
    const {currentUser, logout} = useAuth();
    const [userSignedIn,setUserSignedIn] = useState(false);
    const navigate = useNavigate();
    function handleLogoClick(){
        navigate("/")
        return
    }

    function handleLoginClick(){
        navigate("/login")
        if (currentUser){
            setUserSignedIn(true)
        }
        return
    }
    function handleSignupClick(){
        navigate("/signup")
        if (currentUser){
            setUserSignedIn(true)
        }
        return
    }
    function handleUserClick(){
        navigate("/")
        return
    }
    async function handleLogout(){
        await logout();
        if (!currentUser){
            setUserSignedIn(false);
        }
        
        navigate('/');
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
            <CustomButton
                    onClick={() => alert('Button clicked!')}
                    fontSize="20px"
                    bgColor="transparent"
                    color="black"
                    hoverColor="tomato"
                    marginLeft="20px"
                    fontWeight="bold"
            >
            MEDICINES
            </CustomButton>

            <CustomButton
                    onClick={() => alert('Button clicked!')}
                    fontSize="20px"
                    bgColor="transparent"
                    color="black"
                    hoverColor="tomato"
                    marginLeft="20px"
                    fontWeight="bold"
            >
            CONSULT DOCTORS
            </CustomButton>
            




            </CenterSection>
            <RightSection>
            {userSignedIn ? (
                <div style={{display:'flex'}}>
                    <CustomButton
                     onClick={handleUserClick}
                     fontSize="15px"
                     bgColor="transparent"
                     color="black"
                     marginLeft="15px"
            >
                <AccountCircleOutlinedIcon/>
            </CustomButton>
        <CustomButton
            onClick={handleLogout}
            marginLeft="15px"
        >
        Logout
        </CustomButton>
        </div>    
        )
        : (<div style={{display:"flex"}}>
            <CustomButton
                    onClick={handleLoginClick}
                    fontSize="15px"
                    bgColor="transparent"
                    color="black"
                    marginLeft="15px"
            >
            Login
            </CustomButton>
            <CustomButton
                    onClick={handleSignupClick}
                    fontSize="15px"
                    bgColor="transparent"
                    color="black"
                    marginLeft="15px"
            >
            Signup
            </CustomButton>
        </div>)}
            
        <CustomButton
                marginLeft="15px"
            >
            <ShoppingCartOutlinedIcon/>
            </CustomButton>
            
            </RightSection>
            
        </MainHeader>
    
    </>
  );
}
