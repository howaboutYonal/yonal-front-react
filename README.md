### Yonal

- 작업하던거 각자 페이지 DeoksooPage, JihyoPage, SuebeenPage에 추가하면 됨

- 컴포넌트 및 페이지는 [src > screen > 자신 이름 폴더]에 추가

- css는 어떻게 취합하는 게 좋을 지 모르겠네 전부 App.css에 추가하는게 맞는건가?
  ㄴ (ㄷㅅ)흐음.. 일단은 그래도 될듯? 

- 첨부된 deoksoocss.txt파일에 내용을 node_modules/react-calendar/dist/Calendar.css파일에 복사 붙여넣기 하세요!!
(모듈에 있는 css파일 변경은 깃으로 올릴수가 읍음...)

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