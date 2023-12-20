import {  FiDownloadCloud, FiPrinter } from 'react-icons/fi'

interface Props {
}

const Toolsbar: React.FC<Props> = ({ }) => {

	return (
    <section className='w-full'>
      <div className='w-fit mr-auto flex flex-row'>
        {/* triangle */}
        <span className={`w-0 h-0 
          border-b-[40px] border-b-transparent
          border-l-[24px] border-l-white
          border-t-[0px] border-t-transparent`}>
        </span>
        {/* TODO: Setup the print and download functionalities */}
        <div className='bg-white flex flex-row gap-4 items-center pl-3 pr-1'>
          <FiPrinter className='text-xl stroke-2' />
          <FiDownloadCloud className='text-xl stroke-2' />
        </div>
      </div>
    </section>
	)
}

export default Toolsbar