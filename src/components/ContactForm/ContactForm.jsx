import { useDispatch } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import { contactFormValidation } from "../../validation/formValidation";
import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contactsSlice";
import { nanoid } from "nanoid";

const ContactForm = () => {
  const nameId = useId();
  const phoneId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (contact, actions) => {
    dispatch(addContact({ ...contact, id: nanoid() }));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: "", phone: "" }}
      onSubmit={handleSubmit}
      validationSchema={contactFormValidation}
    >
      <Form className={css.form}>
        <div className={css.field}>
          <label className={css.label} htmlFor={nameId}>
            Name
          </label>
          <Field className={css.input} name="name" type="text" id={nameId} />
          <ErrorMessage
            className={css.errorMessage}
            name="name"
            component={"span"}
          />
        </div>
        <div className={css.field}>
          <label className={css.label} htmlFor={phoneId}>
            Number
          </label>
          <Field className={css.input} name="phone" type="phone" id={phoneId} />
          <ErrorMessage
            className={css.errorMessage}
            name="phone"
            component={"span"}
          />
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
