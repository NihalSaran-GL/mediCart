import React from "react";

export default function Logo({image,logoName,width,margin}){
    return(
      <>
      <img src ={image} alt={logoName} style={{width: width,margin:margin}} />
      </>
    )
}