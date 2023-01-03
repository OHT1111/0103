/*0103_data.js에서 설정해 놓고 
익스포트(보내기) 적용한 shoppingList 모듈을
임포트(받기) 해준다.*/
import shoppingList from "./0103_data.js";

/*변수명: section에 쿼리선택 => html의 '.product_best' 이
div를 적용시킬 것임을 선언*/ 
const section = document.querySelector('.product_best')

//포문 돌리기 => let i가 0이고, 이i보다 shoppingList의 길이가 더 클 때까지
//i가 1씩 늘어남 = i++ 적용
for(let i=0; i<shoppingList.length; i++) {

  //포문 안의 지역변수 설정 //let bestDiv변수에다가 = html의 div를 불러온다.  
  let bestDiv = document.createElement('div')
  /*(참고) document.createElement('')뜻이 뭔가요?
  html 태그를 만들어 내는 것입니다.
  + document.createElement()는 
  문서 안에 괄호 안에 있는 요소를 만든다는 의미*/

  //앞서 위에서 설정한 변수 bestDiv에다가 
  //속성인 class와, 그의 속성값인 'best_box'을 적용
  bestDiv.setAttribute('class', 'best_box')
  /*(참고)
  .setAttritbe( )뜻은?: 선택한 요소(element)의 속성(attribute) 값을 정합니다.
  --(문법예시)--
  element.setAttribute(name, value);
  -name : 속성 이름, -value : 속성 값 */

  //지역변수 베스트이미지에 크리에이트 엘리먼트 적용 html의 img를..
  let bestImg = document.createElement('img')

  /*위에서 설정한 bestImg에다가 src속성의
  0103_data.js>shoppingList[i](배열i값)의.src로 설정한다.*/ 
  bestImg.setAttribute('src', shoppingList[i].src)

  //bestDiv(노드, 부모?)에 자식리스트 bestImg를 마지막 자식으로 붙인다...
  bestDiv.appendChild(bestImg)
  /* (참고 자료) Node.appendChild()메소드는 
  한 노드를 특정 부모 노드의 자식 노드 리스트 중
  마지막 자식으로 붙입니다.
  만약 주어진 노드가 이미 문서에 존재하는 노드를 참조하고 있다면
  appendChild() 메소드는 노드를 현재 위치에서 새로운 위치로 이동시킵니다. */

  //지역변수 let bestNameDiv를 만들고 이것에다가  html의 div를 적용...
  let bestNameDiv = document.createElement('div')

  //지역변수 let bestNameText를 만들고 그안에 
  //도큐먼트의 텍스트 노드를 생성합니다.
  let bestNameText = document.createTextNode(shoppingList[i].name)

  bestNameDiv.appendChild(bestNameText)
  bestDiv.appendChild(bestNameDiv)

  //지역변수 bestPrice를 만들고 그안에
  //도큐먼트의 html의 div를 적용...
  let bestPrice = document.createElement('div')

  //지역변수 let bestPriceText를 만들고 그안에 
  //도큐먼트의 텍스트 노드를 생성합니다. shoppingList[i].price에다가..
  let bestPriceText = document.createTextNode(shoppingList[i].price)

  //지역변수 let bestNameText를 만들고 그안에 
  //도큐먼트의 텍스트 노드를 생성합니다.
  bestPrice.appendChild(bestPriceText) //가격 텍스트 표시
  bestDiv.appendChild(bestPrice) //가격 텍스트 표시
  section.appendChild(bestDiv)
}