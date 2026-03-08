import { createCommentPullRequestDescription } from './createComment';
import { updatePullRequestDescription } from './update';
import { updateCommentPullRequestDescription } from './updateComment';
export const pullRequestDescription = [
	...updatePullRequestDescription,
	...createCommentPullRequestDescription,
	...updateCommentPullRequestDescription,
];
