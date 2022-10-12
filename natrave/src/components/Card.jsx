export const Card = ({ timeA, timeB, match }) => {
  return (
    <div className='rounded-xl border border-gray-300 text-center p-4 space-y-4'>
                    <span className='text-sm md:text-base text-gray-700 font-bold'>{match.time}</span>
                    
                    <div className='flex space-x-4 justify-center items-center'>
                        <span className='uppercase'>{timeA.slug}</span>
                        <img src={`../../public/imgs/bandeiras/${timeA.slug}.png`}/>
                        
                        <input max={10} type="number" className='bg-red-300/[0.2] w-[55px] h-[55px] text-red-700 text-xl text-center'/>
                        <span className='text-red-500 text-bold'>X</span>
                        <input max={10} type="number" className='bg-red-300/[0.2] w-[55px] h-[55px] font-red-700 text-xl text-center'/>

                        <img src={`../../public/imgs/bandeiras/${timeB.slug}.png`}/>
                        <span className='uppercase'>{timeB.slug}</span>
                    </div>
                </div>
  )
}
