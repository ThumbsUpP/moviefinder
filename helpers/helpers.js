import { FETCH_STATUSES } from '@/constants.js';
import { isEqual } from 'lodash/fp';

const { FETCHED, FETCHING } = FETCH_STATUSES;

export const isFetched = fetchStatus => isEqual(fetchStatus)(FETCHED);
export const isFetching = fetchStatus => isEqual(fetchStatus)(FETCHING);
