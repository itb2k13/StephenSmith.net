export default {
    oidc: {
        clientId: `${'0oabrzq86or1DRdVO4x6'}`,
        issuer: `${'https://dev-603947.okta.com/oauth2/default'}`,
        redirectUri: `${location.origin}/implicit/callback`,
        scopes: ['openid', 'profile', 'email'],
        testing: {
            disableHttpsCheck: `${true}`
        }
    },
    resourceServer: {
        api: 'https://sjsapi.azurewebsites.net/api/contents',
    },
    mediaBase: 'https://stephsmith.online/_resources'
}; 