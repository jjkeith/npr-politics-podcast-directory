# npr-politics-podcast-directory
A directory of current and past hosts and contributors to the NPR Politics Podcast

## Why Make This?
Did the world need this? Probably not. However, I wanted to make a little React-based front-end catalog app.
The NPR Politics Podcast provides a relatively small dataset that could be sorted and filtered in meaningful ways.

## Technology
* Create-React-App
* React-Bootstrap
* Sass

## Known Issues/TODO
* Currently sorting by beat is allowed, but beats are not displayed (unless decipherable from job title)
* Twitter handles have been collected, but not worked into the view
* The use of `dangerouslySetInnerHTML` is &mdash; obviously &mdash; discouraged, but given that this is static data that I collected myself, the risks are few. However, it would be preferable to strip links from bios and replace paragraph breaks with unicode.
* Styling adheres to Bootstrap defaults for the most part and could be spruced up
* Additional explanatory text would be helpful.

