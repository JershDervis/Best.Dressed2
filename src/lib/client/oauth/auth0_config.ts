import { env } from '$env/dynamic/public';

const config = {
	domain: env.PUBLIC_AUTH0_DOMAIN as string,
	clientId: env.PUBLIC_AUTH0_CLIENT_ID as string,
	authorizationParams: {
		redirect_uri: env.PUBLIC_AUTH0_REDIRECT_URI as string
	}
};

const logout_config = {
	logoutParams: {
		returnTo: env.PUBLIC_AUTH0_LOGOUT_URL as string
	}
};

export default { config, logout_config };
