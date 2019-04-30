import React, { Component } from 'react'
import ParticleEffectButton from 'react-particle-effect-button'

export default class PageA extends Component {
  state = {
    hidden: false
  }

  render () {
    return (
      <ParticleEffectButton
        hidden={this.state.hidden}
        type='triangle'
      >
        <button
          style={{
            background: '#121019',
            color: '#fff',
            padding: '1.5rem 3rem',
            border: '0',
            borderRadius: 5,
            cursor: 'pointer',
            fontSize: '1.2em'
          }}
          onClick={this._onToggle}
        >
          click me circle
        </button>
      </ParticleEffectButton>
    )
  }

  _onToggle = () => {
    this.setState({
      hidden: !this.state.hidden
    })
  }
}
