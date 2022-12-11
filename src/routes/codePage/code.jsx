import React from 'react'
import CustomInput from '../../components/customInput/customInput-component'
import FileInput from '../../components/fileInput/fileInput-componnet'
import './code.css'
const CodePage = () => {
  return (
    <div className='bg-[#e0e0e0] flex-col space-y-4 flex relative w-full  rounded-xl p-4 transition-opacity container '>
      <div className='flex space-x-4'>
        <FileInput text={'Image 1 '} />
        <FileInput text={'Image 2 '} />
      </div>
      <div className='flex flex-col w-full'>
        <CustomInput name={'File Name'} type={'text'} placeholder={'type some text :)'}/>
      </div>
    </div >
  )
}

export default CodePage