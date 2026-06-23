import s from "./expert.module.css";

export default function Expert() {
    return (
        <section className={s.expert}>
            <div className={s.con_expertise}>
                <h3>What I can do?</h3>
                <div className={s.con_skill}>
                    <h3>01</h3>
                    <h3>Web Development</h3>
                    <span></span>
                    <p>
                        website development
                        and maintenance
                    </p>
                </div>
                <div className={s.con_skill}>
                    <h3>02</h3>
                    <h3>UIUX Designer</h3>
                    <span></span>
                    <p>
                        designing the initial
                        design for the
                        website/application

                    </p>
                </div>
                <div className={s.con_skill}>
                    <h3>03</h3>
                    <h3>Graphic Design</h3>
                    <span></span>
                    <p>
                        creating a poster or
                        graphic asset

                    </p>
                </div>
            </div>
            <ul>
                <li>
                    <p>Projects</p>
                    <h3>07+</h3>
                </li>
                <li>
                    <p>Clients</p>
                    <h3>05</h3>
                </li>
                <li>
                    <p>Experience</p>
                    <h3>03+</h3>
                </li>
            </ul>
        </section>
    )
}