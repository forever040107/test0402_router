import React, { Component } from 'react'
import ParticleButton from './particle/ParticleButton'
import ButtonDefaults from './particle/ButtonDefault';
import ChangeInput from './particle/ChangeInput';
import changeStyle from '../containers/ChangeStyle'

export default class PageA extends Component {

  render () {
    let titleField = null
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>React Particle Effect Buttons</h1>
        <ChangeInput 
          onBlur={(e) => {
              if (titleField.value.trim() && e.target instanceof HTMLInputElement) {  
                  //更新標題    
                  changeStyle(titleField.value)
                  console.log('changeStyleeeeeee')
              }
          }}
        />
        {ButtonDefaults.map((ButtonDefault, index) => (
          <ParticleButton
            key={index}
            background={ButtonDefault.background}
            text={ButtonDefault.text}
            buttonStyles={ButtonDefault.buttonStyles}
            buttonOptions={ButtonDefault.buttonOptions}
          />
        ))}
      </div>
    )
  }

}
