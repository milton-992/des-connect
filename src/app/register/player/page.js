"use client";

import { useState } from "react";
import { supabase } from "../../../lib/supabaseClient";

export default function PlayerApplicationPage() {
  const positions = [
    "Goalkeeper",
    "Right Back",
    "Centre Back",
    "Left Back",
    "Defensive Midfielder",
    "Central Midfielder",
    "Attacking Midfielder",
    "Right Winger",
    "Left Winger",
    "Striker",
  ];

  const [formData, setFormData] = useState({
    full_name: "",
    date_of_birth: "",
    nationality: "",
    current_country: "",
    email: "",
    phone: "",
    height_cm: "",
    weight_kg: "",
    preferred_foot: "Right",
    position: "Goalkeeper",
    secondary_position: "None",
    current_club: "",
    previous_clubs: "",
    playing_level: "",
    contract_status: "",
    video_link: "",
    full_match_video_link: "",
    transfermarkt_link: "",
    zerozero_link: "",
    instagram_link: "",
    player_bio: "",
    main_strengths: "",
    achievements: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    if (!formData.full_name.trim()) {
      setErrorMessage("Please enter the player's full name.");
      setIsSubmitting(false);
      return;
    }

    if (!formData.email.trim()) {
      setErrorMessage("Please enter an email address.");
      setIsSubmitting(false);
      return;
    }

    const heightNumber = formData.height_cm
      ? Number.parseInt(formData.height_cm, 10)
      : null;

    const notes = [
      formData.contract_status
        ? `Contract Status: ${formData.contract_status}`
        : "",
      formData.weight_kg ? `Weight: ${formData.weight_kg}kg` : "",
      formData.full_match_video_link
        ? `Full Match Video: ${formData.full_match_video_link}`
        : "",
      formData.zerozero_link ? `ZeroZero Link: ${formData.zerozero_link}` : "",
      formData.player_bio ? `Player Bio: ${formData.player_bio}` : "",
      formData.main_strengths
        ? `Main Strengths: ${formData.main_strengths}`
        : "",
      formData.achievements ? `Achievements: ${formData.achievements}` : "",
    ]
      .filter(Boolean)
      .join("\n\n");

    const { error } = await supabase.from("player_applications").insert([
      {
        full_name: formData.full_name.trim(),
        date_of_birth: formData.date_of_birth || null,
        nationality: formData.nationality.trim() || null,
        current_country: formData.current_country.trim() || null,
        email: formData.email.trim(),
        phone: formData.phone.trim() || null,

        position: formData.position || null,
        secondary_position:
          formData.secondary_position === "None"
            ? null
            : formData.secondary_position,
        preferred_foot: formData.preferred_foot || null,
        height_cm: Number.isNaN(heightNumber) ? null : heightNumber,
        current_club: formData.current_club.trim() || null,
        previous_clubs: formData.previous_clubs.trim() || null,
        playing_level: formData.playing_level.trim() || null,

        video_link: formData.video_link.trim() || null,
        transfermarkt_link: formData.transfermarkt_link.trim() || null,
        instagram_link: formData.instagram_link.trim() || null,
        notes: notes || null,

        application_status: "pending",
      },
    ]);

    if (error) {
      setErrorMessage(
        `Supabase error: ${error.message || JSON.stringify(error)}`
      );
      setIsSubmitting(false);
      return;
    }

    setSuccessMessage(
      "Player application submitted successfully. DES will review it before any profile or QR ID is activated."
    );

    setFormData({
      full_name: "",
      date_of_birth: "",
      nationality: "",
      current_country: "",
      email: "",
      phone: "",
      height_cm: "",
      weight_kg: "",
      preferred_foot: "Right",
      position: "Goalkeeper",
      secondary_position: "None",
      current_club: "",
      previous_clubs: "",
      playing_level: "",
      contract_status: "",
      video_link: "",
      full_match_video_link: "",
      transfermarkt_link: "",
      zerozero_link: "",
      instagram_link: "",
      player_bio: "",
      main_strengths: "",
      achievements: "",
    });

    setIsSubmitting(false);
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(180,20,20,0.35),transparent_35%),radial-gradient(circle_at_top_right,rgba(234,179,8,0.2),transparent_30%),linear-gradient(180deg,#050505,#000)]" />

      <header className="border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="flex items-center gap-4">
            <div className="grid h-14 w-14 place-items-center rounded-2xl border border-yellow-400/40 bg-black p-2 shadow-[0_0_30px_rgba(234,179,8,0.18)]">
              <img
                src="/des-logo.png"
                alt="Draft Elite Sport logo"
                className="h-full w-full object-contain"
              />
            </div>

            <div>
              <p className="text-xl font-black tracking-[0.28em]">DES</p>
              <p className="text-xs uppercase tracking-[0.32em] text-yellow-400">
                Draft Elite Sport
              </p>
            </div>
          </a>

          <a
            href="/register"
            className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-white hover:bg-white/10"
          >
            Back to Register
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-950/30 px-4 py-2 text-sm text-green-100">
            ✅ DES Player Application
          </div>

          <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Build your{" "}
            <span className="text-yellow-400">DES player profile.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Submit your football information for DES review. Approved players
            will later receive a verified DES profile and unique QR code.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-5xl">
          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl md:p-10"
          >
            <div className="mb-10">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                Personal Details
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Basic player information
              </h2>
              <p className="mt-3 text-white/60">
                These details will form the first part of your DES football
                profile.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <InputField
                label="Full Name"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                placeholder="Example: Milton Mendonca"
                required
              />

              <InputField
                label="Date of Birth"
                name="date_of_birth"
                value={formData.date_of_birth}
                onChange={handleChange}
                type="date"
              />

              <InputField
                label="Nationality"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                placeholder="Example: Portugal"
              />

              <InputField
                label="Current Country"
                name="current_country"
                value={formData.current_country}
                onChange={handleChange}
                placeholder="Example: United Kingdom"
              />

              <InputField
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="example@email.com"
                required
              />

              <InputField
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+44..."
              />

              <InputField
                label="Height in cm"
                name="height_cm"
                value={formData.height_cm}
                onChange={handleChange}
                type="number"
                placeholder="Example: 182"
              />

              <InputField
                label="Weight in kg"
                name="weight_kg"
                value={formData.weight_kg}
                onChange={handleChange}
                type="number"
                placeholder="Example: 76"
              />

              <SelectField
                label="Preferred Foot"
                name="preferred_foot"
                value={formData.preferred_foot}
                onChange={handleChange}
                options={["Right", "Left", "Both"]}
              />

              <SelectField
                label="Main Position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                options={positions}
              />

              <SelectField
                label="Secondary Position"
                name="secondary_position"
                value={formData.secondary_position}
                onChange={handleChange}
                options={["None", ...positions]}
              />

              <InputField
                label="Current Club"
                name="current_club"
                value={formData.current_club}
                onChange={handleChange}
                placeholder="Example: Palm City FC"
              />

              <InputField
                label="Previous Clubs"
                name="previous_clubs"
                value={formData.previous_clubs}
                onChange={handleChange}
                placeholder="Example: Club A, Club B, Club C"
              />

              <InputField
                label="Playing Level"
                name="playing_level"
                value={formData.playing_level}
                onChange={handleChange}
                placeholder="Example: Semi-pro / Academy / Grassroots"
              />

              <InputField
                label="Contract Status"
                name="contract_status"
                value={formData.contract_status}
                onChange={handleChange}
                placeholder="Example: Free agent / Under contract"
              />

              <InputField
                label="Instagram Link"
                name="instagram_link"
                value={formData.instagram_link}
                onChange={handleChange}
                placeholder="https://instagram.com/..."
              />
            </div>

            <div className="my-10 border-t border-white/10" />

            <div className="mb-10">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                Football Media
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Video links and profile references
              </h2>
              <p className="mt-3 text-white/60">
                Add links that help DES evaluate your current football level.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <InputField
                label="YouTube Highlights Link"
                name="video_link"
                value={formData.video_link}
                onChange={handleChange}
                placeholder="https://youtube.com/..."
              />

              <InputField
                label="Full Match Video Link"
                name="full_match_video_link"
                value={formData.full_match_video_link}
                onChange={handleChange}
                placeholder="https://youtube.com/..."
              />

              <InputField
                label="Transfermarkt Link"
                name="transfermarkt_link"
                value={formData.transfermarkt_link}
                onChange={handleChange}
                placeholder="https://transfermarkt.com/..."
              />

              <InputField
                label="ZeroZero Link"
                name="zerozero_link"
                value={formData.zerozero_link}
                onChange={handleChange}
                placeholder="https://zerozero.pt/..."
              />
            </div>

            <div className="my-10 border-t border-white/10" />

            <div className="mb-10">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                Player Bio
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Tell DES about your game
              </h2>
              <p className="mt-3 text-white/60">
                Keep it honest, professional, and football-focused.
              </p>
            </div>

            <div className="grid gap-5">
              <TextAreaField
                label="Short Player Bio"
                name="player_bio"
                value={formData.player_bio}
                onChange={handleChange}
                placeholder="Tell us about your football journey, your position, your playing style, and what type of opportunity you are looking for."
              />

              <TextAreaField
                label="Main Strengths"
                name="main_strengths"
                value={formData.main_strengths}
                onChange={handleChange}
                placeholder="Example: 1v1 attacking, pace, crossing, finishing, defensive discipline, leadership, work rate..."
              />

              <TextAreaField
                label="Achievements"
                name="achievements"
                value={formData.achievements}
                onChange={handleChange}
                placeholder="Example: trophies, trials, academy background, top scorer, captain, representative teams..."
              />
            </div>

            <div className="mt-10 rounded-[1.5rem] border border-yellow-400/20 bg-yellow-400/10 p-5">
              <p className="font-black text-yellow-400">
                Important DES Review Notice
              </p>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Submitting this application does not automatically make you a
                DES player. Your profile must be reviewed and approved by DES
                before any public profile, QR ID, or representation activity is
                activated.
              </p>
            </div>

            {successMessage && (
              <div className="mt-8 rounded-[1.5rem] border border-green-500/30 bg-green-950/30 p-5">
                <p className="font-black text-green-200">Application Sent ✅</p>
                <p className="mt-2 text-sm leading-6 text-green-100/80">
                  {successMessage}
                </p>
              </div>
            )}

            {errorMessage && (
              <div className="mt-8 rounded-[1.5rem] border border-red-500/30 bg-red-950/30 p-5">
                <p className="font-black text-red-100">Submission Error</p>
                <p className="mt-2 text-sm leading-6 text-red-100/80">
                  {errorMessage}
                </p>
              </div>
            )}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-yellow-500 px-8 py-4 text-center font-black text-black hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting
                  ? "Submitting Application..."
                  : "Submit Player Application →"}
              </button>

              <a
                href="/register"
                className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-center font-bold text-white hover:bg-white/10"
              >
                Choose Different Pathway
              </a>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/45">
        © {new Date().getFullYear()} Draft Elite Sport. DES Player Application.
      </footer>
    </main>
  );
}

function InputField({
  label,
  name,
  value,
  onChange,
  placeholder = "",
  type = "text",
  required = false,
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-white/80">
        {label}
        {required ? <span className="text-yellow-400"> *</span> : null}
      </label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-white placeholder:text-white/30 outline-none focus:border-yellow-400"
      />
    </div>
  );
}

function SelectField({ label, name, value, onChange, options }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-white/80">
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-white outline-none focus:border-yellow-400"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

function TextAreaField({ label, name, value, onChange, placeholder = "" }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-white/80">
        {label}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows="5"
        placeholder={placeholder}
        className="w-full resize-none rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-white placeholder:text-white/30 outline-none focus:border-yellow-400"
      />
    </div>
  );
}