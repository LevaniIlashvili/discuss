"use server";

import { redirect } from "next/navigation";

export async function search(formData: FormData) {
  console.log("");
  const term = formData.get("term");

  if (typeof term !== "string") {
    redirect("/");
  }

  redirect(`/search?term=${term}`);
}
