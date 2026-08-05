import fs from "fs";
import path from "path";

export function writeWorkspaceFile(

  folder: string,

  fileName: string,

  content: string

): void {

  const directory = path.join(

    process.cwd(),

    "0_workspace",

    folder

  );

  fs.mkdirSync(

    directory,

    { recursive: true }

  );

  fs.writeFileSync(

    path.join(

      directory,

      fileName

    ),

    content,

    "utf8"

  );

}