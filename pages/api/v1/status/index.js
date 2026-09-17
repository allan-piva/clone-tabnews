function status(request, response) {
  response.status(200).json({ chave: "valor é legão" });
}

export default status;
