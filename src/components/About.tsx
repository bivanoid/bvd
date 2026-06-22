import s from "./about.module.css";

export default function About() {
    return (
        <section className={s.about}>
                <h2>
                    Hello! My name is Firdhan Abivandya <span className="red">★</span>. I am from
                    Surakarta, Central Java Province, Indonesia.
                    <br />
                    I have been studying various programming
                    languages such as C#, JavaScript, and others.
                </h2>
                <ul>
                    <li><span className="red">[</span>University<span className="red">]</span></li>
                    <li>Pignateli Triputra University [IDN]</li>
                    <li>Software Engineering</li>
                    <li>Surakarta City</li>
                </ul>
        </section>
    )
}