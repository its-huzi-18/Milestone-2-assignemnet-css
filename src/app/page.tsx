import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div>
      <main>
        <div>
          <h1>Welcome To Our Website</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolores nemo molestias odit delectus non commodi vitae deserunt repudiandae perspiciatis autem, nobis atque rerum. Ducimus sapiente illum cum veniam minima.</p>
          <button>Contact Us</button>
        </div>
        <div>
          <Image 
            src="/main Image.jpg"
            height="502"
            width="465"
            alt="Main image"
          />
        </div>
      </main>
    </div>
  )
}

export default page
