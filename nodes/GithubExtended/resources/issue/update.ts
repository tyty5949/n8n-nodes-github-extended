import type { INodeProperties } from 'n8n-workflow';

export const updateIssueDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['issue'] } },
		options: [{ name: 'Update', value: 'update', action: 'Update an issue' }],
		default: 'update',
	},
	{
		displayName: 'Owner',
		name: 'owner',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['issue'], operation: ['update'] } },
	},
	{
		displayName: 'Repository',
		name: 'repo',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['issue'], operation: ['update'] } },
	},
	{
		displayName: 'Issue Number',
		name: 'issueNumber',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: { show: { resource: ['issue'], operation: ['update'] } },
	},
	{
		displayName: 'Body',
		name: 'body',
		type: 'string',
		typeOptions: { rows: 8 },
		required: true,
		default: '',
		displayOptions: { show: { resource: ['issue'], operation: ['update'] } },
	},
	{
		displayName: 'Request',
		name: 'request',
		type: 'hidden',
		default: {
			method: 'PATCH',
			url: '=/repos/{{$parameter.owner}}/{{$parameter.repo}}/issues/{{$parameter.issueNumber}}',
			body: { body: '={{$parameter.body}}' },
		},
		displayOptions: { show: { resource: ['issue'], operation: ['update'] } },
	},
];
