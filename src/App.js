import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider";
import AboutDetails from "./pages/About/AboutDetails/AboutDetails";
import Abouts from "./pages/About/Abouts/Abouts";
import Services from "./pages/Service/Services/Services";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Footer from "./pages/Share/Footer/Footer";
import Header from "./pages/Share/Header/Header";
import Skill from "./pages/Skill/Skill";
import ServiceDetails from "./pages/Service/ServiceDetails/ServiceDetails";
import PrivetRoute from "./pages/Login/PrivetRoute/PrivetRoute";
import Register from "./pages/Login/Register/Register";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Router>
                    <Header></Header>
                    <Switch>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                        <Route path="/home">
                            <Home></Home>
                        </Route>
                        <Route exact path="/about">
                            <Abouts></Abouts>
                        </Route>
                        <PrivetRoute path="/about/:Id">
                            <AboutDetails></AboutDetails>
                        </PrivetRoute>
                        <Route exact path="/service">
                            <Services></Services>
                        </Route>
                        <PrivetRoute path="/service/:Id">
                            <ServiceDetails></ServiceDetails>
                        </PrivetRoute>
                        <Route path="/skill">
                            <Skill></Skill>
                        </Route>
                        <Route path="/login">
                            <Login></Login>
                        </Route>
                        <Route path="/Register">
                            <Register></Register>
                        </Route>
                        <Route path="*">
                            <PageNotFound></PageNotFound>
                        </Route>
                    </Switch>
                    <Footer></Footer>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
