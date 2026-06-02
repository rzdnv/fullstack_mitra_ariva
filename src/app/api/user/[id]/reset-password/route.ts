// PUT /api/users/:id/reset-password

import { NextRequest } from "next/server";

import { successResponse, errorResponse } from "@/lib/api-response";
import { requireAdmin } from "@/lib/auth-guard";
import { resetPassword } from "@/lib/services/user.service";

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { error } = await requireAdmin();
  if (error) return error;

  const { id } = await params;
  const { password } = await req.json();

  if (!password || password.length < 6) {
    return errorResponse("Password minimal 6 karakter", 400);
  }

  const user = await resetPassword(Number(id), password);
  return successResponse(user, "Password berhasil direset");
}
