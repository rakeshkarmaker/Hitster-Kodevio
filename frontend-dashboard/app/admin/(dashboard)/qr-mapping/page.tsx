"use client";

import { MapQrDialogContent } from "@/components/dashboard/map-qr-dialog-content";
import { QrMappingCard } from "@/components/dashboard/qr-mapping-card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { qrMappingData } from "@/lib/data/qr-mapping-data";
import { Plus } from "lucide-react";

export default function QrMappingPage() {
    return (
        <Dialog>
            <section className="w-full pb-10">
                <div className="dashboard-page-header">
                    <h1 className="dashboard-page-title">QR Cards</h1>
                    <p className="dashboard-page-subtitle">Manage your game content and system configuration.</p>
                </div>

                <div className="mt-4 flex items-center justify-between gap-4">
                    <p className="dashboard-section-title">QR Code to Song Mappings</p>

                    <DialogTrigger
                        render={
                            <Button className="h-11.5 rounded-[5px] bg-black px-3 text-[16px] leading-normal font-medium text-white hover:bg-black/95">
                                <Plus className="size-6" />
                                Map New Card
                            </Button>
                        }
                    />
                </div>

                <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                    {qrMappingData.map((mapping, index) => (
                        <QrMappingCard
                            key={`${mapping.qrCodeId}-${index}`}
                            qrCodeId={mapping.qrCodeId}
                            songTitle={mapping.songTitle}
                            artist={mapping.artist}
                        />
                    ))}
                </div>

                <div className="mt-6 flex flex-col gap-4 px-2 text-[color:var(--dashboard-muted)] sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[12px] leading-normal">Showing 1-8 out of 8</p>

                    <div className="flex items-center gap-2 text-[14px] leading-normal">
                        <button type="button" className="px-1 py-1">
                            Previous
                        </button>
                        <button type="button" className="h-6 w-6 bg-[#333333] text-white">
                            1
                        </button>
                        <button type="button" className="h-6 w-6">
                            2
                        </button>
                        <button type="button" className="h-6 w-6">
                            3
                        </button>
                        <button type="button" className="px-1 py-1">
                            Next
                        </button>
                    </div>
                </div>
            </section>

            <MapQrDialogContent />
        </Dialog>
    );
}
