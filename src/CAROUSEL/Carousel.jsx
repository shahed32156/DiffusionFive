import React from 'react'

const Carousel = () => {
  return (
    
    <>
    
      <section style={{backgroundImage:'url("./Images/spider-net.png")'}} className='glass-effect pt-24 py-16 px-3 lg:px-10 xl:px-20 2xl:px-36'>


            <div className='flex flex-col lg:flex-row justify-between items-center'>


                <div className='text-white flex flex-col gap-5'>
                    <h1 className='text-3xl md:text-5xl lg:text-3xl xl:text-[40px] 2xl:text-5xl font-bold  lg:w-[600px] xl:w-[700px]'>Welcome to our cutting-edge <span className='text-gradient font-extrabold'>web platform</span> to take your business into new heights</h1>
                    <p className='lg:w-[450px]'>We specialize in propelling businesses into the future with cutting-edge website services designed to elevate your online presence. Our expert team combines creativity with technology to deliver modern web solutions that meet your unique needs.</p>
                    <button className='bg-gradient-to-r hover:bg-gradient-to-l duration-500 hover:scale-105 to-[#3b82f6] from-[#34d399] h-[45px] w-[120px] rounded font-semibold text-[18px]'>Discover</button>
                </div>

                <div className='-mt-10 sm:-mt-6 lg:-mt-0'>

                        <img className='mx-auto md:mx-0 h-[350px] w-full md:h-[450px] md:w-[600px]' src="./Images/carousel.svg" alt="" />

                </div>


            </div>



      </section>
    
    </>
  )
}

export default Carousel
