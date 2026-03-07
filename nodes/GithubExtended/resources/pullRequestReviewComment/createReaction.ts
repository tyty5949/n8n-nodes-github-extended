import type { INodeProperties } from 'n8n-workflow';

export const createReactionPullRequestReviewCommentDescription: INodeProperties[] = [
	{
		displayName: 'Owner',
		name: 'owner',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['pullRequestReviewComment'], operation: ['createReaction'] } },
	},
	{
		displayName: 'Repository',
		name: 'repo',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['pullRequestReviewComment'], operation: ['createReaction'] } },
	},
	{
		displayName: 'Review Comment ID',
		name: 'commentId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: { show: { resource: ['pullRequestReviewComment'], operation: ['createReaction'] } },
	},
	{
		displayName: 'Reaction',
		name: 'content',
		type: 'options',
		required: true,
		default: '+1',
		options: [
			{ name: '-1', value: '-1' },
			{ name: '+1', value: '+1' },
			{ name: 'Confused', value: 'confused' },
			{ name: 'Eyes', value: 'eyes' },
			{ name: 'Heart', value: 'heart' },
			{ name: 'Hooray', value: 'hooray' },
			{ name: 'Laugh', value: 'laugh' },
			{ name: 'Rocket', value: 'rocket' },
		],
		displayOptions: { show: { resource: ['pullRequestReviewComment'], operation: ['createReaction'] } },
	},
];
