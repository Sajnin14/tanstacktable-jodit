import React from "react";
import CKEditors from "../Pages/CKEditors";
import JoditReact from "../Components/JoditReactEditor/JoditReact";
import { Outlet } from "react-router-dom";

export default function Forms() {
  return (
    <>
      <Outlet />
      {/* <CKEditors /> */}
    </>
  );
}
