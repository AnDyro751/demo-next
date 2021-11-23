import TestNetwork from "./test";

class Network {

  constructor() {
    this.repository = TestNetwork;
  }

  init(){
    return new this.repository()
  }

}


let network = new Network().init()
export default network
