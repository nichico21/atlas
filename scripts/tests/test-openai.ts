import { generate } from "../../engine/llm/openai-provider";

async function main(): Promise<void> {

  console.log("=================================");
  console.log("      Atlas OpenAI Test");
  console.log("=================================");
  console.log();

  console.log("Sending request...");
  console.log();

  const response = await generate(

    "Say hello in French."

  );

  console.log("Response:");
  console.log();

  console.log(response);

}

main().catch(console.error);