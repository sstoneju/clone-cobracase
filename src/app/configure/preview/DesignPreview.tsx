"use client"

import Phone from '@/components/Phone'
import { useEffect, useState } from 'react'
import Confetti from 'react-dom-confetti'

const DesignPreview = () => {
    const [shoeConfetti, setShowConfetti] = useState(false)
    useEffect(() => setShowConfetti(true), [])

    return <>
        <div className="pointer-events-none select-none absolute inset-0 overflow-hidden flex justify-center">
            <Confetti active={shoeConfetti} config={{elementCount: 300, spread:900}}/>
        </div>

        <div className='mt-20 grid grid-cols-1 text-sm sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-6 md:gap-x-8 lg:gap-x-12'>
            <div className='sm:col-span-4 md:col-span-3 md:row-span-2 md:row-end-2'>
                <Phone />
            </div>
        </div>
    </>
}

export default DesignPreview