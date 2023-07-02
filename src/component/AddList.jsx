import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import { useEffect } from "react";

export const AddList = ({ EditData, handleSubmit, handleChange, setInfo }) => {
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          name="Title"
          placeholder="title"
          value={EditData.Title}
          onChange={(e) => setInfo({ ...EditData, Title: e.target.value })}
        />
        <textarea
          name="Details"
          placeholder="type details"
          value={EditData.Details}
          onChange={(e) => setInfo({ ...EditData, Details: e.target.value })}
        ></textarea>

        <button type="submit">
          {EditData.id ? <CheckIcon /> : <AddIcon />}
        </button>
      </form>
    </div>
  );
};
