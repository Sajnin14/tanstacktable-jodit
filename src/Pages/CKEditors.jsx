import React from "react";
import JoditReact from "../Components/JoditReactEditor/JoditReact";
import { Outlet } from "react-router-dom";

export default function CKEditors() {
  return (
    <>
      <JoditReact />
      <Outlet />
    </>
  );
}
