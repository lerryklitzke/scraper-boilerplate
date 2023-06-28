import { source } from './source';

export const App = async () => {
  await source();
  console.log('Process concluded.');
}