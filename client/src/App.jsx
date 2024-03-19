import axios from "axios";
import {UserContextProvider} from "./UserContext";
import Routes from "./Routes";

function App() {
// what does this do?  axios.defaults.baseURL = 'http://localhost:4000'; 
// answer: it sets the default base URL for requests to the server, 
// and it should be the same as the server's URL which is http://localhost:4000
  axios.defaults.baseURL = 'http://localhost:4000'; 
  axios.defaults.withCredentials = true;

  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  )
}

export default App
