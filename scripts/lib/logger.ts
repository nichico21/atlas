export function banner(title: string): void {
  console.log("");
  console.log("==========================================");
  console.log(` ${title}`);
  console.log("==========================================");
}

export function info(message: string): void {
  console.log(`ℹ️  ${message}`);
}

export function success(message: string): void {
  console.log(`✅ ${message}`);
}

export function warning(message: string): void {
  console.log(`⚠️  ${message}`);
}

export function error(message: string): void {
  console.log(`❌ ${message}`);
}

export function separator(): void {
  console.log("------------------------------------------");
}