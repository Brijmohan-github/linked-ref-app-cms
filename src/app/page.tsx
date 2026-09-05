import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/logo.png"
          alt="ReferralHub logo"
          width={100}
          height={20}
          priority
        />
        <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Welcome to LinkedRef App
        </h1>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h2 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            About ReferralHub
            <br />
            Connect. Refer. Grow.
            <br />
          </h2>

          <p className="max-w-full text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            ReferralHub is a professional networking platform built to help people discover opportunities, build meaningful connections, and grow their careers through trusted referrals.
          </p>

          <p className="max-w-full text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Whether you’re looking for your next job, referring a talented professional, building your company network, or simply connecting with people in your industry, ReferralHub makes it easier to turn professional connections into real opportunities.          </p>


          <h2 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            What you can do on ReferralHub
            <br />
          </h2>

          <p className="max-w-full text-lg leading-8 text-zinc-600 dark:text-zinc-400">

            * Build your professional network — Connect with professionals and grow meaningful relationships.
            * Discover opportunities — Find jobs, projects, and collaborations through trusted referrals.
            * Give and receive referrals — Help others grow their careers and get referred for opportunities.
            * Showcase your expertise — Share your skills, experience, and achievements with your network.
            * Create your company presence — Build a company profile and connect with potential talent and professionals.
            * Invite your network — Bring your colleagues, friends, and professional connections to ReferralHub.

          </p>

          <h2 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Our Mission
            <br />
          </h2>

          <p className="max-w-full text-lg leading-8 text-zinc-600 dark:text-zinc-400">

            Our mission is simple: make professional opportunities more accessible through the power of people and their networks.
          </p>
          <p className="max-w-full text-lg leading-8 text-zinc-600 dark:text-zinc-400">

            We believe the best opportunities often come through trusted connections. ReferralHub brings those connections, opportunities, and professionals together in one place.          </p>
          <p className="max-w-full text-lg leading-8 text-zinc-600 dark:text-zinc-400">

            Build your network. Share opportunities. Help others grow. Grow together.
          </p>


          {/* <p className="mt-16 text-sm leading-5 text-zinc-600 dark:text-zinc-400">
           
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p> */}
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">




          {/* <a href={`refhubapp://linkedin?token=${encodeURIComponent('token')}&userdata=${encodeURIComponent('userdata')}`} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838]">
                    Open in LinkedRef
                </a>
<br/>  

  <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href={`https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.LINKEDIN_CLIENT_ID}&redirect_uri=${process.env.APP_URL}/linkedin/callback&scope=openid%20profile%20email`}
            rel="noopener noreferrer"
          >

            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            login now
          </a>
           <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a> */}
        </div>
        <a
          href="https://referralhub.in/privacy"
          className="text-blue-600 hover:underline"
        >
          privacy policy
        </a>
      </main>
    </div>
  );
}
