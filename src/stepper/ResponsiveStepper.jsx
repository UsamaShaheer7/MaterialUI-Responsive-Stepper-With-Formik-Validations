import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import formikInitialValues from "./formikInitialValues";
import validationSchema from "./validationSchema";
import StepContent from "@mui/material/StepContent";
import { useState } from "react";
import { useEffect } from "react";
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { Typography } from "@mui/material";

const ResponsiveStepper = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [saveDisabled, setSaveDisabled] = useState(false);
  const [orientation, setOrientation] = useState(
    window.innerWidth > 600 ? "horizontal" : "vertical"
  );
  const formik = useFormik({
    initialValues: formikInitialValues,
    validationSchema: validationSchema[activeStep],
    onSubmit: (values) => {
      console.log("values", values);
      handleComplete();
    },
  });
  const steps = ["step 1", "step2", "step3"];
  const handSubmit = () => {
    formik.resetForm();
  };
  const totalSteps = () => {
    return steps.length;
  };
  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };
  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };
  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };
  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
    formik.resetForm();
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  useEffect(() => {
    const handleResize = () => {
      setOrientation(window.innerWidth > 600 ? "horizontal" : "vertical");
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className=" w-full lg:px-[84px] relative">
        <form onSubmit={formik.handleSubmit}>
          <div className="md:block hidden">
            <div className=" flex  md:justify-end justify-center  items-center ">
              <Box>
                {!allStepsCompleted() ? (
                  <React.Fragment>
                    <div className="space-x-[0px]">
                      <Button disabled={activeStep === 0} onClick={handleBack}>
                        Back
                      </Button>
                      <Button onClick={handleReset}>Cancel</Button>
                    </div>
                  </React.Fragment>
                ) : null}
              </Box>
              <Box>
                {!allStepsCompleted() ? (
                  <div className=" ml-[10px] ">
                    <React.Fragment>
                      <div className=" flex space-x-[15px]">
                        <Button
                          type="submit"
                          onClick={handSubmit}
                          disabled={activeStep < 2}
                        >
                          Save
                        </Button>
                        <Button type="submit">Next</Button>
                      </div>
                    </React.Fragment>
                  </div>
                ) : null}
              </Box>
            </div>
          </div>
          <div className=" mt-[30px] ">
            <Box sx={{ width: "100%" }}>
              <Stepper
                nonLinear
                activeStep={activeStep}
                orientation={orientation}
              >
                {steps.map((label, index) => (
                  <Step
                    key={label}
                    completed={completed[index]}
                    sx={{
                      ".MuiStepConnector-line": {
                        borderColor: "#051547",
                      },
                    }}
                  >
                    <StepButton
                      sx={{
                        "& .Mui-active": {
                          "& .MuiStepIcon-root": {
                            color: "#051547",
                          },
                        },
                        "& .Mui-completed": {
                          "& .MuiStepIcon-root": {
                            color: "#051547",
                          },
                          "& .MuiStepConnector-line": {
                            color: "#051547 ",
                          },
                        },
                      }}
                    >
                      <div className="text-[#051547] text-[20px]">{label}</div>
                    </StepButton>
                    <div className="md:hidden block">
                      <StepContent sx={{ ml: "12px", pl: "10px", pr: 0 }}>
                        <Typography sx={{ mt: "10px", mb: 1, py: "2px" }}>
                          {activeStep === 0 ? (
                            <Step1 formik={formik} />
                          ) : activeStep === 1 ? (
                            <Step2 formik={formik} />
                          ) : activeStep === 2 ? (
                            <Step3 formik={formik} />
                          ) : null}
                        </Typography>
                        <div className=" mt-[30px] space-y-9">
                          <Box>
                            {!allStepsCompleted() ? (
                              <React.Fragment>
                                <div className=" flex justify-evenly">
                                  <div>
                                    <Button
                                      disabled={activeStep === 0}
                                      onClick={handleBack}
                                    >
                                      Back
                                    </Button>
                                  </div>
                                  <div className="">
                                    <Button type="submit">Next</Button>
                                  </div>
                                </div>
                              </React.Fragment>
                            ) : null}
                          </Box>
                          <Box>
                            {!allStepsCompleted() ? (
                              <div className=" flex justify-center">
                                <React.Fragment>
                                  <div className=" flex space-x-15">
                                    <div className="">
                                      <Button onClick={handleReset}>
                                        Cancel
                                      </Button>
                                    </div>
                                    <div className="">
                                      <Button
                                        type="submit"
                                        onClick={handSubmit}
                                        disabled={activeStep < 2}
                                      >
                                        Save
                                      </Button>
                                    </div>
                                  </div>
                                </React.Fragment>
                              </div>
                            ) : null}
                          </Box>
                        </div>
                      </StepContent>
                    </div>
                  </Step>
                ))}
              </Stepper>
              <div className="md:block hidden">
                <Typography>
                  {activeStep === 0 ? (
                    <Step1 formik={formik} />
                  ) : activeStep === 1 ? (
                    <Step2 formik={formik} />
                  ) : activeStep === 2 ? (
                    <Step3 formik={formik} />
                  ) : null}
                </Typography>
              </div>
            </Box>
          </div>
        </form>
      </div>
    </>
  );
};
export default ResponsiveStepper;
