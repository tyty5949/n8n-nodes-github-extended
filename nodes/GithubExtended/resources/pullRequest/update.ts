import type { INodeProperties } from 'n8n-workflow';

export const updatePullRequestDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['pullRequest'] } },
		options: [
			{
				name: 'Create Comment',
				value: 'createComment',
				description: 'Create a comment on a pull request',
				routing: {
					request: {
						method: 'POST',
						url: '=/repos/{{$parameter.owner}}/{{$parameter.repo}}/issues/{{$parameter.pullNumber}}/comments',
						body: {
							body: '={{$parameter.commentBody}}',
						},
					},
				},
				action: 'Create a comment on a pull request',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a pull request (body)',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/repos/{{$parameter.owner}}/{{$parameter.repo}}/pulls/{{$parameter.pullNumber}}',
						body: {
							body: '={{$parameter.body}}',
						},
					},
				},
				action: 'Update a pull request',
			},
			{
				name: 'Update Comment',
				value: 'updateComment',
				description: 'Update a comment on a pull request',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/repos/{{$parameter.owner}}/{{$parameter.repo}}/issues/comments/{{$parameter.commentId}}',
						body: {
							body: '={{$parameter.updateCommentBody}}',
						},
					},
				},
				action: 'Update a comment on a pull request',
			},
		],
		default: 'createComment',
	},
	{
		displayName: 'Owner',
		name: 'owner',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: { resource: ['pullRequest'], operation: ['createComment', 'update', 'updateComment'] },
		},
	},
	{
		displayName: 'Repository',
		name: 'repo',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: { resource: ['pullRequest'], operation: ['createComment', 'update', 'updateComment'] },
		},
	},
	{
		displayName: 'Pull Request Number',
		name: 'pullNumber',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: { show: { resource: ['pullRequest'], operation: ['createComment', 'update'] } },
	},
	{
		displayName: 'Body',
		name: 'body',
		type: 'string',
		typeOptions: { rows: 8 },
		required: true,
		default: '',
		displayOptions: { show: { resource: ['pullRequest'], operation: ['update'] } },
	},
];
