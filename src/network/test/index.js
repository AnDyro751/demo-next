import Auth from "./auth";
import Category from "./category";

export default class TestNetwork {

  auth() {
    return new Auth()
  }

  category() {
    return new Category()
  }
}