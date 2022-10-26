export interface MachinestalkUser {
  id: number;
  name: string;
  email: string;
  status: Status;
  gender: Gender;
}

export enum Status {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}
export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}
