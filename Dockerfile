# Node.js 20.17.0-alpine 이미지를 사용
FROM node:20.17.0-alpine

# 앱 디렉토리 생성
WORKDIR /app

# 의존성 설치
COPY package.json package-lock.json ./
RUN npm install

# 전체 소스 복사
COPY . .

# 포트 설정
EXPOSE 3000

# 개발 모드 실행
CMD ["npm", "run", "dev"]

# docker build -t ssBlog .