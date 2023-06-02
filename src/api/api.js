const BASE_URL = 'localhost:8080    /api'; //TODO связать через ссылку на локал хост
const Route = {
    GET_DATA: '/data',
    SEND_DATA: '/',
    GET_ALL_USERS: '/allUsers',
    CREATE_USER: '/registration',
    LOGIN: '/login',
    GET_ALL_PRODUCTS: '/allProducts',
    GET_ALL_CATEGORIES: '/allCategories',
};
const Role = {
    MANAGER: '/manager',
    ADMIN: '/admin',
    AUTH: '/auth'
}
const Method = {
    GET: 'GET',
    POST: 'POST',
};
const ErrorText = {
    GET_DATA: 'Не удалось загрузить данные. Попробуйте обновить страницу',
    SEND_DATA: 'Не удалось отправить форму. Попробуйте ещё раз',
};

const load = (route, role = Role.AUTH, errorText, method = Method.GET, body = null) =>
    fetch(`${BASE_URL}${role}${route}`, {method, body})
        .then((response) => {
            if (!response.ok) {
                throw new Error();
            }
            return response.json();
        })
        .catch(() => {
            throw new Error(errorText);
        });


const getAllUsers = () => load(Route.GET_ALL_USERS, Role.ADMIN, ErrorText.GET_DATA);

const createUser = (body) => load(Route.CREATE_USER, Role.ADMIN, ErrorText.SEND_DATA, Method.POST, body);

const logIn = (body) => load(Route.LOGIN, Role.AUTH, ErrorText.SEND_DATA, Method.POST, body);

const getAllProducts = () => load(Route.GET_ALL_PRODUCTS, Role.MANAGER, ErrorText.GET_DATA);

const getAllCategories = () => load(Route.GET_ALL_CATEGORIES, Role.MANAGER, ErrorText.GET_DATA);

export {getAllUsers, createUser, logIn, getAllProducts, getAllCategories};