# Node.js 20.17.0-alpine 이미지를 사용
FROM node:20.17.0-alpine

# tzdata 패키지 설치
RUN apk add --no-cache tzdata

# 도쿄 시간대 설정
ENV TZ=Asia/Tokyo

# 앱 디렉토리 생성
WORKDIR /app

# 의존성 설치
COPY package.json package-lock.json ./
RUN npm install

# PATH 환경 변수에 node_modules/.bin 추가
ENV PATH /app/node_modules/.bin:$PATH

# 전체 소스 복사
COPY . .

# 포트 설정
EXPOSE 3000

# 개발 모드 실행
CMD ["npm", "run", "dev"]

# 이미지 빌드
# docker build -t ssblog .
# podman build -t ssblog .

# 컨테이너 실행
# podman run -it -p 3000:3000 localhost/ssblog:latest
# podman run -it --env-file .env -p 3000:3000 -v C:\ssProject\ssBlog:/app localhost/ssblog:latest

# 컨테이너 관련 명령어
# podman ps  # 현재 실행 중인 컨테이너 목록 확인
# podman ps -a  # 모든 컨테이너(중지된 포함) 목록 확인
# podman stop <컨테이너 ID>  # 실행 중인 컨테이너 중지
# podman rm <컨테이너 ID>  # 해당 컨테이너 삭제
# podman rm -a  # 모든 컨테이너 삭제
# podman exec -it <컨테이너 ID> /bin/sh # 컨테이너 접속

# 이미지 관련 명령어
# podman images  # 현재 보유 중인 이미지 목록 확인
# podman rmi <이미지 ID 또는 이미지 이름>  # 이미지 삭제
# podman rmi -a  # 모든 이미지 삭제

