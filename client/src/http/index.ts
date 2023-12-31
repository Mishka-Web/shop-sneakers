import axios from "axios";

const $inst = axios.create({
	baseURL: "http://localhost:5000/api/",
});

const $authInstance = axios.create({
	baseURL: "http://localhost:5000/api/",
});

$authInstance.interceptors.request.use(
	async (config) => {
		axios.defaults.headers.authorization = `Bearer ${localStorage.getItem(
			"token"
		)}`;
		return config;
	}
);

export { $inst, $authInstance };
