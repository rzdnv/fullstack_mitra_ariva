import { signOut } from "@/auth";
import { successResponse, errorResponse } from "@/lib/api-response";

export async function POST() {
  try {
    await signOut({ redirect: false });
    return successResponse(null, "Logout berhasil");
  } catch (error) {
    console.error("[POST /api/auth/logout]", error);
    return errorResponse("Gagal logout");
  }
}
