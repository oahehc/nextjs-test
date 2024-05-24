import { Suspense } from "react";

import Client from "@/components/Client";
import Server from "@/components/Server";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Client />
      <Suspense fallback={<div>Loading...</div>}>
        <Server />
      </Suspense>
    </main>
  );
}
