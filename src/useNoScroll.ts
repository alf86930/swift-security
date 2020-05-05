import { useEffect } from 'react'

const useNoScroll = (shouldScroll: boolean) => {
  useEffect(() => {
    shouldScroll
      ? document.body.classList.add('no-scroll')
      : document.body.classList.remove('no-scroll')
  }, [shouldScroll])
}

export default useNoScroll
