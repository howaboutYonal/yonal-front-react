### Yonal

- css는 어떻게 취합하는 게 좋을 지 모르겠네 전부 App.css에 추가하는게 맞는건가?

### 지효 RDS 연결(2/11)
- SEQUELIZE라고 DB의 객체 맵핑 해주는 모듈 설치함
- dotenv 설치
이런거 npm install 하면 저절로 설치되겠지?

- ".env" 파일 gitignore에 추가함
=> 제일 바깥에 ".env" 만들어 환경변수를 추가한다.
내용은 notion에 올려놓도록 하겠음

- API 관리 파일: v1.js
- test 할때 localhost:5000/v1/user 이런식으로 날리면 됨