
# 주제

<strong> 근전도 센서를 활용한 운동량의 정량적 수치화와 점진적 부하의 원리를 이용한 스마트 트레이닝 </strong>  
<strong> (Smart Training using arduino with EMG module based on progressive overload) </strong>


# 👨‍👨‍👧‍👦 맴버

|구분|성명|학번|소속학과|학년|이메일|
|---|---|:-:|:-:|:-:|:-:|
|학생|최현준|2017104037|컴퓨터공학과|4|kikitank1@khu.ac.kr|

# 연구배경


최근 퍼스널 케어에 대한 관심이 많아지고 있다 기술이 발전하며 <strong>🚨과거 전문가가 직접 보고 판단을 요하는 작업에서 벗어나 전문가의 지식을 decision tree 형태로 제작하여 rule based 된 알고리즘으로 퍼스널 데이터를 처리하여 개인에게 맞춤형 서비스를 지원할 수 있게 되었다.</strong> 이러한 형태의 서비스는 인구 전체의 노동량을 줄여줄 뿐만 아니라 시간을 절약할 수 있게 해주며 공간의 제약에서 벗어날 수 있게 해준다.<strong>✨이러한 시대적 흐름에 따라, 운동의 원리에 있어서 중요한 흐름 중 하나인 점진적 부하의 원리를 적용한 퍼스널 트레이닝 운동법을 가이드 하는 서비스를 제공하고자 한다.</strong> 서비스로부터 얻게 되는 기대효과는, 개인에게 운동 원리를 적용한 운동가이드 서비스를 쉽게 제공할 수 있게 되어 사회 구성원의 건강 긍정적인 영향을 미칠 것으로 예상된다.<br><br>

|프로젝트 구조|
|:-:|
|![Capture_2022_11_25_10_39_21_611](https://user-images.githubusercontent.com/102128108/203883439-cd09cbab-5c0b-40b7-bee5-655d0c49ee5c.png)|



# 🎉 구현

### 로그인 페이지 && 회원가입 페이지
|로그인|회원가입|
|:-:|:-:|
|![Capture_2022_12_04_12_02_16_169](https://user-images.githubusercontent.com/102128108/205472506-5a712ae4-a9ad-48e3-a0f8-14e9aaa47b62.png)|![Capture_2022_12_04_12_09_42_701](https://user-images.githubusercontent.com/102128108/205472520-eb27d102-da13-496e-b7b1-bf569bac566d.png)|

### 관리 페이지
|리스트|등록|제거|
|:-:|:-:|:-:|
|![Capture_2022_12_04_12_10_00_583](https://user-images.githubusercontent.com/102128108/205472409-6bf8e354-418d-41e1-bd77-160bfd60b2fb.png)|![Capture_2022_12_04_12_10_59_726](https://user-images.githubusercontent.com/102128108/205472417-56968f76-c5e3-4b4c-969f-1dd7a6d9c307.png)|![Capture_2022_12_04_12_11_02_666](https://user-images.githubusercontent.com/102128108/205472429-2101de95-fc77-4616-a777-07fba5e6a2b7.png)|

### 상세 페이지
|상세|측정|
|:-:|:-:|
|![Capture_2022_12_04_12_10_09_340](https://user-images.githubusercontent.com/102128108/205472462-f060458f-922a-43c3-a560-ca7cf548f0c6.png)|![Capture_2022_12_04_12_10_16_450](https://user-images.githubusercontent.com/102128108/205472467-e7bc0f23-ca78-41ad-ac52-c7458ec9847f.png)|


### 게임 요소
|모습|상점|
|:-:|:-:|
|![Capture_2022_12_04_12_10_00_583](https://user-images.githubusercontent.com/102128108/205472493-6f60af5d-f7a9-4b3e-bfb8-19c0cd880908.png)|![Capture_2022_12_04_12_10_28_33](https://user-images.githubusercontent.com/102128108/205472498-48ca05b3-7222-4adf-85af-c41b39bb7686.png)|

# 데이터 획득과정
|측정|센싱|
|:-:|:-:|
|![ezgif com-gif-maker_ex](https://user-images.githubusercontent.com/102128108/203881129-f7d6f178-daa6-4d9f-8550-766b3a784087.gif)|<img src="https://user-images.githubusercontent.com/102128108/203881117-18391cc1-00ef-4773-b253-ff271c63b0ec.gif" width="400"/>|


# 데이터 분석
![data-change](https://user-images.githubusercontent.com/102128108/202894556-4bcf57d4-52d4-4049-90b4-2bba690347c8.gif)

IEMG로 근활성도를 구하였을 때, 근활성도는 무게와 repetetion에 양의 상관관계를 보인다.

### 세부 데이터
|5kg_10repetetion_5set|
|:-:|
|![Capture_2022_11_20_18_18_54_472](https://user-images.githubusercontent.com/102128108/202894751-d7411e6b-bf7a-44fa-9e7e-9a660b63112e.png)|

|5kg_15repetetion_5set|
|:-:|
|![Capture_2022_11_20_18_18_54_472](https://user-images.githubusercontent.com/102128108/202894790-074ea8f7-4cdd-4422-93b5-5f5fc0d30e94.png)|

|10kg_10repetetion_5set|
|:-:|
|![Capture_2022_11_20_18_19_01_598](https://user-images.githubusercontent.com/102128108/202894801-f30cf9a9-2c47-49b2-8ab8-3b2a440fec03.png)|


|10kg_15repetetion_5set|
|:-:|
|![Capture_2022_11_20_18_19_08_790](https://user-images.githubusercontent.com/102128108/202894816-05f7b5d2-d446-4ed1-9ae8-87b4169f6b5d.png)|


|15kg_10repetetion_5set|
|:-:|
|![Capture_2022_11_20_18_19_19_289](https://user-images.githubusercontent.com/102128108/202894831-ae75a16f-5e8b-4c5c-af06-9d806f3775ba.png)|


|15kg_15repetetion_5set|
|:-:|
|![Capture_2022_11_20_18_19_24_829](https://user-images.githubusercontent.com/102128108/202894837-6c03b42d-66f0-4252-bc25-c1a1c80e6216.png)|

# 실행방법
RactJS, NodeJS, MongoDB, arduino를 사요하기 때문에, 환경 세팅이 먼저 이루어져야한다.

[front-end]
ReactJS 기반으로 작성되었다.
npm install로 library들을 설치 한 후, npm start로 실행시킨다.
src/apis/base.js 파일에서,
base.defaults.baseURL = "" 부분을 자신의 back-end server로 대체해준다.

[back-end]
NodeJS 기반으로 작성되었다.
npm start:dev 환경에서 실행시킨다.
MongoDB의 설정은 src/.env의 PORT와 MONGO_URI부분을 변경해준다.

[mongoDB]
back-end에 맞는 DB를 생성해준다.

# 기대효과

개인은 개인의 웨이트 트레이닝에 있어서 정량적인 수치를 트래킹하며, 점진적 부하의 원리를 자신의 운동법에 잘 적용함으로써, 좋은 서비스를 제공받게 될 것이고, 개인 건강의 향상은 <strong>🎉곧, 전반적으로 건강한 사회에 기여</strong>를 할 것으로 기대된다.
