"use server";

import { revalidatePath } from "next/cache";
import { supabaseAdmin } from "../../lib/supabaseAdmin";

export async function updatePlayerApplicationStatus(formData) {
  const applicationId = formData.get("applicationId");
  const newStatus = formData.get("newStatus");
  const adminNotes = formData.get("adminNotes");

  if (!applicationId) {
    throw new Error("Missing application ID.");
  }

  if (!newStatus) {
    throw new Error("Missing application status.");
  }

  const allowedStatuses = ["pending", "approved", "rejected", "on_hold"];

  if (!allowedStatuses.includes(newStatus)) {
    throw new Error("Invalid application status.");
  }

  const updatePayload = {
    application_status: newStatus,
  };

  if (typeof adminNotes === "string") {
    updatePayload.admin_notes = adminNotes.trim() || null;
  }

  const { error } = await supabaseAdmin
    .from("player_applications")
    .update(updatePayload)
    .eq("id", applicationId);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin");
}