export type Supporter = {
	name: string;
	message: string;
	amount: number;
	githubUsername?: string;
	socialLinks?: {
		facebook?: string;
		github?: string;
		linkedin?: string;
		x?: string;
	};
};

export const supporters: Supporter[] = [];
