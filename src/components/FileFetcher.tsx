import { useEffect, useState } from "react";


const useFileFetcher = ({
  fileURI
}: {
  fileURI: string
}) => {
  const uri = fileURI;
  const [fileData, setFileData] = useState<string>('');
  
  useEffect(() => {
    const getFile = async () => {
      const fetchResponse = await fetch(uri || '');
      const strResponse = await fetchResponse.text();
      const fileData = strResponse.toString();
      setFileData(fileData);
    }
    if (uri && uri !== '') getFile();
  }, [uri])
  
  return {
    fileData
  }
}

export default useFileFetcher;