import { UserInputError } from "apollo-server";
import Issue from "../models/Issues";
import { issue, NewIssueEntry } from "../types";
/**
 * @description holds crud operations for diagnosis entity 
 */

/**
 * creates Issue
 * @param args {NewIssueEntry} issue
 * @returns {issue} created issue
 */

export const createIssue = async (args: NewIssueEntry): Promise<issue> => {
    let newIssue = new Issue(args);
    try {
        newIssue = await newIssue.save();
    } catch (error) {
        throw new UserInputError(error.message, {
            invalidArgs: args
        });
    }
    return newIssue;
};

/**
 * updates issue
 * @param args issue
 * @returns {issue} updated issue
 */


export const updateIssue = async (args: issue): Promise<issue> => {
    let issueToUpdate = await Issue.findById(args._id);

    if (!issueToUpdate) {
        throw new UserInputError("Issue is not available", { invalidArgs: args });
    }

    issueToUpdate = args;

    try {
        await issueToUpdate.save();
    } catch (error) {
        throw new UserInputError(error.message, { invalidArgs: args });
    }
    return issueToUpdate;
};

/**
 * get all issues
 * @returns {issue[]} list all of issues
 */

export const getIssues = async (): Promise<issue[]> => {
    const allIssues: issue[] = await Issue.find().populate('Clinic Staff DispatchOfficer');
    return allIssues;
};

/**
 * gets issue by id
 * @param args id
 * @returns {issue} issue
 */

export const getIssue = async (args: { id: string; }): Promise<issue> => {
    const singleIssue = await Issue.findById(args).populate('Clinic Staff DispatchOfficer');
    if (!singleIssue) {
        throw new UserInputError('Issues is not available', { invalidArgs: args.id });
    }
    return singleIssue;
};