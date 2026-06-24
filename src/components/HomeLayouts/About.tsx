import s from "./about.module.css";

export default function About() {
    return (
        <section className={s.about}>
                <h2>
                    Hello! My name is Firdhan Abivandya <span className="red">★</span>. I am from
                    Surakarta, Central Java Province, Indonesia.
                    <br />
                    I like to translate my imagination into code and implement it.
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