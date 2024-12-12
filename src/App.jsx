import Navbar from "./components/Navbar";
import AuthProvider from "./provider/authProvider";
import Routes from "./routes";

function App() {

  return (
    <AuthProvider>
      <Navbar/>
      <Routes />
    </AuthProvider>
  );
}

export default App;
