import { useEffect } from 'react'
import { useState }  from 'react'

export const useWindow = () => {
  const [windowWidth, setWindowWidth] = useState(0)

  const handleResize = () => setWindowWidth(window.innerWidth)

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return {
    isMobile: windowWidth < 1920,
    isDesktop: windowWidth >= 1920,
  }
}
