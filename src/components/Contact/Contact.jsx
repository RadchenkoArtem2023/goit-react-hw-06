import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { FaUserAlt, FaPhoneAlt } from "react-icons/fa";
import styles from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={styles.item}>
      <div className={styles.info}>
        <p className={styles.text}>
          <FaUserAlt className={styles.icon} /> {contact.name}
        </p>
        <p className={styles.text}>
          <FaPhoneAlt className={styles.icon} /> {contact.phone}
        </p>
      </div>
      <button onClick={handleDelete}>Видалити</button>
    </li>
  );
};

export default Contact;
