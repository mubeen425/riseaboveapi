import React from 'react'

const LeftImage = ({content , img}) => {
  return (
    <section class="bg-gray-900 text-white">
    <div class="container">
      <div class="row  align-items-center">
        <div class="col-lg-6 mb-10">
          <img class="img-fluid rounded" src={img} alt="hero" />
        </div>
        <div class="col-lg-6">
          <p class="mb-4 text-body-secondary" >
            {content}
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default LeftImage