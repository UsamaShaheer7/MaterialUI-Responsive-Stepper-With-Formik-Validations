import React from "react";

const Step3 = ({ formik }) => {
  return (
    <>
      <div>
        <div>Step3 input</div>
        <input
          className="border-black border-2"
          name="Step3"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.Step3}
        />
        {formik.touched.Step3 && formik.errors.Step3 ? (
          <div>{formik.errors.Step3}</div>
        ) : null}
      </div>
    </>
  );
};

export default Step3;
