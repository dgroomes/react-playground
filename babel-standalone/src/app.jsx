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

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App/>);
