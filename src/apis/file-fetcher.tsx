import axios from "axios";
import { useQuery } from '@tanstack/react-query';

const useFileFetcher = ({
  fileURI = ''
}: {
  fileURI: string | undefined;
}) => {
  const { data: fileData, error } = useQuery<string, Error>({
    queryKey: ['fileData', {fileURI}],
    queryFn: async () => {
      const response = await axios.get(fileURI);
      return response.data;
    },
    enabled: !!fileURI && fileURI !== '',
  });

  return {
    fileData,
    error,
  };
};

export default useFileFetcher;