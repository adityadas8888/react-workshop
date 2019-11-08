import React from 'react'
import classnames from 'classnames'
import './Avatar.scss'

function Avatar({ src, size = 3, className, ...rest }) {
  const Element = src ? 'img' : 'div'
  return (
    <Element
      src={src}
      alt="Avatar"
      style={{ fontSize: `${size}em` }}
      className={classnames('avatar', className)}
      {...rest}
    />
  )
}

export default Avatar