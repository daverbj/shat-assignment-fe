import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from "./screens/signup";
import {Container} from 'react-bootstrap'
function App() {
    return (
        <Router>
            <Switch>
                <Container>
                    <Route path="/about">
                        <p>about</p>
                    </Route>
                    <Route path="/">
                        <SignUp></SignUp>
                    </Route>
                    <Route path="/signup">
                        <p>Signup</p>
                    </Route>
                </Container>
            </Switch>
        </Router>
    );
}

export default App;
