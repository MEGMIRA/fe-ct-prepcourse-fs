function invocarCallback(cb) {
  // Invoca/ejecuta el callback `cb`.
  // NOTA: no debes retornar nada.
  // Tu código:
cb();

};
function llamoCallBack(){
  console.log('Estoy llamando invocarCall');
};
invocarCallback(llamoCallBack);

module.exports = invocarCallback;
