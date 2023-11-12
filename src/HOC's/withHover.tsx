import { useState } from "react";


const withHover = (Component:any) =>{
    const WithHover = (props:any) =>{

        const [isHovered, setIsHovered] = useState(false);

        const handleOnMouseOver = () => {
            setIsHovered(true);
        }

        const handleOnMouseLeave = () => {
            setIsHovered(false)
        }
        
        const inputStyle = {
            border: isHovered ? "2px solid" : "1px solid #ccc",
            backgroundColor: isHovered ? "red" : "white"
        };

        return <Component {...props} onMouseOver={handleOnMouseOver} onMouseLeave={handleOnMouseLeave} hoveredState={isHovered} inputStyle={inputStyle}/>
    }

    return WithHover;
}

export default withHover;