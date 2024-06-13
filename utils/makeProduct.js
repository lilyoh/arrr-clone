const { faker } = require("@faker-js/faker");
const fs = require("fs");
//
// interface Product {
//   id: string;
//   name: string;
//   image: string;
//   discount_rate: number;
//   price: string;
//   rating: number;
//   review_count: number;
//   sales: number;
//   created_at: string;
// }

function createRandomProduct() {
  return {
    id: faker.string.uuid(),
    name: faker.commerce.product(),
    image: faker.image.url(),
    discount_rate: faker.number.int({ max: 70 }),
    price: faker.commerce.price({ min: 10000, max: 100000 }),
    rating: faker.number.int({ min: 1, max: 5 }),
    review_count: faker.number.int({ max: 500 }),
    sales: faker.number.int({ max: 500 }),
    created_at: faker.date.past().toString(),
  };
}

// 50개의 랜덤 제품 생성
const products = Array.from({ length: 50 }, createRandomProduct);

// JSON 형식으로 변환
const jsonData = JSON.stringify(products, null, 2);

// data.json 파일에 저장
fs.writeFile("./src/data.json", jsonData, (err) => {
  if (err) {
    console.error("Error writing to file", err);
  } else {
    console.log("Successfully wrote data to data.json");
  }
});

// intermock

// data structure

// Product
// ID
// 이름
// 할인율
// 원래가격 -> 옵션 중 가장 낮은 가격
// 레이팅
// 리뷰수
// 이미지
// 옵션[]
// 판매량
// 상품등록일
// 카테고리

// 카테고리
// ID
// 이름

// Option
// ProductID
// 이름
// 가격

// Review
// ProductID
// 작성자 이름
// 리뷰 별점 (1~5)
// 리뷰 이미지?
// 리뷰 텍스트
// 작성일

// Inteface를 만든다.
// intermock으로 더미 데이터를 만든다.
// json으로 저장한다.
//
//
//
//
//
