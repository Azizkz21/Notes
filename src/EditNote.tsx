import React from "react";
import NoteForm from "./NoteForm";
import type { NoteData, Tag } from "./App";
import { useNote } from "./NoteLayout";

type EditNoteProps = {
  onSubmit: (id: string, data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availabelTags: Tag[];
};

export default function EditNote({
  onSubmit,
  onAddTag,
  availabelTags,
}: EditNoteProps) {
  const note = useNote();
  return (
    <div>
      <h1 className="mb-4">Edit Note</h1>
      <NoteForm
        title={note.title}
        markDown={note.markDown}
        tags={note.tags}
        onSubmit={(data) => onSubmit(note.id, data)}
        onAddTag={onAddTag}
        availabelTags={availabelTags}
      />
    </div>
  );
}
