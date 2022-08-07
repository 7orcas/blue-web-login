import { FC } from 'react'
import useLabel from '../sys/util/useLabel'

interface Props {
    message: string
}

const Error: FC<Props> = ({ message }) => {
  return (
    <>
      { message.length > 0 ? useLabel(message) : ''}
    </>
  )
}

export default Error