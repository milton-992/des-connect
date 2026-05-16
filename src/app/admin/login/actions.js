"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function adminLogin(formData) {
  const password = formData.get("password");

  if (!password) {
    redirect("/admin/login?error=missing");
  }

  if (password !== process.env.ADMIN_PASSWORD) {
    redirect("/admin/login?error=invalid");
  }

  const cookieStore = await cookies();

  cookieStore.set("des_admin_auth", "true", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  redirect("/admin");
}

export async function adminLogout() {
  const cookieStore = await cookies();

  cookieStore.set("des_admin_auth", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });

  redirect("/admin/login");
}