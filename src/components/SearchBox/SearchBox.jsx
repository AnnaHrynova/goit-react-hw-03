import css from "./SearchBox.module.css"
import { useId } from "react"

export default function SearchBox({ value, onFilter }) {
  const filterId = useId();
return(
  <div className={css.inputWrap} >
    <p className={css.label} htmlFor="filterId">Find сontacts by name</p>
    <input className={css.input} id={filterId} type="text" value={value} onChange={(e) => onFilter(e.target.value)} />
  </div>
)
}