import type { INodeProperties } from 'n8n-workflow';

export const updateIssueCommentDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['issueComment'] } },
		options: [{ name: 'Update', value: 'update', action: 'Update an issue comment' }],
		default: 'update',
	},
	{
		displayName: 'Owner',
		name: 'owner',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['issueComment'], operation: ['update'] } },
	},
	{
		displayName: 'Repository',
		name: 'repo',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['issueComment'], operation: ['update'] } },
	},
	{
		displayName: 'Comment ID',
		name: 'commentId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: { show: { resource: ['issueComment'], operation: ['update'] } },
	},
	{
		displayName: 'Body',
		name: 'body',
		type: 'string',
		typeOptions: { rows: 8 },
		required: true,
		default: '',
		displayOptions: { show: { resource: ['issueComment'], operation: ['update'] } },
	},
	{
		displayName: 'Request',
		name: 'request',
		type: 'hidden',
		default: {
			method: 'PATCH',
			url: '=/repos/{{$parameter.owner}}/{{$parameter.repo}}/issues/comments/{{$parameter.commentId}}',
			body: { body: '={{$parameter.body}}' },
		},
		displayOptions: { show: { resource: ['issueComment'], operation: ['update'] } },
	},
];
