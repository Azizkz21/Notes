import React from "react";
import NoteForm from "./NoteForm";
import type { NoteData, Tag } from "./App";

type NewNoteProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availabelTags: Tag[];
};

export default function NewNote({
  onSubmit,
  onAddTag,
  availabelTags,
}: NewNoteProps) {
  return (
    <div>
      <h1 className="mb-4">NewNote</h1>
      <NoteForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availabelTags={availabelTags}
      />
    </div>
  );
}
