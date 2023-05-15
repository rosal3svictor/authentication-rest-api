const emailFormat = /^[a-zA-Z0-9_.+]+(?<!^[0-9]*)@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

export function isValidEmailHelper(email: string): boolean {
  return emailFormat.test(email);
}
