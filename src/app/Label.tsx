import { FC } from 'react'
import getLang from '../sys/util/getLang'

interface Props {
    langkey: string
}

const Label: FC<Props> = ({ langkey }) => {
  return (
    <>
      {getLang(langkey)}
    </>
  )
}

export default Label