//mongoDB models
export enum Gender {
    Male = 'm',
    Female = 'f',
}

interface timeStamps{
    createdAt?: Date;
    updatedAt?: Date;
}
interface BasePerson{
    id: string;
    firstName: string;
    lastName: string;
    DOB: Date;
    gender: Gender;
}

interface ContactInfo{
    nationalID: string;
    phoneNo: string;
    email: string;

}
interface Credentials{
    password: string;

}
interface objectReference{
    id: string;
}
interface staffType{
    staffType: string
}

// Define BasePerson without id
export type newPersonEntry = Omit<BasePerson, 'id'>;

//
export interface Unormal extends newPersonEntry, ContactInfo, Credentials, timeStamps{
    _id?: string;
    __v?: string;
    id?: string;
    assessments? : objectReference[];
}

export interface admin extends BasePerson, ContactInfo, Credentials, timeStamps{
    clinicsLaunched: objectReference[];
}

export interface dispatchOfficer extends BasePerson, ContactInfo, Credentials, timeStamps{
    assessments? : objectReference[];
}

//clinic
export interface clinic extends timeStamps{
    id: string;
    name: string;
    location: string;
    staff?: objectReference[];
    createdBy: string;
}

export interface staff extends BasePerson,ContactInfo, staffType,timeStamps{
    branch: objectReference[];
    consultations: objectReference[];

}

export interface patient extends BasePerson, timeStamps{
    consultations: objectReference[];
}
export interface guardianorkin extends BasePerson, ContactInfo, timeStamps{
    patients: objectReference[];   
}
export interface diagnosis extends timeStamps {
    code : string;
    name? : string;
    description : string;
    remedy : string;
}
export interface consultation extends timeStamps {
    patientID: string;
    staffID: string;
    branchID: string;
    diagnosis: objectReference[];
}
export interface consultationRating extends timeStamps {
    consultationID : string;
    rating: number;
    comment: string;
}

export interface payments extends timeStamps {
    consultationID: string;
    branchID: string;
    amount: number;
}



export type NewDispatchOfficerEntry = Omit<BasePerson, 'id'>;
export type NewClinicEntry = Omit<clinic, 'id'>;
export type NewStaffEntry = Omit<staff, 'id'>;
export type PatientEntry = Omit<patient, 'id'>;
