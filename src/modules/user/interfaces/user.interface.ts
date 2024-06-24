import { $Enums, User } from '@prisma/client';

export interface IUser extends User {}

export type UserRole = $Enums.UserRole;
export const UserRole: typeof $Enums.UserRole = $Enums.UserRole;
