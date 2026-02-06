import useStore from "./store";
import FormField from "./FormField";
import { useState, type ChangeEvent } from "react";
import type { FormFieldProp } from "./store";

type NewField = FormFieldProp;

const FormBuilder = () => {
  const { formField, addField, removeField, updateField, resetForm } =
    useStore();

  const [newField, setNewField] = useState<NewField>({
    label: "",
    type: "text",
    value: "",
  });

  const handleFieldChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewField((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddField = () => {
    addField(newField);
    setNewField({ label: "", type: "text", value: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-semibold mb-6">Form Builder</h1>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* LEFT PANEL */}
          <div className="border rounded-xl p-6">
            <h2 className="font-semibold mb-4">Form Builder</h2>

            <div className="flex gap-3 mb-4">
              <input
                type="text"
                name="label"
                placeholder="Field Label"
                value={newField.label}
                onChange={handleFieldChange}
                className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <select
                name="type"
                value={newField.type}
                onChange={handleFieldChange}
                className="border rounded-lg px-3 py-2"
              >
                <option value="text">Text</option>
                <option value="number">Number</option>
                <option value="password">Password</option>
                <option value="textarea">Textarea</option>
                <option value="date">Date</option>
                <option value="file">File</option>
              </select>

              <button
                type="button"
                onClick={handleAddField}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Add Field
              </button>
            </div>

            <button
              type="button"
              onClick={resetForm}
              className="w-full border border-dashed rounded-lg py-2 text-red-500 mb-6"
            >
              Reset Form
            </button>

            {/* FIELD LIST */}
            <div className="space-y-3">
              {formField.map((field, index) => (
                <FormField
                  key={index}
                  field={field}
                  index={index}
                  onUpdate={updateField}
                  onRemove={removeField}
                />
              ))}
            </div>
          </div>

          {/* RIGHT PANEL (Preview) */}
          <div className="border rounded-xl p-6">
            <h2 className="font-semibold mb-4">Live Form Preview</h2>

            <form className="space-y-4">
              {formField.map((field, index) => (
                <div key={index}>
                  <label className="block text-sm font-medium mb-1">
                    {field.label}
                  </label>

                  {field.type === "textarea" ? (
                    <textarea className="w-full border rounded-lg px-3 py-2" />
                  ) : field.type === "file" ? (
                    <input type="file" className="w-full" />
                  ) : (
                    <input
                      type={field.type}
                      className="w-full border rounded-lg px-3 py-2"
                    />
                  )}
                </div>
              ))}

              <button
                type="submit"
                className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormBuilder;
