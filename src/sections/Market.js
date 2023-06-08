import React from 'react'

const Market = () => {
  return (
    <div className='grid sm:grid-cols-4 sm:space-x-4 space-y-4 sm:space-y-0'>
        <img src='/assets/images/MarketBox.svg' className='w-full h-full' alt=''/>
        <div className='sm:col-span-3 bg-[#fff] bg-opacity-[0.06]'>
            <div className='bg-[#67677D] px-12 py-7 bg-opacity-20 w-full'>
                <h1 className='text-[#11FF37] text-lg sm:text-2xl font-bold font-monument'>
                Market Size
                </h1>
            </div>
            <div className=' px-12 flex items-center pt-10 pb-4  w-full'>
                <h1 className='text-[#fff] text-sm sm:text-lg font-red-hat max-w-[400px]'>
                The Arbitrum TVL is about to double in the next bull run. Axis plans to attract min. 2% of the upcoming TVL.
                </h1>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Market