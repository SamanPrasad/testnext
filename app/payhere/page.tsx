"use server";

async function PayHere({
  searchParams,
}: {
  searchParams: Promise<{
    merchant_id: string | number;
    status_message: string;
  }>;
}) {
  const { merchant_id, status_message } = await searchParams;
  return (
    <div>
      <h1>PayHere</h1>
      <h2>{merchant_id}</h2>
      <h2>{status_message}</h2>
    </div>
  );
}

export default PayHere;
