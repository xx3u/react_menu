import { Route, Switch } from "react-router-dom";
import Menu from './containers/Menu/Menu';


const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Menu}/>
    </Switch>
  )
}

export default App;
