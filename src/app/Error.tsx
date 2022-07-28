import { FC } from 'react'
import useLabel from '../sys/util/useLabel'

interface Props {
    message: string
}

const Error: FC<Props> = ({ message }) => {
  return (
    <>
      { message }
    </>
  )
}

export default Error