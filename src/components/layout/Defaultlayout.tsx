import React from "react";
import "./style.css";

interface DefaultlayoutProps{
     children: React.ReactNode
}
const Defaultlayout: React.FC<DefaultlayoutProps> = (props)=>{
     const { children } = props;
     return(
        <div className="container">
          {children}
        </div>
     );
}

export default Defaultlayout;