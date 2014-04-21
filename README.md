###Task Picker
==============
#### Under development.  Not usable####
===============


Define task logic in basedir/configs/tasks.json file
```json
[
  "task1": {
    conditions: [{exists: "a"}],
  },
  "task2": {
    conditions: [{doesNotExist: "b"}]
  }
]

```


File you want to run async tasks from.
```javascript

//index.js

var TR = require('task-picker');
...
var taskRunner = TR({ basedir: __dirname});
taskRunner.runTasks();

```
