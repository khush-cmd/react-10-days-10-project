import type { FormFieldProp } from "./store";

interface FieldProps {
  field: FormFieldProp;
  index: number;
  onUpdate: (index: number, updatedField: FormFieldProp) => void;
  onRemove: (index: number) => void;
}

const FormField: React.FC<FieldProps> = ({
  field,
  index,
  onUpdate,
  onRemove,
}) => {
  return (
    <div className="flex items-center justify-between border rounded-lg px-4 py-3 bg-gray-50">
      <div className="flex items-center gap-3">
        <span className="text-gray-400">☰</span>
        <span className="font-medium">{field.label}</span>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-500 capitalize">{field.type}</span>

        <button
          type="button"
          onClick={() => onRemove(index)}
          className="text-red-500 hover:text-red-700"
        >
          🗑
        </button>
      </div>
    </div>
  );
};

export default FormField;
