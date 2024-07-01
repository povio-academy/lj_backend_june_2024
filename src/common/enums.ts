export enum UserRole {
    ADMIN = 'ADMIN',
    USER = 'USER',
    DENIED = 'DENIED',
    PENDING = 'PENDING',
}

export enum TransactionType {
    INCOME = 'INCOME',
    EXPENSE = 'EXPENSE',
}

export enum InviteStatus {
    PENDING = 'PENDING',
    ACCEPTED = 'ACCEPTED',
    EXPIRED = 'EXPIRED',
}

export enum ActionStatus {
    SUCCESS = 'SUCCESS',
    FAILED = 'FAILED',
}

export enum TransactionStatus {
    PENDING = 'PENDING',
    APPROVED = 'APPROVED',
    REJECTED = 'REJECTED',
}
