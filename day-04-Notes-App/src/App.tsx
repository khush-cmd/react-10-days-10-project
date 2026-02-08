import Sidebar from "./Sidebar";
import { AiOutlinePlus } from "react-icons/ai";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import useStore from "./store";

const App = () => {
  const {
    editorContent,
    noteColor,
    currentNoteIndex,
    setEditorContent,
    setNoteColor,
    addOrUpdateNote,
  } = useStore();

  return (
    <div className="h-screen flex bg-gray-200 p-6">
      {/* Main Container Card */}
      <div className="flex w-full rounded-2xl shadow-xl overflow-hidden bg-gray-100">
        <Sidebar />

        {/* Right Main Area */}
        <div className="w-2/3 p-8 flex flex-col">
          <h1 className="text-2xl font-semibold mb-4 text-gray-700">
            Notes App
          </h1>

          {/* Editor Card */}
          <div className="bg-white p-5 rounded-xl shadow-sm">
            <ReactQuill
              value={editorContent}
              onChange={setEditorContent}
              placeholder="Write your note here..."
              theme="snow"
              className="h-72"
            />
          </div>

          {/* Color Picker */}
          <div className="flex items-center mt-6 space-x-3">
            <input
              type="color"
              value={noteColor}
              onChange={(e) => setNoteColor(e.target.value)}
              className="w-12 h-12 border rounded-md cursor-pointer shadow"
            />
            <p className="text-gray-700 font-medium">Choose a Note Color</p>
          </div>

          {/* Save Button */}
          <button
            onClick={addOrUpdateNote}
            className="mt-6 w-44 bg-blue-500 text-white py-3 px-4 rounded-lg shadow-md hover:bg-blue-600 transition flex items-center justify-center"
          >
            <AiOutlinePlus className="mr-2 text-xl" />
            {currentNoteIndex !== null ? "Update Note" : "Save Note"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default App;
