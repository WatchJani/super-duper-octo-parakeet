import Styled from "./button.module.css"

export const Button=({
    text
})=>{

    const Action=()=>{
        console.log("cao")
    }

    return(
        <button className={Styled.button} onClick={()=>{Action()}}>{text}</button>
    )
}