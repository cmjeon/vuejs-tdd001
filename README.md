# hello-world

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

---

# vuejs 에 TDD 를 테스트하는 공간

## 목표

- 기존에 vuejs 프로젝트에 TDD 개발할 수 있도록 환경을 알아봄

## 기존 vuejs 프로젝트 만들기

### vue CLI 설치

참고. [https://cli.vuejs.org/guide/installation.html]

```bash
# vue CLI 설치
$ npm install -g @vue/cli

# 버전 확인
$ vue --version
```

### vue 프로젝트 생성

vue CLI 로 프로젝트를 생성하는데 단 테스트 도구는 포함하지 않도록 함

```bash
$ vue create hello-vue

# Default (Vue 3) ([Vue 3] babel, eslint) 선택

$ cd hello-vue
```

## 기존 vuejs 프로젝트에 Vue Test Utils 설치하기

참고. [https://vue-test-utils.vuejs.org/]

커밋 1회 수행 및 리포지토리를 클린하게 만듬

```bash
$ vue add unit-jest
```

