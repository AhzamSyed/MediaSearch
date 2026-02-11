import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos"];

  const dispatch = useDispatch();

  const activeTab = useSelector((state) => state.search.activeTab);
  return (
    <div className="flex p-10 gap-10">
      {tabs.map((elem, i) => {
        return (
          <button
            key={i}
            className={`${activeTab === elem ? "bg-blue-700" : "bg-gray-600"} transition px-5 py-3 rounded uppercase cursor-pointer active:scale-95`}
            onClick={() => dispatch(setActiveTab(elem))}
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
