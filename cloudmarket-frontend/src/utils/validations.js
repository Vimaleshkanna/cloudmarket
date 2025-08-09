// utils/validation.js
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const phoneRegex = /^[6-9]\d{9}$/;

export const validateEmail = (email) => emailRegex.test(email);
export const validatePhone = (phone) => phoneRegex.test(phone);
