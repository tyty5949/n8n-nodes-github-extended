"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubExtended = void 0;
const n8n_workflow_1 = require("n8n-workflow");
const issue_1 = require("./resources/issue");
const pullRequest_1 = require("./resources/pullRequest");
const issueComment_1 = require("./resources/issueComment");
const pullRequestReviewComment_1 = require("./resources/pullRequestReviewComment");
class GithubExtended {
    constructor() {
        this.description = {
            displayName: 'GitHub Extended',
            name: 'githubExtended',
            icon: { light: 'file:githubExtended.svg', dark: 'file:githubExtended.dark.svg' },
            group: ['transform'],
            version: 1,
            subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
            description: 'Update GitHub issues, pull requests, and comments',
            defaults: { name: 'GitHub Extended' },
            usableAsTool: true,
            inputs: [n8n_workflow_1.NodeConnectionTypes.Main],
            outputs: [n8n_workflow_1.NodeConnectionTypes.Main],
            credentials: [{ name: 'githubExtendedOAuth2Api', required: true }],
            requestDefaults: {
                baseURL: 'https://api.github.com',
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
                ...issue_1.issueDescription,
                ...pullRequest_1.pullRequestDescription,
                ...issueComment_1.issueCommentDescription,
                ...pullRequestReviewComment_1.pullRequestReviewCommentDescription,
            ],
        };
    }
}
exports.GithubExtended = GithubExtended;
//# sourceMappingURL=GithubExtended.node.js.map