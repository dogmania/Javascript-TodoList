const quotes = [
  { quote: "산다는 것 그것은 치열한 전투이다.", author: "(로망로랑)" },
  {
    quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
    author: "(사무엘존슨)",
  },
  {
    quote: "언제나 현재에 집중할 수 있다면 행복할 것이다.",
    author: "(파울로 코엘료)",
  },
  {
    quote: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다.",
    author: "(엘버트 허버드)",
  },
  { quote: "신은 용기있는 자를 결코 버리지 않는다.", author: "(켄러)" },
  { quote: "피할 수 없으면 즐겨라.", author: "(로버트 엘리엇)" },
  {
    quote:
      "단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?",
    author: "(이드리스 샤흐)",
  },
  {
    quote:
      "어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다.",
    author: "(제임스 오펜하임)",
  },
  {
    quote:
      "너무 소심하고 까다롭게 자신의 행동을 고민하지 말라. 모든 인생은 실험이다. 더 많이 실험할수록 더 나아진다.",
    author: "(랄프 왈도 에머슨)",
  },
  {
    quote: "한번의 실패와 영원한 실패를 혼동하지 마라.",
    author: "(F.스콧 핏제랄드)",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

//숫자를 랜덤으로 뽑아주는 함수
// Math.random(); //이 함수의 역할은 0초과 1미만 숫자를 랜덤하게 출력함 ex)0.1684984621
// Math.random() * 10; //이렇게 코드를 작성하면 1.6484984 또는 5.16849846이런 형태로 숫자를 뽑아낼 수 있다.
// Math.round(2.4); //round() 함수는 반올림을 하는 함수
// Math.ceil(2.7); //ceil()은 올림을 해주는 함수
// Math.floor(2.6); //floor()은 내림을 해주는 함수
