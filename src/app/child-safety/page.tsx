    
    import Link from "next/link";

    export const metadata = {
    title: "Child Safety Standards | ReferralHub",
    description:
        "ReferralHub Child Safety Standards and policies regarding child sexual abuse and exploitation.",
    };

    export default function ChildSafetyPage() {
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
                ← Back
            </Link>

            </div>
        </header>

        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-12 text-white">
            <div className="mx-auto max-w-4xl">

            <h1 className="text-4xl font-bold">
                Child Safety Standards
            </h1>

            <p className="mt-3 text-blue-100">
                ReferralHub is committed to maintaining a safe professional
                networking environment.
            </p>

            <p className="mt-2 text-sm text-blue-200">
                Last Updated: August 30, 2026
            </p>

            </div>
        </section>

        {/* Content */}
        <div className="mx-auto max-w-4xl px-4 py-10">

            <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-10">

            {/* Commitment */}
            <section className="mb-10">

                <h2 className="text-2xl font-bold text-gray-900">
                Our Commitment
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                ReferralHub is committed to protecting users and maintaining
                a safe professional networking environment. We have zero
                tolerance for child sexual abuse and exploitation (CSAE),
                including any content or behavior that sexually exploits,
                abuses, or endangers children.
                </p>

            </section>

            {/* Prohibited Content */}
            <section className="mb-10">

                <h2 className="text-2xl font-bold text-gray-900">
                Prohibited Content and Behavior
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                ReferralHub strictly prohibits:
                </p>

                <ul className="mt-4 ml-5 list-disc space-y-2 leading-7 text-gray-600">
                <li>
                    Child sexual abuse or exploitation.
                </li>

                <li>
                    Child sexual abuse material (CSAM).
                </li>

                <li>
                    Sexualization of minors.
                </li>

                <li>
                    Grooming or sexual solicitation of minors.
                </li>

                <li>
                    Attempts to arrange sexual contact with minors.
                </li>

                <li>
                    Sharing, requesting, distributing, or promoting CSAM.
                </li>

                <li>
                    Any other activity that sexually exploits or endangers
                    children.
                </li>
                </ul>

            </section>

            {/* Reporting */}
            <section className="mb-10">

                <h2 className="text-2xl font-bold text-gray-900">
                Reporting Child Safety Concerns
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                Users can report content, profiles, messages, or behavior
                that may violate our child safety standards using the
                reporting features available within ReferralHub.
                </p>

                <p className="mt-4 leading-7 text-gray-600">
                You can also report child safety concerns directly to our
                safety team:
                </p>

                <div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-5">

                <p className="font-semibold text-gray-900">
                    Child Safety Contact
                </p>

                <p className="mt-2">
                    Email:{" "}
                    <a
                    href="mailto:safety@referralhub.in"
                    className="font-medium text-blue-600 hover:underline"
                    >
                    safety@referralhub.in
                    </a>
                </p>

                </div>

                <p className="mt-4 text-sm leading-6 text-gray-500">
                Please include relevant details such as the username,
                profile, post, message, or other information that can help
                us investigate the report. Do not send illegal or harmful
                content unnecessarily.
                </p>

            </section>

            {/* Enforcement */}
            <section className="mb-10">

                <h2 className="text-2xl font-bold text-gray-900">
                Enforcement
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                We may remove violating content, restrict or suspend accounts,
                permanently terminate accounts, and take other appropriate
                action when violations are identified.
                </p>

                <p className="mt-4 leading-7 text-gray-600">
                Where required or appropriate, we may report suspected
                illegal activity to relevant authorities or appropriate
                organizations.
                </p>

            </section>

            {/* Cooperation */}
            <section className="mb-10">

                <h2 className="text-2xl font-bold text-gray-900">
                Cooperation With Authorities
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                ReferralHub will cooperate with lawful requests from
                appropriate authorities regarding suspected child
                exploitation or abuse, consistent with applicable laws
                and our legal obligations.
                </p>

            </section>

            {/* Age */}
            <section className="mb-10">

                <h2 className="text-2xl font-bold text-gray-900">
                Age Requirement
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                ReferralHub is intended for professional networking and is
                not directed toward children. Users must meet the minimum
                age requirement applicable in their country or region.
                </p>

            </section>

            {/* Contact */}
            <section>

                <h2 className="text-2xl font-bold text-gray-900">
                Contact Us
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                For questions or concerns regarding child safety on
                ReferralHub, contact:
                </p>

                <div className="mt-5 rounded-xl border bg-gray-50 p-5">

                <p className="font-bold text-gray-900">
                    ReferralHub
                </p>

                <p className="mt-2">
                    Safety:{" "}
                    <a
                    href="mailto:safety@referralhub.in"
                    className="text-blue-600 hover:underline"
                    >
                    safety@referralhub.in
                    </a>
                </p>

                <p>
                    Privacy:{" "}
                    <a
                    href="mailto:privacy@referralhub.in"
                    className="text-blue-600 hover:underline"
                    >
                    privacy@referralhub.in
                    </a>
                </p>

                <p>
                    Website:{" "}
                    <a
                    href="https://referralhub.in"
                    className="text-blue-600 hover:underline"
                    >
                    referralhub.in
                    </a>
                </p>

                </div>

            </section>

            {/* Related Policies */}
            <div className="mt-10 border-t border-gray-200 pt-6">

                <div className="flex flex-wrap gap-4 text-sm">

                <Link
                    href="/privacy"
                    className="font-medium text-blue-600 hover:underline"
                >
                    Privacy Policy
                </Link>

                <Link
                    href="/terms"
                    className="font-medium text-blue-600 hover:underline"
                >
                    Terms of Service
                </Link>

                <Link
                    href="/contact"
                    className="font-medium text-blue-600 hover:underline"
                >
                    Contact
                </Link>

                </div>

            </div>

            </article>

        </div>

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-white px-4 py-8 text-center">

            <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} ReferralHub. All rights reserved.
            </p>

        </footer>

        </main>
    );
    } 