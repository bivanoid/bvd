import { Link } from "react-router-dom";
import s from "./navbar.module.css";

interface NavbarProps {
    ttl?: string;
    nav?: boolean;
    backTo?: string;
}

export default function Navbar({
    ttl = "bivanoid.site",
    nav = false,
    backTo = "/"
}: NavbarProps) {
    return (
        <nav className={s.nav}>
            {/*<p>. :</p>*/}
            
            <Link to={backTo} className={s.logo}>
                {nav ? 
                    <div className={s.back} ><span className="red">[</span>back<span className="red">]</span></div> : ""
                }
                {ttl}</Link>
            {/*<p>: .</p>*/}
            
        </nav>
    )
}
