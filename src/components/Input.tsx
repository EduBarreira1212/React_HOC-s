import withHover from "../HOC's/withHover";
import SectionWithP from "./SectionWithP";

interface IInputProps{
    type:string;
    placeholder:string;
    autofocus:boolean;
    onMouseOver:() => void;
    onMouseLeave:() => void;
    hoveredState:boolean;
    inputStyle:any;
}

const Input:React.FC<IInputProps> = (props) => {
    const {type, placeholder, autofocus, onMouseOver, onMouseLeave, hoveredState, inputStyle} = props;
    

    return (
        <>
            <input onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} type={type} placeholder={placeholder} autoFocus={autofocus} style={inputStyle}/>
            {hoveredState ? <SectionWithP classNameSection='message-box'>Please, Insert a number</SectionWithP> : null}
        </>
    );
    
}

export default withHover(Input);