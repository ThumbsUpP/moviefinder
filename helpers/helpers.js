import { FETCH_STATUSES } from '@/constants.js';
import { isEqual } from 'lodash/fp';

const { FETCHED } = FETCH_STATUSES;

export const isFetched = fetchStatus => isEqual(fetchStatus)(FETCHED);
