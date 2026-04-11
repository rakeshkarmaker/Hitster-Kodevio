"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type DialogContextValue = {
    open: boolean;
    setOpen: (open: boolean) => void;
};

const DialogContext = React.createContext<DialogContextValue | null>(null);

function useDialogContext() {
    const context = React.useContext(DialogContext);
    if (!context) {
        throw new Error("Dialog components must be used within <Dialog />");
    }

    return context;
}

function Dialog({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = React.useState(false);

    return <DialogContext.Provider value={{ open, setOpen }}>{children}</DialogContext.Provider>;
}

function DialogTrigger({ render }: { render: React.ReactElement }) {
    const { setOpen } = useDialogContext();

    return React.cloneElement(render, {
        onClick: (event: React.MouseEvent) => {
            render.props.onClick?.(event);
            setOpen(true);
        },
    });
}

function DialogClose({ render }: { render: React.ReactElement }) {
    const { setOpen } = useDialogContext();

    return React.cloneElement(render, {
        onClick: (event: React.MouseEvent) => {
            render.props.onClick?.(event);
            setOpen(false);
        },
    });
}

function DialogContent({ className, children }: { className?: string; children: React.ReactNode }) {
    const { open, setOpen } = useDialogContext();

    if (!open) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6">
            <button type="button" aria-label="Close dialog" className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
            <div className={cn("relative z-10 w-full max-w-lg rounded-xl border border-border bg-background p-6 shadow-2xl", className)}>{children}</div>
        </div>
    );
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
    return <div data-slot="dialog-header" className={cn("mb-4 space-y-1.5", className)} {...props} />;
}

function DialogTitle({ className, ...props }: React.ComponentProps<"h2">) {
    return <h2 data-slot="dialog-title" className={cn("text-lg font-semibold leading-none", className)} {...props} />;
}

function DialogDescription({ className, ...props }: React.ComponentProps<"p">) {
    return <p data-slot="dialog-description" className={cn("text-sm text-muted-foreground", className)} {...props} />;
}

export { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger };