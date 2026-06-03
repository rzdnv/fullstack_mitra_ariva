import { successResponse, errorResponse } from "@/lib/api-response";
import { auth } from "@/auth";

export async function GET() {
  try {
    const session = await auth();

    if (!session || !session.user) {
      return errorResponse("Belum login atau session telah berakhir", 401);
    }

    return successResponse(
      {
        user: {
          id: session.user.id,
          username: session.user.username,
          role: session.user.role,
        },
        expires: session.expires,
      },
      "Data user berhasil diambil",
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error("[GET /api/auth/me]", error.message);
    }
    return errorResponse("Gagal mengambil data user", 500);
  }
}
