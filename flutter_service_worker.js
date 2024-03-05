'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "92bcea2fae7c79525d66b8d16a14fde0",
"index.html": "5193a7f311b4e7454e15060079ab599e",
"/": "5193a7f311b4e7454e15060079ab599e",
"main.dart.js": "1c992899f3f3bf04051ce7cfe824d6af",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "474cb7d669ed0d42124c0a111ca72814",
"icons/icon-192.png": "a0f2a8975b873944ce3eed5990e14b0b",
"icons/icon-512.png": "3dd281c7da9ef5ae3bbdb320a302e9e6",
"manifest.json": "f424f5be859fecc25756be4d85f2c185",
"assets/AssetManifest.json": "d9e96ddd9c02d59fbc8f6c01e821a6c6",
"assets/NOTICES": "a6cfcdb521a439ea4f1230f90397d86f",
"assets/FontManifest.json": "90d9b2662cbb66a4f03b5a8a9b0d2102",
"assets/AssetManifest.bin.json": "56e148f61799080dacc1c5897106df04",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "1f79f467f847eaeed9ea7c4c9f30af29",
"assets/fonts/Roboto-Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/fonts/Roboto-Light.ttf": "881e150ab929e26d1f812c4342c15a7c",
"assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/fonts/MaterialIcons-Regular.otf": "8ea08ea2444cc58ec5807fd7669e488f",
"assets/fonts/Roboto-Italic.ttf": "cebd892d1acfcc455f5e52d4104f2719",
"assets/fonts/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/assets/images/dartlogo.webp": "d6b0ffb4c26def623061257eb9096c95",
"assets/assets/images/xcode.png": "f38a5f7ca54e2d37a1b4f9818d9c8a6e",
"assets/assets/images/git.png": "728ff5a8e44d74cd0f2359ef0a9ec88a",
"assets/assets/images/vscodelogo.png": "ae14a131d4b43d8d25ce4f6323544cbf",
"assets/assets/images/kurinji4.png": "709b70cfabbec393847d121d384d2fe2",
"assets/assets/images/firebase.png": "e902bb2afed37a8fcdd0e130949c2fee",
"assets/assets/images/kurinji5.png": "c228fcfa6d80bde32965b84f35f441a1",
"assets/assets/images/kurinji1.png": "06b1aa04cebf920a82bbeed7dcc70075",
"assets/assets/images/kurinji2.png": "5a71ea501f8af5cd905f7318510696cc",
"assets/assets/images/kurinji3.png": "a181b9b4a28403875d9386991e5ee477",
"assets/assets/images/ow5.png": "57c0de5d3602b77160992399dba531ba",
"assets/assets/images/ibc1.png": "56075d29f034917085fb7d066f111148",
"assets/assets/images/flutterlogo.png": "de548571615d80a75463678eb4493115",
"assets/assets/images/myDp.png": "798300aa544bfd33307b65e089ce278a",
"assets/assets/images/ow4.png": "3d4dbd3334d6160763aa7b1069532a5d",
"assets/assets/images/ow1.png": "95fd5ad425e80464139c228dc322750a",
"assets/assets/images/dp.jpg": "01d518acf1220d894b5814828a8f8903",
"assets/assets/images/ow3.png": "87d6bce0a957e06a11ca4d98d7730e2e",
"assets/assets/images/cover.png": "679fa55a4cb37110796a1826f6acb1be",
"assets/assets/images/ow2.png": "b9c21ca40b000cb1f65559979a5ffd3c",
"assets/assets/images/image1.png": "260a013ce11ffa349f9f8563cd38889c",
"assets/assets/images/ownchats.png": "115fc35b43843857ff176caeb0db41a7",
"assets/assets/images/Subject.png": "0954313b7232fc173ba1014483eeac7e",
"assets/assets/icons/2linkedin.png": "b609a2fa829a8c991412baeacdc5af01",
"assets/assets/icons/uiux.png": "918a2b4486c3e973a1ae6ad655d6a6df",
"assets/assets/icons/mobileapp.png": "0764a6445b112ed0d6291ace9d082344",
"assets/assets/icons/2tele.png": "26b714b27c3ebe4a6d3395a47a8bc61f",
"assets/assets/icons/2git.png": "08f36dcbc570767c7e2638fa4ae21f35",
"assets/assets/icons/project.png": "2047b47f35b461e9efa78e3518e8cde1",
"assets/assets/icons/2mail.png": "f0e2dfb645078a39ea4a7fc32c2f80cb",
"assets/assets/icons/insta1.png": "ffe2b0b800e80d3971c042c6137f5284",
"assets/assets/icons/coding.png": "2dbe7025c73230ed9053aff2792b814c",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
