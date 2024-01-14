import { getQuery, readBody } from 'h3';

import { del } from '../lib/firestore';

export default defineEventHandler(async (event) => {
  try {
    const query = useQuery(event);
    const body = await readBody(event);

    const docRef = await del(query.col, body);

    return { result: docRef };
  } catch (error) {
    return { error: error.message };
  }
});
