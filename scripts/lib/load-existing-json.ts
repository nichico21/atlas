import fs from "fs";
import path from "path";

export function loadExistingJson<T>(companyId: string, suffix: string): T | null {
  const workspacePath = path.join(process.cwd(), "0_workspace/companies", `${companyId}${suffix}`);
  const catalogPath = path.join(process.cwd(), "catalog/companies", `${companyId}${suffix}`);

  if (fs.existsSync(workspacePath)) {
    return JSON.parse(fs.readFileSync(workspacePath, "utf8"));
  }
  if (fs.existsSync(catalogPath)) {
    return JSON.parse(fs.readFileSync(catalogPath, "utf8"));
  }
  return null;
}