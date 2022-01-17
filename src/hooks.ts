import { v4 as uuid } from '@lukeed/uuid';
import type { Handle } from '@sveltejs/kit';
import cookie from 'cookie';
import { minify } from 'html-minifier';
import { prerendering } from '$app/env';

const minification_options = {
    collapseBooleanAttributes: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    decodeEntities: true,
    html5: true,
    ignoreCustomComments: [/^#/],
    minifyCSS: true,
    minifyJS: true,
    removeAttributeQuotes: true,
    removeComments: true,
    removeOptionalTags: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    sortAttributes: true,
    sortClassName: true
};


export const handle: Handle = async ({ request, resolve }) => {
    const cookies = cookie.parse(request.headers.cookie || '');
    request.locals.userid = cookies.userid || uuid();

    // TODO https://github.com/sveltejs/kit/issues/1046
    if (request.url.searchParams.has('_method')) {
        request.method = request.url.searchParams.get('_method').toUpperCase();
    }

    const response = await resolve(request);

    if (!cookies.userid) {
        // if this is the first time the user has visited this app,
        // set a cookie so that we recognise them when they return
        response.headers['set-cookie'] = cookie.serialize('userid', request.locals.userid, {
            path: '/',
            httpOnly: true
        });
    }

    if (prerendering && response.headers['content-type'] === 'text/html') {
        response.body = minify(response.body, minification_options);
    }

    return response;
};
