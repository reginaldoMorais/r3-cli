export default (html, initialState, env) => `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta content="IE=edge" http-equiv=X-UA-Compatible>
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
            <title>{{APP_TITLE}}</title>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <link rel="icon" type="image/png" href="/assets/favicon.ico" />
            <link href="/assets/vendor.css" rel="stylesheet">
            <link href="/assets/main.css" rel="stylesheet">

            <link rel="apple-touch-icon" sizes="57x57" href="/assets/images/apple-icon-57x57.png">
            <link rel="apple-touch-icon" sizes="60x60" href="/assets/images/apple-icon-60x60.png">
            <link rel="apple-touch-icon" sizes="72x72" href="/assets/images/apple-icon-72x72.png">
            <link rel="apple-touch-icon" sizes="76x76" href="/assets/images/apple-icon-76x76.png">
            <link rel="apple-touch-icon" sizes="114x114" href="/assets/images/apple-icon-114x114.png">
            <link rel="apple-touch-icon" sizes="120x120" href="/assets/images/apple-icon-120x120.png">
            <link rel="apple-touch-icon" sizes="144x144" href="/assets/images/apple-icon-144x144.png">
            <link rel="apple-touch-icon" sizes="152x152" href="/assets/images/apple-icon-152x152.png">
            <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/apple-icon-180x180.png">
            <link rel="icon" type="image/png" sizes="192x192"  href="/assets/images/android-icon-192x192.png">
            <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon-32x32.png">
            <link rel="icon" type="image/png" sizes="96x96" href="/assets/images/favicon-96x96.png">
            <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon-16x16.png">
            <meta name="msapplication-TileColor" content="#ffffff">
            <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
            <meta name="theme-color" content="#ffffff">
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
