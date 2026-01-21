// 'use client'

// import { useState, useEffect } from 'react'
// import Image from 'next/image'
// import { ChevronLeft, ChevronRight } from 'lucide-react'

// const slides = [
//   { image: '/Carousel/Career in IT.jpg', title: 'Career in IT' },
//   { image: '/Carousel/Software Testing.jpg', title: 'Software Testing' },
//   { image: '/Carousel/WordpressXReact.jpg', title: 'WordPress X React' },
// ]

// export default function Carousel() {
//   const [current, setCurrent] = useState(0)

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length)
//     }, 5000)
//     return () => clearInterval(timer)
//   }, [])

//   const prev = () => setCurrent((current - 1 + slides.length) % slides.length)
//   const next = () => setCurrent((current + 1) % slides.length)

//   return (
//     <div className="relative w-full h-[600px] overflow-hidden">
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-opacity duration-700 ${
//             index === current ? 'opacity-100' : 'opacity-0'
//           }`}
//         >
//           <Image src={slide.image} alt={slide.title} fill className="object-cover" priority={index === 0} />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//           <div className="absolute bottom-0 left-0 right-0 p-8">
//             <h3 className="text-3xl md:text-4xl text-center text-white">{slide.title}</h3>
//           </div>
//         </div>
//       ))}

//       <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full transition-colors z-10">
//         <ChevronLeft className="w-6 h-6 text-gray-900" />
//       </button>

//       <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full transition-colors z-10">
//         <ChevronRight className="w-6 h-6 text-gray-900" />
//       </button>

//       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrent(index)}
//             className={`h-2 rounded-full transition-all ${
//               index === current ? 'bg-white w-8' : 'bg-white/50 w-2'
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  { image: '/Carousel/Career in IT.jpg', title: 'Career in IT' },
  { image: '/Carousel/Software Testing.jpg', title: 'Software Testing' },
  { image: '/Carousel/WordpressXReact.jpg', title: 'WordPress X React' },
]

export default function Carousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent((current - 1 + slides.length) % slides.length)
  const next = () => setCurrent((current + 1) % slides.length)

  return (
    <div className='container mx-auto flex justify-center items-center'>
      <div className="relative w-[98%] h-[550px] overflow-hidden rounded-2xl shadow-lg">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out
            ${index === current ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0'}
          `}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover rounded-2xl"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl" />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
              <h3 className="text-3xl md:text-4xl text-white font-semibold drop-shadow-lg">
                {slide.title}
              </h3>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/80 backdrop-blur-md p-3 rounded-full transition-all z-20"
        >
          <ChevronLeft className="w-6 h-6 text-gray-900" />
        </button>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/80 backdrop-blur-md p-3 rounded-full transition-all z-20"
        >
          <ChevronRight className="w-6 h-6 text-gray-900" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all duration-500
              ${index === current ? 'bg-white w-8 scale-125' : 'bg-white/50 w-3'}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
