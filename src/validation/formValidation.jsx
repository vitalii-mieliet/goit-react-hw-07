import * as Yup from "yup";

export const contactFormValidation = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name is too short (min length - 2 chars)")
    .max(50, "Name is too long (max length - 50 chars)")
    .required("Name is required"),

  phone: Yup.string()
    .required("Phone number is required")
    .matches(
      new RegExp("^\\+?[0-9](?:[0-9-]*[0-9])?$"),
      "Use digits and dashes only. No dash at the start or end."
    )
    .min(7, "Phone number is too short")
    .max(20, "Phone number is too long"),
});
