import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, //  Set to false if statically generating pages, using ISR or tag-based revalidation
});
// 如果使用 ISR 或基于标签的重新验证静态生成页面，则设置为 false
