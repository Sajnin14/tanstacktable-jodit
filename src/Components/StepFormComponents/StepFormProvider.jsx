import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

export default function StepFormProvider() {
  const [step, setStep] = useState(1);
  const method = useForm();
  const handleNextStep = () => {
    if (step > 3) {
      return;
    }
    setStep((current) => current + 1);
  };

  const handlePreviousStep = () => {
    if (step < 1) return;
    setStep((current) => current - 1);
  };
  return (
    <div>
      <FormProvider {...method}>
        {step == 1 ? (
          <Step1 handleNextStep={handleNextStep} />
        ) : step == 2 ? (
          <Step2
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        ) : (
          <Step3 handlePreviousStep={handlePreviousStep} />
        )}
      </FormProvider>
    </div>
  );
}
