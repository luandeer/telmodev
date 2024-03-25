import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
const SidebarMovil = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="px-2 py-0 h-8 rounded-md transition-all bg-red-500 hover:bg-red-600 text-white text-sm flex sm:hidden">Menú</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save when youre done.
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <h1>asdsad</h1>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

export default SidebarMovil