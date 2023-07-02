import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";

export const LoopList = ({
  EditData,
  onEdit,
  itemTitle,
  itemDetails,
  id,
  onDelete
}) => {
  function deleteItems() {
    onDelete(id);
  }

  function handleEditData() {
    onEdit(id);
  }

  return (
    <div className="list_loop">
      <h2>{itemTitle}</h2>
      <p>{itemDetails}</p>
      <button onClick={deleteItems}>
        <DeleteIcon />
      </button>

      <button onClick={handleEditData}>
        <BorderColorIcon />
      </button>
    </div>
  );
};
