import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "../Pages/AppLayout/AppLayout";
import IndividualPostLayout from "../Pages/IndividualPostLayout/IndividualPostLayout";
import NotFound from "../Pages/NotFound/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<AppLayout />} />
        <Route path="/here" element={<IndividualPostLayout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
