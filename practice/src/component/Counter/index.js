import react, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0
    }


    countIncreament = () => {
        this.setState({ count: this.state.count + 1 })
    }

    countDeacreament = () => {
        this.setState({ count: this.state.count - 1 })
    }

    render() {
        return (
            <div>
                <p> {this.state.count}</p>
                <button onClick={this.countIncreament}> Submit/Increase</button>
                {" "}
                <button onClick={this.countDeacreament} > Submit/Decrease</button>
            </div>
        )
    }
}


export default Counter;