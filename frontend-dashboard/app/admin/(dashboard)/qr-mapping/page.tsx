"use client";

import { MediaLibraryCard } from "@/components/dashboard/media-library-card";
import { useAppForm } from "@/components/form/form-context";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { mediaLibraryData } from "@/lib/data/admin/dashboard/media-data";
import { Search, Upload } from "lucide-react";

export default function QrMappingPage() {
    const form = useAppForm({
        defaultValues: { type: "", title: "", height: "", width: "", horizon: "", id: "", keyword: "", category: "", image: "" },
    });

    return (
        <Dialog>
            <section className="w-full space-y-6">
                <div className="space-y-2">
                    <h1 className="text-2xl leading-none font-semibold text-foreground">Media Library</h1>
                    <p className="leading-none text-muted-foreground">Manage your assets, images, and documents.</p>
                </div>

                <div className="flex items-center justify-between gap-6">
                    <div className="relative w-full max-w-116">
                        <Input type="text" placeholder="Search" />
                        <Search className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-foreground" />
                    </div>

                    <DialogTrigger
                        render={
                            <Button>
                                <Upload />
                                Upload images
                            </Button>
                        }
                    />
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {mediaLibraryData.map((item, index) => (
                        <MediaLibraryCard
                            key={item.id}
                            title={item.title}
                            tags={item.tags}
                            imageUrl={item.imageUrl}
                            prioritizeImage={index === 0}
                        />
                    ))}
                </div>

                <div className="flex items-center justify-between px-0 py-1.5">
                    <div className="rounded-[10px] px-3 py-3 text-[16px] leading-5.25 font-normal text-muted-foreground">
                        Showing 1-10 out of 10
                    </div>

                    <div className="flex items-center gap-2">
                        <Button
                            type="button"
                            className="h-8 rounded-[10px] bg-transparent px-1 text-[20px] leading-6 font-normal text-foreground hover:bg-transparent"
                        >
                            Previous
                        </Button>
                        <Button
                            type="button"
                            className="h-8 min-w-6 rounded-[10px] bg-primary px-2 text-[20px] leading-6 font-normal text-background hover:bg-primary"
                        >
                            1
                        </Button>
                        <Button
                            type="button"
                            className="h-8 min-w-6 rounded-[10px] bg-transparent px-2 text-[20px] leading-6 font-normal text-foreground hover:bg-transparent"
                        >
                            2
                        </Button>
                        <Button
                            type="button"
                            className="h-8 min-w-6 rounded-[10px] bg-transparent px-2 text-[20px] leading-6 font-normal text-foreground hover:bg-transparent"
                        >
                            3
                        </Button>
                        <Button
                            type="button"
                            className="h-8 rounded-[10px] bg-transparent px-1 text-[20px] leading-6 font-normal text-foreground hover:bg-transparent"
                        >
                            Next
                        </Button>
                    </div>
                </div>
            </section>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Upload Media</DialogTitle>
                    <DialogDescription>Drag and drop your files here</DialogDescription>
                </DialogHeader>

                <form
                    className="grid gap-4"
                    onSubmit={(e) => {
                        e.preventDefault();
                        form.handleSubmit();
                    }}
                >
                    <div className="grid grid-cols-2 gap-4">
                        <form.AppField name="title">{(field) => <field.FormInput label="Title" placeholder="title" />}</form.AppField>

                        <form.AppField name="type">{(field) => <field.FormInput label="Type" placeholder="type" />}</form.AppField>

                        <form.AppField name="height">
                            {(field) => <field.FormInput label="Height" placeholder="height" type="number" />}
                        </form.AppField>

                        <form.AppField name="width">
                            {(field) => <field.FormInput label="Width" placeholder="width" type="number" />}
                        </form.AppField>

                        <form.AppField name="horizon">{(field) => <field.FormInput label="Horizon" placeholder="id" />}</form.AppField>

                        <form.AppField name="id">{(field) => <field.FormInput label="ID" placeholder="id" />}</form.AppField>

                        <form.AppField name="keyword">{(field) => <field.FormInput label="Keyword" placeholder="keyword" />}</form.AppField>

                        <form.AppField name="category">
                            {(field) => <field.FormInput label="Category" placeholder="Select category" />}
                        </form.AppField>
                    </div>

                    <form.AppField name="image">{(field) => <field.FormImage label="Image" />}</form.AppField>

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
