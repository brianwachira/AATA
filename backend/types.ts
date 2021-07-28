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
    consultations?: objectReference[];
    nextOfKin: objectReference[];


}

export interface patient extends BasePerson, timeStamps{
    consultations: objectReference[];
    guardians?: objectReference[];
    nextOfKin: objectReference[];
}

export interface guardian extends BasePerson, ContactInfo, timeStamps{
    relationship: string;
    patients: objectReference[];   
}

export interface nextofkin extends BasePerson, ContactInfo, timeStamps{
    relationship: string;
    patients: objectReference[];   
}


export interface diagnosis extends timeStamps {
    id: string,
    code : string;
    name? : string;
    description : string;
    remedy : objectReference[];
}

export interface remedies extends timeStamps {
    id: string,
    title: string,
    description: string,
    diagnosis: objectReference[];
}
export interface consultation extends timeStamps {
    id: string;
    patientID: string;
    staffID: string;
    branchID: string;
    diagnosis: objectReference[];
}
export interface consultationRating extends timeStamps {
    id: string;
    consultationID : string;
    rating: number;
    comment: string;
}

export interface payments extends timeStamps {
    id: string;
    consultationID: string;
    branchID: string;
    amount: number;
}
 export interface issues extends timeStamps {
    id: string;
    title: string;
    description: string;
    branchID: string;
    filedBy: string;

 }


export type NewDispatchOfficerEntry = Omit<BasePerson, 'id'>;
export type NewClinicEntry = Omit<clinic, 'id'>;
export type NewStaffEntry = Omit<staff, 'id'>;
export type NewPatientEntry = Omit<patient, 'id'>;
export type NewGuardianEntry = Omit<guardian, 'id'>;
export type NewNextOfKinEntry = Omit<nextofkin, 'id'>;
export type NewConsultationEntry = Omit<consultation, 'id'>;
export type NewDiagnosisEntry = Omit<diagnosis, 'id'>;
export type NewRemediesEntry = Omit<remedies, 'id'>;
export type NewConsultationRatingEntry = Omit<consultationRating, 'id'>;
export type NewIssueEntry = Omit<issues, 'id'>;
export type NewAdminEntry = Omit<admin, 'id'>;
