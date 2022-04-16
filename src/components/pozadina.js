import Styled from "./pozadina.module.css"

export const Pozadina = ({
    children
}) => {
    return (
        <section className={Styled.Section}>
            <div className={Styled.center}>
                <div className={Styled.container}>
                    {children}
                </div>
            </div>
            <img className={Styled.EfekatSaStraneLijevo} src="./images/prvi.png" alt="efekatlijevo" />
            <img className={Styled.EfekatSaStraneDesno} src="./images/prvi2.png" alt="efektdesno" />
        </section>
    )
}