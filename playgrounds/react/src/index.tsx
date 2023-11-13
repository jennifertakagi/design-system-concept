import React from 'react'
import ReactDOM from 'react-dom'

import { Button, Color, Text } from '@ds.e/react'

import '@ds.e/scss/lib/Button.css'

ReactDOM.render(
    <>
    <Button label='Example Button' />
    <Color hexCode='#000' width='lg' height='lg' />
    <Text size='xs'>this is some text</Text>,
    </>,
    document.querySelector('#root')
)
