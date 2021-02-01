import Header from "./Components/Header/Header";
import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar";
import Chat from './Components/Chat/Chat';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Components/Login/Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue();

  const app = ( <>
    <Header />
      <div className="App__content">
        <Sidebar />
        <Switch>
          <Route path="/channel/:channelId" component={Chat}/>
        </Switch>
      </div>
    </>
  )

  return (
    <BrowserRouter>
      <div className="App">
        {user ? app : <Login/>}
      </div>
    </BrowserRouter>
  );
}

export default App;
