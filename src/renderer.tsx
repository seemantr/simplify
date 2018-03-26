import * as React from 'react'
import * as ReactDOM from 'react-dom'

class HelloComponent extends React.Component {
    render() {
        return (
            <h2>Hello component !</h2>
        )
    }
}
console.log("I am loading")
ReactDOM.render(
    <HelloComponent />,
    document.getElementById('root')
);