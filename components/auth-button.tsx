import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { Button } from './ui/button'

export default async function AuthButton() {
  const supabase = createClient()
  const {
    data: { user }
  } = await supabase.auth.getUser()

  const signOut = async () => {
    'use server'
    const supabase = createClient()

    await supabase.auth.signOut()
    return redirect('/login')
  }

  return user ? (
    <div className="text-sm flex items-center gap-2">
      {user.email}
      <form action={signOut}>
        <Button variant="ghost" size="icon" className="">
          Logout
        </Button>
      </form>
    </div>
  ) : (
    <Button variant="ghost" size="icon" className="">
      <Link
        href="/login"
        className="py-2 px-2 text-sm flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
      >
        Login
      </Link>
    </Button>
  )
}
