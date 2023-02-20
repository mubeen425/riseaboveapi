import React from "react";

const ReightImage = ({content , img}) => {
  return (
    <section class="bg-gray-900 text-white body-font">
      <div class=" py-5">
        <div class="row align-items-center">
          <div class="col-lg-6 order-lg-2">
            <img class="img-fluid rounded" src={img} alt="hero" />
          </div>
          <div class="col-lg-6 order-lg-1">
            <p class="mb-4 text-body-secondary">
              {content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReightImage;
