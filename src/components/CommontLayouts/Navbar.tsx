import { Link } from "react-router-dom";
import s from "./navbar.module.css";

interface NavbarProps {
    ttl?: string;
    nav?: boolean;
    backTo: string;
}

export default function Navbar({
    ttl = "bivanoid",
    nav = false,
    backTo = "/"
}: NavbarProps) {
    return (
        <nav className={s.nav}>
            <p>. :</p>
            
            <div className={s.logo}>
                {nav ? 
                    <Link className={s.back} to={backTo}><span className="red">[</span>back<span className="red">]</span></Link> : ""
                }
                {ttl}</div>
            <p>: .</p>
        </nav>
    )
}
