import { successResponse, errorResponse } from "@/lib/api-response";
import { requireAuth } from "@/lib/auth-guard";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const { error } = await requireAuth();
    if (error) return error;

    const [
      totalUser,
      totalDokter,
      totalPoli,
      totalLayanan,
      totalBerita,
      totalJadwal,
      totalReview,
    ] = await Promise.all([
      prisma.user.count(),
      prisma.dokter.count(),
      prisma.poli.count(),
      prisma.layanan.count(),
      prisma.berita.count(),
      prisma.jadwalDokter.count(),
      prisma.review.count(),
    ]);

    return successResponse(
      {
        totalUser,
        totalDokter,
        totalPoli,
        totalLayanan,
        totalBerita,
        totalJadwal,
        totalReview,
      },
      "Data dashboard berhasil diambil",
    );
  } catch (error) {
    console.error("[GET /api/dashboard]", error);
    return errorResponse("Gagal mengambil data dashboard");
  }
}
