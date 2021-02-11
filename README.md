### Yonal

- 작업하던거 각자 페이지 DeoksooPage, JihyoPage, SuebeenPage에 추가하면 됨

- 컴포넌트 및 페이지는 [src > screen > 자신 이름 폴더]에 추가

- css는 어떻게 취합하는 게 좋을 지 모르겠네 전부 App.css에 추가하는게 맞는건가?

- 첨부된 deoksoocss.txt파일에 내용을 node_modules/react-calendar/dist/Calendar.css파일에 복사 붙여넣기 하세요!!
(모듈에 있는 css파일 변경은 깃으로 올릴수가 읍음...)

### express 서버 사용을 위한 환경설정
- express서버 실행방법, cmd에서 node server.js

- pull받은 후에는 node_modules폴더가 없을 것입니다. 아래의 방법을 사용하면 될듯?

- 동빈나 7강 'node.js express서버 개발환경 구축하기'에서 오류가 있습니다. 
댓글에서 나온 해결방법.
1. npm install nodemon (=> 노드모듈 설치)
2. npm install -g nodemon
3. npm install express
4. npm install -g express (그냥 -g로 해도 될텐데 댓글에선 암튼 이렇게함)
5. npm install body-parser
- 위 과정 후에 node server.js 이후 chrome에서 localhost:5000 ㄱㄱ

- 프론트 개발 하실거면, cd 후에 yarn client ㄱㄱ
- 서버랑 같이 개발할거면 yarn dev ㄱㄱ
- localhost:3000 포트는 client측, 5000포트는 server측임

- 위 과정 후, yarn dev를 시작하여 기존처럼 개발 가능합니다.

### 현재 rds상황 (02.09)
- 같은 달력을 사용하는 user테이블 생성
- user 테이블은 id, name, selectedday로 이루어짐
- 동빈나 11강 강의를 바탕으로 server.js생성
- rds이용을 위해서는 동빈나 11강 강의에 나온 database.json파일 생성이 필요합니다. 해당 파일은 .gitignore에 추가되어 깃에 올라가지 않기 때문에 개별 생성이 필요.



### 지효 RDS 연결
- SEQUELIZE라고 DB의 객체 맵핑 해주는 모듈 설치함
- dotenv 설치
이런거 npm install 하면 저절로 설치되겠지?

- ".env" 파일 gitignore에 추가함
=> 제일 바깥에 .env 만들어 환경변수를 추가한다.

내용은 notion에 올려놓도록 하겠음

