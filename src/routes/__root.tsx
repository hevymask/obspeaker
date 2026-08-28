import { Outlet, createRootRoute } from '@tanstack/react-router'

// Hooks
import { useEffect } from 'react'
import { useDarkMode } from 'usehooks-ts'

export const Route = createRootRoute({
  component: App
})

function App() {
  const { isDarkMode } = useDarkMode()

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
      <div className='min-h-svh w-screen'>
        <Outlet />
      </div>
  )
}
