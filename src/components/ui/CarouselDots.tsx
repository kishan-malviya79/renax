'use client'

import * as React from 'react'
import { type CarouselApi } from '@/components/ui/carousel'

export function CarouselDots({ api }: { api?: CarouselApi }) {
  const [count, setCount] = React.useState(0)
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) return
    const update = () => {
      setCount(api.scrollSnapList().length)
      setCurrent(api.selectedScrollSnap())
    }
    update()
    api.on('select', update)
    api.on('reInit', update)
    return () => {
      api.off('select', update)
      api.off('reInit', update)
    }
  }, [api])

  if (count < 2) return null

  return (
    <div className="flex flex-wrap items-center justify-center" role="tablist" aria-label="Slides">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          type="button"
          role="tab"
          aria-selected={current === i}
          aria-label={`Go to slide ${i + 1} of ${count}`}
          onClick={() => api?.scrollTo(i)}
          className="p-2 cursor-pointer group"
        >
          <span
            className={`block h-3 rounded-full transition-all duration-300 ${
              current === i ? 'w-8 bg-[#f5b754]' : 'w-3 bg-gray-500 group-hover:bg-[#f5b754]/70'
            }`}
          />
        </button>
      ))}
    </div>
  )
}
