
# 🎈 주제

<strong> 근전도 센서를 활용한 운동량의 정량적 수치화와 점진적 부하의 원리를 이용한 스마트 트레이닝 </strong>  
<strong> (Smart Training using arduino with EMG module based on progressive overload) </strong>


# 👨‍👨‍👧‍👦 맴버

|구분|성명|학번|소속학과|학년|이메일|
|---|---|:-:|:-:|:-:|:-:|
|학생|최현준|2017104037|컴퓨터공학과|4|kikitank1@khu.ac.kr|

# 🎨 연구배경


최근 퍼스널 케어에 대한 관심이 많아지고 있다 기술이 발전하며 <strong>🚨과거 전문가가 직접 보고 판단을 요하는 작업에서 벗어나 전문가의 지식을 decision tree 형태로 제작하여 rule based 된 알고리즘으로 퍼스널 데이터를 처리하여 개인에게 맞춤형 서비스를 지원할 수 있게 되었다.</strong> 이러한 형태의 서비스는 인구 전체의 노동량을 줄여줄 뿐만 아니라 시간을 절약할 수 있게 해주며 공간의 제약에서 벗어날 수 있게 해준다.<strong>✨이러한 시대적 흐름에 따라, 운동의 원리에 있어서 중요한 흐름 중 하나인 점진적 부하의 원리를 적용한 퍼스널 트레이닝 운동법을 가이드 하는 서비스를 제공하고자 한다.</strong> 서비스로부터 얻게 되는 기대효과는, 개인에게 운동 원리를 적용한 운동가이드 서비스를 쉽게 제공할 수 있게 되어 사회 구성원의 건강 긍정적인 영향을 미칠 것으로 예상된다.<br><br>

|프로젝트 구조|
|:-:|
|![Capture_2022_11_25_10_23_50_106](https://user-images.githubusercontent.com/102128108/203882104-46b5325c-8cfb-4879-a163-da1064723c09.png)|



# 🎉 디자인

### 로그인 페이지 && 회원가입 페이지
|로그인|회원가입|
|:-:|:-:|
|![Capture_2022_10_12_17_45_42_809](https://user-images.githubusercontent.com/102128108/195295964-5716bce4-b717-4a5a-a80b-59922f44abb0.png)|![Capture_2022_10_12_17_45_54_224](https://user-images.githubusercontent.com/102128108/195296040-923db2f8-0f01-4a9c-8117-52d904f6756c.png)|

### 관리 페이지
|리스트|등록|제거|
|:-:|:-:|:-:|
|![Capture_2022_10_12_17_46_23_64](https://user-images.githubusercontent.com/102128108/195296070-9f50a4ae-5e3d-4eb3-a1fc-f25341a55efb.png)|![Capture_2022_10_12_17_46_11_701](https://user-images.githubusercontent.com/102128108/195296060-1ac8951b-2c77-48e4-a706-12c5279d5c8a.png)|![Capture_2022_10_12_17_46_35_564](https://user-images.githubusercontent.com/102128108/195296076-bfed48e8-304c-4247-ab3e-31725095226a.png)|

### 상세 페이지
|상세|측정|
|:-:|:-:|
|![Capture_2022_10_12_17_46_54_490](https://user-images.githubusercontent.com/102128108/195296102-5c0846ca-7ab1-4f42-ad1c-fa4a8cc757df.png)|![Capture_2022_10_12_17_46_45_427](https://user-images.githubusercontent.com/102128108/195296096-71c3443b-a29c-4418-95be-3cd478cda3fc.png)|

# ✨ 데이터 획득과정
|측정|센싱|
|:-:|:-:|
|![ezgif com-gif-maker_ex](https://user-images.githubusercontent.com/102128108/203881129-f7d6f178-daa6-4d9f-8550-766b3a784087.gif)|<img src="https://user-images.githubusercontent.com/102128108/203881117-18391cc1-00ef-4773-b253-ff271c63b0ec.gif" width="400"/>|


# 💎 데이터 분석
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

# 🎊 실행방법
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

# ✨ 기대효과

개인은 개인의 웨이트 트레이닝에 있어서 정량적인 수치를 트래킹하며, 점진적 부하의 원리를 자신의 운동법에 잘 적용함으로써, 좋은 서비스를 제공받게 될 것이고, 개인 건강의 향상은 <strong>🎉곧, 전반적으로 건강한 사회에 기여</strong>를 할 것으로 기대된다.
