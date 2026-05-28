import { toaster } from "../components/ui/toaster";

export function TampilPesan(juudl, pesan) {
    return toaster.create({
        title: juudl,
        description: pesan,
        duration: 1000,
    });
}