// import { NextRequest } from "next/server";
// import { prisma } from "@/lib/prisma";
// import bcrypt from "bcryptjs";
// import { z } from "zod";
// import { successResponse, errorResponse } from "@/lib/api-response";
// import { signIn } from "@/auth";

// const loginSchema = z.object({
//   username: z.string().min(1, "Username wajib diisi"),
//   password: z.string().min(1, "Password wajib diisi"),
// });

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const parsed = loginSchema.safeParse(body);

//     if (!parsed.success) {
//       return errorResponse(parsed.error.issues[0].message, 400);
//     }

//     const { username, password } = parsed.data;

//     const user = await prisma.user.findUnique({ where: { username } });
//     if (!user) return errorResponse("Username atau password salah", 401);

//     const passwordMatch = await bcrypt.compare(password, user.password);
//     if (!passwordMatch)
//       return errorResponse("Username atau password salah", 401);

//     await signIn("credentials", {
//       username,
//       password,
//       redirect: false,
//     });

//     return successResponse(
//       { id: user.id, username: user.username, role: user.role },
//       "Login berhasil",
//     );
//   } catch (error) {
//     console.error("[POST /api/auth/login]", error);
//     return errorResponse("Gagal login");
//   }
// }

import { NextRequest } from "next/server";
import { successResponse, errorResponse } from "@/lib/api-response";
import { signIn } from "@/auth";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { username, password } = body;

    if (!username || !password) {
      return errorResponse("Username dan password wajib diisi", 400);
    }

    try {
      await signIn("credentials", {
        username,
        password,
        redirect: false,
      });

      return successResponse(null, "Login berhasil");
    } catch (authError) {
      if (authError instanceof Error) {
        if (
          authError.name === "CredentialsSignin" ||
          authError.message.includes("CredentialsSignin")
        ) {
          return errorResponse("Username atau password salah", 401);
        }

        if (authError.message === "NEXT_REDIRECT") {
          return successResponse(null, "Login berhasil");
        }
      }

      return errorResponse("Gagal memproses autentikasi", 401);
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error("[POST /api/auth/login]", error.message);
    }
    return errorResponse("Terjadi kesalahan pada server", 500);
  }
}
