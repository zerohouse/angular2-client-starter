# oncoder-web-client
OnCoder Web - v2


### Global Dependencies

| Dependency | Version | Install                               |
| ---------- | ------- | ------------------------------------- |
| NodeJS     | 5.x.x   | [http://node.org](http://nodejs.org/) |
| npm        | 3.x.x   | [http://node.org](http://nodejs.org/) |
| Gulp CLI   | 0.4.x   | `npm install gulpjs/gulp-cli#4.0 -g`  |
| Typings    | 0.6.x   | `npm install typings -g`              |

### Build
$ npm install

$ typings install

$ gulp build serve

### Gulp 커맨드
$ gulp build serve -> build 후 워치 (라이브리로드)

$ gulp unit -> src/\*\*/\*.spec.ts 파일 테스트

$ gulp e2e -> e2e/\*.spec.ts 파일 테스트 (엔드 테스트)

$ NODE_ENV=production gulp build serve  >> 프로덕션

