import { createIssue, updateIssue } from "../controllers/IssuesController";
import { issue, NewIssueEntry } from "../types";
/**
 * @description holds issues mutations
 */


export const IssuesMutation = {
    createIssue : {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: async(_parent: any, args: NewIssueEntry, _context: any, _info: any) => {
            return await createIssue(args);
        }
    },
    updateIssue: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: async(_parent: any, args: issue, _context: any, _info : any) => {
            return await updateIssue(args);
        }
    }
};