import Menu from "./components/Menu";
import Task from "./components/Task";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/ROUTES";

function App() {
  return (
    <div className="flex">
      <Router>
        <Menu />
        <div className="pl-40 h-screen w-full bg-gray-background">
          <Switch>
            <Route path={ROUTES.TASK} component={Task} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
