import { FC } from 'react'
import useLabel from '../sys/util/useLabel'

interface Props {
    message: string
}

const Error: FC<Props> = ({ message }) => {

  const isValidMessage = () => {
    return message !== null 
      && typeof message !== 'undefined'
      && message.length > 0
  }

  return (
    <>
      { isValidMessage() ? useLabel(message) : ''}
    </>
  )
}

export default Error