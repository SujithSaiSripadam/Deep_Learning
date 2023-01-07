import React from "react";
import { ReactDOM } from "react";
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';
function nav() {
    return(

           <nav className="Nav">
           <img src = "" width="50" height="50" alt="farm"  ></img>
                <ul>
                    <a href="#" className="user"><PersonRoundedIcon sx={{fontSize:16 , alignItems : "center" ,display : "inline-flex",paddingRight:"5px"   }}/>User</a>
                    <a href="#" className="reg"> <AppRegistrationRoundedIcon sx={{fontSize:16 ,alignItems : "center" , display : "inline-flex" ,paddingRight:"5px"   }}/>Register</a>
                    <a href="#" className="reg"> <LoginRoundedIcon sx={{fontSize:16 ,alignItems : "center" , display : "inline-flex" ,paddingRight:"5px"  }}/>Login</a>     
                </ul>
           </nav>


    );
}

export default nav ;