"use server";

export async function fakeFetch(): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 3000));
}
