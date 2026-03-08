import { createCommentPullRequestDescription } from './createComment';
import { updatePullRequestDescription } from './update';
export const pullRequestDescription = [
	...updatePullRequestDescription,
	...createCommentPullRequestDescription,
];
