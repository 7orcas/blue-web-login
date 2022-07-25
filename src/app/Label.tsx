import { FC } from 'react'
import getLabel from '../sys/util/getLabel'

interface Props {
    langkey: string
}

const Label: FC<Props> = ({ langkey }) => {
  return (
    <>
      {getLabel(langkey)}
    </>
  )
}

export default Label