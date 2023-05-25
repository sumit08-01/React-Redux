import { TextCard } from "components/TextCards/TextCard";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import s from "./style.module.css";
import { NoteApi } from "api/note-api";
import { deleteNote } from "store/notes/notes-slice";
export function NoteList({ noteList }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function deleteNote_(note) {
    if (window.confirm("Delete Note ?")) {
      NoteApi.deleteById(note.id);
      dispatch(deleteNote(note));
    }
  }
  return (
    <div className={`row justify-content-center ${s.cards_container}`}>
      {noteList.map((note) => (
        <div key={note.id} className={s.card_container}>
          <TextCard
            title={note.title}
            subtitle={note.created_at}
            content={note.content}
            onClickTrash={() => deleteNote_(note)}
            onClick={() => navigate("note/" + note.id)}
          />
        </div>
      ))}
    </div>
  );
}
