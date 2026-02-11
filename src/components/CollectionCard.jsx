import { useDispatch } from "react-redux";
import {
  removeCollection,
  removeToast,
} from "../redux/features/collectionSlice";

const CollectionCard = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCollection = (item) => {
    dispatch(removeCollection(item.id));
    dispatch(removeToast());
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

          <button
            onClick={() => {
              removeFromCollection(item);
            }}
            className="bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition text-white text-xs rounded px-3 py-1.5 font-medium shrink-0"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
