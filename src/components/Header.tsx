import { SignedIn, UserButton } from "@clerk/nextjs"
import Link from 'next/link'
import { ModeToggle } from "./ModeToggle"
import { Button } from "./ui/button"
import { FilePlus2 } from "lucide-react"

function Header() {
  return (
    <div className="flex justify-between bg-white shadow-sm px-5 py-3 border-b">
      <Link href="/dashboard" className="text-2xl">
        DocuChat 
      </Link>

      <SignedIn>
        <div className="flex items-center gap-2">
          <Button asChild variant="link" className="hidden md:flex">
            <Link href="/dashboard/upgrade">Pricing</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/dashboard">My Dashboard</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/dashboard/upload">
              <FilePlus2 className="text-indigo-600" />
            </Link>
          </Button>
          {/* Upgrade Button */}
          <UserButton />
          <ModeToggle />
        </div>
      </SignedIn>
      
    </div>
  )
}

export default Header
