import { Editor } from "@tiptap/react";

export const getFocusedEditor = (editor: Editor) => {
  return editor.chain().focus();
};

export const validateURL = (url: string) => {
  if (!url.trim()) return "";

  let finalURL;

  try {
    finalURL = new URL(url);
  } catch (error) {
    finalURL = new URL("http://" + url);
  }

  return finalURL.origin;
};
