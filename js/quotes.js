
// Array 형태로, 10개의 Obeject를 만들어줌. 각각 담은 정보는 명언과 작가.
const quotes = [
    {
        quote : "The unexamined life in not worth living.",
        author : "Socrates"
},
    {
        quote : "If I had to live my life again, I'd make the same mistakes, only sooner",
        author : "Tallulah Bankhead"
},
    {
        quote : "Life is like riding a bicycle. To keep your balance you must keep moving.",
        author : "Albert Einstein"
},
    {
        quote : "Dream as if you'll live forever. Live as if you'll die today.",
        author : "James Dean"
},
    {
        quote : "Never regret yesterday. Life is in you today, and you make your tomorrow.",
        author : "L Ron Hubbard"
},
    {
        quote : "Life is like playing a violin in public and learning the instrument as one goes on.",
        author : "Samuel Butler"
},
    {
        quote : "Everywhere I go I find a poet has been there before me.",
        author : "Sigmund Freud"
},
    {
        quote : "The true traveler is he who goes on foot, and even then, he sits down a lot of the time.",
        author : "Colette"
},
    {
        quote : "He who would travel happily must travel light",
        author : "Antoine de Saint-Exupery"
},
    {
        quote : "All that is gold does not glitter, Not all those who wander are lost.",
        author : "J.R.R. Tolkien"
},
]
// 변수 선언
const quote = document.querySelector("#quote span:first-child"); 
const author = document.querySelector("#quote span:last-child"); 
// quotes[number] 형태로 입력한 number에 맞는 순서를 가진 Object를 Array에서 가져올 수 있다.
// 무작위로 가져오는게 목적이므로, Math.random()을 이용해 0~1 시아의 무작위 float를 생성하고, 명언개수에 맞추어 숫자를 곱해준다.
// 이 경우 quotes.length를 사용하여 object 개수를 파악해준다. 결과적으로 명언의 개수가 10개이므로 10을 곱하게 된다.
// 그 후 float 형태 (x.xxxxxx)이므로 floor로 숫자를 내림으로써 Integer 형태로 만들어준다.
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

// 내부텍스트를 변경해준다. Object 형태로 받았으므로, 글인지 작가인지에 따라 알맞게 property도 지정해준다.
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;