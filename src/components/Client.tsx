"use client";

import { useState, useEffect } from "react";
import { fakeFetch } from "@/app/actions";

type ServerAction = () => Promise<void>;

export default function Client() {
  const [isLoading, setLoading] = useState(true);

  async function init() {
    setLoading(true);
    await fakeFetch();
    setLoading(false);
  }

  useEffect(() => {
    init();
  }, []);

  return <div>{isLoading ? "Loading..." : "This is a Client Component"}</div>;
}
