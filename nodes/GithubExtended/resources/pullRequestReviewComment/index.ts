import { createReactionPullRequestReviewCommentDescription } from './createReaction';
import { updatePullRequestReviewCommentDescription } from './update';
export const pullRequestReviewCommentDescription = [
	...updatePullRequestReviewCommentDescription,
	...createReactionPullRequestReviewCommentDescription,
];
