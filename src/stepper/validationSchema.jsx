import * as Yup from "yup";

export default [
  Yup.object({
    Step1: Yup.string().required("Step1 name is required"),
  }),

  //////////////////////////////////////////////////////////////

  Yup.object({
    Step2: Yup.string().required("Step2 name is required"),
  }),
  ////////////////////////////////////////////////////////////////
  Yup.object({
    Step3: Yup.string().required("Step3 name is required"),
  }),
];
