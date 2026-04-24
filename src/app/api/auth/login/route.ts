import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { successResponse, errorResponse } from "@/lib/api-response";
import { signIn } from "@/auth";

const loginSchema = z.object({
  username: z.string().min(1, "Username wajib diisi"),
  password: z.string().min(1, "Password wajib diisi"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = loginSchema.safeParse(body);

    if (!parsed.success) {
      return errorResponse(parsed.error.issues[0].message, 400);
    }

    const { username, password } = parsed.data;

    const user = await prisma.user.findUnique({ where: { username } });
    if (!user) return errorResponse("Username atau password salah", 401);

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch)
      return errorResponse("Username atau password salah", 401);

    await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    return successResponse(
      { id: user.id, username: user.username, role: user.role },
      "Login berhasil",
    );
  } catch (error) {
    console.error("[POST /api/auth/login]", error);
    return errorResponse("Gagal login");
  }
}
