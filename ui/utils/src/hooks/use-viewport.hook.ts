import { useEffect } from 'react'
import { useState }  from 'react'

export const useViewport = () => {
  const [viewport, setViewport] = useState(0)

  const handleResize = () => setViewport(window.innerWidth)

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return {
    mobile: viewport < 1000,
    desktop: viewport > 1000,
  }
}
