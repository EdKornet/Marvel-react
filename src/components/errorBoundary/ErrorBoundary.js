import ErrorMassage from "../errorMessage/ErrorMessage";

const {Component} = require("react");


class ErrorBoundary extends Component {
    state = {
        error: false
    }


    componentDidCatch(error, errorInfo) {
        this.setState({
            error:true
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMassage/>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;