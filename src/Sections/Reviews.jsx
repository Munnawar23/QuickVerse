import React from 'react'
import { REVIEWS } from '../Data/reviews'

const Reviews = () => {
  return (
    <section className='max-w-7xl mx-auto border-b-2' id='reviews'>
      <div className="my-10">
        <h2 className='text-3xl text-[#8F1413] lg:font-extrabold font-bold tracking-tighter lg:text-4xl text-center uppercase mb-4 lg:mb-12'>Reviews</h2>
        <div className="flex flex-wrap justify-center">
          {REVIEWS.map((review, index) => (
            <div
              key={index}
              className="mt-10 flex flex-col items-center justify-center rounded-2xl border border-[#8F1413] p-10 mx-2 max-w-xs"
            >
              {/* Text section with fixed height and dynamic resizing */}
              <div className="h-52 overflow-hidden">
                <p className='text-center italic text-ellipsis text-md lg:text-base'>
                  {review.description}
                </p>
              </div>

              {/* Image and Title section with fixed height */}
              <div className="h-28 flex items-center justify-center mt-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className='w-24 h-24 rounded-full mr-4'
                />
                <div className="flex flex-col justify-center">
                  <p className='text-xl font-medium text-center text-[#103e60]'>{review.name}</p>
                  <p className='text-lg text-neutral-500 text-center'>{review.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
