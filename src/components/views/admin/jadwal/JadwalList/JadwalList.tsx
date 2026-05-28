"use client";

import Link from "next/link";
import {
  Plus,
  Pencil,
  Trash2,
  Loader2,
  Search,
  ChevronLeft,
  ChevronRight,
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
import useJadwalList from "./useJadwalList";
import { IJadwal } from "@/types/jadwal";
import { useState } from "react";
import TambahJadwal from "../TambahJadwal/TambahJadwal";

export default function JadwalList() {
  const [openTambah, setOpenTambah] = useState(false);
  const {
    dataJadwals,
    meta,
    isLoadingJadwals,
    isRefetchingJadwals,
    selectedId,
    setSelectedId,
    handleDeleteJadwal,
    isPendingDeleteJadwal,
    currentSearch,
    currentLimit,
    currentPage,
    handleSearch,
    handleChangePage,
    handleChangeLimit,
  } = useJadwalList();

  return (
    <div>
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Kelola Jadwal</h2>
          <p className="mt-1 max-w-lg text-sm text-gray-500">
            Menampilkan daftar lengkap jadwal dokter beserta akses untuk
            menambah, mengubah, dan menghapus data.
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Total {meta?.total ?? 0} Jadwal Dokter
          </p>
        </div>
        <Button
          onClick={() => setOpenTambah(true)}
          className="bg-havelock-blue-600 p-4"
        >
          <Plus className="mr-2 h-4 w-4" />
          Tambah Jadwal
        </Button>
      </div>

      {/* Search & Limit */}
      <div className="mb-4 flex items-center justify-between gap-4">
        {/* Search */}
        <div className="relative w-full max-w-xs">
          <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Cari jadwal..."
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
      {isRefetchingJadwals && (
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
              <TableHead>Hari</TableHead>
              <TableHead>Jam Mulai</TableHead>
              <TableHead>Jam Selesai</TableHead>
              <TableHead>Dokter</TableHead>
              <TableHead className="text-center">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoadingJadwals ? (
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
            ) : dataJadwals.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={6}
                  className="py-10 text-center text-gray-400"
                >
                  {currentSearch
                    ? `Tidak ada jadwal dengan nama "${currentSearch}"`
                    : "Belum ada data jadwal"}
                </TableCell>
              </TableRow>
            ) : (
              dataJadwals.map((jadwal: IJadwal, index: number) => (
                <TableRow key={jadwal.id} className="hover:bg-gray-50">
                  <TableCell className="text-sm text-gray-500">
                    {(Number(currentPage) - 1) * Number(currentLimit) +
                      index +
                      1}
                  </TableCell>
                  <TableCell className="font-medium text-slate-800">
                    {jadwal.hari}
                  </TableCell>
                  <TableCell className="font-medium text-slate-800">
                    {jadwal.jamMulai}
                  </TableCell>
                  <TableCell className="font-medium text-slate-800">
                    {jadwal.jamSelesai}
                  </TableCell>

                  <TableCell>
                    <Badge variant="secondary">{jadwal.dokter.nama}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-center gap-2">
                      <Button size="sm" variant="outline" asChild>
                        <Link href={`/admin/jadwal/${jadwal.id}`}>
                          <Pencil className="h-4 w-4" />
                        </Link>
                      </Button>
                      <AlertDialog
                        open={selectedId === jadwal.id}
                        onOpenChange={(open) =>
                          setSelectedId(open ? jadwal.id : null)
                        }
                      >
                        <AlertDialogTrigger asChild>
                          <Button size="sm" variant="destructive">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Hapus Jadwal</AlertDialogTitle>
                            <AlertDialogDescription>
                              Apakah yakin ingin menghapus{" "}
                              <span className="font-semibold text-slate-800">
                                jadwal {jadwal.hari} - {jadwal.dokter.nama}
                              </span>
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel
                              onClick={() => setSelectedId(null)}
                            >
                              Batal
                            </AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDeleteJadwal(jadwal.id)}
                              disabled={isPendingDeleteJadwal}
                              className="bg-red-500 hover:bg-red-600"
                            >
                              {isPendingDeleteJadwal ? (
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
        <TambahJadwal open={openTambah} onOpenChange={setOpenTambah} />
      </div>
    </div>
  );
}
