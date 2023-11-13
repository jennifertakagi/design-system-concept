import React from 'react'
import ReactDOM from 'react-dom'

import { Button, Color } from '@ds.e/react'

import '@ds.e/scss/lib/Button.css'

ReactDOM.render(
    <>
    <Button label='Example Button' />
    <Color hexCode='#000' width='1rem' height='1rem' />
    </>,
    document.querySelector('#root')
)
