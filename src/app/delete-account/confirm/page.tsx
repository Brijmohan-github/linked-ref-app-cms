import ConfirmDelete from "./ConfirmDelete";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const params = await searchParams;

  const token = params.token || "";

  return <ConfirmDelete token={token} />;
}