import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Profile from './pages/profile';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/:username" component={Profile} />
            </Switch>            
        </BrowserRouter>
    )
}

export default Routes;