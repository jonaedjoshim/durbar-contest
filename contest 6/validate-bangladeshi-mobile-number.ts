function isValidBdMobileNumber(phoneNumber: string): boolean {
  return /^(?:\+8801|8801|01)[3-9]\d{8}$/.test(phoneNumber);
}
