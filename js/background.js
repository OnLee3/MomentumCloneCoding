// 이미지 제목을 그대로 적어준다.
const images = [
    "1.jpg",
    "2.jpg",
    "3.jpeg"
];

// 랜덤명언과 마찬가지로, 랜덤 float를 생성하고 이미지 개수에 맞추어 곱해준다.
const chosenImage = images[Math.floor(Math.random() * images.length)];
// img 태그를 js에서 생성해준다. 여기서는 HTML에는 없고, js에만 존재하는 상태.
const bgImage = document.createElement("img");
// 소스를 지정해준다. 경로명을 그대로 적어주어야 하니 오타가 없도록 주의하자.
bgImage.src = `img/${chosenImage}`;
// 위에서 생성한 img 태그를 body에 부여해준다. 이로써 HTML 문서에 존재하게됨.
document.body.appendChild(bgImage);