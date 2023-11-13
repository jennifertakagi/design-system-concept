import React from 'react'

type ColorProps = {
  height: string
  hexCode: string
  width: string
}

const Color = ({ height, hexCode, width }: ColorProps) => {
  return <div style={{
    backgroundColor: hexCode,
    width,
    height
  }}>

  </div>
}

export default Color