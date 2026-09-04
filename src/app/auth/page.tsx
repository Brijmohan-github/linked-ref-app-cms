 
    import Image from "next/image";

    export default async function Index({
    searchParams,
    }: {
    searchParams: Promise<{
        token?: string;
        userdata?: string;
    }>;
    }) {
    const params = await searchParams;

    const token = params.token;
    const userdata = params.userdata;
    const linkedRefUrl = token
        ? `refhubapp://linkedin?token=${encodeURIComponent(token)}&userdata=${encodeURIComponent(userdata ?? "")}`
        : undefined;

    console.log("🚀 token:", token);
    console.log("🚀 userdata:", userdata);

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center gap-8 bg-white px-6 py-16 dark:bg-black sm:px-16">
            
            <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
            />

            <div className="flex flex-col items-center gap-6 text-center">
            <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                Welcome Auth Page
            </h1>

            {token ? (
                <div className="w-full max-w-xl rounded-lg bg-gray-100 p-5 text-left text-black dark:bg-zinc-900 dark:text-white">
                <p className="break-all">
                    <strong>Token:</strong> {token}
                </p>

                <p className="mt-3 break-all">
                    <strong>User Data:</strong> {userdata || "No user data received"}
                </p>

                <form action={linkedRefUrl} className="mt-5">
                    <button
                    type="submit"
                    className="inline-flex h-12 w-full items-center justify-center rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838]"
                    >
                    Open in LinkedRef
                    </button>
                </form>
                </div>
            ) : (
                <p className="text-gray-500">
                No token received.
                </p>
            )}
            </div>
        </main>
        </div>
    );
    } 
