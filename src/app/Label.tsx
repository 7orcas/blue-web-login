import { FC } from 'react'
import useLabel from '../sys/util/useLabel'

interface Props {
    langkey: string
}

const Label: FC<Props> = ({ langkey }) => {
  return (
    <>
      {useLabel(langkey)}
    </>
  )
}

export default Label