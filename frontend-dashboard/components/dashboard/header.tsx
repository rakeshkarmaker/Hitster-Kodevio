"use client";

import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type HeaderUser = {
  name?: string;
  image?: string;
};

type HeaderProps = {
  user?: HeaderUser;
};

export function Header({ user }: HeaderProps) {
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
      <div className="flex items-center justify-between py-3 sm:py-4 md:py-5 px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex size-6 sm:size-7 md:size-8 items-center justify-center rounded-lg bg-primary text-xs sm:text-sm md:text-lg font-black text-[#f8f9fa]">
            O
          </div>
          <span className="text-base sm:text-xl md:text-2xl leading-relaxed font-black tracking-[-1.2px] uppercase text-foreground">
            OmniSearch
          </span>
        </div>

        {/* Profile */}
        <DropdownMenu>
          <DropdownMenuTrigger>
          <button type="button" className="flex items-center gap-2 sm:gap-3 cursor-pointer">
              <Avatar className="size-9 sm:size-11 md:size-12">
                {user?.image ? <AvatarImage src={user.image} alt={user?.name ?? "User avatar"} /> : null}
                <AvatarFallback>
                  {user?.name?.slice(0, 2)?.toUpperCase() || "U"}
                </AvatarFallback>
              </Avatar>
              <span className="hidden sm:inline text-sm sm:text-base md:text-lg font-semibold text-gray-900">
                {user?.name || "Guest"}
              </span>
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-44">
            <DropdownMenuItem onClick={() => router.push("/admin/settings")}>
              Profile
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => router.push("/admin/settings")}>
              Settings
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() => {
                // logout logic
                router.push("/");
              }}
              className="text-red-500"
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

      </div>
    </header>
  );
}