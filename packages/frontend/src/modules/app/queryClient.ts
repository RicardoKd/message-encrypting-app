import { QueryClient } from 'react-query';

import { QUERY_CLIENT_CONFIG } from '../common/consts';

const queryClient = new QueryClient(QUERY_CLIENT_CONFIG);

export default queryClient;
