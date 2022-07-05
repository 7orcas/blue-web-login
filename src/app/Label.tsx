import React, { FC } from 'react'

interface Props {
    text: string
}

const Label: FC<Props> = ({ text }) => {
  return (
    <>
      {text}
    </>
  )
}

export default Label