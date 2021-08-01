import { Document, PopulatedDoc } from "mongoose";

//mongoDB models
export enum Gender {
    Male = 'm',
    Female = 'f',
}

interface timeStamps {
    createdAt?: Date;
    updatedAt?: Date;
}
interface BasePerson {
    firstName: string;
    lastName: string;
    DOB: Date;
    gender: Gender;
}

interface ContactInfo {
    nationalID: string;
    phoneNo: string;
    email: string;
}

interface OptionalContactInfo {
    nationalID?: string;
    phoneNo?: string;
    email?: string;
}

interface Credentials {
    password: string;

}
interface objectReference {
    id: string;
}
interface staffType {
    staffType: string
}

// Define BasePerson without id
export type newPersonEntry = Omit<BasePerson, 'id'>;

//
export interface Unormal extends newPersonEntry, ContactInfo, Credentials, timeStamps {
    _id?: string;
    __v?: string;
    id?: string;
    assessments?: objectReference[];
}

export interface admin extends BasePerson, ContactInfo, Credentials, timeStamps, Document {
    clinicsLaunched?: objectReference[];
}

export interface dispatchOfficer extends BasePerson, ContactInfo, Credentials, timeStamps, Document {
    assessments?: objectReference[];
}

//clinic
export interface clinic extends timeStamps, Document {
    name: string;
    location: string;
    staff?: objectReference[];
    createdBy: string;
}

export interface staff extends BasePerson, ContactInfo, staffType, timeStamps, Document {
    branch: objectReference[];
    consultations?: objectReference[];
    nextOfKin: objectReference[];


}

export interface patient extends BasePerson, timeStamps, OptionalContactInfo, Document {
    consultations: objectReference[];
    guardians?: string;
    nextOfKin: objectReference[];
}

export interface guardian extends BasePerson, ContactInfo, timeStamps, Document {
    relationship: string;
    patients: PopulatedDoc<patient[] & Document[]>;
}

export interface nextofkin extends BasePerson, ContactInfo, timeStamps, Document {
    relationship: string;
    patients: objectReference[];
}


export interface diagnosis extends timeStamps, Document {
    id: string,
    code: string;
    name?: string;
    description: string;
    remedy: objectReference[];
}

export interface remedies extends timeStamps, Document {
    id: string,
    title: string,
    description: string,
    diagnosis: objectReference[];
}
export interface consultation extends timeStamps, Document {
    id: string;
    patientID: string;
    staffID: string;
    branchID: string;
    diagnosis: objectReference[];
}
export interface consultationRating extends timeStamps, Document {
    id: string;
    consultationID: string;
    rating: number;
    comment: string;
}

export interface payments extends timeStamps, Document {
    id: string;
    consultationID: string;
    branchID: string;
    amount: number;
}
export interface issues extends timeStamps, Document {
    id: string;
    title: string;
    description: string;
    branchID: string;
    filedBy: string;

}


export type NewDispatchOfficerEntry = Omit<dispatchOfficer, 'id' | 'createdAt' | 'updatedAt'>;
export type NewClinicEntry = Omit<clinic, 'id' | 'createdAt' | 'updatedAt'>;
export type NewStaffEntry = Omit<staff, 'id' | 'createdAt' | 'updatedAt'>;
export type NewPatientEntry = Omit<patient, 'id' | 'createdAt' | 'updatedAt'>;
export type NewGuardianEntry = Omit<guardian, 'id' | 'createdAt' | 'updatedAt'>;
export type NewNextOfKinEntry = Omit<nextofkin, 'id' | 'createdAt' | 'updatedAt'>;
export type NewConsultationEntry = Omit<consultation, 'id' | 'createdAt' | 'updatedAt'>;
export type NewDiagnosisEntry = Omit<diagnosis, 'id' | 'createdAt' | 'updatedAt'>;
export type NewRemediesEntry = Omit<remedies, 'id' | 'createdAt' | 'updatedAt'>;
export type NewConsultationRatingEntry = Omit<consultationRating, 'id' | 'createdAt' | 'updatedAt'>;
export type NewIssueEntry = Omit<issues, 'id' | 'createdAt' | 'updatedAt'>;
export type NewAdminEntry = Omit<admin, 'id' | 'createdAt' | 'updatedAt'>;
