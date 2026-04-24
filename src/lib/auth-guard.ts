// src/lib/auth-guard.ts
import { auth } from "@/auth";
import { errorResponse } from "@/lib/api-response";

// Semua yang sudah login (admin & editor)
export async function requireAuth() {
  const session = await auth();
  if (!session) {
    return {
      session: null,
      error: errorResponse("Silakan login terlebih dahulu", 401),
    };
  }
  return { session, error: null };
}

// Hanya ADMIN
export async function requireAdmin() {
  const session = await auth();
  if (!session) {
    return {
      session: null,
      error: errorResponse("Silakan login terlebih dahulu", 401),
    };
  }
  if (session.user.role !== "ADMIN") {
    return {
      session: null,
      error: errorResponse("Hanya admin yang bisa mengakses ini", 403),
    };
  }
  return { session, error: null };
}
