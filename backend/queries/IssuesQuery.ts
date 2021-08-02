import { getIssue, getIssues } from "../controllers/IssuesController";
import { issue } from "../types";

/**
 * @description holds Issues queries
 */

export const IssuesQuery = {
    issues: {
        resolve: async() => {
            return await getIssues();
        },
    },
    issue: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: async(_parent: any, args: issue, _context: any, _info: any) => {
            return await getIssue(args.id);
        }
    }
};