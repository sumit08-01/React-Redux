import axios from "axios";

const BASE_URL = "http://localhost:3200/notes";

export class NoteApi {
  static async create(note) {
    return this.formatId((await axios.post(`${BASE_URL}`, note)).data);
  }
  static async fetchAll() {
    return (await axios.get(`${BASE_URL}`)).data.map(this.formatId);
  }
  static async fetchById(noteId) {
    return (await axios.get(`${BASE_URL}/${noteId}`)).data;
  }
  static async deleteById(noteId) {
    return this.formatId((await axios.delete(`${BASE_URL}/${noteId}`)).data);
  }
  static async updateById(id, values) {
    return this.formatId((await axios.patch(`${BASE_URL}/${id}`, values)).data);
  }
  static formatId(note) {
    return {
      ...note,
      id: note.id.toString(),
    };
  }
}
