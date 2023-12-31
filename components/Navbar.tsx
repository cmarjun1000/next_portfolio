import Image from 'next/image'
import Link from 'next/link'
import AuthProviders from './AuthProviders'
import { getCurrentUser } from '@/lib/session'
import { NavLinks } from '@/constants'
import ProfileMenu from './ProfileMenu'

const Navbar = async () => {
  const session = await getCurrentUser()

  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo2.svg" width={45} height={33} alt="logo" />
        </Link>
        <ul className="xl:flex hidden text-small gap-6">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>

      <div className="flexCenter gap-4">
        {session?.user ? (
          <>
            <ProfileMenu session={session} />
            <Link href="/create-project">Share Work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  )
}

export default Navbar
