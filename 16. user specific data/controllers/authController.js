import { eta } from '../config/etaConfig.js';
import { scrypt } from '../deps.js';
import * as userService from '../services/userService.js';
import * as sessionService from '../services/sessionService.js';

const showRegistrationForm = (c) => {
  return c.html(
    eta.render('registration.eta')
  )
}

const showLoginForm = (c) => {
  return c.html(eta.render('login.eta'));
}

const registerUser = async (c) => {
  const body = await c.req.parseBody();
  if (body.password !== body.verification) {
    return c.text("The provided passwords did not match.");
  }

  const existingUser = await userService.findUserByEmail(body.email);
  if (existingUser) {
    return c.text(`A user with the email ${body.email} already exists.`);
  }

  const user = {
    id: crypto.randomUUID(),
    email: body.email,
    passwordHash: scrypt.hash(body.password),
  };

  await userService.createUser(user);
  await sessionService.createSession(c, user);
  return c.redirect('/');
}

const loginUser = async (c) => {
  const body = await c.req.parseBody();
  console.log(body);
  const user = await userService.findUserByEmail(body.email);

  if(!user) {
    return c.text(`No user with the email ${body.email} exists.`)
  }
  
  const passwordsMatch = scrypt.verify(body.password, user.passwordHash);
  if(!passwordsMatch) {
    return c.text(`Incorrect password.`);
  }

  await sessionService.createSession(c, user)
  return c.redirect('/');
};

const logOutUser = async (c) => {
  await sessionService.deleteSession(c);
  return c.redirect('/');
}

export { showRegistrationForm, registerUser, showLoginForm, loginUser, logOutUser }