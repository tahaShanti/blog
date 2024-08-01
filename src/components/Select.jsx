import React, { useId } from "react";

const Select = React.forwardRef(({ options, label, className = "", ...props }, ref) => {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="text-base font-medium text-gray-900">
          {label}
        </label>
      )}
      <div className="mt-2">
        <select
          className={`flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
          id={id}
          ref={ref}
          {...props}
        >
          {options?.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
});

export default Select;
