'use strict';

class App extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div id="readme"></div>
                <h3>Additional Content:</h3>
                <div id="listing"></div>
                <div id="markdown"></div>
                <div id="output1"></div>
                <LikeButton/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("app"))