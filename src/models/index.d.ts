import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type AdminMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type JobMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Admin {
  readonly id: string;
  readonly UserName: string;
  readonly password: string;
  readonly phoneNumber?: number;
  readonly prevelage: string;
  readonly Jobs?: (Job | null)[];
  readonly email?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Admin, AdminMetaData>);
  static copyOf(source: Admin, mutator: (draft: MutableModel<Admin, AdminMetaData>) => MutableModel<Admin, AdminMetaData> | void): Admin;
}

export declare class Job {
  readonly id: string;
  readonly jobType?: string;
  readonly jobCreated?: string;
  readonly jobClosed: string;
  readonly jobDescription: string;
  readonly jobAddrese?: string;
  readonly adminID?: string;
  readonly jobTitile: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Job, JobMetaData>);
  static copyOf(source: Job, mutator: (draft: MutableModel<Job, JobMetaData>) => MutableModel<Job, JobMetaData> | void): Job;
}