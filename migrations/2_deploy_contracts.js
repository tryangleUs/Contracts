const GameController = artifacts.require("GameController");
const ERC721Test = artifacts.require("ERC721Test");
const ERC20Test = artifacts.require("ERC20Test");

module.exports = function(deployer) {
  deployer.deploy(GameController);
  deployer.deploy(ERC721Test);
  deployer.deploy(ERC20Test);
};