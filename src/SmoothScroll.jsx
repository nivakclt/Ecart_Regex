import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { useEffect } from 'react'

function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const animationId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(animationId)
      lenis.destroy()
    }
  }, [])

  return null
}

export default SmoothScroll