"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePullRequestDescription = void 0;
exports.updatePullRequestDescription = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: { show: { resource: ['pullRequest'] } },
        options: [{ name: 'Update', value: 'update', action: 'Update a pull request' }],
        default: 'update',
    },
    {
        displayName: 'Owner',
        name: 'owner',
        type: 'string',
        required: true,
        default: '',
        displayOptions: { show: { resource: ['pullRequest'], operation: ['update'] } },
    },
    {
        displayName: 'Repository',
        name: 'repo',
        type: 'string',
        required: true,
        default: '',
        displayOptions: { show: { resource: ['pullRequest'], operation: ['update'] } },
    },
    {
        displayName: 'Pull Request Number',
        name: 'pullNumber',
        type: 'number',
        required: true,
        default: 0,
        displayOptions: { show: { resource: ['pullRequest'], operation: ['update'] } },
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
    {
        displayName: 'Request',
        name: 'request',
        type: 'hidden',
        default: {
            method: 'PATCH',
            url: '=/repos/{{$parameter.owner}}/{{$parameter.repo}}/pulls/{{$parameter.pullNumber}}',
            body: { body: '={{$parameter.body}}' },
        },
        displayOptions: { show: { resource: ['pullRequest'], operation: ['update'] } },
    },
];
//# sourceMappingURL=update.js.map