import { FC, ReactNode, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

const PageTransition: FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter()

  useEffect(() => {
    sessionStorage.setItem('prevRoute', router.asPath)
  }, [router])

  const variants = {
    hiddenNext: { opacity: 0, x: 400, y: 0 },
    hiddenPrev: { opacity: 0, x: -400, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  }

  function findInitialAnimation() {
    if (typeof window === 'undefined') return 'hiddenPrev'

    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    )
      return 'hiddenPrev'

    const prevRoute = sessionStorage.getItem('prevRoute')

    if (!prevRoute) return 'hiddenNext'

    if (prevRoute === '/') return 'hiddenNext'
    if (router.asPath === '/') return 'hiddenPrev'

    if (prevRoute === '/hackathons') return 'hiddenNext'

    if (prevRoute === '/events') {
      if (router.asPath === '/hackathons') return 'hiddenPrev'
      return 'hiddenNext'
    }

    if (prevRoute === '/about') {
      if (['/hackathons', '/events', ''].includes(router.asPath))
        return 'hiddenPrev'

      return 'hiddenNext'
    }

    if (
      prevRoute?.split('/').length >
      router.asPath.slice(0, -1).split('/').length
    ) {
      return 'hiddenPrev'
    } else {
      return 'hiddenNext'
    }
  }

  const initial = findInitialAnimation()

  return (
    <motion.div
      variants={variants}
      initial={initial}
      animate="enter"
      exit="exit"
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      {children}
    </motion.div>
  )
}
export default PageTransition
