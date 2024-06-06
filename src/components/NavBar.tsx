import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import logo from '../../public/logos.png'
import { Menu } from "lucide-react"

export function NavBar() {
    return (
        <div className="flex items-center justify-between h-[70px] fixed w-full px-5 bg-[#0f0f0f] z-50">
            <div>
                <Image src={logo} alt="logo do site" width={150} />
            </div>
            <Sheet>
                <SheetTrigger asChild>
                    <Menu />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Are you absolutely sure?</SheetTitle>
                        <SheetDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>

        </div>
    )
}