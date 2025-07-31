import JoditEditor from "jodit-react";
import React, { useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";

export default function JoditReact() {
  const editor = useRef(null);
  const [content, setContent] = useState("");
//   const config = {
//     placeholder: "start typing your details",
//   };  //eta likhle ekta kore input ney

const config = useMemo(() => ({
    placeholder: "start typing your message" ,
    buttons: ['bold', 'italic', 'align'],
    statusbar: false,
    // theme: "dark",
    
}), [])   //by using useMemo writing is very easy

  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-center text-4xl font-bold leading-16">
        Jodit React Implementation
      </h2>

      <div className="mt-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 text-start font-medium text-lg"
        >
          <div className="w-full">
            <label>Subject</label>
            <input
              {...register("subject")}
              type="text"
              className="w-full py-3 px-6 border rounded-xl"
            />
          </div>

          <div className="w-full">
            <label>Details</label>
            {/* <textarea rows={7} className="w-full border rounded-xl"/> */}
            <JoditEditor
              {...register("details")}
              ref={editor}
              value={setValue("details", content)}
              config={config}
              onChange={(newContent) => setContent(newContent)}
            />
          </div>

          <button
            type="submit"
            className="p-4 border rounded-xl bg-gray-100 cursor-pointer"
          >
            Submit{" "}
          </button>
        </form>
      </div>
    </div>
  );
}
