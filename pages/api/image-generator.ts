import { NextApiRequest, NextApiResponse } from 'next'
import { getScreenshot } from '../../infra/getScreenshot';

const getHTML = ({ name }) => `
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <style>
        *{
            margin:0;
            padding:0;
            box-sizing: border-box;
        }
        body {
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: sans-serif;
            background-color: #000000;
            gap:20px;
        }
        h1 {
            font-size: 7vw;
            color: #fff;
            text-align: center;
        }
        img{
            border-radius:60px;
        }
    </style>
  </head>
  <body>
    <h1>
    ${name}
    </h1>
    <img width=120 src="${`https://github.com/${name}.png`}" />
  </body>
</html>
`;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name,url } = req.query
  let html

  if(name){
    html = getHTML({
      name: req.query.name || 'Adicione na URL: /?name=Your name in github',
    })
  }else if(url){
    html = getHTML({
      name: req.query.name || 'Adicione na URL: /?name=Your name in github',
    })
  }


  const file = await getScreenshot({ html,url }, { width: 600, height: 600 });
  
  res.setHeader('Content-Type', 'image/png')
  res.end(file);
}