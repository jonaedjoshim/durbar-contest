function isValidEmail(email: string): boolean {
  const parts = email.split("@");
  if (parts.length !== 2) return false;

  const [local, rest] = parts;
  if (!/^[a-zA-Z0-9._-]+$/.test(local)) return false;

  const dotIndex = rest.lastIndexOf(".");
  if (dotIndex === -1) return false;

  const domain = rest.slice(0, dotIndex);
  const tld = rest.slice(dotIndex + 1);

  if (!/^[a-zA-Z0-9-]+$/.test(domain)) return false;
  if (!/^[a-zA-Z]{2,}$/.test(tld)) return false;

  return true;
}
