import s from "./sidebar.module.css";

export default function Sidebar() {
    return(
        <section className={s.sidebar}>
                <h2>Firdhan <br /> Abivandya<span className="red">.</span></h2>
                <h3>Information</h3>
                <ul>
                    <li>Surakarta, Central Java</li>
                    <li>Junior Developer</li>
                    <li>As s Student</li>
                </ul>
                <h3>Social Media</h3>
                <ul>
                    <li><span className="red">@</span>biezzlenut <a href="">{"[Instagram]"}</a></li>
                    <li><span className="red">@</span>biesztachio <a href="">{"[Telegram]"}</a></li>
                    <li>Firdhan Abivandya <a href="">{"[Linkedin]"}</a></li>
                </ul>
                <a href="https://github.com/bivanoid" className={s.github}>github.com/bivanoid</a>
        </section>
    )
}