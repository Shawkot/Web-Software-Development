import * as todoController from './todoController.js';
import * as authController from './authController.js';
import * as mainController from ".//mainController.js";
import * as middlewares from './middlewares.js';
import { Hono } from './deps.js';

const app = new Hono();

app.use("*", middlewares.addUserToContextMiddleware);
app.use("/todos/*", middlewares.accessControlMiddleware);

app.get("/todos", todoController.showForm);
app.get("/todos/:id", todoController.showTodo);
app.post('/todos', todoController.createTodo);
app.post("/todos/:id", todoController.updateTodo);
app.post('todos/:id/delete', todoController.deleteTodo);

app.get("/auth/registration", authController.showRegistrationForm);
app.get('auth/login', authController.showLoginForm);
app.post('auth/registration', authController.registerUser);
app.post('auth/login', authController.loginUser);
app.post('auth/logout', authController.logOutUser);

app.get("/", mainController.showMain);

export default app;
