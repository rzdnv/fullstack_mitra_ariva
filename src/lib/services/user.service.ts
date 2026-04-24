import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import {
  CreateUserInput,
  UpdateUserInput,
} from "@/lib/validations/user.validation";

const selectUser = {
  id: true,
  username: true,
  role: true,
  createdAt: true,
};

export async function getAllUser() {
  return await prisma.user.findMany({
    select: selectUser,
    orderBy: { createdAt: "desc" },
  });
}

export async function getUserById(id: number) {
  return await prisma.user.findUnique({
    where: { id },
    select: selectUser,
  });
}

export async function createUser(data: CreateUserInput) {
  const existing = await prisma.user.findUnique({
    where: { username: data.username },
  });
  if (existing) throw new Error("Username sudah dipakai");

  const hashedPassword = await bcrypt.hash(data.password, 10);

  return await prisma.user.create({
    data: {
      username: data.username,
      password: hashedPassword,
      role: data.role,
    },
    select: selectUser,
  });
}

export async function updateUser(id: number, data: UpdateUserInput) {
  if (data.username) {
    const existing = await prisma.user.findFirst({
      where: { username: data.username, NOT: { id } },
    });
    if (existing) throw new Error("Username sudah dipakai");
  }

  return await prisma.user.update({
    where: { id },
    data: {
      username: data.username,
      ...(data.password && {
        password: await bcrypt.hash(data.password, 10),
      }),
      role: data.role,
    },
    select: selectUser,
  });
}

export async function deleteUser(id: number) {
  return await prisma.user.delete({ where: { id } });
}
