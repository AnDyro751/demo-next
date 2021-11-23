import SignIn from "./sign_in";

export default class Auth {
  async sign_in(email, password) {
    return await SignIn(email, password)
  }
}