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
    updated_at: new Date().toISOString(),
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

export async function assignScoutDesId(formData) {
  const applicationId = formData.get("applicationId");
  const adminNotes = formData.get("adminNotes");

  if (!applicationId) {
    throw new Error("Missing scout application ID.");
  }

  const { data: currentApplication, error: currentError } = await supabaseAdmin
    .from("scout_applications")
    .select("id, des_scout_id, scout_profile_slug, application_status")
    .eq("id", applicationId)
    .single();

  if (currentError) {
    throw new Error(currentError.message);
  }

  if (!currentApplication) {
    throw new Error("Scout application not found.");
  }

  if (currentApplication.des_scout_id) {
    const updatePayload = {
      updated_at: new Date().toISOString(),
    };

    const match = currentApplication.des_scout_id.match(/^DES-SCOUT-(\d+)$/);

    if (!currentApplication.scout_profile_slug && match) {
      updatePayload.scout_profile_slug = `scout-${match[1]}`;
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

    if (updatePayload.scout_profile_slug) {
      revalidatePath(`/id/${updatePayload.scout_profile_slug}`);
    }

    return;
  }

  const { data: existingScouts, error: existingError } = await supabaseAdmin
    .from("scout_applications")
    .select("des_scout_id")
    .not("des_scout_id", "is", null);

  if (existingError) {
    throw new Error(existingError.message);
  }

  const usedNumbers = (existingScouts || [])
    .map((scout) => {
      const match = scout.des_scout_id?.match(/^DES-SCOUT-(\d+)$/);
      return match ? Number.parseInt(match[1], 10) : 0;
    })
    .filter((number) => Number.isFinite(number));

  const nextNumber = usedNumbers.length > 0 ? Math.max(...usedNumbers) + 1 : 1;
  const paddedNumber = String(nextNumber).padStart(4, "0");

  const newDesScoutId = `DES-SCOUT-${paddedNumber}`;
  const newScoutProfileSlug = `scout-${paddedNumber}`;

  const updatePayload = {
    des_scout_id: newDesScoutId,
    scout_profile_slug: newScoutProfileSlug,
    application_status: "approved",
    approved_at: new Date().toISOString(),
    profile_public: false,
    qr_active: false,
    academy_status: "not_started",
    certificate_status: "not_issued",
    updated_at: new Date().toISOString(),
  };

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
  revalidatePath(`/id/${newScoutProfileSlug}`);
}

export async function updateScoutProfileControls(formData) {
  const applicationId = formData.get("applicationId");
  const scoutProfileSlug = formData.get("scoutProfileSlug");
  const profilePublic = formData.get("profilePublic");
  const qrActive = formData.get("qrActive");
  const academyStatus = formData.get("academyStatus");
  const certificateTitle = formData.get("certificateTitle");
  const certificateLevel = formData.get("certificateLevel");
  const certificateStatus = formData.get("certificateStatus");
  const certificateIssueDate = formData.get("certificateIssueDate");
  const certificateExpiryDate = formData.get("certificateExpiryDate");
  const certificateUrl = formData.get("certificateUrl");

  if (!applicationId) {
    throw new Error("Missing scout application ID.");
  }

  const allowedAcademyStatuses = [
    "not_started",
    "in_progress",
    "passed",
    "failed",
    "certified",
  ];

  const allowedCertificateStatuses = [
    "not_issued",
    "issued",
    "expired",
    "revoked",
  ];

  if (!allowedAcademyStatuses.includes(academyStatus)) {
    throw new Error("Invalid academy status.");
  }

  if (!allowedCertificateStatuses.includes(certificateStatus)) {
    throw new Error("Invalid certificate status.");
  }

  const updatePayload = {
    profile_public: profilePublic === "true",
    qr_active: qrActive === "true",
    academy_status: academyStatus,
    certificate_title:
      typeof certificateTitle === "string" && certificateTitle.trim()
        ? certificateTitle.trim()
        : null,
    certificate_level:
      typeof certificateLevel === "string" && certificateLevel.trim()
        ? certificateLevel.trim()
        : null,
    certificate_status: certificateStatus,
    certificate_issue_date:
      typeof certificateIssueDate === "string" && certificateIssueDate
        ? certificateIssueDate
        : null,
    certificate_expiry_date:
      typeof certificateExpiryDate === "string" && certificateExpiryDate
        ? certificateExpiryDate
        : null,
    certificate_url:
      typeof certificateUrl === "string" && certificateUrl.trim()
        ? certificateUrl.trim()
        : null,
    updated_at: new Date().toISOString(),
  };

  const { error } = await supabaseAdmin
    .from("scout_applications")
    .update(updatePayload)
    .eq("id", applicationId);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin");

  if (scoutProfileSlug) {
    revalidatePath(`/id/${scoutProfileSlug}`);
  }
}