import { Fragment } from "react";
import { useState } from "react";
import styles from "../CSS/contact.styl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [state, setState] = useState({
    fName: "",
    lName: "",
    email: "",
    message: ""
  });
  const changeInput = e => {
    e.preventDefault();
    console.log(state.fName);
    return setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };
  const renderFormTitle = () => {
    return (
      <Fragment>
        <h2>Contact Form</h2>
        <p>
          Please fill out the form and I will get back to you as soon as I can.
          Please allow 24 to 48 hours for me to respond.
        </p>
      </Fragment>
    );
  };
  const renderFormParts = () => {
    return (
      <Fragment>
        <div className={styles["form__wrap"]}>
          <label htmlFor="fName">First Name</label>
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            onChange={e => changeInput(e)}
          />
        </div>

        <div className={styles["form__wrap"]}>
          <label htmlFor="lName">Last Name</label>
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            onChange={e => changeInput(e)}
          />
        </div>
        <div className={styles["form__wrap"]}>
          <label htmlFor="email">Email </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            required
            onChange={e => changeInput(e)}
          />
          <input type="text" name="_gotcha" style={{ display: "none" }} />
        </div>
        <div className={styles["form__wrap"]}>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            placeholder="Message"
            onChange={e => changeInput(e)}
          />
        </div>
      </Fragment>
    );
  };
  return (
    <div className={styles["contact"]}>
      <div className={styles["flex__area"]}>
        <div className={styles["contact__header"]}>
          <h2>Resume</h2>
          <span>
            <FontAwesomeIcon icon={faDownload} size="1x" />
          </span>
          <div className={styles["decor"]}>
            <h2>Erik Bridges</h2>
          </div>
        </div>
        <div className={styles["contact__form"]}>
          <form action="https://formspree.io/erikzb7@gmail.com" method="POST">
            <div className={styles["form__title"]}>{renderFormTitle()}</div>
            {renderFormParts()}
            <div className={styles["form__btn"]}>
              <button>Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
/* <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScqeWqD2M7oxMLPH5aitlQqddwgQtktSzH_BdeiBUP6pwbing/viewform?embedded=true"
            scrolling="no"
            width="100%"
            height="800px"
            marginheight="0"
            marginwidth="0"
            scrolling="no"
          >
            Loading...
          </iframe> */
