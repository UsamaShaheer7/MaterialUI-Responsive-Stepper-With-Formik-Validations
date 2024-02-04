import React from "react";

const Step1 = ({ formik }) => {
  return (
    <>
      <div>
        <div>Step1 input</div>
        <input
        className="border-black border-2"
          name="Step1"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.Step1}
        />
        {formik.touched.Step1 && formik.errors.Step1 ? (
          <div>{formik.errors.Step1}</div>
        ) : null}
      </div>
    </>
  );
};

export default Step1;
