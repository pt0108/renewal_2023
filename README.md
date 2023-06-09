# renewal_2023
2022년에 만들었던 포트폴리오 사이트를 2023년 4월부터 새롭게 리뉴얼해보고자 합니다!  
단순 포트폴리오 사이트를 새롭게 만드는 것뿐만 아니라 추가로 작업물을 만들어서 더 풍부한 포트폴리오를 만들려고 합니다.

## 📑 진행 과정
- [사이트 구상](#-사이트-구상)
- [와이어 프레임 구현](#-와이어-프레임-구현)
- [상세 디자인 작업](#-피그마-디자인-작업)
- [작업물 코딩 구현](#-코딩-작업)
- [깃허브 배포](#-깃허브-배포)

## 💬 사이트 구상

와이어 프레임을 만들기 전에, 어떤 것을 참고할지, 어떤 부분을 수정하고 추가할지, 어떤 느낌으로 만들고 싶은지 구상부터 하고자 함.

페이지는 원페이지 형식으로, 흰 배경에 깔끔한 느낌의 디자인이었으면 함. 

### 기존 사이트에서의 문제점

- 반응형 웹 페이지라고 하기에는 부족한 점이 많음.
    - 화면의 크기에 따라 내용물의 크기나 위치가 변하지 않고 잘림.
    - 화면 좌측의 네비게이터와 본문 내용이 겹치는 현상 발생.
- 가독성이 떨어지는 것 같음.
    - 화면 상단에 메뉴가 잘 보이는 것이 더 좋다고 느낌.

### 추가하고 싶은 부분

- 부트스트랩을 적극 활용하고자 함.
- [dribbble](https://dribbble.com/shots/popular/web-design), [behance](https://www.behance.net/)를 통해 레퍼런스를 참고하고자 함.
- Figma 작업물과 프로젝트 작업물도 효과적으로 소개하고 싶음.
- 애니메이션 효과도 적용해보고 싶고, 가능하다면 3d 관련 툴도 사용해보고 싶음. 

### 사용할 툴
- HTML5, CSS3, Javascript, Figma, React.js

## 📝 와이어 프레임 구현
카카오 오븐을 사용해서 사이트의 큰 틀을 먼저 짬. 필요한 부분은 메모 기능을 통해 메모함.  
더 자세한 작업은 피그마에서 여러 레퍼런스를 참고해보고 디자인할 것.  

![image](https://user-images.githubusercontent.com/106129152/231984260-5a12bafa-21f4-4e69-84ab-aaa846381644.png)

- 작업에 들어가기 전 고려해야할 사항 : 부트캠프의 최종 프로젝트 결과물은 따로 노션에 정리하는 것이 필요해보임. (어떤 역할을 맡았는지, 트러블 슈팅과 얻어간 것, 작업 과정이나 코드 등) 


## 🖌 피그마 디자인 작업

- 디자인에 사용된 Flaticon의 아이콘들은 사이트 하단 푸터의 링크를 누르면 뜨는 모달에 아이콘 출처를 기재함.

## 🖥 코딩 작업

- 작업을 위해 React 프로젝트를 생성함. 
- 깃허브 배포 전에 사이트가 완성되면, 추가로 작업물을 만들어 넣고자 함. 
- 초기 완성 단계에서 Work 페이지의 작업물은 총 4개로 flex만 사용해서 배치가 가능했지만, 작업물을 추가하게 되면 카드 슬라이드 형식으로 수정하는 것이 좋을듯함.

⚡ react-scroll-motion을 적용해보려고 예제 코드를 썼는데 스크롤을 내리면 다시 위로 올라가는 현상 발생. 일단 텍스트에 애니메이션 효과 주는 것은 포기하고 전체적으로 1차 마감이 끝나면 다시 react-scroll-motion npm페이지 정독 후 도전. 또, 자바스크립트의 스크롤 감지 이벤트에 대한 공부 필요. 

## ⛏ 깃허브 배포

- 위의 모든 작업이 완료되면 프로젝트를 깃허브에 배포합니다.
