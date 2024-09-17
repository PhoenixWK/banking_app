"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

  
const MobileNav = ({user}: MobileNavProps) => {
    const pathName = usePathname();

    return (
        <section>
            <Sheet>
                <SheetTrigger>
                    <Image 
                        src="/icons/hamburger.svg"
                        alt="Icon"
                        width={30}
                        height={30}
                        className="cursor-pointer"
                    />
                </SheetTrigger>
                <SheetContent side="left" className="border-none bg-white">
                    <SheetHeader>
                        <VisuallyHidden>
                            <SheetTitle>Are you absolutely sure?</SheetTitle>
                            <SheetDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </SheetDescription>
                        </VisuallyHidden>
                    </SheetHeader>
                    <nav className="flex flex-col gap-4">
                        <Link href="/" className="flex px-4 cursor-pointer items-center gap-1">
                            <Image 
                                src="/icons/logo.svg"
                                alt="Horizon logo"
                                width={34}
                                height={34}
                                className="size-[24px] max-xl:size-14"
                            />
                            <h1 className="text-26 font-ibm-plex-serif text-black font-bold">Horizon logo</h1>
                        </Link>
                        <div className="mobilenav-sheet">
                            <SheetClose asChild>
                                <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                                    {sidebarLinks.map((item) => {
                                        const isActive = pathName === item.route || pathName.startsWith(`${item.route}/`);

                                        return (
                                            <SheetClose asChild key={item.route}>
                                                <Link 
                                                    key={item.label} 
                                                    href={item.route}
                                                    className={cn('mobilenav-sheet_close w-full', {'bg-bank-gradient': isActive})}
                                                >
                                                    <div className="relative size-6">
                                                        <Image 
                                                            src={item.imgURL}
                                                            alt={item.label}
                                                            width={20}
                                                            height={20}
                                                            className={cn({"brightness-[3] invert-0": isActive})}
                                                        />
                                                    </div>
                                                    <p className={cn('text-16 font-semibold text-black-2', {'text-white': isActive})}>
                                                        {item.label}
                                                    </p>
                                                </Link>
                                            </SheetClose>
                                        )
                                    })}
                                </nav>

                                {/* USER */}
                            </SheetClose>
                        </div>

                        {/* FOOTER */}
                    </nav>
                </SheetContent>
            </Sheet>

        </section>
  )
}

export default MobileNav
