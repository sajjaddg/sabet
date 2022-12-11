import { useRef } from "react"
import { RiFileUploadLine } from 'react-icons/ri'

const FileInput = ({text}) => {
    const inputRef = useRef(null)
    const handleClick = () => {
        inputRef.current.click();
    }
    return (
        <div onClick={handleClick} className='w-full cursor-pointer flex border-dashed border-2 border-[#232526] p-2 rounded-md'>
            <input ref={inputRef} hidden type="file" name="" id="" />
            <div className="flex w-full space-y-4 my-5 flex-col justify-center items-center">
                <RiFileUploadLine className="w-16 h-16 text-[#525457]" />
                <span className="text-[#525457]">{text}</span>
            </div>
        </div>
    )
}

export default FileInput