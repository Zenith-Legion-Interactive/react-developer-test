

export interface IUser {
	dateOfBirth: string;
	email: string;
	firstName: string;
	gender: string;
	id: string;
	lastName: string;
	location: Location;
	phone: string;
	picture: string;
	registerDate: string;
	title: string;
	updatedDate: string;
	properties: Record<string, string>;
}

export interface Location {
	street: string;
	city: string;
	state: string;
	country: string;
	timezone: string;
}


export type IState = 'loading' | 'success' | 'error' | 'idle' | 'fetching';
