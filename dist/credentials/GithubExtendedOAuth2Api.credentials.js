"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubExtendedOAuth2Api = void 0;
class GithubExtendedOAuth2Api {
    constructor() {
        this.name = 'githubExtendedOAuth2Api';
        this.displayName = 'GitHub Extended OAuth2 API';
        this.extends = ['oAuth2Api'];
        this.documentationUrl = 'https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps';
        this.icon = {
            light: 'file:../nodes/GithubExtended/githubExtended.svg',
            dark: 'file:../nodes/GithubExtended/githubExtended.dark.svg',
        };
        this.properties = [
            {
                displayName: 'GitHub Server',
                name: 'server',
                type: 'string',
                default: 'https://api.github.com',
                description: 'GitHub API base URL. For GitHub Enterprise Server use something like https://github.example.com/api/v3',
            },
            {
                displayName: 'Authorization URL',
                name: 'authUrl',
                type: 'hidden',
                default: 'https://github.com/login/oauth/authorize',
            },
            {
                displayName: 'Access Token URL',
                name: 'accessTokenUrl',
                type: 'hidden',
                default: 'https://github.com/login/oauth/access_token',
            },
            {
                displayName: 'Scope',
                name: 'scope',
                type: 'hidden',
                default: 'repo',
            },
            {
                displayName: 'Authentication',
                name: 'authentication',
                type: 'hidden',
                default: 'body',
            },
        ];
    }
}
exports.GithubExtendedOAuth2Api = GithubExtendedOAuth2Api;
//# sourceMappingURL=GithubExtendedOAuth2Api.credentials.js.map