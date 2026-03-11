import { updateIssueCommentDescription } from './update';
import { createReactionIssueCommentDescription } from './createReaction';
export const issueCommentDescription = [
	...updateIssueCommentDescription,
	...createReactionIssueCommentDescription,
];
