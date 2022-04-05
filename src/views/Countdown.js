import React, { useEffect, useState } from "react";

class Countdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 10
        }
    }
    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer)
        }
    }
    componentDidMount() {
        // setTimeout(() => {

        // }, 5000)

        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count - 1
            })
        }, 1000)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.count !== this.state.count && this.state.count === 0) {
            if (this.timer) {
                clearInterval(this.timer)
                // this.props.fireCountdown()
            }
        }
    }
    render() {
        return (
            <div >
                Class: {this.state.count}
            </div>
        )
    }
}

const NewCountdown = (props) => {
    const [count, setCount] = useState(10)
    useEffect(() => {
        if (count === 0) {
            props.fireCountdown();
            return;
        }
        let timer = setInterval(() => {
            setCount(count - 1)
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [count])

    return (
        <div style={{ 'height': '72vh' }}>Hook: {count}</div>
    )
}
export { Countdown, NewCountdown };