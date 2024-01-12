import preloader from "../../../assets/images/6-dots-scale-middle.svg";
import React from "react";

export const Preloader = (props: any) => {
    return  <div style={{backgroundColor: 'red'}}>
    <img src = {preloader}/>
        </div>

}

export default Preloader
