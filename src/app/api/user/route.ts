import { NextRequest } from "next/server";
import { createUserSchema } from "@/lib/validations/user.validation";
import {
  getAllUser,
  createUser,
  getUserPaginated,
} from "@/lib/services/user.service";
import { successResponse, errorResponse } from "@/lib/api-response";
import { requireAdmin } from "@/lib/auth-guard";

// GET /api/users
// GET /api/review — public
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get("page");
    const limit = searchParams.get("limit");
    const search = searchParams.get("search") ?? "";

    if (!page && !limit) {
      // Ambil semua
      const user = await getAllUser();
      return successResponse(user, "Data user berhasil diambil");
    }

    // Kalau ada page & limit → pagination
    const result = await getUserPaginated({
      page: Number(page ?? 1),
      limit: Number(limit ?? 10),
      search,
    });

    return successResponse(result, "Data user berhasil diambil");
  } catch (error) {
    console.error("[GET /api/user]", error);
    return errorResponse("Gagal mengambil data user");
  }
}
// POST /api/users
export async function POST(req: NextRequest) {
  try {
    const { error } = await requireAdmin();
    if (error) return error;

    const body = await req.json();
    const parsed = createUserSchema.safeParse(body);

    if (!parsed.success) {
      return errorResponse(parsed.error.issues[0].message, 400);
    }

    const user = await createUser(parsed.data);
    return successResponse(user, "User berhasil dibuat", 201);
  } catch (error) {
    if (error instanceof Error) return errorResponse(error.message, 400);
    console.error("[POST /api/users]", error);
    return errorResponse("Gagal membuat user");
  }
}
