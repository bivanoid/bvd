import s from "./projects.module.css";

interface Tech {
    lang: string
}

interface ProjectsType {
    name: string,
    desc: string,
    link: string,
    type: string,
    tech: Tech[]
}

export default function Projects() {


    const Projects: ProjectsType[] = [
        {
            name: "Bicture",
            link: "https://github.com/bivanoid/bicture-app",
            desc: "Mini Social Media Apps",
            type: "Aplication",
            tech: [
                { lang: "JAVA" },
                { lang: "XML" },
                { lang: "FIREBASE" }
            ]
        },
        {
            name: "DoIt",
            link: "https://bivanoid.github.io/DoIt/",
            desc: "To do List Website With Weather API Intergration",
            type: "Website",
            tech: [
                { lang: "TSX" },
                { lang: "REACT" },
            ]
        },
        {
            name: "Riyadh Learning",
            link: "https://github.com/bivanoid/Riyadh-Al-quran",
            desc: "Website to Learn Al-Quran with API KEMENAG",
            type: "Website",
            tech: [
                { lang: "PHP" },
                { lang: "MYSQL" },
            ]
        },
        {
            name: "Loom & Yarn",
            link: "https://github.com/bivanoid/Loom-Yarn",
            desc: "UMKM Digital Platform",
            type: "Website",
            tech: [
                { lang: "PHP" },
                { lang: "JS" },
                { lang: "MYSQL" },
            ]
        },

    ]

    return (
        <section className={s.projects}>
            <div className={s.con_ttl}>
                <h2>
                    Here are some selected projects I’ve worked on <span className="red">★</span>, both individually and in groups
                </h2>
            </div>
            <div className={s.con_items}>
                {Projects.map((item) => (
                    <a key={item.name} href={item.link} className={s.item}>
                        <div className={s.con_name}>
                            <h3>{item.name}</h3>
                            <p>{item.desc}</p>
                            <div className={s.con_lang}>
                                {item.tech.map((lang) => (
                                    <p key={lang.lang}><span className={`red ${s.red}`}>[</span>{lang.lang}<span className={`red ${s.red}`}>]</span></p>
                                ))}
                            </div>
                        </div>
                        <h3>{item.type}</h3>
                    </a>
                ))}
            </div>
        </section>
    )
}