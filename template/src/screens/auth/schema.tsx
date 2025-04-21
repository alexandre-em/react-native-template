import { z } from 'zod';

const passwordSchema = z
  .string()
  .min(10, { message: 'Password must be at least 10 characters' })
  .refine(password => /[a-z]/.test(password), 'Password must contain at least one lowercase letter')
  .refine(password => /[0-9]/.test(password), 'Password must contain at least one number')
  .refine(password => /[!@#$%^&*()_+=[\]{};':"\\|,.<>?]/.test(password), 'Password must contain at least one special character');

const schema = z.object({
  email: z.string().email({ message: 'Invalid email' }),
  password: passwordSchema,
});

export type SignInFormData = z.infer<typeof schema>;

export default schema;
