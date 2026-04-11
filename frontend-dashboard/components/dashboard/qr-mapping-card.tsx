import { QrCode, Trash2 } from "lucide-react";

type QrMappingCardProps = {
    qrCodeId: string;
    songTitle: string;
    artist: string;
};

export function QrMappingCard({ qrCodeId, songTitle, artist }: QrMappingCardProps) {
    return (
        <article className="dashboard-card h-55 p-6">
            <div className="flex items-start justify-between">
                <div className="flex items-end gap-3">
                    <div className="dashboard-chip-warning flex size-12.5 items-center justify-center rounded-[10px]">
                        <QrCode className="size-4.5" />
                    </div>

                    <div className="leading-normal">
                        <p className="text-[12px] text-[color:var(--dashboard-muted)]">QR code id</p>
                        <p className="text-[20px] font-semibold leading-[1.2] text-[color:var(--dashboard-ink)]">{qrCodeId}</p>
                    </div>
                </div>

                <button type="button" aria-label={`Delete mapping ${qrCodeId}`} className="dashboard-chip-danger flex size-9 items-center justify-center rounded-[20px]">
                    <Trash2 className="size-5" />
                </button>
            </div>

            <div className="dashboard-card-soft mt-5 rounded-[16px] px-5 py-3 leading-normal">
                <p className="text-[12px] text-[color:var(--dashboard-muted)]">Mapped Song</p>
                <p className="text-[20px] font-semibold leading-[1.2] text-[color:var(--dashboard-ink)]">{songTitle}</p>
                <p className="text-[12px] text-[color:var(--dashboard-muted)]">{artist}</p>
            </div>
        </article>
    );
}
