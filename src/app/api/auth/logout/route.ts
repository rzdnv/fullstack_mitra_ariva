import { successResponse, errorResponse } from "@/lib/api-response";
import { signOut } from "@/auth";

export async function POST() {
  try {
    await signOut({ redirect: false });
    return successResponse(null, "Logout berhasil");
  } catch (error) {
    if (error instanceof Error) {
      console.error("[POST /api/auth/logout]", error.message);
    }
    return errorResponse("Gagal logout", 500);
  }
}
