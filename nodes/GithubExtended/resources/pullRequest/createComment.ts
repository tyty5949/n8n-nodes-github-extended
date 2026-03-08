import type { INodeProperties } from 'n8n-workflow';

export const createCommentPullRequestDescription: INodeProperties[] = [
	{
		displayName: 'Body',
		name: 'commentBody',
		type: 'string',
		typeOptions: { rows: 8 },
		required: true,
		default: '',
		displayOptions: { show: { resource: ['pullRequest'], operation: ['createComment'] } },
	},
];
