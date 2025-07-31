import React from "react";
import { useFormContext } from "react-hook-form";

export default function Step2({ handleNextStep }) {
  const { register, handleSubmit } = useFormContext();

  const onSubmit = (data) => {
    console.log(data);
    handleNextStep();
  };
  return (
    <div className="p-10">
      <h3 className="text-2xl font-semibold text-center">Step 2</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="text-start space-y-8">
        <div>
          <label>Address</label>
          <input
            type="text"
            {...register("address")}
            className="w-full p-4 border rounded-xl"
          />
        </div>
        <div>
          <label>phone</label>
          <input
            type="phone"
            {...register("phone")}
            className="w-full p-4 border rounded-xl"
          />
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
