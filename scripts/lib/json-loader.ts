import { readFileSync } from "fs";

export function loadJson<T>(
  filePath: string
): T {

  try {

    const content = readFileSync(
      filePath,
      "utf-8"
    );

    return JSON.parse(content) as T;

  } catch (error) {

    throw new Error(
      `Unable to load JSON file: ${filePath}\n${
        error instanceof Error
          ? error.message
          : String(error)
      }`
    );

  }

}