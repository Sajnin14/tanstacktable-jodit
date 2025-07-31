import { createBrowserRouter } from "react-router-dom";
import Forms from "../Layout/Forms";
import StepForms from "../Layout/StepForms";
import CKEditors from "../Pages/CKEditors";
import TanstackTable from "../Pages/TanstackTable";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Forms />,
    children: [
        {
            index: true,
            element: <CKEditors/>
        },
        {
            path: "/table",
            element: <TanstackTable/>
        }
    ],
  },

  {
    path: "/form",
    element: <StepForms/>,
    
  },
]);

export default router;
