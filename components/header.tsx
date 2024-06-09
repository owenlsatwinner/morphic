import React from 'react'
import { ModeToggle } from './mode-toggle'
import { IconLogo } from './ui/icons'
import { cn } from '@/lib/utils'
import HistoryContainer from './history-container'
import AuthButton from './auth-button'
import { createClient } from '@/utils/supabase/server'

export const Header: React.FC = async () => {
  const supabase = createClient()

  return (
    <header className="fixed w-full p-1 md:p-2 flex justify-between items-center z-10 backdrop-blur md:backdrop-blur-none bg-background/80 md:bg-transparent">
      <div className="flex items-center">
        <a href="/">
          <IconLogo className={cn('w-5 h-5')} />
          <span className="sr-only">Morphic</span>
        </a>
        <div className="text-xs px-1">Used:{1}</div>
        <div></div>
      </div>
      <div className="flex gap-0.5">
        <AuthButton />
        <ModeToggle />
        <HistoryContainer location="header" />
      </div>
    </header>
  )
}

export default Header
