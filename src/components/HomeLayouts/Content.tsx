import About from "./About";
import Contact from "./Contact";
import Expert from "./Expert";
import Projects from "./Projects";
import Sidebar from "./Sidebar";
import s from "./content.module.css";

export default function Content() {
    return (
        <section className={s.content}>
            <div className={s.con_sticky}>
                <Sidebar />
            </div>
            <div className={s.con_content}>
                <About />
                <Expert />
                <Projects />
                <Contact />
            </div>
        </section>
    )
}