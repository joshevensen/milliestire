import { Controller, FieldError } from "react-hook-form";
import { InputTypes } from "../enums";
import { InputOption } from "../types";
import utils from "../utils";

type props = {
  name: string;
  label?: string;
  control?: any;
  rules?: any;
  placeholder?: string;
  error?: FieldError | undefined;
  type?: InputTypes;
  options?: InputOption[];
  value?: string | number;
  onChange?: (...event: any[]) => void;
  isInline?: boolean;
  rows?: number;
  autofocus?: boolean;
  min?: number;
  max?: number;
  step?: number;
};

type inputProps = {
  type?: InputTypes;
  name: string;
  className: string;
  value?: string | number;
  onChange: (...event: any[]) => void;
  onBlur?: () => void;
  placeholder?: string;
  options?: InputOption[];
  rows?: number;
  autofocus: boolean;
  min?: number;
  max?: number;
  step?: number;
};

const Inputs: React.FC<inputProps> = ({
  type,
  name,
  className,
  value,
  placeholder,
  onChange,
  onBlur,
  options,
  rows,
  autofocus,
  min,
  max,
  step,
}) => {
  if (type === InputTypes.Multiline) {
    if (value === null) value = undefined;

    return (
      <textarea
        className={className}
        id={name}
        name={name}
        value={value}
        rows={rows}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        autoFocus={autofocus}
      />
    );
  }

  if (type === InputTypes.Select) {
    return (
      <select
        className={className}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        autoFocus={autofocus}
      >
        {options!.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }

  if (type === InputTypes.Date) {
    const date = utils.date.format.toDateInput(new Date(String(value)));

    return (
      <input
        className={`w-full ${className}`}
        id={name}
        name={name}
        value={date}
        onChange={onChange}
        onBlur={onBlur}
        type="date"
      />
    );
  }

  if (type === InputTypes.DateTime) {
    const date = utils.date.format.toDateTime(new Date(String(value)));

    return (
      <input
        className={className}
        id={name}
        name={name}
        value={date}
        onChange={onChange}
        onBlur={onBlur}
        type="datetime-local"
      />
    );
  }

  if (type === InputTypes.Checkbox) {
    return (
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        type="checkbox"
      />
    );
  }

  return (
    <input
      className={className}
      id={name}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      type={type}
      autoFocus={autofocus}
      min={min}
      max={max}
      step={step}
    />
  );
};

const LibInput: React.FC<props> = ({
  name,
  label,
  control,
  rules,
  placeholder,
  error,
  type = InputTypes.Text,
  options,
  value,
  onChange,
  isInline = false,
  rows = 4,
  autofocus = false,
  min,
  max,
  step,
}) => {
  let inputClasses =
    "block border-0 py-1 px-2 text-gray-600 placeholder:text-gray-400 ring-1 ring-gray-200 focus:ring-inset focus:ring-cyan-600 focus:border-0";

  let fieldClasses = "";

  if (isInline) {
    fieldClasses = "flex items-center";
    inputClasses += " ml-2";
  } else {
    inputClasses += " w-full";
  }

  if (type === InputTypes.Select) {
    inputClasses += " pr-8";
  }

  return (
    <div className={fieldClasses}>
      {label && (
        <label className="block italic mb-1" htmlFor={name}>
          {label}
        </label>
      )}

      {control && (
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({ field: { onChange, onBlur, value } }) => (
            <Inputs
              type={type}
              name={name}
              className={inputClasses}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              options={options}
              rows={rows}
              autofocus={autofocus}
              min={min}
              max={max}
              step={step}
            />
          )}
        />
      )}

      {!control && (
        <Inputs
          type={type}
          name={name}
          className={inputClasses}
          placeholder={placeholder}
          value={value}
          onChange={onChange!}
          options={options}
          rows={rows}
          autofocus={autofocus}
          min={min}
          max={max}
          step={step}
        />
      )}

      {error && <p className="px-1 text-red-700">{error.message}</p>}
    </div>
  );
};

export default LibInput;
