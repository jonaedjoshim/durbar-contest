function classifyPassword(password: string): "Weak" | "Medium" | "Strong" {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*]/.test(password);

    const conditionCount = [hasUpperCase, hasLowerCase, hasDigit, hasSpecial].filter(Boolean).length;

    if (password.length >= 8 && conditionCount === 4) {
        return "Strong";
    }

    if (password.length >= 6 && conditionCount >= 2) {
        return "Medium";
    }

    return "Weak";
}