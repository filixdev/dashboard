import { Route, Routes } from "react-router-dom";
import { ErrorPage, Music, LayoutWithSidebar, Todo, Crypto, Dashboard, Contacts, Calendar, Notes, Weather } from "./components";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<LayoutWithSidebar />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/music" element={<Music />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};
