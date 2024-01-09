import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { Provider } from "react-redux";
import store from "./states/store";
import { AppProvider } from "./states/Contet";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Search from "./components/Search/Search";
import Album from "./components/Album/Album";
import EgorKreed from "./components/EgorKreed/EgorKreed";
import FriendlyThug from "./components/FriendlyThug/FriendlyThug";
import BigBabyTape from "./components/BigBabyTape/BigBabyTape";
import Serebro from "./components/Serebro/Serebro";
import Account from "./components/Account/Account";

const App = () => {
  return (
    <Provider store={store}>
      <AppProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/search" element={<Search />} />
            <Route path="/album" element={<Album />} />
            <Route path="/egorkreed" element={<EgorKreed />}/>
            <Route path="/friendlythug" element={<FriendlyThug />}/>
            <Route path="/bigbabytape" element={<BigBabyTape />}/>
            <Route path="/serebro" element={<Serebro />}/>
            <Route path="/account" element={<Account />}/>

          </Routes>
        </Router>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </AppProvider>
    </Provider>
  );
};

export default App;