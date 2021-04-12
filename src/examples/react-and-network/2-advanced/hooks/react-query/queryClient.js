/* Core */
import { QueryClient } from 'react-query';
import axios from 'axios';
import waait from 'waait';

const defaultQueryFn = async options => {
    const { queryKey } = options;

    let endpoint = '';

    queryKey?.forEach(key => (endpoint += `/${key}`));

    const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/${endpoint}`,
    );

    await waait(1000);

    return response.data;
};

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            queryFn: defaultQueryFn,
        },
    },
});
