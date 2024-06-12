import { Event } from '@prisma/client';

export function getMissingTime(eventStartDate: Date | Event): string {
	if (eventStartDate instanceof Date) {
		const now = new Date();
		const diff = eventStartDate.getTime() - now.getTime();
		const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
		const diffHours = Math.ceil(diff / (1000 * 3600));
		const diffMinutes = Math.ceil(diff / (1000 * 60));
		const diffWeeks = Math.ceil(diff / (1000 * 3600 * 24 * 7));
		if (diffWeeks > 0) {
			return `${diffWeeks} week${diffWeeks > 1 ? 's' : ''}`;
		}
		if (diffDays > 0) {
			return `${diffDays} day${diffDays > 1 ? 's' : ''}`;
		}
		if (diffHours > 0) {
			return `${diffHours} hour${diffHours > 1 ? 's' : ''}`;
		}
		if (diffMinutes > 0) {
			return `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''}`;
		}
	} else {
		const now = new Date();
		const diff = eventStartDate.startDate.getTime() - now.getTime();
		const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
		const diffHours = Math.ceil(diff / (1000 * 3600));
		const diffMinutes = Math.ceil(diff / (1000 * 60));
		const diffWeeks = Math.ceil(diff / (1000 * 3600 * 24 * 7));
		if (diffWeeks > 0) {
			return `${diffWeeks} week${diffWeeks > 1 ? 's' : ''}`;
		}
		if (diffDays > 0) {
			return `${diffDays} day${diffDays > 1 ? 's' : ''}`;
		}
		if (diffHours > 0) {
			return `${diffHours} hour${diffHours > 1 ? 's' : ''}`;
		}
		if (diffMinutes > 0) {
			return `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''}`;
		}
	}

	return 'Past';
}

export function DateTimeStringCheck(date: string): boolean {
	return new Date(date).toString() !== 'Invalid Date';
}
