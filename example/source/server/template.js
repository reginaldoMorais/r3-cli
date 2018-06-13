export default (html, initialState, env) => `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta content="IE=edge" http-equiv=X-UA-Compatible>
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
            <title>EXAMPLE</title>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <link rel="icon" type="image/png" href="/assets/favicon.ico" />
            <link href="/assets/main.css" rel="stylesheet">
        </head>
        <body>
            <div id="root">${html}</div>

            <script>
                // WARNING: See the following for security issues around embedding JSON in HTML:
                // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
                window.__INITIAL_STATE__ = ${JSON.stringify(initialState).replace(/</g, '\\u003c')}
                window.__ENV__ = ${JSON.stringify(env)}
            </script>
            <script src="/assets/vendor.js"></script>
            <script src="/assets/client.js"></script>
        </body>
    </html>
`;
