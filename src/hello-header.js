/**
 * A simple React component written *without* JSX and instead written in pure JavaScript. Idiomatic React uses JSX but
 * for the sake of learning let's write something without JSX. See "React without JSX" https://reactjs.org/docs/react-without-jsx.html)
 */
class HelloHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "Hello from the <HelloHeader> element!"
        };
    }

    render() {
        return React.createElement('header', null, this.state.message)
        // The equivalent JSX would be:
        // return <header>
        //     {this.state.message}
        // </header>;
    }
}