# Models

> manifest.json

```
{
  "files": {
    "filename.js": {                // This is the key in the db?
      "contentsHash": "<hashvalue>" // Hashed contents of the parsed file
      "comments": {
        "grokId": "<commentname>",  // This id is generated in the snippet, <commentname> is the value of @name
        "grokId": "<commentname>",
        "grokId": "<commentname>",
        "grokId": "<commentname>",
        "grokId": "<commentname>",
        ...
      }
    }
  },
  ...
}
```
