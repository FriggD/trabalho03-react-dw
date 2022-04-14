import http from "../http-common";

class LivrosDataService {
  getAll() {
    return http.get("/livro");
  }

  get(id) {
    return http.get(`/livro/${id}`);
  }

  create(data) {
    return http.post("/livro", data);
  }

  update(id, data) {
    return http.put(`/livro/${id}`, data);
  }

  delete(id) {
    return http.delete(`/livro/${id}`);
  }

  deleteAll() {
    return http.delete(`/livro`);
  }

  findByName(name) {
    return http.get(`/livro?name=${name}`);
  }
}

export default new LivrosDataService();