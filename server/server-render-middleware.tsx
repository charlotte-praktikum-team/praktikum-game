import { renderToString } from 'react-dom/server';
import { Request, Response } from 'express';

import App from '../src/components/App/App';

export default (_: Request, res: Response) => {
  const jsx = (<App />);
  const reactHtml = renderToString(jsx);

  res.send(getHtml(reactHtml));
};

function getHtml(reactHtml: string) {
  return `
    <!DOCTYPE html>
    <html lang="ru">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Ball Sort Puzzle</title>
      </head>
      <body>
        <div class="root" id="root">${reactHtml}</div>
        <script src="/main.js"></script>
      </body>
    </html>
  `;
}
