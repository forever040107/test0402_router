import React, { Component } from 'react'
import ParticleEffectButton from 'react-particle-effect-button'
import {Section, Button} from './styled'

export default class ParticleButton extends Component {
  state = {
    hidden: false,
    animating: false
  }

  render () {
    const {
      buttonStyles,
      buttonOptions,
      text
    } = this.props

    const {
      hidden,
      animating
    } = this.state

    return (
      <Section style={this.props}>
        {hidden && !animating && (
          <Button onClick={this._onToggle}>Reset</Button>
        )}
        <ParticleEffectButton
          hidden={this.state.hidden}
          onComplete={this._onAnimationComplete}
          onClick={this._onToggle}
          {...buttonOptions}
        >
          <button
            style={{
              padding: '1.5rem 3rem',
              border: '0',
              borderRadius: 5,
              cursor: 'pointer',
              fontSize: '1.2em',
              ...buttonStyles
            }}
            onClick={this._onToggle}
          >
            {text}
          </button>
        </ParticleEffectButton>
      </Section>
    )
  }

  _onToggle = () => {
    console.log(this.props.text, 'toooooogle: ', this.props.buttonStyles)
    if (this.state.animating) return

    this.setState({
      hidden: !this.state.hidden,
      animating: true
    })
  }

  _onAnimationComplete = () => {
    console.log(this.props.text, 'animate change')

    this.setState({
      animating: false
    })
  }
}
