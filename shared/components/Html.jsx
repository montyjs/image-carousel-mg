import React from 'react';

const Html = (props) => (
  <html>
    <head>
      <title>Product Wrapper</title>
      <link rel="icon" href="https://www.rei.com/favicon.ico" type="image/x-icon" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/fontawesome.css"
        integrity="sha384-sri+NftO+0hcisDKgr287Y/1LVnInHJ1l+XC7+FOabmTTIK0HnE2ID+xxvJ21c5J" crossorigin="anonymous" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/solid.css"
        integrity="sha384-ioUrHig76ITq4aEJ67dHzTvqjsAP/7IzgwE7lgJcg2r7BRNGYSK0LwSmROzYtgzs" crossorigin="anonymous" />
    </head>
    <body>
      <div
        id="root"
        dangerouslySetInnerHTML={{ __html: props.html }}
      ></div>
      <script dangerouslySetInnerHTML={{ __html: `window.__SERIALIZED_STATE__ = JSON.stringify(${props.serverState})` }} />
      <script type="application/javascript" src="/main.bundle.js" />
    </body>
  </html>
);

export default Html;