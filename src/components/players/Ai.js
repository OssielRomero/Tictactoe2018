import React, { Component, Fragment } from 'react'
import Board from '../setup/Board'
import { Player } from './Player'

class Ai extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ready: false,
      firstPlayer: '',
      gameType: this.props.type
    }
  }

  clickHandler = e => {
    this.setState({
      ready: true,
      firstPlayer: e.target.value
    })
  }

  onClick() {
    this.setState({
      ready: false,
      firstPlayer: ''
    })
  }

  render() {
    if (this.state.ready) {
      return (
        <Fragment>
          <button className="rightarrow" onClick={() => this.onClick()}>
            &rarr;
          </button>
          <Board value={this.state.firstPlayer} type={this.state.gameType} />
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <Player onClick={this.clickHandler} />
        </Fragment>
      )
    }
  }
}

export default Ai;