import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && (
        <label className="text-base font-medium text-gray-900">{label}</label>
      )}
      <Controller
        name={name || "content"}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => (
          <Editor
            apiKey='31621xrjwyaf754v6psn2zw8qy0bq43qujw268g5wm5lepye'
            value={value}
            init={{
              height: 500,
              menubar: true,
              plugins: [
                "image advlist autolink lists link charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={(content, editor) => onChange(content)}
          />
        )}
      />
    </div>
  );
}
