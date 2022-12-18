
const CustomInput = ({placeholder , name , type , textClassName , inputClassName }) => {
    return (
        <div className='flex items-center'>
            <div className={textClassName+' bg-[#232526] w-24  border-[#232526] border p-1 rounded-md flex h-full rounded-r-none  justify-center'}>
                <span className='text-[#e0e0e0] text-center '>{name}</span>
            </div>
            <input type={type} placeholder={placeholder} className={inputClassName+' p-1 text-[#232526] bg-transparent border rounded-md  border-[#232526] outline-none rounded-l-none flex-grow '} />
        </div>
    )
}

export default CustomInput