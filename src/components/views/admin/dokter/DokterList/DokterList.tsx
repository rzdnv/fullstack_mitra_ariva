"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Pencil,
  Trash2,
  Loader2,
  User,
  Search,
  ChevronLeft,
  ChevronRight,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import TambahDokter from "../TambahDokter/TambahDokter";
import { useState } from "react";

export default function DokterList() {
  const [openTambah, setOpenTambah] = useState(false);
  const {
    dataDokters,
    meta,
    isLoadingDokters,
    isRefetchingDokters,
    selectedId,
    setSelectedId,
    handleDeleteDokter,
    isPendingDeleteDokter,
    currentSearch,
    currentLimit,
    currentPage,
    handleSearch,
    handleChangePage,
    handleChangeLimit,
  } = useDokterList();

  return (
    <div>
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Kelola Dokter</h2>
          <p className="mt-1 text-sm text-gray-500">
            Total {meta?.total ?? 0} dokter
          </p>
        </div>

        <Button
          onClick={() => setOpenTambah(true)}
          className="bg-havelock-blue-600 p-4"
        >
          <Plus className="mr-2 h-4 w-4" />
          Tambah Dokter
        </Button>
      </div>

      {/* Search & Limit */}
      <div className="mb-4 flex items-center justify-between gap-4">
        {/* Search */}
        <div className="relative w-full max-w-xs">
          <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Cari dokter..."
            className="pl-9"
            defaultValue={currentSearch}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>

        {/* Limit per page */}
        <Select value={currentLimit} onValueChange={handleChangeLimit}>
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="5">5 </SelectItem>
            <SelectItem value="10">10 </SelectItem>
            <SelectItem value="25">25 </SelectItem>
            <SelectItem value="50">50 </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Refetching */}
      {isRefetchingDokters && (
        <div className="mb-2 flex items-center gap-2 text-xs text-gray-400">
          <Loader2 className="h-3 w-3 animate-spin" />
          Memperbarui...
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
            ) : dataDokters.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={6}
                  className="py-10 text-center text-gray-400"
                >
                  {currentSearch
                    ? `Tidak ada dokter dengan nama "${currentSearch}"`
                    : "Belum ada data dokter"}
                </TableCell>
              </TableRow>
            ) : (
              dataDokters.map((dokter: IDokter, index: number) => (
                <TableRow key={dokter.id} className="hover:bg-gray-50">
                  <TableCell className="text-sm text-gray-500">
                    {(Number(currentPage) - 1) * Number(currentLimit) +
                      index +
                      1}
                  </TableCell>
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
                  <TableCell className="font-medium text-slate-800">
                    {dokter.nama}
                  </TableCell>
                  <TableCell className="text-gray-600">
                    {dokter.spesialis}
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{dokter.poli.namaPoli}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-center gap-2">
                      <Button size="sm" variant="outline" asChild>
                        <Link href={`/admin/dokter/${dokter.id}`}>
                          <Pencil className="h-4 w-4" />
                        </Link>
                      </Button>
                      <AlertDialog
                        open={selectedId === dokter.id}
                        onOpenChange={(open) =>
                          setSelectedId(open ? dokter.id : null)
                        }
                      >
                        <AlertDialogTrigger asChild>
                          <Button size="sm" variant="destructive">
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
                                <Loader2 className="h-4 w-4 animate-spin" />
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

        {/* Pagination */}
        {meta && meta.totalPage > 1 && (
          <div className="flex items-center justify-between border-t px-4 py-4">
            <p className="text-sm text-gray-500">
              Halaman {currentPage} dari {meta.totalPage}
            </p>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleChangePage(Number(currentPage) - 1)}
                disabled={Number(currentPage) === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              {Array.from({ length: meta.totalPage }).map((_, i) => {
                const pageNumber = i + 1;
                return (
                  <Button
                    key={pageNumber}
                    variant={
                      Number(currentPage) === pageNumber ? "default" : "outline"
                    }
                    size="sm"
                    className="h-8 w-8 p-0"
                    onClick={() => handleChangePage(pageNumber)}
                  >
                    {pageNumber}
                  </Button>
                );
              })}

              <Button
                variant="outline"
                size="sm"
                onClick={() => handleChangePage(Number(currentPage) + 1)}
                disabled={Number(currentPage) === meta.totalPage}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
        <TambahDokter open={openTambah} onOpenChange={setOpenTambah} />
      </div>
    </div>
  );
}
