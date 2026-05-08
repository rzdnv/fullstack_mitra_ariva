"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface Props {
  value: string;
  onChange: (value: string) => void;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

interface ToolbarButton {
  label: string;
  action: () => void;
  isActive: () => boolean;
}

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------

const TiptapEditor = ({ value, onChange }: Props) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
    immediatelyRender: false,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
  });

  if (!editor) return null;

  const toolbarButtons: ToolbarButton[] = [
    {
      label: "Bold",
      action: () => editor.chain().focus().toggleBold().run(),
      isActive: () => editor.isActive("bold"),
    },
    {
      label: "Italic",
      action: () => editor.chain().focus().toggleItalic().run(),
      isActive: () => editor.isActive("italic"),
    },
    {
      label: "H2",
      action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: () => editor.isActive("heading", { level: 2 }),
    },
    {
      label: "List",
      action: () => editor.chain().focus().toggleBulletList().run(),
      isActive: () => editor.isActive("bulletList"),
    },
  ];

  return (
    <div className="rounded-xl border">
      {/* Toolbar */}
      <div className="flex gap-2 border-b p-3">
        {toolbarButtons.map(({ label, action, isActive }) => (
          <button
            key={label}
            type="button"
            onClick={action}
            className={`rounded px-3 py-1 text-sm ${
              isActive() ? "bg-black text-white" : "bg-gray-100"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Editor */}
      <EditorContent editor={editor} className="min-h-75 p-4" />
    </div>
  );
};

export default TiptapEditor;
