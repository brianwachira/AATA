import { createIssue, updateIssue } from "../controllers/IssuesController";
import { issue, NewIssueEntry } from "../types";
import { AuthenticationError } from "apollo-server-errors";
/**
 * @description holds issues mutations
 */


export const IssuesMutation = {
    createIssue: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: async (_parent: any, args: NewIssueEntry, context: any, _info: any) => {

            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const currentDispatchOfficer = context.currentDispatchOfficer;

            if (!currentDispatchOfficer) {
                throw new AuthenticationError("not authenticated");
            }
            return await createIssue(args);
        }
    },
    updateIssue: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: async (_parent: any, args: issue, context: any, _info: any) => {

            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const currentDispatchOfficer = context.currentDispatchOfficer;

            if (!currentDispatchOfficer) {
                throw new AuthenticationError("not authenticated");
            }
            return await updateIssue(args);
        }
    }
};