import React, {Component} from 'react'

class CoordinatesButton extends Component {

    // constructor() {
    //     super()
    // }
    render() {
        return(
            <button onClick={(e) => {
                const coordinates = [e.clientX, e.clientY]
                return this.props.onReceiveCoordinates(coordinates)
                }}>
                CoordinatesButton
            </button>
        )
    }
}

export default CoordinatesButton