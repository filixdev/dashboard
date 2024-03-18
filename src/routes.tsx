import { Route, Routes } from "react-router-dom";
import { ErrorPage, Music, LayoutWithSidebar, Todo, Dashboard, Contacts, Calendar, Notes, Weather } from "./components";
import { BaseTheme } from "./theme/types";

interface AppRoutesProps {
  toggleTheme: () => void;
  theme: BaseTheme;
}

export const AppRoutes: React.FC<AppRoutesProps> = ({toggleTheme, theme}) => {
  return (
      <Routes>
        <Route element={<LayoutWithSidebar toggleTheme={toggleTheme} theme={theme}/>}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/music" element={<Music />} />
          <Route path="/notes" element={<Notes />} />
          {/* <Route path="/notes" element={<HabitsTracker />} /> */}
          <Route path="/*" element={<ErrorPage />} />
        </Route>
      </Routes>
  );
};
