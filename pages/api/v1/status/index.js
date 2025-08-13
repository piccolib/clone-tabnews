function status(request, response) {
  response.status(200).json({ result: "teste de status, ação!" });
}

export default status;
