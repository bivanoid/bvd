import { useParams } from "react-router-dom";
import s from "./detailedProject.module.css";
import DataProjects from "../../data/project_data.json";
import Navbar from "../CommontLayouts/Navbar";

export default function DetailedProject() {
    const { id } = useParams();

    const project = DataProjects.projects.find((item) => item.id === id);


    if (!project) {
        return <h2>404 Not Found</h2>
    }

    return (
        <section className={s.article}>
            <Navbar ttl={`Opening : ${project.name}`} nav={true} backTo={"/"} />
            <div className={s.con_article}>
                <div className={s.header}>
                    <h1>{project?.name}</h1>
                    <h2>{project?.type}</h2>
                </div>
                <main>
                    <div className={s.con_sticky}>
                        <div className={s.sticky}>
                            <div className={s.con_sticky_content}>
                                <div className={s.img} style={{
                                    background: `url(${project?.image})`,
                                    backgroundPosition: "center",
                                    backgroundSize: "cover"
                                }}></div>
                                <h3>
                                    {project?.desc}
                                </h3>
                                <span className={s.cross}></span>
                                <h3>Tech used</h3>
                                <div className={s.con_lang}>
                                    {project?.tech.map((tech) => (
                                        <p key={tech.lang}>
                                            <span className={`red ${s.red}`}>{"["}</span>{tech.lang}<span className={`red ${s.red}`}>{"]"}</span>
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <a href={project?.link}>{project?.textBtn}</a>
                        </div>
                    </div>
                    <div className={s.con_main}>
                        <div className={s.details}>
                            {project?.detail.map((detail, idx) => (
                                <p 
                                    key={idx}
                                    dangerouslySetInnerHTML={{ __html: detail }}
                                />
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </section>
    )
}