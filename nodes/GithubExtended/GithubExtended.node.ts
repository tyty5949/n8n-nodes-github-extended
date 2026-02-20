import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';

import { issueDescription } from './resources/issue';
import { pullRequestDescription } from './resources/pullRequest';
import { issueCommentDescription } from './resources/issueComment';
import { pullRequestReviewCommentDescription } from './resources/pullRequestReviewComment';

export class GithubExtended implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'GitHub Extended',
		name: 'githubExtended',
		icon: { light: 'file:githubExtended.svg', dark: 'file:githubExtended.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Update GitHub issues, pull requests, and comments',
		defaults: { name: 'GitHub Extended' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],

		credentials: [{ name: 'githubExtendedOAuth2Api', required: true }],

		requestDefaults: {
			baseURL: 'https://api.github.com',
			url: '',
			headers: {
				Accept: 'application/vnd.github+json',
				'Content-Type': 'application/json',
				'X-GitHub-Api-Version': '2022-11-28',
			},
		},

		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{ name: 'Issue', value: 'issue' },
					{ name: 'Pull Request', value: 'pullRequest' },
					{ name: 'Issue Comment', value: 'issueComment' },
					{ name: 'Pull Request Review Comment', value: 'pullRequestReviewComment' },
				],
				default: 'issue',
			},

			...issueDescription,
			...pullRequestDescription,
			...issueCommentDescription,
			...pullRequestReviewCommentDescription,
		],
	};
}
