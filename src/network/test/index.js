import SignIn from "./auth/sign_in";
import Auth from "./auth";

export default class TestNetwork {

  auth(){
    return new Auth()
  }
}