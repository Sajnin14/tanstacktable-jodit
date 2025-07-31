import React from "react";
import { useFormContext } from "react-hook-form";

export default function Step3({ handleNextStep }) {
  const { register, handleSubmit } = useFormContext();

  const onSubmit = (data) => {
    console.log(data);
    handleNextStep();
  };
  return (
    <div className="p-10">
      <h3 className="text-2xl font-semibold text-center">Step 3</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="text-start space-y-8">
        <div>
          <label>gender</label>
          <select
            {...register("gender")}
            className="w-full p-4 border rounded-xl"
          >
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="others">others</option>
          </select>
        </div>
        <div>
          <label>phone</label>
          <select
            {...register("options")}
            className="w-full p-4 border rounded-xl"
          >
            <option value="option1">option1</option>
            <option value="option2">option2</option>
            <option value="option3">option3</option>
            <option value="option4">option4</option>
          </select>
        </div>

        <button
          type="submit"
          className="p-4 border rounded-xl bg-gray-100 cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
