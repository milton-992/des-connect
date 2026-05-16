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

  if (newStatus === "approved") {
    updatePayload.approved_at = new Date().toISOString();
  }

  if (newStatus !== "approved") {
    updatePayload.approved_at = null;
  }

  if (typeof adminNotes === "string") {
    updatePayload.admin_notes = adminNotes.trim() || null;
  }

  const { data: updatedPlayer, error } = await supabaseAdmin
    .from("player_applications")
    .update(updatePayload)
    .eq("id", applicationId)
    .select("profile_slug")
    .single();

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin");

  if (updatedPlayer?.profile_slug) {
    revalidatePath(`/id/${updatedPlayer.profile_slug}`);
  }
}

export async function updateScoutApplicationStatus(formData) {
  const applicationId = formData.get("applicationId");
  const newStatus = formData.get("newStatus");
  const adminNotes = formData.get("adminNotes");

  if (!applicationId) {
    throw new Error("Missing scout application ID.");
  }

  if (!newStatus) {
    throw new Error("Missing scout application status.");
  }

  const allowedStatuses = ["pending", "approved", "rejected", "on_hold"];

  if (!allowedStatuses.includes(newStatus)) {
    throw new Error("Invalid scout application status.");
  }

  const updatePayload = {
    application_status: newStatus,
  };

  if (newStatus === "approved") {
    updatePayload.approved_at = new Date().toISOString();
  }

  if (newStatus !== "approved") {
    updatePayload.approved_at = null;
  }

  if (typeof adminNotes === "string") {
    updatePayload.admin_notes = adminNotes.trim() || null;
  }

  const { error } = await supabaseAdmin
    .from("scout_applications")
    .update(updatePayload)
    .eq("id", applicationId);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin");
}

export async function assignPlayerDesId(formData) {
  const applicationId = formData.get("applicationId");
  const adminNotes = formData.get("adminNotes");

  if (!applicationId) {
    throw new Error("Missing application ID.");
  }

  const { data: currentApplication, error: currentError } = await supabaseAdmin
    .from("player_applications")
    .select("id, des_id, profile_slug, application_status")
    .eq("id", applicationId)
    .single();

  if (currentError) {
    throw new Error(currentError.message);
  }

  if (!currentApplication) {
    throw new Error("Player application not found.");
  }

  if (currentApplication.des_id) {
    const updatePayload = {};

    if (typeof adminNotes === "string") {
      updatePayload.admin_notes = adminNotes.trim() || null;
    }

    if (Object.keys(updatePayload).length > 0) {
      const { error } = await supabaseAdmin
        .from("player_applications")
        .update(updatePayload)
        .eq("id", applicationId);

      if (error) {
        throw new Error(error.message);
      }
    }

    revalidatePath("/admin");

    if (currentApplication.profile_slug) {
      revalidatePath(`/id/${currentApplication.profile_slug}`);
    }

    return;
  }

  const { data: existingPlayers, error: existingError } = await supabaseAdmin
    .from("player_applications")
    .select("des_id")
    .not("des_id", "is", null);

  if (existingError) {
    throw new Error(existingError.message);
  }

  const usedNumbers = (existingPlayers || [])
    .map((player) => {
      const match = player.des_id?.match(/^DES-PLAYER-(\d+)$/);
      return match ? Number.parseInt(match[1], 10) : 0;
    })
    .filter((number) => Number.isFinite(number));

  const nextNumber = usedNumbers.length > 0 ? Math.max(...usedNumbers) + 1 : 1;
  const paddedNumber = String(nextNumber).padStart(4, "0");

  const newDesId = `DES-PLAYER-${paddedNumber}`;
  const newProfileSlug = `player-${paddedNumber}`;

  const updatePayload = {
    des_id: newDesId,
    profile_slug: newProfileSlug,
    profile_visibility: "private",
    qr_status: "inactive",
    application_status: "approved",
    approved_at: new Date().toISOString(),
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
  revalidatePath(`/id/${newProfileSlug}`);
}

export async function updatePlayerProfileControls(formData) {
  const applicationId = formData.get("applicationId");
  const profileSlug = formData.get("profileSlug");
  const profileVisibility = formData.get("profileVisibility");
  const qrStatus = formData.get("qrStatus");

  if (!applicationId) {
    throw new Error("Missing application ID.");
  }

  const allowedVisibility = ["private", "public"];
  const allowedQrStatus = ["inactive", "active"];

  if (!allowedVisibility.includes(profileVisibility)) {
    throw new Error("Invalid profile visibility.");
  }

  if (!allowedQrStatus.includes(qrStatus)) {
    throw new Error("Invalid QR status.");
  }

  const { error } = await supabaseAdmin
    .from("player_applications")
    .update({
      profile_visibility: profileVisibility,
      qr_status: qrStatus,
    })
    .eq("id", applicationId);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin");

  if (profileSlug) {
    revalidatePath(`/id/${profileSlug}`);
  }
}