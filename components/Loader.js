import React, { Component } from "react"

class Loader extends Component {
	render() {
		const show = this.props.show
		return show ? <div className='loader'></div> : null
	}
}

export default Loader
