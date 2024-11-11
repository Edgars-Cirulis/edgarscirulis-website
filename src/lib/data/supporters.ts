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

export const supporters: Supporter[] = [
	{
		name: 'Carl Edwards',
		message: 'Thanks for helping out the community',
		amount: 110,
		socialLinks: {
			x: 'https://x.com/happychat84'
		}
	},
	{
		name: 'DawfukFR',
		message: 'Big brain',
		amount: 1,
		githubUsername: 'dawfukfr',
		socialLinks: {
			github: 'https://github.com/dawfukfr'
		}
	}
];
