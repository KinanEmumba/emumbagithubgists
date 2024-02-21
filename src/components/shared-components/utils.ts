import { GistDataType } from "../../types";

export const gistFileURL = (gist: GistDataType) => {
  if (!gist) return {fileURI: undefined, filename: undefined};
  const filesObject = gist.files;
  const fileArray = Object.keys(filesObject);
  const firstKey = fileArray[fileArray.length - 1];
  const firstObject = filesObject[firstKey];
  const fileURI = firstObject.raw_url;
  return {fileURI, filename: firstObject.filename};
};