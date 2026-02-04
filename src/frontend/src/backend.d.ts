import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactFormSubmission {
    id: bigint;
    contactType: string;
    name: string;
    submittedBy: Principal;
    email: string;
    message: string;
    timestamp: Time;
    organization: string;
}
export type Time = bigint;
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getAllContactFormSubmissions(): Promise<Array<ContactFormSubmission>>;
    getCallerUserRole(): Promise<UserRole>;
    isCallerAdmin(): Promise<boolean>;
    submitContactForm(contactType: string, name: string, organization: string, email: string, message: string): Promise<void>;
}
