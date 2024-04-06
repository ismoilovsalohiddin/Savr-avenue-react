import { observer } from "mobx-react-lite";
import HomeRoutes from "modules/routes";
import { Route, Routes } from "react-router-dom";


export const Router = observer(() => {
  return <Routes>
    <Route index path="*" element={<HomeRoutes />} />
  </Routes>
});
