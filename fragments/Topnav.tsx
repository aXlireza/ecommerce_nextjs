import React from 'react';

interface TopnavProps {
  lastupdate: string,
  prices: string[],
  date1: string,
  date2: string,
}

const Topnav: React.FC<TopnavProps> = ({ lastupdate, prices, date1, date2 }) => {
  const price = (text: string, key: number) => (
    <span key={key} className="text-slate-900 text-md font-medium">
      {text}
    </span>
  )

  return (
    <nav className="bg-yellow-400 py-3 px-10 md:px-24 flex flex-row items-center justify-between">

        {/* <!-- Other side of the Nav, like Search or Profile --> */}
        <div className="text-slate-900 text-md font-medium">
          <span>{date1} - {date2}</span>
        </div>

        {/* <!-- Navigation Links --> */}
        <div className="flex flex-row items-center space-x-4 gap-3">
          {prices.map((item, key) => price(item, key))}
        </div>

        {/* <!-- Logo or Brand Name --> */}
        <div className="text-slate-900 text-md font-medium flex flex-row">
          <span className='hidden md:block'>آخرین بروزرسانی سایت : </span>
          <span className='block md:hidden'>بروزرسانی : </span>
          <span>{lastupdate}</span>
        </div>

    </nav>
  )
}

export default Topnav;