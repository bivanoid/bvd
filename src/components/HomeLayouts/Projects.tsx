import s from "./projects.module.css";
import { Link } from "react-router-dom";
import { DataProjects } from "../../data/dataProjects"

export default function Projects() {
    // const [pick, setPick] = useState<string>("")

    // useEffect(() => {
    //     const PickProject = () => {
    //         console.log(pick)
    //     }

    //     PickProject();
    // }, [pick]);

    return (
        <section className={s.projects}>
            <div className={s.con_ttl}>
                <h2>
                    Here are some selected projects I’ve worked on <span className="red">★</span>, both individually and in groups
                </h2>
            </div>
            <div className={s.con_items}>
                {DataProjects.map((item) => (
                    <Link
                        to={`/projects/${item.id}`}
                        key={item.id}
                        className={s.item}
                    >
                        <div className={s.con_name}>
                            <h3>{item.name}</h3>
                            <p>{item.desc}</p>

                            <div className={s.con_lang}>
                                {item.tech.map((tech) => (
                                    <p key={tech.lang}>
                                        <span className={`red ${s.red}`}>{"["}</span>{tech.lang}<span className={`red ${s.red}`}>{"]"}</span>
                                    </p>
                                ))}
                            </div>
                        </div>

                        <h3>{item.type}</h3>
                    </Link>
                ))}
            </div>
        </section>
    )
}