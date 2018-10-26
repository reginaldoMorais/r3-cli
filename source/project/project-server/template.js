export default (html, initialState, env) => `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta content="IE=edge" http-equiv=X-UA-Compatible>
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
            <title>{{APP_TITLE}}</title>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <link rel="apple-touch-icon-precomposed" sizes="57x57" href="/assets/images/apple-touch-icon-57x57.png" />
            <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/assets/images/apple-touch-icon-114x114.png" />
            <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/assets/images/apple-touch-icon-72x72.png" />
            <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/assets/images/apple-touch-icon-144x144.png" />
            <link rel="apple-touch-icon-precomposed" sizes="60x60" href="/assets/images/apple-touch-icon-60x60.png" />
            <link rel="apple-touch-icon-precomposed" sizes="120x120" href="/assets/images/apple-touch-icon-120x120.png" />
            <link rel="apple-touch-icon-precomposed" sizes="76x76" href="/assets/images/apple-touch-icon-76x76.png" />
            <link rel="apple-touch-icon-precomposed" sizes="152x152" href="/assets/images/apple-touch-icon-152x152.png" />
            <link rel="icon" type="image/png" href="/assets/images/favicon-196x196.png" sizes="196x196" />
            <link rel="icon" type="image/png" href="/assets/images/favicon-96x96.png" sizes="96x96" />
            <link rel="icon" type="image/png" href="/assets/images/favicon-32x32.png" sizes="32x32" />
            <link rel="icon" type="image/png" href="/assets/images/favicon-16x16.png" sizes="16x16" />
            <link rel="icon" type="image/png" href="/assets/images/favicon-128.png" sizes="128x128" />
            <meta name="application-name" content="&nbsp;"/>
            <meta name="msapplication-TileColor" content="#FFFFFF" />
            <meta name="msapplication-TileImage" content="mstile-144x144.png" />
            <meta name="msapplication-square70x70logo" content="mstile-70x70.png" />
            <meta name="msapplication-square150x150logo" content="mstile-150x150.png" />
            <meta name="msapplication-wide310x150logo" content="mstile-310x150.png" />
            <meta name="msapplication-square310x310logo" content="mstile-310x310.png" />
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
            <script type="text/javascript" src="/assets/vendor.js"></script>
            <script type="text/javascript" src="/assets/client.js"></script>
        </body>
    </html>
`;
