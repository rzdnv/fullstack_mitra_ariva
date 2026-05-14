"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Plus, Pencil, Trash2, Loader2, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import useDokterList from "./useDokterList";
import { IDokter } from "@/types/dokter";

export default function DokterList() {
  const router = useRouter();
  const {
    dataDokters,
    isLoadingDokters,
    isRefetchingDokters,
    selectedId,
    setSelectedId,
    handleDeleteDokter,
    isPendingDeleteDokter,
  } = useDokterList();

  return (
    <div>
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Kelola Dokter</h2>
          <p className="mt-1 text-sm text-gray-500">
            Kelola data dokter RSKB Mitra Ariva
          </p>
        </div>
        <Button
          onClick={() => router.push("/admin/dokter/tambah")}
          className="flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          Tambah Dokter
        </Button>
      </div>

      {/* Refetching indicator */}
      {isRefetchingDokters && (
        <div className="mb-4 flex items-center gap-2 text-xs text-gray-400">
          <Loader2 className="h-3 w-3 animate-spin" />
          Memperbarui data...
        </div>
      )}

      {/* Table */}
      <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="w-12">No</TableHead>
              <TableHead>Foto</TableHead>
              <TableHead>Nama Dokter</TableHead>
              <TableHead>Spesialis</TableHead>
              <TableHead>Poli</TableHead>
              <TableHead className="text-center">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* Loading Skeleton */}
            {isLoadingDokters ? (
              Array.from({ length: 5 }).map((_, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Skeleton className="h-4 w-6" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-10 w-10 rounded-full" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-40" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-32" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-6 w-24" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="mx-auto h-8 w-20" />
                  </TableCell>
                </TableRow>
              ))
            ) : dataDokters?.length === 0 ? (
              // Empty state
              <TableRow>
                <TableCell
                  colSpan={6}
                  className="py-10 text-center text-gray-400"
                >
                  Belum ada data dokter
                </TableCell>
              </TableRow>
            ) : (
              dataDokters?.map((dokter: IDokter, index: number) => (
                <TableRow key={dokter.id} className="hover:bg-gray-50">
                  <TableCell className="text-sm text-gray-500">
                    {index + 1}
                  </TableCell>

                  {/* Foto */}
                  <TableCell>
                    {dokter.foto ? (
                      <Image
                        src={dokter.foto}
                        alt={dokter.nama}
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    ) : (
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                        <User className="h-5 w-5 text-blue-600" />
                      </div>
                    )}
                  </TableCell>

                  {/* Nama */}
                  <TableCell className="font-medium text-slate-800">
                    {dokter.nama}
                  </TableCell>

                  {/* Spesialis */}
                  <TableCell className="text-gray-600">
                    {dokter.spesialis}
                  </TableCell>

                  {/* Poli */}
                  <TableCell>
                    <Badge variant="secondary">{dokter.poli.namaPoli}</Badge>
                  </TableCell>

                  {/* Aksi */}
                  <TableCell>
                    <div className="flex items-center justify-center gap-2">
                      {/* Edit */}
                      <Button size="sm" variant="outline" asChild>
                        <Link href={`/admin/dokter/${dokter.id}`}>
                          <Pencil className="h-4 w-4" />
                        </Link>
                      </Button>

                      {/* Delete */}
                      <AlertDialog
                        open={selectedId === dokter.id}
                        onOpenChange={(open) =>
                          setSelectedId(open ? dokter.id : null)
                        }
                      >
                        <AlertDialogTrigger asChild>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => setSelectedId(dokter.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Hapus Dokter</AlertDialogTitle>
                            <AlertDialogDescription>
                              Apakah yakin ingin menghapus{" "}
                              <span className="font-semibold text-slate-800">
                                {dokter.nama}
                              </span>
                              ? Semua jadwal dokter ini juga akan terhapus.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel
                              onClick={() => setSelectedId(null)}
                            >
                              Batal
                            </AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDeleteDokter(dokter.id)}
                              disabled={isPendingDeleteDokter}
                              className="bg-red-500 hover:bg-red-600"
                            >
                              {isPendingDeleteDokter ? (
                                <>
                                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                  Menghapus...
                                </>
                              ) : (
                                "Hapus"
                              )}
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
