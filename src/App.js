import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Task from "./components/Task";
import UnderConstruction from "./components/UnderConstruction";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/ROUTES";
import { useSelector } from "react-redux";

function App() {
  const { isDarkMode } = useSelector((state) => state);
  return (
    <div className="flex">
      <Router>
        <Menu />
        <div
          className={`sm:pl-40 pl-0 h-screen w-full transition-all ${
            isDarkMode ? "bg-black-200" : "bg-gray-background"
          }`}
        >
          <Navbar />
          <Switch>
            <Route path={ROUTES.HOME} exact component={UnderConstruction} />
            <Route path={ROUTES.SETTINGS} component={UnderConstruction} />
            <Route path={ROUTES.TIME} component={UnderConstruction} />
            <Route path={ROUTES.TASK} component={Task} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
