# EVERLAND
</br>
안녕하세요! 제 첫번째 포트폴리오 "에버랜드" 사이트에 방문해주셔서 감사합니다 :)</br></br>

현재 에버랜드 공식 웹 페이지는 모바일 전용으로만 제작이 되어 있습니다.</br>
구글에 검색을 해보니 에버랜드 사이트를 웹 버전으로 찾는 소비자의 UX를 이해하여</br>
웹 사이트 전용으로 제작을 했습니다.</br>
총 3명이서 제작한 팀 프로젝트로 진행한 결과이며 제 기여도는 약 40~50% 정도 입니다.</br>
포토샵을 통해서 사이트 내부에 필요한 이미지를 전부 직접 제작하였습니다.</br>
JS와 JQUERY, 플러그인을 사용해서 페이지를 제작했습니다.</br>

테마파크 UI에 맞춰 이벤트 페이지 위주로 제작을 했습니다.</br>
꼭 필요한 카드 정보 페이지와 로그인 페이지도 제작을 했습니다.</br>

</br></br>
## 사용한 함수 정리

1. 제이쿼리 nav 메뉴 함수
   + 제이쿼리는 제이쿼리 파일이나 링크로 html 파일에 연결 시켜야 적용 가능
   + 시작 방법 $(function () { 여기에 함수식 })</br>
     $(".class 또는 #id") <- 적용시키고 싶은 클래스는 . id=#
     
         $(".메인메뉴").mouseover(functhion() {
         $(".서브메뉴").stop().slideDown(300);})
   + mouseover는 hover 시 이벤트를 발생 시킨다. 따라서 괄호 안에 함수 필수
   + stop()은 서브 메뉴가 hover 시에 생기는 오류를 잡아준다.
   + slideDown은 메인메뉴에 hover 시 서브메뉴가 내려올 수 있게 한다. (300)은 시간
</br>

       $(".메인메뉴").mouseout(functhion() {
       $(".서브메뉴").stop().slideUp(300);})

  + mouseout 은 마우스를 뗐을 때 이벤트 발생, mouseover와 마찬가지로 괄호 안에 함수 필수
  + slideUp은 반대로 마우스를 뗐을 때 서브메뉴가 다시 들어갈 수 있게 해준다.
  </br>
  </br>

  =>제이쿼리 메뉴를 적용시키기 위해서 CSS로 서브메뉴는 display:hidden 을 사용하여 가려놓는다.

  2. 날짜 함수
     
    let time = new Date();
    let currentDate = time.getDate();
    let currentMonth = time.getMonth() + 1;
    document.querySelector('.current-time').innerText = `${currentMonth}월 ${currentDate}일`;

    +new Date()는 현재 날짜와 시간 등을 가져올 수 있는 함수
    +let 변수를 선언해준 뒤 time.get날짜,월,시간(time),초(seconds) 등 원하는 정보를 가져온다
    +time.getMonth 월 데이터 같은 경우 0~11로 이루어져 있어 +1을 해줘야 현재 월이 나온다.
    +백틱을 사용하면 +로 연결하고 쌍따옴표 사용없이 편하게 텍스트와 함수를 넣을 수 있다.

  3.타이핑 효과 구현

    let content = `GOOD BYE,\n\nPUBAO`;
    const text = document.querySelector('.text');

    let index = 0;

    function typing() {
        text.textContent += content[index++];
        if (index > content.length) {
            text.textContent = "";
            index = 0;
        };
    };
    let sss = setInterval(typing, 500);

+ 변수를 선언해서 넣고 싶은 텍스트를 넣어준다 \n은 줄바꿈
+ 변수를 선언해서 텍스트를 넣을 영역을 documentquertSelector("class나 id") 찾아준다.
+변수를 선언해서 함수에 증가할 수 있는 값을 넣어준다 (0)
+if문을 사용해서 content의 길이만큼 글자가 나타날 수 있게 함수를 작성해준다.

    
