import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            About ReferralHub
          </h1>
          <p className="max-w-xs text-lg leading-7 text-zinc-700 dark:text-zinc-400">
            Connect. Refer. Grow.
          </p>
          <p>
            ReferralHub is a professional networking platform built to help people discover opportunities, build meaningful connections, and grow their careers through trusted referrals.
          </p>
          <p>


            Whether you are looking for your next job, referring a talented professional, building your company network, or simply connecting with people in your industry, ReferralHub makes it easier to turn professional connections into real opportunities.
            What you can do on ReferralHub
            Build your professional network — Connect with professionals and grow meaningful relationships.
            Discover jobs — Find career opportunities shared by companies and professionals.
            Refer talent — Help people in your network find the right opportunities through referrals.
            Share opportunities — Post jobs, referrals, professional updates, and career-related content.
            Create your company presence — Build a company profile and connect with potential talent and professionals.
            Invite your network — Bring your colleagues, friends, and professional connections to ReferralHub.
            Our Mission

            Our mission is simple: make professional opportunities more accessible through the power of people and their networks.

            We believe the best opportunities often come through trusted connections. ReferralHub brings those connections, opportunities, and professionals together in one place.

            Build your network. Share opportunities. Help others grow. Grow together.

          </p>
        </div>



      </main>
    </div>
  );
}
