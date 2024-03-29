import React from "react";
import Tilt from 'react-tilt';
import brain from "./brain.png";

const Logo = () => {
    return (
        <div className = 'ma4 mt0 tc'>
            <Tilt className="Tilt" options={{ max : 55 }} style={{ height: 150, width: 150 }} > 
            <div className="Tilt-inner br2 shadow-2 pa3">
                <img src={brain} alt="logo" />
                
            </div>
            </Tilt>
        </div>
    )
}
export default Logo;