import Styled from "./global.module.css"
import { Pozadina } from "./components/pozadina"
import { Nav } from "./components/nav/nav"
import { Button } from "./components/button/button"
import { Section2 } from "./components/section2/section2"

export const App = () => {
    return (
        <>
            <Nav />
            <Pozadina>                
                    <div className={Styled.centriraj}>
                        <h1 className={Styled.naslov}>Atletski klub Sloboda Novi Grad</h1>
                        <p className={Styled.paragraf}>Okupljanje što većeg broja sportista, stručnih sportskih radnika i drugih zainteresovanih lica, radi omasovljavanja, popularizacije, razvoja i unapređenja atletskog sporta</p>
                        <Button text={"POGLEDAJ VIŠE"} />
                    </div>
                    <div className={Styled.Trkac}>
                        <img className={Styled.SlikaTrkaca} src="./images/trkac.png" alt="trkac"/>
                    </div>
            </Pozadina>
            <Section2 />
        </>
    )
}