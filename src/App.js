import {CharacterComponent, HomeComponent, MenuComponent, QuotesComponent,EpisodeComponent,DeathComponent} from './components';
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";

function App() {
    return (
        <HashRouter basename={process.env.PUBLIC_URL}>
            <MenuComponent/>
            <Switch>
                <Route path="/" exact component={HomeComponent}/>
                <Route path="/characters" exact component={CharacterComponent}/>
                <Route path="/episodes" exact component={EpisodeComponent}/>
                <Route path="/quotes" exact component={QuotesComponent}/>
                <Route path="/deaths" exact component={DeathComponent}/>
                <Redirect to="/" />
            </Switch>
        </HashRouter>
    );
}

export default App;
