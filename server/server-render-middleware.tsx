import { renderToString } from 'react-dom/server';
import { Request, Response } from 'express';
import { StaticRouter } from 'react-router-dom/server';
import { Provider as ReduxProvider } from 'react-redux';
import Helmet, { HelmetData } from 'react-helmet';
import path from 'path';
import { ChunkExtractor } from '@loadable/server';

import App from '../src/components/App/App';

import { store } from '@/store';

export default (req: Request, res: Response) => {
  const location = req.url;
  const statsFile = path.resolve('../build/loadable-stats.json');
  const chunkExtractor = new ChunkExtractor({ statsFile });

  const jsx = chunkExtractor.collectChunks(
    <ReduxProvider store={store}>
      <StaticRouter location={location}>
        <App />
      </StaticRouter>
    </ReduxProvider>
  );

  const reactHtml = renderToString(jsx);
  const reduxState = store.getState();
  const helmetData = Helmet.renderStatic();

  if (req.url) {
    return res.redirect(req.url);
  }

  res.status(req.statusCode || 200).send(getHtml(reactHtml, reduxState, helmetData, chunkExtractor));
};

function getHtml(reactHtml: string, reduxState = {}, helmetData: HelmetData, chunkExtractor: ChunkExtractor) {
  const scriptTags = chunkExtractor.getScriptTags();
  const linkTags = chunkExtractor.getLinkTags();
  const styleTags = chunkExtractor.getStyleTags();

  return `
    <!DOCTYPE html>
    <html lang="ru">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link href="/main.css" rel="stylesheet">
        ${helmetData.title.toString()}
        ${linkTags}
        ${styleTags}
      </head>
      <body>
        <div class="root" id="root">${reactHtml}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(reduxState)}
        </script>
        <script src="/main.js"></script>
        ${scriptTags}
      </body>
    </html>
  `;
}
