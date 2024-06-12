"use server";

import OpenAI from "openai";

const openai = new OpenAI();

export async function fakeFetch(): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 3000));
}

export async function getTranslation(text: string): Promise<string[]> {
  const chatCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `translate this into English, Chinese, and Japanese and list in bullet point: 「${text}」`,
      },
    ],
    model: "gpt-3.5-turbo",
  });

  if (chatCompletion.choices[0].message.content) {
    return chatCompletion.choices[0].message.content.split("\n");
  }

  return [];
}

export async function getExplanation(text: string): Promise<string[]> {
  const chatCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `explain all the vocabularies and grammar in this sentence: 「${text}」`,
      },
    ],
    model: "gpt-3.5-turbo",
  });

  if (chatCompletion.choices[0].message.content) {
    return chatCompletion.choices[0].message.content.split("\n");
  }

  return [];
}
