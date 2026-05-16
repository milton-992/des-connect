"use client";

import { useState } from "react";
import { supabase } from "../../../lib/supabaseClient";

export default function ScoutApplicationPage() {
  const footballLevels = [
    "Youth / grassroots football",
    "Academy football",
    "Semi-professional football",
    "Professional football",
    "International youth football",
    "Mixed levels",
  ];

  const scoutExperience = [
    "No formal scouting experience yet",
    "Informal player recommendations",
    "Grassroots scouting",
    "Academy scouting",
    "Club scouting experience",
    "Agency / recruitment experience",
  ];

  const yesNoOptions = ["Yes", "No", "Sometimes"];

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    nationality: "",
    current_country: "",
    city: "",
    languages: "",
    current_football_role: "",
    experience_level: "No formal scouting experience yet",
    football_background: "Youth / grassroots football",
    scouting_country: "",
    scouting_region: "",
    preferred_age_group: "",
    availability: "",
    has_transport: "No",
    can_record_matches: "No",
    understands_des_methodology: "No",
    motivation: "",
    strengths: "",
    known_competitions: "",
    evaluation_method: "",
    previous_recommendations: "",
    academy_requirement: false,
    no_false_promises: false,
    professional_conduct: false,
    des_approval: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    if (!formData.full_name.trim()) {
      setErrorMessage("Please enter your full name.");
      setIsSubmitting(false);
      return;
    }

    if (!formData.email.trim()) {
      setErrorMessage("Please enter your email address.");
      setIsSubmitting(false);
      return;
    }

    if (
      !formData.academy_requirement ||
      !formData.no_false_promises ||
      !formData.professional_conduct ||
      !formData.des_approval
    ) {
      setErrorMessage(
        "Please confirm all DES standards before submitting your scout application."
      );
      setIsSubmitting(false);
      return;
    }

    const notes = [
      formData.preferred_age_group
        ? `Preferred Age Group: ${formData.preferred_age_group}`
        : "",
      formData.known_competitions
        ? `Known Clubs / Academies / Competitions: ${formData.known_competitions}`
        : "",
      formData.evaluation_method
        ? `Evaluation Method: ${formData.evaluation_method}`
        : "",
      formData.previous_recommendations
        ? `Previous Player Recommendations: ${formData.previous_recommendations}`
        : "",
      `Confirmed DES Academy Requirement: ${
        formData.academy_requirement ? "Yes" : "No"
      }`,
      `Confirmed No False Promises: ${
        formData.no_false_promises ? "Yes" : "No"
      }`,
      `Confirmed Professional Conduct: ${
        formData.professional_conduct ? "Yes" : "No"
      }`,
      `Confirmed DES Approval Required: ${
        formData.des_approval ? "Yes" : "No"
      }`,
    ]
      .filter(Boolean)
      .join("\n\n");

    const { error } = await supabase.from("scout_applications").insert([
      {
        full_name: formData.full_name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || null,
        nationality: formData.nationality.trim() || null,
        current_country: formData.current_country.trim() || null,
        city: formData.city.trim() || null,

        scouting_country: formData.scouting_country.trim() || null,
        scouting_region: formData.scouting_region.trim() || null,
        football_background: formData.football_background || null,
        current_football_role: formData.current_football_role.trim() || null,
        experience_level: formData.experience_level || null,

        languages: formData.languages.trim() || null,
        availability: formData.availability.trim() || null,
        has_transport: formData.has_transport || null,
        can_record_matches: formData.can_record_matches || null,
        understands_des_methodology:
          formData.understands_des_methodology || null,

        motivation: formData.motivation.trim() || null,
        strengths: formData.strengths.trim() || null,
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
      "Scout application submitted successfully. DES will review your application before any scout access, DES ID, or academy approval is activated."
    );

    setFormData({
      full_name: "",
      email: "",
      phone: "",
      nationality: "",
      current_country: "",
      city: "",
      languages: "",
      current_football_role: "",
      experience_level: "No formal scouting experience yet",
      football_background: "Youth / grassroots football",
      scouting_country: "",
      scouting_region: "",
      preferred_age_group: "",
      availability: "",
      has_transport: "No",
      can_record_matches: "No",
      understands_des_methodology: "No",
      motivation: "",
      strengths: "",
      known_competitions: "",
      evaluation_method: "",
      previous_recommendations: "",
      academy_requirement: false,
      no_false_promises: false,
      professional_conduct: false,
      des_approval: false,
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
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/30 px-4 py-2 text-sm text-red-100">
            🔎 DES Scout Application
          </div>

          <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Apply to become a{" "}
            <span className="text-yellow-400">DES scout.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            DES scouts help identify, evaluate, and recommend players with real
            potential. Every scout must be reviewed, trained, tested, and
            approved before representing DES.
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
                Basic scout information
              </h2>
              <p className="mt-3 text-white/60">
                DES needs to know who you are, where you operate, and how you
                can support the scouting network.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <InputField
                label="Full Name"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                placeholder="Example: Carlos Santos"
                required
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
                placeholder="+244 / +351 / +971..."
              />

              <InputField
                label="Nationality"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                placeholder="Example: Angola"
              />

              <InputField
                label="Current Country"
                name="current_country"
                value={formData.current_country}
                onChange={handleChange}
                placeholder="Example: Angola / Portugal / UAE"
              />

              <InputField
                label="City / Region"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Example: Luanda / Lisbon / Dubai"
              />

              <InputField
                label="Languages Spoken"
                name="languages"
                value={formData.languages}
                onChange={handleChange}
                placeholder="Example: Portuguese, English, Arabic"
              />

              <InputField
                label="Current Football Connection"
                name="current_football_role"
                value={formData.current_football_role}
                onChange={handleChange}
                placeholder="Example: Club staff, coach, ex-player, independent scout"
              />

              <SelectField
                label="Scouting Experience"
                name="experience_level"
                value={formData.experience_level}
                onChange={handleChange}
                options={scoutExperience}
              />

              <SelectField
                label="Main Football Level Watched"
                name="football_background"
                value={formData.football_background}
                onChange={handleChange}
                options={footballLevels}
              />

              <InputField
                label="Preferred Scouting Country / Market"
                name="scouting_country"
                value={formData.scouting_country}
                onChange={handleChange}
                placeholder="Example: Angola, Portugal, UAE"
              />

              <InputField
                label="Preferred Scouting Region"
                name="scouting_region"
                value={formData.scouting_region}
                onChange={handleChange}
                placeholder="Example: Luanda, Lisbon, Dubai"
              />

              <InputField
                label="Preferred Age Group"
                name="preferred_age_group"
                value={formData.preferred_age_group}
                onChange={handleChange}
                placeholder="Example: U17, U19, U23, senior"
              />

              <InputField
                label="Availability"
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                placeholder="Example: Weekends, evenings, matchdays"
              />

              <SelectField
                label="Do you have transport?"
                name="has_transport"
                value={formData.has_transport}
                onChange={handleChange}
                options={yesNoOptions}
              />

              <SelectField
                label="Can you record matches / clips?"
                name="can_record_matches"
                value={formData.can_record_matches}
                onChange={handleChange}
                options={yesNoOptions}
              />

              <SelectField
                label="Do you understand DES methodology?"
                name="understands_des_methodology"
                value={formData.understands_des_methodology}
                onChange={handleChange}
                options={yesNoOptions}
              />
            </div>

            <div className="my-10 border-t border-white/10" />

            <div className="mb-10">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                Football Knowledge
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Your scouting background
              </h2>
              <p className="mt-3 text-white/60">
                Tell DES how you find players, what you look for, and what kind
                of football environment you understand best.
              </p>
            </div>

            <div className="grid gap-5">
              <TextAreaField
                label="Why do you want to become a DES scout?"
                name="motivation"
                value={formData.motivation}
                onChange={handleChange}
                placeholder="Explain why you want to join DES, what you can bring, and what markets or clubs you have access to."
              />

              <TextAreaField
                label="What type of players do you usually identify?"
                name="strengths"
                value={formData.strengths}
                onChange={handleChange}
                placeholder="Example: fast wingers, technical midfielders, strong centre backs, young academy players, free agents..."
              />

              <TextAreaField
                label="Clubs, academies, or competitions you know well"
                name="known_competitions"
                value={formData.known_competitions}
                onChange={handleChange}
                placeholder="Example: local academies, regional leagues, youth tournaments, school football, semi-pro leagues..."
              />

              <TextAreaField
                label="Describe how you would evaluate a player"
                name="evaluation_method"
                value={formData.evaluation_method}
                onChange={handleChange}
                placeholder="Explain what you look at technically, tactically, physically, mentally, and professionally."
              />

              <TextAreaField
                label="Previous player recommendations"
                name="previous_recommendations"
                value={formData.previous_recommendations}
                onChange={handleChange}
                placeholder="If you have recommended players before, tell us what happened. Were they signed, trialed, rejected, or still developing?"
              />
            </div>

            <div className="my-10 border-t border-white/10" />

            <div className="mb-10">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                DES Standards
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Training, ethics, and approval
              </h2>
              <p className="mt-3 text-white/60">
                DES scouts must protect the organisation, respect players, and
                avoid false promises.
              </p>
            </div>

            <div className="grid gap-5">
              <AgreementBox
                title="DES Academy Requirement"
                text="I understand that I may need to complete DES Academy scout training and pass a test before I can become an approved DES scout."
                name="academy_requirement"
                checked={formData.academy_requirement}
                onChange={handleChange}
              />

              <AgreementBox
                title="No False Promises"
                text="I understand that I cannot promise players contracts, trials, visas, payments, or club opportunities without official DES approval."
                name="no_false_promises"
                checked={formData.no_false_promises}
                onChange={handleChange}
              />

              <AgreementBox
                title="Professional Conduct"
                text="I agree to behave professionally when speaking with players, families, clubs, coaches, and other scouts."
                name="professional_conduct"
                checked={formData.professional_conduct}
                onChange={handleChange}
              />

              <AgreementBox
                title="DES Approval"
                text="I understand that submitting this application does not automatically make me part of DES. Final approval is controlled by DES leadership."
                name="des_approval"
                checked={formData.des_approval}
                onChange={handleChange}
              />
            </div>

            <div className="mt-10 rounded-[1.5rem] border border-yellow-400/20 bg-yellow-400/10 p-5">
              <p className="font-black text-yellow-400">
                Important DES Scout Notice
              </p>
              <p className="mt-2 text-sm leading-6 text-white/70">
                DES scouts must complete the correct approval process before
                using the DES name, approaching players as a DES representative,
                or submitting official player recommendations. DES may approve,
                reject, pause, or remove scout access at any time to protect the
                organisation.
              </p>
            </div>

            {successMessage && (
              <div className="mt-8 rounded-[1.5rem] border border-green-500/30 bg-green-950/30 p-5">
                <p className="font-black text-green-200">
                  Scout Application Sent ✅
                </p>
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
                  ? "Submitting Scout Application..."
                  : "Submit Scout Application →"}
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
        © {new Date().getFullYear()} Draft Elite Sport. DES Scout Application.
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

function TextAreaField({
  label,
  name,
  value,
  onChange,
  placeholder = "",
}) {
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

function AgreementBox({ title, text, name, checked, onChange }) {
  return (
    <label className="flex cursor-pointer gap-4 rounded-2xl border border-white/10 bg-black/35 p-5 hover:border-yellow-400/40">
      <input
        name={name}
        checked={checked}
        onChange={onChange}
        type="checkbox"
        className="mt-1 h-5 w-5 accent-yellow-500"
      />
      <div>
        <p className="font-black text-white">{title}</p>
        <p className="mt-2 text-sm leading-6 text-white/60">{text}</p>
      </div>
    </label>
  );
}