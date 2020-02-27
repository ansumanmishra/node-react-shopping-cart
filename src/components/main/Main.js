import React, { Component } from 'react';

import MainRoutes from './MainRoutes';

class Main extends Component {
    render() {
        return (
            <>
                <div className="row mb-3"></div>
                {MainRoutes}
            </>
        )
    }
}

export default Main;