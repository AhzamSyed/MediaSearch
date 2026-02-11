import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import { clearCollection } from "../redux/features/collectionSlice";

const Collection = () => {
  const collection = useSelector((state) => state.collection.items);
  const dispatch = useDispatch();
  const clearAllCollection = () => {
    dispatch(clearCollection());
  };
  return (
    <div className="overflow-auto px-10 py-6">
      <div className="flex justify-between mb-6">
        <h2 className="text-xl font-medium">
          {collection.length > 0 ? "Your Collection" : "Collection is Empty"}
        </h2>
        <button
          className="bg-red-600 px-5 py-2 rounded text-base font-medium"
          onClick={() => clearAllCollection()}
        >
          Clear Collection
        </button>
      </div>
      <div className="flex flex-wrap justify-start w-full gap-5 mt-2">
        {collection.map((item, i) => {
          return (
            <div key={i}>
              <CollectionCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Collection;
