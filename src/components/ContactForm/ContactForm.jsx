import css from "./ContactForm.module.css";
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

export default function ContactForm({ onAdd }) {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    onAdd({ ...values, id: nanoid(10) });
    resetForm();
  };

  const ContactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={css.formContainer}>
        <div className={css.inputWrap}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field className={css.input} id={nameFieldId} type="text" name="name" autoComplete="name" />
          <ErrorMessage name="name" component="span" className={css.error} />
        </div>
        <div className={css.inputWrap}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field className={css.input} id={numberFieldId} type="text" name="number" autoComplete="name" />
          <ErrorMessage name="number" component="span" className={css.error} />
        </div>
        <button className={css.button} type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
