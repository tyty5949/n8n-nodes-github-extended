import type { ICredentialType, INodeProperties } from 'n8n-workflow';
export declare class GithubExtendedOAuth2Api implements ICredentialType {
    name: string;
    displayName: string;
    extends: string[];
    documentationUrl: string;
    icon: {
        readonly light: "file:../nodes/GithubExtended/githubExtended.svg";
        readonly dark: "file:../nodes/GithubExtended/githubExtended.dark.svg";
    };
    properties: INodeProperties[];
}
