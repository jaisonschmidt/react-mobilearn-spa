import React from 'react'

import Header from '../../features/Header/Header'

import './Home.module.scss'

export default class Home extends React.Component {
    render(){
        return (
            <React.Fragment>
                <Header />
            </React.Fragment>
        )
    }
}