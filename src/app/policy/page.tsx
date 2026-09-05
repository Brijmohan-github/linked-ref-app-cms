 
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | ReferralHub",
  description:
    "ReferralHub Privacy Policy. Learn how we collect, use, and protect your information.",
};

const sections = [
  ["information", "1. Information We Collect"],
  ["use", "2. How We Use Your Information"],
  ["visibility", "3. Information Visibility"],
  ["sharing", "4. Sharing of Information"],
  ["thirdparty", "5. Third-Party Services"],
  ["cookies", "6. Cookies"],
  ["security", "7. Data Security"],
  ["retention", "8. Data Retention"],
  ["choices", "9. Your Choices"],
  ["deletion", "10. Account Deletion"],
  ["children", "11. Children's Privacy"],
  ["changes", "12. Changes to This Policy"],
  ["contact", "13. Contact Us"],
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f3f6f8] text-gray-800">

      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white">
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
            Privacy Policy
          </h1>

          <p className="mt-3 text-blue-100">
            How ReferralHub collects, uses, and protects your information.
          </p>

          <p className="mt-2 text-sm text-blue-200">
            Last Updated: August 30, 2026
          </p>

        </div>
      </section>

      {/* Content */}
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 lg:grid-cols-[220px_1fr]">

        {/* Navigation */}
        <aside className="hidden lg:block">

          <div className="sticky top-24 rounded-xl border bg-white p-4 shadow-sm">

            <p className="mb-3 text-sm font-bold text-gray-900">
              Contents
            </p>

            <nav className="space-y-1">

              {sections.map(([id, title]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="block rounded px-2 py-1.5 text-xs text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                >
                  {title}
                </a>
              ))}

            </nav>

          </div>

        </aside>

        {/* Policy */}
        <article className="rounded-xl border bg-white p-6 shadow-sm sm:p-10">

          <p className="mb-8 leading-7 text-gray-600">
            ReferralHub.in ("ReferralHub", "we", "us", or "our") is a
            professional networking platform that helps users connect with
            professionals, discover jobs, share opportunities, request and
            provide referrals, create company profiles, and share
            professional content.
          </p>

          <p className="mb-10 leading-7 text-gray-600">
            We respect your privacy and are committed to protecting your
            personal information.
          </p>


          {/* 1 */}
          <Section id="information" title="1. Information We Collect">

            <p>
              We may collect information you provide when you create or use
              your ReferralHub account, including:
            </p>

            <List
              items={[
                "Name and username",
                "Email address",
                "Profile photo",
                "Professional profile and experience",
                "Education, skills, and certifications",
                "Company and job information",
                "Resume/CV, when voluntarily submitted",
                "Posts, comments, messages, and other content",
                "Connections, followers, referrals, and job activity",
              ]}
            />

            <p>
              We may also automatically collect limited technical information
              such as device type, browser, IP address, and usage information
              to operate and secure the service.
            </p>

          </Section>


          {/* 2 */}
          <Section id="use" title="2. How We Use Your Information">

            <p>We use your information to:</p>

            <List
              items={[
                "Create and manage your account",
                "Build professional profiles and networks",
                "Connect you with other professionals",
                "Recommend jobs, companies, and referral opportunities",
                "Enable job applications and referrals",
                "Provide messaging and notifications",
                "Display and personalize professional content",
                "Improve platform performance and security",
                "Detect fraud, abuse, and unauthorized activity",
              ]}
            />

          </Section>


          {/* 3 */}
          <Section id="visibility" title="3. Information Visibility">

            <p>
              ReferralHub is a professional networking platform.
            </p>

            <p>
              Information you choose to make public, such as your name,
              professional profile, posts, company information, or job
              activity, may be visible to other users and, where applicable,
              search engines.
            </p>

            <p>
              You can use available privacy settings to control the visibility
              of supported information.
            </p>

          </Section>


          {/* 4 */}
          <Section id="sharing" title="4. Sharing of Information">

            <p>We may share information:</p>

            <List
              items={[
                "With other users when you choose to interact or connect with them",
                "With companies or recruiters when you apply for a job or request a referral",
                "With trusted service providers that help us operate ReferralHub",
                "When required by law or necessary to protect users, our services, or our rights",
              ]}
            />

            <div className="mt-5 rounded-lg border border-green-200 bg-green-50 p-4">
              <p className="font-semibold text-green-800">
                We do not sell your personal information.
              </p>
            </div>

          </Section>


          {/* 5 */}
          <Section id="thirdparty" title="5. Third-Party Services">

            <p>
              ReferralHub may use trusted third-party services for functions
              such as:
            </p>

            <List
              items={[
                "Authentication",
                "Hosting",
                "Cloud storage",
                "Email delivery",
                "Analytics",
                "Security",
                "Notifications",
              ]}
            />

            <p>
              These services may process information only as necessary to
              provide their services.
            </p>

          </Section>


          {/* 6 */}
          <Section id="cookies" title="6. Cookies">

            <p>
              We may use cookies and similar technologies to keep you signed
              in, remember preferences, improve security, understand usage,
              and improve ReferralHub.
            </p>

          </Section>


          {/* 7 */}
          <Section id="security" title="7. Data Security">

            <p>
              We use reasonable technical and organizational safeguards to
              protect your information from unauthorized access, loss,
              misuse, or disclosure.
            </p>

            <p>
              However, no internet service can guarantee complete security.
            </p>

          </Section>


          {/* 8 */}
          <Section id="retention" title="8. Data Retention">

            <p>
              We retain your information only for as long as reasonably
              necessary to provide our services, maintain security, comply
              with legal obligations, resolve disputes, and prevent abuse.
            </p>

          </Section>


          {/* 9 */}
          <Section id="choices" title="9. Your Choices">

            <p>You may:</p>

            <List
              items={[
                "Update your profile information",
                "Manage privacy settings",
                "Control certain notifications",
                "Delete your posts or content where supported",
                "Request access to your personal information",
                "Request deletion of your account",
              ]}
            />

          </Section>


          {/* 10 */}
          <Section id="deletion" title="10. Account Deletion">

            <p>
              You can request deletion of your ReferralHub account.
            </p>

            <p>
              Upon deletion, we will delete or anonymize your personal
              information where reasonably possible, except where retention
              is required for legal, security, fraud-prevention, or legitimate
              business purposes.

              What happens after your request? <br/>
