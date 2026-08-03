import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config({
  path: ".env.local"
});

console.log(

  process.env.OPENAI_API_KEY

);

const client = new OpenAI({

  apiKey: process.env.OPENAI_API_KEY

});

export async function generate(

  prompt: string

): Promise<string> {

  const response = await client.responses.create({

    model: "gpt-5.5",

    input: prompt

  });

  return response.output_text;

}