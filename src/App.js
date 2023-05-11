/** @format */
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home, Login, Public } from "./containers/public";
import paths from "./ultis/paths";
function App() {
  return (
    <div>
      <Routes>
        <Route path={paths.PUBLIC} element={<Public />}>
          <Route path={paths.HOME} element={<Home />} />
          <Route path={paths.LOGIN} element={<Login />} />
          <Route path={paths.STAR} element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
