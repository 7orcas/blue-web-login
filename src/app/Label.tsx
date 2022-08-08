import { FC } from 'react'
import useLabel from '../sys/util/useLabel'

interface Props {
    langkey: string
}

const Label: FC<Props> = ({ langkey }) => {
  return (
    <span className='label'>
      {useLabel(langkey)}
    </span>
  )
}

export default Label