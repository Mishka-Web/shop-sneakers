import axios from "axios";

const $authInstance = axios.create({
	baseURL: "http://localhost:5000/",
});

const $inst = axios.create({
	baseURL: "http://localhost:5000/",
});

const interceptor = (config: { headers: { authorization: string; }; }) => {
	return (config.headers.authorization = `Bearer ${localStorage.getItem(
		"token"
	)}`);
};

$authInstance.interceptors.request.use(interceptor);

export { $inst, $authInstance };