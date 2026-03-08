import type { INodeProperties } from 'n8n-workflow';

export const updateCommentPullRequestDescription: INodeProperties[] = [
	{
		displayName: 'Comment ID',
		name: 'commentId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: { show: { resource: ['pullRequest'], operation: ['updateComment'] } },
	},
	{
		displayName: 'Body',
		name: 'updateCommentBody',
		type: 'string',
		typeOptions: { rows: 8 },
		required: true,
		default: '',
		displayOptions: { show: { resource: ['pullRequest'], operation: ['updateComment'] } },
	},
];
