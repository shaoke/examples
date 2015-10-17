window.Components.Hello = React.createClass({
    displayName: "Hello Component",
    getInitialState: function () {
        console.log("getInitialState, time: " + new Date().getTime());
        return {
            counter: this.props.initCounter
        };
    },
    propTypes: {
        initCounter: React.PropTypes.number
    },
    getDefaultProps: function () {
        console.log("getDefaultProps, time: " + new Date().getTime());
        return {
            initCounter: 0
        }
    },
    render: function () {
        console.log("render, time: " + new Date().getTime());

        var author = "Blithe";


        function onClick() {
            console.log("Click Me button - onClick");
            //console.log(arguments);

            //self.state.counter++;
            //
            //self.setState({
            //    counter: self.state.counter
            //});

            var counter = ++this.state.counter;

            this.setState({
                counter: counter
            });

        }

        return (
            <div>
                <button onClick={onClick.bind(this)}>Click Me</button>
                <p>You've pressed the button {this.state.counter} times.</p>

                <p>{author}</p>
            </div>
        );
    },
    // Lifecycle
    componentWillMount: function () {
        console.log("componentWillMount, time: " + new Date().getTime());
    },
    componentDidMount: function () {
        console.log("componentDidMount, time: " + new Date().getTime());
    },
    componentWillReceiveProps: function () {
        console.log("componentWillReceiveProps, time: " + new Date().getTime());
    },
    shouldComponentUpdate: function () {
        console.log("shouldComponentUpdate, time: " + new Date().getTime());
        return true;
    },
    componentWillUpdate: function () {
        console.log("componentWillUpdate, time: " + new Date().getTime());
    },
    componentDidUpdate: function () {
        console.log("componentDidUpdate, time: " + new Date().getTime());
    },
    componentWillUnmount: function () {
        console.log("componentWillUnmount, time: " + new Date().getTime());
    }
});