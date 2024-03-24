import React from 'react'

function Photo() {
  return (
    <section>
        <div className=' container-wrapper'>

            <div className=' flex justify-center gap-4 items-center flex-col sm:flex-row'>

                <img src="images/img1.jpeg" alt="" className=' h-[300px] rounded-xl' />
                <img src="images/img2.jpeg" alt=""   className=' h-[300px] rounded-xl'/>
                <img src="images/img3.jpeg" alt=""   className=' h-[300px] rounded-xl'/>

            </div>

        </div>
    </section>
  )
}

export default Photo