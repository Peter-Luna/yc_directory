import 'server-only';

import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId, token } from '../env';

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, //  Set to false if statically generating pages, using ISR or tag-based revalidation
  token,
});
// 如果使用 ISR 或基于标签的重新验证静态生成页面，则设置为 false

if (!writeClient.config().token) {
  throw new Error('Write token not found');
}