1. Enter the email address associated with your ReferralHub account.<br/>
2. We will send a confirmation link to that email address.<br/>
3. Open the link and confirm that you want to permanently delete your account.<br/>
4. Your ReferralHub account and associated personal data will then be deleted or anonymized where applicable.<br/>
5. Some information may be retained where required by law, security, fraud prevention, or legitimate business requirements.<br/>
            </p>
                <a
                  href="https://referralhub.in/delete-account"
                  className="text-blue-600 hover:underline"
                >
                  Delete my account
                </a>
          </Section>


          {/* 11 */}
          <Section id="children" title="11. Children's Privacy">

            <p>
              ReferralHub is intended for professional users and is not
              directed toward children below the minimum age permitted by
              applicable law.
            </p>

            <p>
              We do not knowingly collect personal information from children
              in violation of applicable law.
            </p>

          </Section>


          {/* 12 */}
          <Section id="changes" title="12. Changes to This Policy">

            <p>
              We may update this Privacy Policy from time to time. The latest
              version will always be available on this page with the updated
              date.
            </p>

          </Section>


          {/* 13 */}
          <Section id="contact" title="13. Contact Us">

            <p>
              If you have questions about this Privacy Policy or your
              personal information, contact us:
            </p>

            <div className="mt-5 rounded-xl border bg-gray-50 p-5">

              <h3 className="font-bold text-gray-900">
                ReferralHub.in
              </h3>

              <p className="mt-3">
                Privacy:{" "}
                <a
                  href="mailto:privacy@referralhub.in"
                  className="text-blue-600 hover:underline"
                >
                  privacy@referralhub.in
                </a>
              </p>

              <p>
                Support:{" "}
                <a
                  href="mailto:support@referralhub.in"
                  className="text-blue-600 hover:underline"
                >
                  support@referralhub.in
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

              <p className="mt-2 text-gray-600">
                Business Address: [Insert registered business address]
              </p>

            </div>

          </Section>

        </article>

      </div>


      {/* Footer */}
      <footer className="border-t bg-white px-4 py-8 text-center">

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


/* ---------------------------------------
   Reusable Components
---------------------------------------- */

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="mb-12 scroll-mt-24"
    >
      <h2 className="mb-4 border-b border-gray-100 pb-3 text-xl font-bold text-gray-900 sm:text-2xl">
        {title}
      </h2>

      <div className="space-y-4 text-[15px] leading-7 text-gray-600">
        {children}
      </div>
    </section>
  );
}


function List({
  items,
}: {
  items: string[];
}) {
  return (
    <ul className="ml-5 list-disc space-y-2">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
