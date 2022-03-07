import React, { Component, Fragment } from 'react'
const title_h1 = 'Home';

export class TitleH1 extends Component {
    render() {
        return (
            <Fragment>
                <h1>
                    Hello {title_h1}
                </h1>
            </Fragment>
        )
    }
}

export default TitleH1
