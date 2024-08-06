import css from "./Contact.module.css";
import { HiUser, HiPhone } from "react-icons/hi2";

export default function ContactList({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.card}>
      <div className={css.contacts}>
        <div className={css.cardWrap}>
          <HiUser size={"18px"} title="contact icon" />
          <p className={css.cardText}>{name}</p>
        </div>
        <div className={css.cardWrap}>
          <HiPhone size={"18px"} title="phone icon" /> 
          <p className={css.cardText}>{number}</p>
        </div>
      </div>
            <button className={css.deleteButton} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}