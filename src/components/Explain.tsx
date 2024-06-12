"use client";

import { getTranslation, getExplanation } from "@/app/actions";
import { Button, Form, Input, Space } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useState } from "react";

export const Explain = () => {
  const [loading, setLoading] = useState<"translate" | "explain" | null>(null);
  const [result, setResult] = useState<string[]>([]);

  async function handleTranslation(values: { text: string }) {
    try {
      setLoading("translate");
      const res = await getTranslation(values.text);
      setResult(res);
    } catch (error) {
      console.log("error", error);
      setResult([]);
    } finally {
      setLoading(null);
    }
  }

  async function handleExplanation(values: { text: string }) {
    try {
      setLoading("explain");
      const res = await getExplanation(values.text);
      setResult(res);
    } catch (error) {
      console.log("error", error);
      setResult([]);
    } finally {
      setLoading(null);
    }
  }

  return (
    <Space direction="vertical" size="large" className="w-full">
      <Form onFinish={handleTranslation}>
        <FormItem name="text">
          <Input placeholder="translation" />
        </FormItem>
        <Button
          type="primary"
          htmlType="submit"
          loading={loading === "translate"}
        >
          Translate
        </Button>
      </Form>
      <Form onFinish={handleExplanation}>
        <FormItem name="text">
          <Input placeholder="explanation" />
        </FormItem>
        <Button
          type="primary"
          htmlType="submit"
          loading={loading === "explain"}
        >
          Explain
        </Button>
      </Form>
      <div className="p-2">
        {result.length > 0 && result.map((str) => <div key={str}>{str}</div>)}
      </div>
    </Space>
  );
};
