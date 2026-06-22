import About from "../components/About";
import Contact from "../components/Contact";
import Expert from "../components/Expert";
import Projects from "../components/Projects";
import Sidebar from "../components/Sidebar";
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