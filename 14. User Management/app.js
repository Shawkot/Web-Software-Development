import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

import * as authController from './authController.js';
import * as mainController from "./mainController.js";



const app = new Hono();

app.get("/auth/registration", authController.showRegistrationForm);
app.get('auth/login', authController.showLoginForm);
app.post('auth/registration', authController.registerUser);
app.post('auth/login', authController.loginUser);
app.post('auth/logout', authController.logOutUser);

app.get("/", mainController.showMain);

export default app;