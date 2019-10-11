import React from "react";
import {Switch, Route} from "react-router-dom";
import Home from "./views/Home";



class Routes extends React.Component {
    state = {
        mobileMenuIsShown: false,
        language: 'en',
    };

    render() {
        return (
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        );
    }
}

export default  Routes;