import { Link } from 'react-router-dom'
import {IoCloseSharp} from 'react-icons/io5'
const CloseButton = () => {
  return (
    <Link to={'/'}>
        <IoCloseSharp className='text-2xl'/>
    </Link>
  )
}

export default CloseButton