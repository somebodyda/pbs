// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Admin, Job } = initSchema(schema);

export {
  Admin,
  Job
};