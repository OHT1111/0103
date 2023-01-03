//변수설정>변수이름: shoppingList, 그리고 이변수 쇼핑리스트는 배열임으로 []표시
const shoppingList = [
    //첫번째 배열(인덱스값은:0번) 시작 지역배열?은 {}로 표시하는듯?
    {
      //id는 sam05로 설정,  
      id: "sam05",
      //name은 1953세트 2호로 설정,
      /* 이name값이 곧 웹페이상의 상품명으로 적용 */
      name: "1953세트 2호",
      /* price는 9000으로 설정,
      이 price값이 곧 웹페이상의 상품가격으로 적용 */
      price: 9000,
      //첫번째 배열에 들어갈 사진 가져오기
      src: "./js/images/best_04.png"
    },
  
    //두번째 배열(인덱스값은: 1번)
    {
      //id는 sam04로 설정,    
      id: "sam04",
      //name은 "캠핑어묵탕" 설정,
      name: "캠핑어묵탕",
      //price는 5000으로 설정,
      price: 5000,
      //두번째 배열에 들어갈 사진 가져오기
      src: "./js/images/best_01.png"
    },
  
    //세번째 배열(인덱스값은: 2번)
    {
      id: "sam03",
      name: "모듬어묵",
      price: 4000,
      src: "./js/images/best_02.png"
    },

    //네번째 배열(인덱스값은: 3번)
    {
      id: "sam02",
      name: "실속모듬어묵",
      price: 7000,
      src: "./js/images/best_03.png"
    },

    //다섯번째 배열(인덱스값은: 4번)
    {
      id: "sam01",
      name: "1953세트 2호",
      price: 9000,
      src: "./js/images/best_04.png"
    },

  ]//전역변수? 배열이 끝이 났다는 뜻으로 []중 ]을 표시
  
  // export뜻 = 내보내다, 기본값 = default
  // 배열 변수명: shoppingList 를...
  export default shoppingList