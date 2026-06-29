import { useEffect, useState } from "react";
import s from "./Alert.module.css"

interface Props {
  typeStatus: number,
  textAlert: string,
  count: number
}

export default function Alert({ typeStatus, textAlert, count }: Props) {

  const [useClassName, setClassName] = useState<string>("")

  useEffect(() => {
    switch (typeStatus) {
      case 1:
        setClassName("var(--cl3)")
        break;
      case 2:
        setClassName("yellow")
        break;
      case 3:
        setClassName("green")
        break;
      default:
        console.log("0")
        break;
    }
  }, [typeStatus])

  return (
    <div className={`${s.alert}`}>
      <div style={{background: `${useClassName}`}} className={`${s.status} dot`}></div>
      <p>{ textAlert }</p>
      <p>{ count }s</p>
    </div>
  )
}
