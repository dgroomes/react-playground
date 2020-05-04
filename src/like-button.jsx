'use strict';

class LikeButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {liked: false};
        // According to https://reactjs.org/docs/handling-events.html
        //     "This binding is necessary to make `this` work in the callback"
        //
        // But why? And what is the idiomatic alternative (with hooks and without hooks)?
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({liked: true})
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        return (
            <button onClick={this.handleClick}>
                Like
            </button>
        );
    }
}
