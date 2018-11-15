export const reset = `
*,
:: after,
:: before {
<<<<<<< HEAD
    box - sizing: border - box;
}
html {
    font - family: sans - serif;
    line - height: 1.15;
    -webkit - text - size - adjust: 100 %;
    -ms - text - size - adjust: 100 %;
    -ms - overflow - style: scrollbar;
    -webkit - tap - highlight - color: transparent;
}
@-ms - viewport {
    width: device - width;
=======
    box-sizing: border-box;
}
html {
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100 %;
    -ms-text-size-adjust: 100 %;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: transparent;
}
@-ms-viewport {
    width: device-width;
>>>>>>> cd4ba4249a6699a6ba039d07ff006ab8f1bec027
}
article,
    aside,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    main,
    nav,
    section {
    display: block;
}
body {
    margin: 0;
<<<<<<< HEAD
    font - size: 1rem;
    font - weight: 400;
    line - height: 1.5;
    color: #212529;
    text - align: left;
    background - color: #fff;
=======
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    background-color: #fff;
>>>>>>> cd4ba4249a6699a6ba039d07ff006ab8f1bec027
}
[tabindex = '-1']: focus {
    outline: 0!important;
}
hr {
<<<<<<< HEAD
    box - sizing: content - box;
=======
    box-sizing: content-box;
>>>>>>> cd4ba4249a6699a6ba039d07ff006ab8f1bec027
    height: 0;
    overflow: visible;
}
h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
<<<<<<< HEAD
    margin - top: 0;
    margin - bottom: 0.5rem;
}
p {
    margin - top: 0;
    margin - bottom: 1rem;
}
abbr[data - original - title],
    abbr[title] {
    text - decoration: underline;
    -webkit - text - decoration: underline dotted;
    text - decoration: underline dotted;
    cursor: help;
    border - bottom: 0;
}
address {
    margin - bottom: 1rem;
    font - style: normal;
    line - height: inherit;
=======
    margin-top: 0;
    margin-bottom: 1rem;
}
p {
    margin-top: 0;
    margin-bottom: 1rem;
}
abbr[data-original-title],
    abbr[title] {
    text-decoration: underline;
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
    cursor: help;
    border-bottom: 0;
}
address {
    margin-bottom: 1rem;
    font-style: normal;
    line-height: inherit;
>>>>>>> cd4ba4249a6699a6ba039d07ff006ab8f1bec027
}
dl,
    ol,
    ul {
<<<<<<< HEAD
    margin - top: 0;
    margin - bottom: 1rem;
=======
    margin-top: 0;
    margin-bottom: 1rem;
>>>>>>> cd4ba4249a6699a6ba039d07ff006ab8f1bec027
}
ol ol,
    ol ul,
        ul ol,
            ul ul {
<<<<<<< HEAD
    margin - bottom: 0;
}
dt {
    font - weight: 700;
}
dd {
    margin - bottom: 0.5rem;
    margin - left: 0;
=======
    margin-bottom: 0;
}
dt {
    font-weight: 700;
}
dd {
    margin-bottom: 0.5rem;
    margin-left: 0;
>>>>>>> cd4ba4249a6699a6ba039d07ff006ab8f1bec027
}
blockquote {
    margin: 0 0 1rem;
}
dfn {
<<<<<<< HEAD
    font - style: italic;
}
b,
    strong {
    font - weight: bolder;
}
small {
    font - size: 80 %;
=======
    font-style: italic;
}
b,
    strong {
    font-weight: bolder;
}
small {
    font-size: 80 %;
>>>>>>> cd4ba4249a6699a6ba039d07ff006ab8f1bec027
}
sub,
    sup {
    position: relative;
<<<<<<< HEAD
    font - size: 75 %;
    line - height: 0;
    vertical - align: baseline;
=======
    font-size: 75 %;
    line-height: 0;
    vertical-align: baseline;
>>>>>>> cd4ba4249a6699a6ba039d07ff006ab8f1bec027
}
sub {
    bottom: -0.25em;
}
sup {
    top: -0.5em;
}
a {
<<<<<<< HEAD
    text - decoration: none;
    background - color: transparent;
    -webkit - text - decoration - skip: objects;
}
a: hover {
    text - decoration: underline;
}
a: not([href]): not([tabindex]) {
    color: inherit;
    text - decoration: none;
=======
    text-decoration: none;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
}
a: hover {
    text-decoration: underline;
}
a: not([href]): not([tabindex]) {
    color: inherit;
    text-decoration: none;
>>>>>>> cd4ba4249a6699a6ba039d07ff006ab8f1bec027
}
a: not([href]): not([tabindex]): focus,
    a: not([href]): not([tabindex]): hover {
    color: inherit;
<<<<<<< HEAD
    text - decoration: none;
=======
    text-decoration: none;
>>>>>>> cd4ba4249a6699a6ba039d07ff006ab8f1bec027
}
a: not([href]): not([tabindex]): focus {
    outline: 0;
}
code,
    kbd,
    pre,
    samp {
<<<<<<< HEAD
    font - family: SFMono - Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
    font - size: 1em;
}
pre {
    margin - top: 0;
    margin - bottom: 1rem;
    overflow: auto;
    -ms - overflow - style: scrollbar;
=======
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
    font-size: 1em;
}
pre {
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
    -ms-overflow-style: scrollbar;
>>>>>>> cd4ba4249a6699a6ba039d07ff006ab8f1bec027
}
figure {
    margin: 0 0 1rem;
}
img {
<<<<<<< HEAD
    vertical - align: middle;
    border - style: none;
}
svg {
    overflow: hidden;
    vertical - align: middle;
}
table {
    border - collapse: collapse;
}
caption {
    padding - top: 0.75rem;
    padding - bottom: 0.75rem;
    color: #6c757d;
    text - align: left;
    caption - side: bottom;
}
th {
    text - align: inherit;
}
label {
    display: inline - block;
    margin - bottom: 0.5rem;
}
button {
    border - radius: 0;
=======
    vertical-align: middle;
    border-style: none;
}
svg {
    overflow: hidden;
    vertical-align: middle;
}
table {
    border-collapse: collapse;
}
caption {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    color: #6c757d;
    text-align: left;
    caption-side: bottom;
}
th {
    text-align: inherit;
}
label {
    display: inline-block;
    margin-bottom: 0.5rem;
}
button {
    border-radius: 0;
>>>>>>> cd4ba4249a6699a6ba039d07ff006ab8f1bec027
}

button,
    input,
    optgroup,
    select,
    textarea {
    margin: 0;
<<<<<<< HEAD
    font - family: inherit;
    font - size: inherit;
    line - height: inherit;
=======
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
>>>>>>> cd4ba4249a6699a6ba039d07ff006ab8f1bec027
}
button,
    input {
    overflow: visible;
}
button,
    select {
<<<<<<< HEAD
    text - transform: none;
=======
    text-transform: none;
>>>>>>> cd4ba4249a6699a6ba039d07ff006ab8f1bec027
}
[type = 'reset'],
    [type = 'submit'],
    button,
    html[type = 'button'] {
<<<<<<< HEAD
    -webkit - appearance: button;
}
[type = 'button']:: -moz - focus - inner,
    [type = 'reset']:: -moz - focus - inner,
        [type = 'submit']:: -moz - focus - inner,
            button:: -moz - focus - inner {
    padding: 0;
    border - style: none;
}
input[type = 'checkbox'],
    input[type = 'radio'] {
    box - sizing: border - box;
=======
    -webkit-appearance: button;
}
[type = 'button']:: -moz-focus-inner,
    [type = 'reset']:: -moz-focus-inner,
        [type = 'submit']:: -moz-focus-inner,
            button:: -moz-focus-inner {
    padding: 0;
    border-style: none;
}
input[type = 'checkbox'],
    input[type = 'radio'] {
    box-sizing: border-box;
>>>>>>> cd4ba4249a6699a6ba039d07ff006ab8f1bec027
    padding: 0;
}
input[type = 'date'],
    input[type = 'datetime-local'],
    input[type = 'month'],
    input[type = 'time'] {
<<<<<<< HEAD
    -webkit - appearance: listbox;
=======
    -webkit-appearance: listbox;
>>>>>>> cd4ba4249a6699a6ba039d07ff006ab8f1bec027
}
textarea {
    overflow: auto;
    resize: vertical;
}
fieldset {
<<<<<<< HEAD
    min - width: 0;
=======
    min-width: 0;
>>>>>>> cd4ba4249a6699a6ba039d07ff006ab8f1bec027
    padding: 0;
    margin: 0;
    border: 0;
}
legend {
    display: block;
    width: 100 %;
<<<<<<< HEAD
    max - width: 100 %;
    padding: 0;
    margin - bottom: 0.5rem;
    font - size: 1.5rem;
    line - height: inherit;
    color: inherit;
    white - space: normal;
}
progress {
    vertical - align: baseline;
}
[type = 'number']:: -webkit - inner - spin - button,
    [type = 'number']:: -webkit - outer - spin - button {
    height: auto;
}
[type = 'search'] {
    outline - offset: -2px;
    -webkit - appearance: none;
}
[type = 'search']:: -webkit - search - cancel - button,
    [type = 'search']:: -webkit - search - decoration {
    -webkit - appearance: none;
}
:: -webkit - file - upload - button {
    font: inherit;
    -webkit - appearance: button;
}
output {
    display: inline - block;
}
summary {
    display: list - item;
=======
    max-width: 100 %;
    padding: 0;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    line-height: inherit;
    color: inherit;
    white-space: normal;
}
progress {
    vertical-align: baseline;
}
[type = 'number']:: -webkit-inner-spin-button,
    [type = 'number']:: -webkit-outer-spin-button {
    height: auto;
}
[type = 'search'] {
    outline-offset: -2px;
    -webkit-appearance: none;
}
[type = 'search']:: -webkit-search-cancel-button,
    [type = 'search']:: -webkit-search-decoration {
    -webkit-appearance: none;
}
:: -webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
}
output {
    display: inline-block;
}
summary {
    display: list-item;
>>>>>>> cd4ba4249a6699a6ba039d07ff006ab8f1bec027
    cursor: pointer;
}
template {
    display: none;
}
[hidden] {
    display: none!important;
}
/*# sourceMappingURL=bootstrap-reboot.min.css.map */
`
