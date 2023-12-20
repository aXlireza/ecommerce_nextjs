import {  FiDownloadCloud, FiPrinter } from 'react-icons/fi'

interface Props {
  bgcolor: 'white' | 'samen-gray'
}

const Toolsbar: React.FC<Props> = ({ bgcolor }) => {

	return (
    <section className='w-full -mt-1'>
      <div className='w-fit mr-auto flex flex-row'>
        {/* triangle */}
        <span className={`w-0 h-0 
          border-b-[40px] border-b-transparent
          border-l-[24px] border-l-${bgcolor}
          border-t-[0px] border-t-transparent`}>
        </span>
        {/* TODO: Setup the print and download functionalities */}
        <div className={`bg-${bgcolor} flex flex-row gap-4 items-center pl-5 pr-3 samen-border !border-t-0 !border-r-0 !rounded-t-none !rounded-br-none`}>
          <FiPrinter className='text-2xl stroke-2 cursor-pointer' />
          <FiDownloadCloud className='text-2xl stroke-2 cursor-pointer' />
        </div>
      </div>
    </section>
	)
}

export default Toolsbar