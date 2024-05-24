import { fakeFetch } from "@/app/actions";

export default async function Server() {
  await fakeFetch();

  return <div>This is a Server Component</div>;
}
