import API from "./base";

class MovieService {
	async get(page = 1) {
		return await API.get(`movies?page=${page}`);
	}
}

export default new MovieService();