const username = "bivanoid";

interface GithubUser {
	followers: number;
	following: number;
	public_repos: number;
}

export interface GithubStats {
	followers: number;
	following: number;
	totalRepo: number;
}

export const getGithub = async (): Promise<GithubStats> => {
	const response = await fetch(`https://api.github.com/users/${username}`);

	if (!response.ok) {
		throw new Error("Gagal mengambil data GitHub");
	}

	const data: GithubUser = await response.json();

	return {
		followers: data.followers,
		following: data.following,
		totalRepo: data.public_repos,
	};
};
