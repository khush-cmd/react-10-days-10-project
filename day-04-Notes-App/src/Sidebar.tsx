import { FiSearch } from "react-icons/fi";
import useStore from "./store";

const Sidebar = () => {
  const { notes, search, selectNote, setSearch } = useStore();

  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-1/3 bg-gray-100 p-6 border-r">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Notes</h2>

      {/* Search */}
      <div className="flex items-center mb-6 bg-white rounded-lg px-3 py-2 shadow-sm">
        <FiSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          className="w-full outline-none text-sm"
          placeholder="Search Notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Notes List */}
      <div className="space-y-3">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note, index) => (
            <div
              key={index}
              className="flex items-center p-3 bg-white rounded-lg shadow-sm cursor-pointer hover:bg-gray-50 transition"
              onClick={() => selectNote(index)}
            >
              {/* Color Dot */}
              <div
                className="w-4 h-4 rounded mr-3 border"
                style={{ backgroundColor: note.color }}
              ></div>

              {/* Note Preview */}
              <div
                className="truncate text-sm text-gray-700"
                dangerouslySetInnerHTML={{ __html: note.text }}
              />
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-sm">No new Notes</p>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
