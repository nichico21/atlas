import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config({
  path: ".env.local"
});

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function generate(
  prompt: string,
  jsonSchema?: { name: string; schema: Record<string, unknown> }
): Promise<string> {

  const response = await client.responses.create({
    model: "gpt-5.5",
    input: prompt,
    ...(jsonSchema && {
      text: {
        format: {
          type: "json_schema",
          name: jsonSchema.name,
          schema: jsonSchema.schema,
          strict: true
        }
      }
    })
  });

  return response.output_text;
}