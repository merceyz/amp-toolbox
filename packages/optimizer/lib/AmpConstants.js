/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'mode strict';

module.exports = {
  AMP_TAGS: ['amp', '⚡', '⚡4ads', 'amp4ads', '⚡4email', 'amp4email'],
  AMP_CACHE_HOST: 'https://cdn.ampproject.org',
  AMP_FORMATS: ['AMP', 'AMP4EMAIL', 'AMP4ADS'],
  AMP_RUNTIME_CSS_PATH: '/v0.css',
  appendRuntimeVersion: (prefix, version) => prefix + '/rtv/' + version,
};
