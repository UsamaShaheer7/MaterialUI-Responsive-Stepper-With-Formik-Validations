import React from "react";

const Step2 = ({ formik }) => {
  return (
    <>
      <div>
        <div>Step2 input</div>
        <input
         className="border-black border-2"
          name="Step2"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.Step2}
        />
        {formik.touched.Step2 && formik.errors.Step2 ? (
          <div>{formik.errors.Step2}</div>
        ) : null}
      </div>
    </>
  );
};

export default Step2;
