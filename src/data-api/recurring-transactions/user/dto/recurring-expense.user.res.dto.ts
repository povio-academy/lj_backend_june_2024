import { Expose } from 'class-transformer';

export class RecurringExpenseUserResDto {
    @Expose()
    id: string;

    @Expose()
    categoryId: string;

    @Expose()
    subcategoryId: string;

    @Expose()
    amount: number;

    @Expose()
    note?: string;

    @Expose()
    cronExpression: string;

    @Expose()
    startDate: Date;

    @Expose()
    endDate: Date;

    @Expose()
    teamId?: string;

    @Expose()
    nextRunScheduledAt?: Date;

    @Expose()
    LastRanAt?: Date;

    constructor(
        id: string,
        categoryId: string,
        subcategoryId: string,
        amount: number,
        note: string,
        cronExpression: string,
        startDate: Date,
        endDate: Date,
        teamId: string,
        nextRunScheduledAt: Date,
        LastRanAt: Date,
    ) {
        this.id = id;
        this.categoryId = categoryId;
        this.subcategoryId = subcategoryId;
        this.amount = amount;
        this.note = note;
        this.cronExpression = cronExpression;
        this.startDate = startDate;
        this.endDate = endDate;
        this.teamId = teamId;
        this.nextRunScheduledAt = nextRunScheduledAt;
        this.LastRanAt = LastRanAt;
    }
}
