//mongoDB models
export enum Gender {
    Male = 'm',
    Female = 'f',
}

interface BasePerson{
    firstName: string;
    lastName: string;
    DOB: Date;
    Gender: Gender;
    createdAt: Date;
    updatedAt: Date;
}

interface objectReference{
    id: string;
}
export interface Unormal extends BasePerson{
    _id?: string;
    __v?: string;
    id?: string;
    nationalID: string;
    phoneNo: string;
    email: string;
    password: string;
    assessments? : objectReference[];
}

export interface dispatchOfficer extends BasePerson{
    nationalID: string;
    phoneNo: string;
    email: string;
    password: string;
    assessments? : objectReference[];
}

