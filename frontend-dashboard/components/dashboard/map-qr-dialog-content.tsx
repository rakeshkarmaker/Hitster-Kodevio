"use client";

import { useAppForm } from "@/components/form/form-context";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { NativeSelect } from "@/components/ui/native-select";
import { X } from "lucide-react";

type MapQrFormValues = {
    qrCodeIdentifier: string;
    song: string;
};

export function MapQrDialogContent() {
    const form = useAppForm({
        defaultValues: {
            qrCodeIdentifier: "Card_002",
            song: "year",
        } satisfies MapQrFormValues,
    });

    return (
        <DialogContent className="dashboard-dialog">
            <DialogHeader>
                <div className="flex items-center justify-between px-3 py-2">
                    <DialogTitle className="text-[24px] leading-normal font-semibold text-black">Map QR Code</DialogTitle>
                    <DialogClose
                        render={
                            <button type="button" className="text-black" aria-label="Close modal">
                                <X className="size-7" />
                            </button>
                        }
                    />
                </div>
                <DialogDescription className="sr-only">Create a QR code to song mapping.</DialogDescription>
            </DialogHeader>

            <form
                className="grid gap-6"
                onSubmit={(e) => {
                    e.preventDefault();
                    form.handleSubmit();
                }}
            >
                <form.AppField name="qrCodeIdentifier">
                    {(field) => <field.FormInput label="QR Code Identifier" placeholder="Card_002" />}
                </form.AppField>

                <form.AppField name="song">
                    {(field) => (
                        <Field>
                            <FieldLabel htmlFor={field.name}>Select Song</FieldLabel>
                            <NativeSelect
                                id={field.name}
                                name={field.name}
                                value={field.state.value}
                                onBlur={field.handleBlur}
                                onChange={(e) => field.handleChange(e.target.value)}
                                className="h-12 w-full rounded-[5px] border-[#dadada] px-2 text-[12px] text-[#666666]"
                            >
                                <option value="year">year</option>
                                <option value="Dreams - The Weeknd">Dreams - The Weeknd</option>
                                <option value="Dreams - Fleetwood Mac">Dreams - Fleetwood Mac</option>
                            </NativeSelect>
                        </Field>
                    )}
                </form.AppField>

                <div className="grid grid-cols-2 gap-4">
                    <DialogClose
                        render={
                            <Button type="button" variant="outline" className="rounded-md">
                                Cancel
                            </Button>
                        }
                    />

                    <form.AppForm>
                        <form.FormSubmit label="Create Mapping" className="rounded-md" />
                    </form.AppForm>
                </div>
            </form>
        </DialogContent>
    );
}
