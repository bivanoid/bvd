import Alert from "../CommontLayouts/Alert";
import s from "./contact.module.css";
import { useEffect, useState } from "react";
export default function Contact() {
  const [useName, setUseName] = useState<string>("");
  const [useDesc, setUseDesc] = useState<string>("");
  const [useCount, setCount] = useState<number>(0);
  const [useValidation, setValidation] = useState<boolean>(false);
  const noWa: number = import.meta.env.VITE_WA;
  function Send() {
    if (useName === "" || useDesc === "") {
      setValidation(true);
    } else {
      setValidation(false);
      
      window.open(
          `https://wa.me/${noWa}?text=Halo, saya ${useName} \n \n ${useDesc}`,
          "_blank"
      );
      

      setUseName("");
      setUseDesc("");
    }
  }

  useEffect(() => {
    if (useValidation) {
      const timer = setTimeout(() => {
        setValidation(false)
      }, 10000)
      return () => clearTimeout(timer);
    }
  }, [useValidation]);

  useEffect(() => {
    if (useValidation) {
      setCount(10)

      const interval = setInterval(() => {
        setCount((prev: number) => {
          if (prev < 1) {
            clearInterval(interval)
            return 0
          }
          return prev - 1
        })
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [useValidation])
  return (
    <section className={s.contact}>
      <div
        style={
          {
            top: useValidation ? "calc(42px)" : "-100%",
            scale: useValidation ? "1" : "0.2",
            opacity: useValidation ? "1" : "0.2"
          }
        }
        onClick={() => setValidation(false)}
        className="con_alert"
      >
        <Alert typeStatus={1} textAlert="Don't leave this form empty" count={useCount}/>
      </div>
      <div className={s.con_ttl}>
        <h2>
          Have an idea, project, or opportunity in mind? Let's connect and
          discuss how we can make it happen <span className="red">★</span>.
        </h2>
      </div>
      <input
        type="text"
        placeholder="Type your Name"
        value={useName}
        onChange={(e) => setUseName(e.target.value)}
      />
      <div className={s.con_inp_submit}>
        <textarea
          placeholder="Type out Something"
          value={useDesc}
          onChange={(e) => setUseDesc(e.target.value)}
        />
        <button onClick={Send}>Submit</button>
      </div>
    </section>
  );
}
