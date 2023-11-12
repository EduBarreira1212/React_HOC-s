interface ISectionWithPProps{
    classNameSection:string;
    children:string;
}

const SectionWithP:React.FC<ISectionWithPProps> = (props) =>{
    const {classNameSection, children} = props
    return <section className={classNameSection}><p>{children}</p></section>
}

export default SectionWithP;