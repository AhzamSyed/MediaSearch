import React, { useState } from "react";

const SaveCollectionModal = ({ show, onClose, onSave, mediaItem }) => {
  const [collectionName, setCollectionName] = useState("");
  const [notes, setNotes] = useState("");

  if (!show) {
    return null;
  }
  const handleSubmit = (e) => {
    setCollectionName("");
    setNotes("");
    onClose();
  };
  const modalOverlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  };

  const modalContentStyle = {
    backgroundColor: "#333",
    padding: "30px",
    borderRadius: "8px",
    width: "90%",
    maxWidth: "500px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
    color: "white",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #555",
    backgroundColor: "#444",
    color: "white",
    boxSizing: "border-box",
  };

  const textareaStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #555",
    backgroundColor: "#444",
    color: "white",
    boxSizing: "border-box",
    resize: "vertical",
  };

  const baseButtonStyle = {
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "background-color 0.2s ease",
  };

  const cancelButtonStyle = {
    ...baseButtonStyle,
    backgroundColor: "#6c757d",
    color: "white",
    marginRight: "10px",
  };

  const saveButtonStyle = {
    ...baseButtonStyle,
    backgroundColor: "#007bff",
    color: "white",
  };

  return (
    <div style={modalOverlayStyle}>
      <div style={modalContentStyle}>
        <h2 style={{ marginBottom: "15px" }}>Save to Collection</h2>
        {/* Display basic info about the media item being saved */}
        {mediaItem && (
          <div style={{ marginBottom: "15px" }}>
            <p>
              <strong>Media:</strong> {mediaItem.title || mediaItem.name}
            </p>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="collectionName" style={labelStyle}>
              Collection Name:
            </label>
            <input
              type="text"
              id="collectionName"
              value={collectionName}
              onChange={(e) => setCollectionName(e.target.value)}
              style={inputStyle}
              required
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="notes" style={labelStyle}>
              Notes:
            </label>
            <textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              style={textareaStyle}
              rows="4"
            ></textarea>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "20px",
            }}
          >
            <button type="button" onClick={onClose} style={cancelButtonStyle}>
              Cancel
            </button>
            <button type="submit" style={saveButtonStyle}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SaveCollectionModal;
