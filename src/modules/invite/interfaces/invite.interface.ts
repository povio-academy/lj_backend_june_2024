import { $Enums, Invite } from '@prisma/client';

export interface IInvite extends Invite {}

export type InviteStatus = $Enums.InviteStatus;
export const InviteStatus: typeof $Enums.InviteStatus = $Enums.InviteStatus;
