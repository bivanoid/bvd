import s from "./contact.module.css";
import { useState } from "react";

export default function Contact() {
    const [useName, setUseName] = useState<string>("");
    const [useDesc, setUseDesc] = useState<string>("");
    const noWa: number = import.meta.env.VITE_WA;
    function Send() {
        window.open(
            `https://wa.me/${noWa}?text=Halo, saya ${useName} \n ${useDesc}`,
            "_blank"
        );
    }
    return (
        <section className={s.contact}>
            <div className={s.con_ttl}>
                <h2>Have an idea, project, or opportunity in mind? Let's connect and discuss how we can make it happen <span className="red">★</span>.</h2>
            </div>
            <input 
                type="text" 
                placeholder="Type your Name"
                onChange={(e) => setUseName(e.target.value)}
            />
            <div className={s.con_inp_submit}>
                <textarea 
                    placeholder="Type out Something" 
                    onChange={(e) => setUseDesc(e.target.value)}
                />
                <button onClick={Send}>Submit</button>
            </div>
        </section>
    )
}