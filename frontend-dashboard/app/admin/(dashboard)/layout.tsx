"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Image as QrCode, LayoutDashboard, Menu, Settings, Music } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


function SidebarNav() { // This component is used in both the mobile sheet and the desktop sidebar, so it needs to be self-contained.
    const pathname = usePathname();

    const navItems = [
        { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
        { label: "Songs Database", href: "/admin/songs", icon: Music },
        { label: "QR Mapping Page", href: "/admin/qr-mapping", icon: QrCode },
        { label: "Settings", href: "/admin/settings", icon: Settings },
    ];

    return (
        <nav className="flex flex-col p-4 space-y-1">
            {navItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;

                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(buttonVariants({ variant: isActive ? "default" : "ghost" }), "justify-start")}
                    >
                        <Icon className="mr-2" />
                        {item.label}
                    </Link>
                );
            })}
        </nav>
    );
}



// Admin Dashboard Layout
export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const avatarImage = "https://www.figma.com/api/mcp/asset/077dc4a9-5676-4035-a442-b46177daae72";

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 h-20 bg-background border-b z-50 flex items-center">
                <div className="flex items-center justify-between w-full px-6">
                    <div className="flex items-center gap-3">
                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <Sheet>
                                <SheetTrigger
                                    render={
                                        <button
                                            className="inline-flex items-center justify-center rounded-md border p-2 hover:bg-muted"
                                            aria-label="Open menu"
                                        >
                                            <Menu className="h-5 w-5" />
                                        </button>
                                    }
                                ></SheetTrigger>
                                <SheetContent side="left" className="w-[calc(100vw-1rem)] max-w-72 p-0">
                                    <div className="border-b px-4 py-5">
                                        <Image src="/logo-3.png" alt="Logo" width={160} height={28} />
                                    </div>
                                    <SidebarNav />
                                </SheetContent>
                            </Sheet>
                        </div>

                        <Image src="/logo-3.png" alt="Logo" width={202} height={32} />
                    </div>

                    <div className="flex items-center gap-3">
                        <Avatar>
                            <AvatarImage src={avatarImage} alt="Rumi Aktar" />
                            <AvatarFallback>RA</AvatarFallback>
                        </Avatar>
                        <span className="text-lg font-semibold">Rumi Aktar</span>
                    </div>
                </div>
            </header>

            {/* Body */}
            <div className="flex pt-20">
                {/* Desktop Sidebar */}
                <aside className="hidden md:block fixed top-20 left-0 h-[calc(100vh-80px)] w-64 bg-background border-r">
                    <SidebarNav />
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-6 md:ml-64">{children}</main>
            </div>
        </div>
    );
}