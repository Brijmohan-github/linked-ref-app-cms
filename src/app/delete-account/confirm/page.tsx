 
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ConfirmDeleteAccountPage() {
  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleDelete() {
    if (!token) {
      setError("Invalid or missing deletion token.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/delete-account/confirm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message || "Unable to delete your account."
        );
      }

      setSuccess(true);
    } catch (err: any) {
      setError(
        err?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  if (!token) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-lg rounded-2xl bg-white p-8 text-center shadow-sm">

          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-red-50">
            <span className="text-2xl text-red-600">!</span>
          </div>

          <h1 className="text-2xl font-bold text-gray-900">
            Invalid deletion link
          </h1>

          <p className="mt-3 text-gray-600">
            This account deletion link is missing or invalid.
          </p>

          <Link
            href="/delete-account"
            className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Request Account Deletion
          </Link>

        </div>
      </main>
    );
  }

  if (success) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">

        <div className="w-full max-w-lg rounded-2xl bg-white p-8 text-center shadow-sm">

          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
            <svg
              className="h-8 w-8 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-2xl font-bold text-gray-900">
            Account deleted
          </h1>

          <p className="mt-4 leading-7 text-gray-600">
            Your ReferralHub account and associated personal data
            have been deleted or anonymized where applicable.
          </p>

          <p className="mt-3 text-sm text-gray-500">
            You can close this page now.
          </p>

        </div>

      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">

      <div className="w-full max-w-lg rounded-2xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10">

        {/* Icon */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-8 w-8 text-red-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 7h12M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2m2 0v12a1 1 0 01-1 1H8a1 1 0 01-1-1V7h10z"
            />
          </svg>
        </div>

        <h1 className="text-center text-2xl font-bold text-gray-900">
          Confirm account deletion
        </h1>

        <p className="mt-4 text-center leading-7 text-gray-600">
          You requested deletion of your ReferralHub account.
        </p>

        {/* Warning */}
        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4">
          <p className="text-sm leading-6 text-red-800">
            <strong>Warning:</strong> This action is permanent and
            cannot be undone.
          </p>

          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-red-800">
            <li>Your account will be deleted.</li>
            <li>Your profile information will be deleted.</li>
            <li>Your associated personal data will be deleted or anonymized.</li>
            <li>Some information may be retained where legally required.</li>
          </ul>
        </div>

        {/* Error */}
        {error && (
          <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4">
            <p className="text-sm text-red-700">
              {error}
            </p>
          </div>
        )}

        {/* Confirm */}
        <button
          type="button"
          onClick={handleDelete}
          disabled={loading}
          className="mt-8 w-full rounded-lg bg-red-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading
            ? "Deleting account..."
            : "Confirm Permanent Deletion"}
        </button>

        {/* Cancel */}
        {!loading && (
          <Link
            href="/delete-account"
            className="mt-4 block text-center text-sm font-medium text-gray-600 hover:text-blue-600"
          >
            Cancel
          </Link>
        )}

        <div className="mt-8 border-t border-gray-200 pt-6 text-center">
          <Link
            href="/policy"
            className="text-sm text-blue-600 hover:underline"
          >
            Privacy Policy
          </Link>
        </div>

      </div>

    </main>
  );
} 