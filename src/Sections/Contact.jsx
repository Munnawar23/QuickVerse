import React from 'react'
import { CONTACT_INFO } from '../Data/contactInfo'
import { RiMailLine, RiMapPinLine, RiPhoneLine } from '@remixicon/react'
const Contact = () => {
  return (
    <section className='max-w-7xl mx-auto' id='contact'>
        <div className="my-10 lg:my-20">
            <h2 className='text-3xl text-[#103e60] lg:font-extrabold font-bold  tracking-tighter  lg:text-4xl text-center uppercase mb-12'>Contact us</h2>
            <p className='max-w-2xl lg:text-2xl text-xl mb-12 text-center mx-auto'>
                {CONTACT_INFO.text}
            </p>
          <div className="flex flex-col lg:flex-row justify-around mx-4 text-[#103e60]">
            <div className="flex mb-8 lg:mb-0">
                <RiPhoneLine className='text-3xl mr-4' />
                <div className="">
                    <p className='lg:text-lg text-xl font-semibold'>{CONTACT_INFO.phone.label}</p>
                    <p className='text-neutral-600'>{CONTACT_INFO.phone.value}</p>
                </div>
            </div>
            <div className="flex mb-8 lg:mb-0">
                <RiMailLine className='text-3xl mr-4' />
                <div className="">
                    <p className='lg:text-lg text-xl font-semibold'>{CONTACT_INFO.email.label}</p>
                    <p className='text-neutral-600'>{CONTACT_INFO.email.value}</p>
                </div>
            </div>
            <div className="flex">
                <RiMapPinLine className='text-3xl mr-4' />
                <div className="">
                    <p className='lg:text-lg text-xl font-semibold'>{CONTACT_INFO.address.label}</p>
                    <p className='text-neutral-600'>{CONTACT_INFO.address.value}</p>
                </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Contact