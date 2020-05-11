import React, { Fragment } from 'react';
import Banner01 from './Banner01';
import Banner02 from './Banner02';
import './App.css';
export default class App extends React.Component {
    render() {

        return (
            <Fragment>
                <Banner01 />
                <Banner02 />
            </Fragment>
        );
    }
}