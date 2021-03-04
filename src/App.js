import { Route, Switch } from "react-router-dom";
import Aftermath from "./containers/Aftermath/Aftermath";
import Menu from './containers/Menu/Menu';


const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Menu}/>
      <Route path="/bye" exact component={Aftermath} />
    </Switch>
  )
}

export default App;
