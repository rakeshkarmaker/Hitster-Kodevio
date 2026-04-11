"use client";

import { useAppForm } from "@/components/form/form-context";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { usersData } from "@/lib/data/admin/dashboard/users-data";
import { ChevronDown, Plus, Search } from "lucide-react";

export default function SongsPage() {
    const form = useAppForm({
        defaultValues: { name: "", email: "" },
    });

    return (
        <Dialog>
            <section className="w-full space-y-6">
                <div className="space-y-2">
                    <h1 className="text-2xl leading-none font-semibold text-foreground">Users</h1>
                    <p className="leading-none text-muted-foreground">Manage your users and their permissions.</p>
                </div>

                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div className="relative w-full lg:w-116">
                        <Input type="search" placeholder="Search" />
                        <Search className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
                    </div>

                    <DialogTrigger
                        render={
                            <Button>
                                <Plus />
                                Add Users
                            </Button>
                        }
                    />
                </div>

                <div className="space-y-3 md:hidden">
                    {usersData.map((user) => (
                        <article key={`mobile-${user.id}`} className="rounded-lg border border-border bg-card p-4 shadow-sm">
                            <div className="space-y-1">
                                <p className="text-xs font-medium text-muted-foreground">User #{user.id}</p>
                                <h3 className="text-base font-semibold text-foreground">{user.name}</h3>
                                <p className="break-all text-sm text-muted-foreground">{user.email}</p>
                            </div>
                            <div className="mt-3">
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="inline-flex h-8 items-center justify-center gap-1 rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground">
                                        Action
                                        <ChevronDown className="size-4" />
                                    </DropdownMenuTrigger>

                                    <DropdownMenuContent align="start" className="w-40">
                                        <DropdownMenuItem>Edit user</DropdownMenuItem>
                                        <DropdownMenuItem>Disable</DropdownMenuItem>
                                        <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="hidden w-full overflow-x-auto md:block">
                    <div className="min-w-180">
                        <table className="w-full table-fixed border-collapse">
                            <thead>
                                <tr className="h-11.5 bg-primary">
                                    <th className="w-24 border border-border px-2 text-left text-base leading-normal font-medium text-primary-foreground lg:text-[20px]">
                                        No
                                    </th>
                                    <th className="w-64 border border-border px-2 text-left text-base leading-normal font-medium text-primary-foreground lg:text-[20px]">
                                        Name
                                    </th>
                                    <th className="w-80 border border-border px-2 text-left text-base leading-normal font-medium text-primary-foreground lg:text-[20px]">
                                        Email
                                    </th>
                                    <th className="w-40 border border-border px-2 text-left text-base leading-normal font-medium text-primary-foreground lg:text-[20px]">
                                        Action
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {usersData.map((user) => (
                                    <tr key={user.id} className="h-13">
                                        <td className="border border-border px-2 text-sm leading-[1.2] font-normal text-muted-foreground lg:text-[16px]">
                                            {user.id}
                                        </td>
                                        <td className="border border-border px-2 text-sm leading-6 font-normal text-muted-foreground lg:text-[16px]">
                                            {user.name}
                                        </td>
                                        <td className="border border-border px-2 text-sm leading-6 font-normal text-muted-foreground lg:text-[16px]">
                                            {user.email}
                                        </td>
                                        <td className="border border-border px-2">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger className="inline-flex h-9 items-center justify-center gap-1 rounded-[5px] bg-primary px-2 text-sm leading-[1.2] font-normal text-primary-foreground lg:text-[16px]">
                                                    Action
                                                    <ChevronDown className="size-4" />
                                                </DropdownMenuTrigger>

                                                <DropdownMenuContent align="start" className="w-40">
                                                    <DropdownMenuItem>Edit user</DropdownMenuItem>
                                                    <DropdownMenuItem>Disable</DropdownMenuItem>
                                                    <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="flex flex-col gap-4 text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                    <p className="px-2 text-sm leading-6 font-medium">Showing 1-10 out of 10</p>

                    <div className="flex items-center gap-2.5 px-2 py-1 text-sm leading-6 font-medium lg:text-[16px]">
                        <button type="button" className="cursor-pointer px-1 py-0.5">
                            Previous
                        </button>
                        <button type="button" className="h-6 w-6 bg-primary px-1 py-0.5 text-primary-foreground">
                            1
                        </button>
                        <button type="button" className="h-6 w-6 px-1 py-0.5">
                            2
                        </button>
                        <button type="button" className="h-6 w-6 px-1 py-0.5">
                            3
                        </button>
                        <button type="button" className="cursor-pointer px-1 py-0.5">
                            Next
                        </button>
                    </div>
                </div>
            </section>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add New User</DialogTitle>
                    <DialogDescription>Drag and drop your files here</DialogDescription>
                </DialogHeader>
                <form
                    className="grid gap-6"
                    onSubmit={(e) => {
                        e.preventDefault();
                        form.handleSubmit();
                    }}
                >
                    <form.AppField name="name">{(field) => <field.FormInput label="Name" placeholder="Enter user name" />}</form.AppField>
                    <form.AppField name="email">
                        {(field) => <field.FormInput label="Email" placeholder="Enter user email" />}
                    </form.AppField>
                    <div className="grid grid-cols-2 gap-4">
                        <DialogClose
                            render={
                                <Button variant="secondary" type="button" className="rounded-md">
                                    Cancel
                                </Button>
                            }
                        />
                        <form.AppForm>
                            <form.FormSubmit label="Submit" />
                        </form.AppForm>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
