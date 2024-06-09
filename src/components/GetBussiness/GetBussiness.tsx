import Image from 'next/image';
import React from 'react'

type Props = {}

const GetBussiness = (props: Props) => {
  return (
    <div className='container'>
      <div>
        <div>
          <h2>Get your business running online.</h2>
          <button>become a client</button>
        </div>
        <div>
          <Image
            src="/sammy-line-18 1.svg"
            alt="logo"
            width={250}
            height={250}
          />
          {/* sammy-line-18 1 */}
        </div>
      </div>

    </div>
  )
}

export default GetBussiness;