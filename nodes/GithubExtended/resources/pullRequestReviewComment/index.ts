import { createReactionPullRequestReviewCommentDescription } from './createReaction';
import { updatePullRequestReviewCommentDescription } from './update';
export const pullRequestReviewCommentDescription = [
	...createReactionPullRequestReviewCommentDescription,
	...updatePullRequestReviewCommentDescription,
];
