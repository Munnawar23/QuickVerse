import { RiFacebookFill, RiInstagramFill, RiLinkedinFill, RiTwitterFill } from '@remixicon/react'
import React from 'react'

const Footer = () => {
  return (
    <footer className='max-w-7xl mx-auto'>
        <div className="flex flex-col md:flex-row justify-between items-center border-t-2 py-4">
            <div className="flex space-x-6 mb-2">
                <a href="" target="_blank" rel="noopener noreferrer" aria-label='Visit Our facebok page'><RiFacebookFill></RiFacebookFill></a>
                <a href="" target="_blank" rel="noopener noreferrer" aria-label='Visit Our facebok page'><RiLinkedinFill></RiLinkedinFill></a>
                <a href="" target="_blank" rel="noopener noreferrer" aria-label='Visit Our facebok page'><RiInstagramFill></RiInstagramFill></a>
            </div>
            <p className='text-sm'>&copy: 2024 QuickVerse. All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer