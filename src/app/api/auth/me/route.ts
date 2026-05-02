import { auth } from "@/auth";
import { successResponse, errorResponse } from "@/lib/api-response";

export async function GET() {
  try {
    const session = await auth();
    if (!session) return errorResponse("Belum login", 401);

    return successResponse(
      {
        user: session.user,
        expires: session.expires,
      },
      "Data user berhasil diambil",
    );
  } catch (error) {
    console.error("[GET /api/auth/me]", error);
    return errorResponse("Gagal mengambil data user");
  }
}
