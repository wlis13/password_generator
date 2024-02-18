import { Route, Switch } from "react-router-dom";
import Provider from "./Context/Provider";
import MainPage from "./pages/MainPage/mainPage";

function App() {

  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
    </Provider>
  )
}

export default App;
