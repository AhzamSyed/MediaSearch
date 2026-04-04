import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCollection,
  addedToast,
  extraReducers,
} from "../redux/features/collectionSlice";
import { useNavigate } from "react-router-dom";

const ResultCard = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleSaveToUserDefaultCollection = async () => {
    try {
      await dispatch(extraReducers(item)).unwrap();
      dispatch(addedToast());
    } catch (err) {
      if (err?.type === "AUTH_REQUIRED") {
        navigate("/login");
      } else {
        console.log("Save Failed", err);
      }
    }
  };
  const addToCollection = (item) => {
    dispatch(addCollection(item));
    dispatch(addedToast());
  };

  return (
    <div className="w-[22vw] h-75 rounded-lg overflow-hidden relative group cursor-pointer shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10"
      >
        {item.type === "photo" && (
          <img
            className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            src={item.src}
            alt={item.title}
          />
        )}

        {item.type === "video" && (
          <video
            className="absolute inset-0 h-full w-full object-cover object-center"
            src={item.src}
            loop
            autoPlay
            muted
            playsInline
          />
        )}
      </a>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-4 z-20 pointer-events-none">
        <div className="flex items-center justify-between w-full gap-3 pointer-events-auto">
          <h1 className="text-white font-semibold text-sm line-clamp-2 flex-1">
            {item.title}
          </h1>

          {isAuthenticated ? (
            <button
              onClick={handleSaveToUserDefaultCollection}
              className="bg-green-600 hover:bg-green-700 active:scale-95 transition text-white text-xs rounded px-3 py-1.5 font-medium shrink-0"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => addToCollection(item)}
              className="bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition text-white text-xs rounded px-3 py-1.5 font-medium shrink-0"
            >
              Add to Local
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
