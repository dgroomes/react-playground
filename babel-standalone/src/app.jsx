'use strict';

class App extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <SourceBrowser/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("app"))
