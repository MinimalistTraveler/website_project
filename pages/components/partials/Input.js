import React from "react";
import styles from "../../CSS/contact.styl";
function Input({ name, val, placeholder }) {
  return (
    <div className={styles["form__wrap"]}>
      <label htmlFor={name}>{placeholder}</label>
      <input type="text" placeholder={placeholder} />
    </div>
  );
}

export default Input;
