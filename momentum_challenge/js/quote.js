const quote = [
  {
    quote: "늦었다고 생각할 때가 정말 늦은 때다, 그러니 지금 당장 시작하라",
    author: "쩜오 박명수",
  },
  {
    quote: "지금 공부 안 하면 더울 때 더운 데서 일하고 추울때 추운 데서 일한다",
    author: "거성 박명수",
  },
  {
    quote: "“내 너 그럴 줄 알았다” 알았으면 제발 미리 말을 해줘라",
    author: "소년명수",
  },
  {
    quote: "선배라면 입 닫고 지갑 열어라",
    author: "G-Park",
  },
  {
    quote: "가는 말이 고우면 얕본다",
    author: "하찮은",
  },
  {
    quote: "일찍 일어나는 새가 피곤하다",
    author: "조커 박",
  },
];

const random = Math.floor(Math.random() * quote.length);
const todaysQuote = quote[random];

const display_quote = document.querySelector("#quote span:first-child");
const display_author = document.querySelector("#quote span:last-child");

display_quote.innerText = todaysQuote.quote;
display_author.innerText = `- ${todaysQuote.author} -`;
