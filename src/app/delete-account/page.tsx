 
"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function DeleteAccountPage() {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [confirmation, setConfirmation] = useState(false);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setMessage("");

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    if (!confirmation) {
      setError("Please confirm that you want to request account deletion.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/delete-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          reason,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message || "Unable to process your request."
        );
      }

      setMessage(
        data?.message ||
          "If an account exists for this email, a confirmation link has been sent."
      );

      setEmail("");
      setReason("");
      setConfirmation(false);
    } catch (err: any) {
      setError(
        err?.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f3f6f8] text-gray-800">

      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">

          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold text-blue-600"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
              R
            </span>

            ReferralHub
          </Link>

          <Link
            href="/"
            className="text-sm font-medium text-gray-600 hover:text-blue-600"
          >
            ← Back to ReferralHub
          </Link>

        </div>
      </header>

      {/* Main */}
      <section className="px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-2xl">

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-10">

            {/* Icon */}
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-red-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-7 w-7 text-red-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 7h12M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2m2 0v12a1 1 0 01-1 1H8a1 1 0 01-1-1V7h10z"
                />
              </svg>
            </div>

            {/* Heading */}
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Delete your ReferralHub account
            </h1>

            <p className="mt-4 leading-7 text-gray-600">
              You can request deletion of your ReferralHub account and
              associated personal data using the form below.
            </p>

            {/* Warning */}
            <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4">
              <p className="text-sm leading-6 text-amber-800">
                <strong>Please note:</strong> Account deletion may be
                permanent and cannot be undone. Your profile, connections,
                posts, referrals, messages, and other associated data may
                be deleted or anonymized.
              </p>
            </div>

            {/* Success */}
            {message && (
              <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-4">
                <p className="text-sm leading-6 text-green-800">
                  {message}
                </p>
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4">
                <p className="text-sm leading-6 text-red-800">
                  {error}
                </p>
              </div>
            )}

            {/* Form */}
            <form
              className="mt-8 space-y-5"
              onSubmit={handleSubmit}
            >

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-900"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter the email associated with your account"
                  disabled={loading}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 disabled:bg-gray-100"
                />
              </div>

              {/* Reason */}
              <div>
                <label
                  htmlFor="reason"
                  className="mb-2 block text-sm font-semibold text-gray-900"
                >
                  Reason for deletion
                  <span className="ml-1 font-normal text-gray-400">
                    (optional)
                  </span>
                </label>

                <select
                  id="reason"
                  name="reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  disabled={loading}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100 disabled:bg-gray-100"
                >
                  <option value="">
                    Select a reason
                  </option>

                  <option value="no-longer-needed">
                    I no longer need my account
                  </option>

                  <option value="privacy">
                    Privacy concerns
                  </option>

                  <option value="not-useful">
                    ReferralHub is not useful for me
                  </option>

                  <option value="other">
                    Other
                  </option>
                </select>
              </div>

              {/* Confirmation */}
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <label className="flex cursor-pointer gap-3">

                  <input
                    type="checkbox"
                    name="confirmation"
                    checked={confirmation}
                    onChange={(e) =>
                      setConfirmation(e.target.checked)
                    }
                    disabled={loading}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />

                  <span className="text-sm leading-6 text-gray-600">
                    I understand that requesting account deletion may
                    permanently remove my ReferralHub account and
                    associated data, subject to applicable legal and
                    security requirements.
                  </span>

                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-red-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading
                  ? "Processing..."
                  : "Request Account Deletion"}
              </button>

            </form>

            {/* Information */}
            <div className="mt-8 border-t border-gray-200 pt-6">

              <h2 className="text-sm font-bold text-gray-900">
                What happens after your request?
              </h2>

              <ol className="mt-3 space-y-2 text-sm leading-6 text-gray-600">
                <li>
                  1. Enter the email address associated with your
                  ReferralHub account.
                </li>

                <li>
                  2. We will send a confirmation link to that email
                  address.
                </li>

                <li>
                  3. Open the link and confirm that you want to
                  permanently delete your account.
                </li>

                <li>
                  4. Your ReferralHub account and associated personal
                  data will then be deleted or anonymized where
                  applicable.
                </li>

                <li>
                  5. Some information may be retained where required
                  by law, security, fraud prevention, or legitimate
                  business requirements.
                </li>
              </ol>

            </div>

            {/* Privacy */}
            <div className="mt-6 text-center">
              <Link
                href="/privacy"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                Read our Privacy Policy
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white px-4 py-8 text-center">

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} ReferralHub. All rights reserved.
        </p>

        <div className="mt-3 flex justify-center gap-5 text-sm">

          <Link
            href="/privacy"
            className="text-blue-600 hover:underline"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms"
            className="text-blue-600 hover:underline"
          >
            Terms of Service
          </Link>

          <Link
            href="/contact"
            className="text-blue-600 hover:underline"
          >
            Contact
          </Link>

        </div>

      </footer>

    </main>
  );
}
 