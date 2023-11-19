import React, { ReactNode } from 'react'
import { Spacing } from '@ds.e/foundation'

type MarginProps = {
  bottom?: boolean
  children: ReactNode;
  left?: boolean,
  right?: boolean,
  space?: keyof typeof Spacing
  top?: boolean,
}

const Margin = ({ space = 'xxxs', children, left, right, top, bottom }: MarginProps) => {
  let className = ``;

  if (!left && !right && !top && !bottom) {
    className = `dse-margin-${space}`;
  }

  if (left) {
    className = `${className} dse-margin-left-${space}`
  }

  if (right) {
    className = `${className} dse-margin-right-${space}`
  }

  if (top) {
    className = `${className} dse-margin-top-${space}`
  }

  if (bottom) {
    className = `${className} dse-margin-bottom-${space}`
  }

  return <div className={className}>
    {children}
  </div>
}

export default Margin