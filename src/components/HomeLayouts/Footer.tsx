import s from "./footer.module.css"
import Logo from "../../assets/icon.svg?react"
import FloatingIcon from "../CommontLayouts/FloatingIcon"

export default function Footer() {
    return(
        <footer className={s.footer}>
            <Logo/>
            <div className={s.con_footer}>
                <p>
                    Creative developer passionate about building
                    exceptional digital experiences with modern
                </p>
                <span></span>
                <p>
                    © 2026 Firdhan Abivandya. All rights reserved.
                </p>
            </div>
            <div className={s.bottom}>
             	<FloatingIcon positionAbsolute={false} rotateIcon="270deg" positionLeft={true} valueInline="0px"/>
             	<FloatingIcon positionAbsolute={false} rotateIcon="180deg" positionLeft={false} valueInline="0px"/>
            </div>
        </footer>
    )
}