if (!self.define) {
  let e,
    s = {};
  const a = (a, c) => (
    (a = new URL(a + ".js", c).href),
    s[a] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (c, n) => {
    const i =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[i]) return;
    let o = {};
    const r = (e) => a(e, i),
      t = {
        module: {
          uri: i,
        },
        exports: o,
        require: r,
      };
    s[i] = Promise.all(c.map((e) => t[e] || r(e))).then((e) => (n(...e), o));
  };
}
define(["./workbox-849edfeb"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/dynamic-css-manifest.json",
          revision: "d751713988987e9331980363e24189ce",
        },
        {
          url: "/_next/static/X7GEQsqhxTJA-l5fB62lk/_buildManifest.js",
          revision: "303dfe51b4e78d0629c11b15f2465b1e",
        },
        {
          url: "/_next/static/X7GEQsqhxTJA-l5fB62lk/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/102-03efa4b9939cb26b.js",
          revision: "03efa4b9939cb26b",
        },
        {
          url: "/_next/static/chunks/390-743568c26b01896a.js",
          revision: "743568c26b01896a",
        },
        {
          url: "/_next/static/chunks/484.da50829333201e55.js",
          revision: "da50829333201e55",
        },
        {
          url: "/_next/static/chunks/68c0a17d-d2b9c7078cf36223.js",
          revision: "d2b9c7078cf36223",
        },
        {
          url: "/_next/static/chunks/709.e04b3301a1eba8ef.js",
          revision: "e04b3301a1eba8ef",
        },
        {
          url: "/_next/static/chunks/cb355538-07cc54b39a8d4541.js",
          revision: "07cc54b39a8d4541",
        },
        {
          url: "/_next/static/chunks/framework-a4ddb9b21624b39b.js",
          revision: "a4ddb9b21624b39b",
        },
        {
          url: "/_next/static/chunks/main-ac39317d6f5c7e5e.js",
          revision: "ac39317d6f5c7e5e",
        },
        {
          url: "/_next/static/chunks/pages/_app-446ef6c7adee9f0e.js",
          revision: "446ef6c7adee9f0e",
        },
        {
          url: "/_next/static/chunks/pages/_error-83eac0d438baeb80.js",
          revision: "83eac0d438baeb80",
        },
        {
          url: "/_next/static/chunks/pages/dashboard/home-d78119e345eecae5.js",
          revision: "d78119e345eecae5",
        },
        {
          url: "/_next/static/chunks/pages/go-gas-form/GoGasForm-b3aa9436d94eb233.js",
          revision: "b3aa9436d94eb233",
        },
        {
          url: "/_next/static/chunks/pages/go-gas-form/GoGasForm2-8e7ea67ddddd04ee.js",
          revision: "8e7ea67ddddd04ee",
        },
        {
          url: "/_next/static/chunks/pages/index-18f795ec2d666846.js",
          revision: "18f795ec2d666846",
        },
        {
          url: "/_next/static/chunks/pages/offlinedata/offlinedatatable-aecb2decffac736d.js",
          revision: "aecb2decffac736d",
        },
        {
          url: "/_next/static/chunks/polyfills-42372ed130431b0a.js",
          revision: "846118c33b2c0e922d7b3a7676f81f6f",
        },
        {
          url: "/_next/static/chunks/webpack-a198c8a9021f6728.js",
          revision: "a198c8a9021f6728",
        },
        {
          url: "/_next/static/css/6baddcad697b2bae.css",
          revision: "6baddcad697b2bae",
        },
        {
          url: "/_next/static/css/e7eddfe4828c1690.css",
          revision: "e7eddfe4828c1690",
        },
        {
          url: "/assets/logo.png",
          revision: "b99066f02b4869510fdac67ba5f64346",
        },
        {
          url: "/favicon.ico",
          revision: "c30c7d42707a47a3f4591831641e50dc",
        },
        {
          url: "/file.svg",
          revision: "d09f95206c3fa0bb9bd9fefabfd0ea71",
        },
        {
          url: "/globe.svg",
          revision: "2aaafa6a49b6563925fe440891e32717",
        },
        {
          url: "/icons/logo-gagas-128.png",
          revision: "078717aa4c7dc1d862be1d5ba3581858",
        },
        {
          url: "/icons/logo-gagas-144.png",
          revision: "02f5e12e75bd2387a1ab2bacceffd8ee",
        },
        {
          url: "/icons/logo-gagas-152.png",
          revision: "450c650e975c2d9988f3ce6f9e3b6a41",
        },
        {
          url: "/icons/logo-gagas-16.png",
          revision: "4268cf92a8bd3f19445aab8aacd25a84",
        },
        {
          url: "/icons/logo-gagas-180.png",
          revision: "aa0fa2bb28d90ef50d69ef4cb277427a",
        },
        {
          url: "/icons/logo-gagas-192.png",
          revision: "31850d3ae50a706ddc3291477af176c5",
        },
        {
          url: "/icons/logo-gagas-256.png",
          revision: "1fcb6d7a1818139cf7aef0f27ba2e98b",
        },
        {
          url: "/icons/logo-gagas-48.png",
          revision: "9bcddc9a7b2988d4fd33f99413494d08",
        },
        {
          url: "/icons/logo-gagas-512.png",
          revision: "f9dc66bde4e9139fc608f91ceee3c173",
        },
        {
          url: "/icons/logo-gagas-64.png",
          revision: "0d85b6963ca3aabba0a0ba72ab7c8515",
        },
        {
          url: "/icons/logo-gagas-72.png",
          revision: "cd5c003f3f96697fe2e16f23636573c2",
        },
        {
          url: "/icons/logo-gagas-96.png",
          revision: "28a73aab89e135b4b311fa5fcdec63d5",
        },
        {
          url: "/manifest.json",
          revision: "e7c2c9aa327fb77d20f9b952057cda1d",
        },
        {
          url: "/next.svg",
          revision: "8e061864f388b47f33a1c3780831193e",
        },
        {
          url: "/offline.html",
          revision: "33c5368ab03d9203ed8bdeb4e5c37c52",
        },
        {
          url: "/vercel.svg",
          revision: "c0af2f507b369b085b35ef4bbe3bcf1e",
        },
        {
          url: "/window.svg",
          revision: "a2760511c65806022ad20adf74370ff3",
        },
      ],
      {
        ignoreURLParametersMatching: [],
      }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: c,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /_next\/dynamic-css-manifest\.json$/,
      new e.NetworkOnly(),
      "GET"
    ),
    e.registerRoute(/_next\/build-manifest\.json$/, new e.NetworkOnly(), "GET"),
    e.registerRoute(
      /^https?.*/,
      new e.NetworkFirst({
        cacheName: "pages-cache",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 50,
            maxAgeSeconds: 2592e3,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/dashboard\/home/,
      new e.StaleWhileRevalidate({
        cacheName: "dashboard-cache",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 10,
            maxAgeSeconds: 2592e3,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/offline.html/,
      new e.CacheFirst({
        cacheName: "offline-cache",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 1,
            maxAgeSeconds: 2592e3,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:png|jpg|jpeg|svg|gif|ico|woff2|woff|ttf|eot|json|js|css)$/,
      new e.StaleWhileRevalidate({
        cacheName: "static-assets-cache",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 100,
            maxAgeSeconds: 2592e3,
          }),
        ],
      }),
      "GET"
    );
});
