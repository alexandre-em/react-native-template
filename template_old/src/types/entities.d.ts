interface UserType {
  id: string;
  name: string;
  email: string;
  emailVerifiedAt: Date | null;
  description: string | null;
  role: 'ADMIN' | 'USER';
  image: string | null;

  googleId: string | null;
  facebookId: string | null;
  stripeId: string | null;

  phone: string | null;
  address: string | null;
  city: string | null;
  postal: string | null;
  country: string | null;

  createdAt: Date;
  deletedAt: Date | null;
  updatedAt: Date | null;
  expireAt: Date | null;
}
