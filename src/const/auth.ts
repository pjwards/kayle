import { Rule } from '@/interface/auth';

export const PASSWORD_SIZE: number = 4;
export const EMAIL_RULES: Rule[] = [
  (v: string): boolean | string => !!v || 'Email is required',
  (v: string): boolean | string => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Email must be valid',
];

export const PASSWORD_RULES: Rule[] = [
  (v: string): boolean | string => !!v || 'Password is required',
  (v: string): boolean | string => {
    return (
      (v && v.length >= PASSWORD_SIZE) ||
      `Password must be more than ${PASSWORD_SIZE} characters`
    );
  },
];
