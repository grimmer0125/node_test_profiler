# Node Test Profiler

## Steps

1. `NODE_ENV=production node --prof app.js`
2. `node --prof-process isolate-0x[Number]-v8.log > processed.txt`
3. `node --prof-process --preprocess isolate-0x[Number]-v8.log > v8.json`
4. `git clone https://github.com/v8/v8.git`
5. open v8/tools/profview/index.html
6. select v8.json

## ref

1. https://nodejs.org/uk/docs/guides/simple-profiling/ crypto.pbkdf2 and crypto.pbkdf2Sync both spwan a worker thread (`___pthread_init`) but the latter will make JS main thread to wait for the result for pthread
