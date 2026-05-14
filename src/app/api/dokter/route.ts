import { NextRequest } from "next/server";
import { createDokterSchema } from "@/lib/validations/dokter.validation";
import { getAllDokter, createDokter } from "@/lib/services/dokter.service";
import { successResponse, errorResponse } from "@/lib/api-response";
import { requireAuth } from "@/lib/auth-guard";
import { prisma } from "@/lib/prisma";

// GET /api/dokter
// export async function GET(req: NextRequest) {
//   try {
//     const { searchParams } = new URL(req.url);
//     const poliId = searchParams.get("poliId");

//     let dokter;
//     if (poliId) {
//       const { getDokterByPoli } = await import("@/lib/services/dokter.service");
//       dokter = await getDokterByPoli(Number(poliId));
//     } else {
//       dokter = await getAllDokter();
//     }

//     return successResponse(dokter, "Data dokter berhasil diambil");
//   } catch (error) {
//     console.error("[GET /api/dokter]", error);
//     return errorResponse("Gagal mengambil data dokter");
//   }
// }
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = Number(searchParams.get("page") ?? 1);
    const limit = Number(searchParams.get("limit") ?? 10);
    const search = searchParams.get("search") ?? "";
    const poliId = searchParams.get("poliId");

    const where = {
      ...(search && {
        OR: [
          { nama: { contains: search, mode: "insensitive" as const } },
          { spesialis: { contains: search, mode: "insensitive" as const } },
        ],
      }),
      ...(poliId && { poliId: Number(poliId) }),
    };

    const [dokter, total] = await Promise.all([
      prisma.dokter.findMany({
        where,
        skip: (page - 1) * limit,
        take: limit,
        include: { poli: true, jadwal: true },
        orderBy: { createdAt: "desc" },
      }),
      prisma.dokter.count({ where }),
    ]);

    return successResponse(
      {
        data: dokter,
        meta: {
          total,
          page,
          limit,
          totalPage: Math.ceil(total / limit),
        },
      },
      "Data dokter berhasil diambil",
    );
  } catch (error) {
    console.error("[GET /api/dokter]", error);
    return errorResponse("Gagal mengambil data dokter");
  }
}

// POST /api/dokter
export async function POST(req: NextRequest) {
  try {
    const { error } = await requireAuth();
    if (error) return error;

    const body = await req.json();
    const parsed = createDokterSchema.safeParse(body);

    if (!parsed.success) {
      return errorResponse(parsed.error.issues[0].message, 400);
    }

    const dokter = await createDokter(parsed.data);
    return successResponse(dokter, "Dokter berhasil dibuat", 201);
  } catch (error) {
    console.error("[POST /api/dokter]", error);
    return errorResponse("Gagal membuat dokter");
  }
}
