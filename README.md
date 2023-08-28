# 김유현

# Weather-Todolist 다이어리 프로젝트
사용자가 본인 위치를 기반으로 날씨 정보를 확인하고 TodoList 를 작성 및 관리할 수 있도록 구현한 프로젝트 「kyh-diary-app」 입니다.

> 사이트 링크 : (https://kyh-diary-app.vercel.app/)

<br>

## 개발자의 GitHub 주소

<table>
  <tr> 
    <td align="center"><a href="https://github.com/yuhyeon99"><img src="https://avatars.githubusercontent.com/u/83055700?s=96&v=4" width="100px;" alt=""/><br /><sub><b>김유현</b></sub></a><br /><a href="https://github.com/yuhyeon99" title="Code">🏠</a>
    </td>
  </tr>
</table>

> "어제 자신을 넘어 더욱 성장을 추구하는 개발자 김유현이라고 합니다."

<br>

# 🔍 목차

> 1. GitHub 관리 전략
> 2. 프로젝트
>    1. 개요
>    2. 개념
>    3. 기능
>    4. 신중하게 생각한 부분
>       - UI/UX
>       - 프로젝트 구조
> 3. 개발 환경
>    1. 프레임워크
>    2. 데이터베이스
> 4. 힘들었던 일
> 5. 사용 기술
> 6. 자기 평가
> 7.  조언하고 싶은 포인트

<br>


# 1. GitHub 관리 전략

## 1.1. :pushpin: Commit Convention

|   [Type]    |             설명              |                       예예                       |
| :---------: | :---------------------------: | :--------------------------------------------: |
|     feat     |  기능 추가 :heavy_plus_sign:   |           "feat : TodoList add 기능 추가"           |
|     fix     |        버그 수정 :bug:         | "fix : 이미지 업로드 버그 수정" |
|   modify    |  코드 타이포 수정 :zap:   |      "modify : 날씨 API 서비스 수정"      |
|  refactor   |  코드 구조 변경 :pencil2:   |   "refactor : 입력 코드와 리스트 코드 분리"    |
| enhancement | UI 디자인 변경  (CSS) :art: |      "enhancement : 날씨 display UI 수정"      |
| Deployment  |                               |                                                |

<br>


## 1.5. GIt Branch관리

```
main -- develop -- add/#1   
                \_ add/#2     
```

* `main` : 배포되는 기본 버전
* `develop` : 개발 브랜치
* 기능 개발 브랜치는 develop 브랜치에서 생성되어 개발을 진행합니다.


<br>


# 2. 프로젝트

## 2.1. 개요

- 프로젝트 이름: Weather-TodoList
- 의미: 날씨와 TodoList를 조합한 프로젝트명으로, "매일 아침 할 일을 계획하려는 분들을 위한 웹앱 서비스"이라는 의미를 포함하고 있습니다.
- 서비스 개요: 이 웹앱 서비스는 계획가들이 하루의 계획을 새울 때 현재 위치 정보를 기반으로 날씨 정보를 제공합니다. 또한 이러한 정보를 활용하여 TodoList 서비스를 제공할 수 있도록 하는 것을 목표로 합니다.


## 2.2. 개념

Weather-TodoList 프로젝트는 날씨 정보를 제공하는 TodoList 서비스입니다. 저는 UI/UX와 코드 구조에 특히 집중하여 개발을 진행했습니다.

### 특징

1. 날씨 정보와 TodoList를 작성 및 관리할 수 있도록 했습니다. 
2. 사용자는 위치 기반 날씨 정보를 제공받습니다. 따라서 최초 브라우저 접속 시 위치 제공 서비스에 동의해야합니다.
3. 반응형 웹 사이트로 웹 및 앱에서도 정상적으로 작동합니다.




<br>



##  2.3. 기능

1. 현재 위치를 기반으로 날씨 정보 제공
2. TodoList에서 할 일을 추가하고, 수정, 삭제 그리고 완료/미완료 상태변경하는 기능을 제공합니다.

<br>

## 2.4. 주의깊게 생각한 부분(UX)

1. 날씨 API 응답 전 화면 로딩 애니메이션 아이콘으로 대체

![image](https://github.com/yuhyeon99/kyh-diary-app/assets/83055700/4d1dc802-ed1c-4890-be1f-cfaa35824d5f)

![image](https://github.com/yuhyeon99/kyh-diary-app/assets/83055700/fea89176-34c6-4f0a-a9c0-31566e970878)

날씨 API 관련 함수에서 응답을 받을 때 까지 HTML, CSS로 제작한 애니메이션 아이콘 화면을 띄워주도록 코드 작성했습니다.

2. 새로운 할 일 입력 간소화

![image](https://github.com/yuhyeon99/kyh-diary-app/assets/83055700/be03f51c-78f3-412d-a5c8-0a0f838bebfc)

Todolist 등록 시, 등록 버튼을 제거하고 엔터 키를 통해 등록하는 것으로, 깔끔한 UI를 보여주는 구조로 선택하였습니다.

3. List 개수가 많아져서 최대 높이를 넘겼을 경우 스크롤 추가

![image](https://github.com/yuhyeon99/kyh-diary-app/assets/83055700/a43a27bb-8112-4a4c-8ba2-3f08edf824ce)



<br><br>

## 2.4. 주의깊게 생각한 부분(프로젝트 구조)

![image](https://github.com/yuhyeon99/kyh-diary-app/assets/83055700/cc7c2da5-c360-4142-ba16-f84b41488de2)

- ### actions
    - 주요 로직들이 포함된 함수를 모아놓은 파일
    - 관련 컴포넌트에서 import해서 사용
- ### components
    - 기능을 기준으로 컴포넌트를 분리해서 재사용 및 유지보수에 용이하도록 설계
- ### state
    - recoil 라이브러리를 사용한 상태변수 관리하기 위한 폴더
- ### styles
    - 전역적으로 사용되는 스타일을 관리할 수 있는 파일들이 위치함
- ### types
    - 타입 관련된 코드가 있는 파일들을 관리하는 폴더


# 3. 개발 환경

## 3.1. 프레임워크

1. Front
   - React.js  `18.2.0`
   - TypeScript `4.9.5`



## 3.2. 데이터베이스

1. LocalStorage



## 3.3. 라이브러리

1. Recoil
2. Vercel

<br>

## 개발 환경

OS: Window

IDE: Visual Studio Code


<br>

------

# 힘들었던 일

1. 제출 마지막 날에 React.js에서 작업 한 내용을 빌드하고 배포했지만 API 요청 과정 중 오류가 발생했습니다. 또한 프로젝트를 모듈별로 나누어서 작업하려고 신경썼습니다.

   ### 원인

   1. Geolocation API는 기밀성이 높은 위치 정보를 얻기 때문에 정책상 로컬 환경 이외에서는 HTTP에서 작동하지 않기 때문입니다.

   ### 해결책

   1. Vercel에서 SSL 보안 인증서가 적용된 HTTPS 배포했습니다.

## 사용기술（Skill）




`HTML5` `CSS3` `Javascript` `React.js` `TypeScript` 

<br>

# 6. 자기 평가
처음 생각했던 기획은 날씨 API와 TodoList에 Diary기능을 추가적으로 구현하고 싶었는데 개발 속도가 생각보다 늦어져서 그 점이 유감이었습니다. 그 이외의 기능은 제가 생각한 내용으로 개발을 마쳤습니다.

지금의 완성도에 달하게 하는 것이 아니라, 보다 높은 프로젝트로 완성하고 싶었습니다.

추후에도 기능을 추가해가며 리펙토링 또는 마이그레이션 해 볼 예정입니다.


<br>



<br>

# 7. 조언해 주었으면 하는 점

타입스크립트 부분에서 미흡했던 부분이나 비효율적인 코드 또는 프로젝트 구조 부분이 신경쓰입니다.
