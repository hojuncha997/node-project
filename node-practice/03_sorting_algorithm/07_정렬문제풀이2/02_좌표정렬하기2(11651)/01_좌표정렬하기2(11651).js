// 좌표 정렬하기2 11651

// 2차원 평면 위의 점 N개가 주어진다. 좌표를 y좌표가 증가하는 순으로,
// y좌표가 같으면 x좌표가 증가하는 순서로 정렬한 다음 출력하는 프로그램 작성

// 입력
// 첫째 줄에 점의 개수 N (1 ≤ N ≤ 100,000)이 주어진다.
// 둘째 줄부터 N개의 줄에는 i번점의 위치 xi와 yi가 주어진다. (-100,000 ≤ xi, yi ≤ 100,000)
// 좌표는 항상 정수이고, 위치가 같은 두 점은 없다.

// 좌표를 객체로 표현할 수 있다.

////////////////////////////// 해설 ///////////////////////////////////////

let fs = require("fs");
let input = fs
  // .readFileSync("/dev/stdin", "utf-8")
  .readFileSync("./files/input.txt", "utf-8")
  .toString()
  .split("\n");

//   [ '5\r', '0 4\r', '1 2\r', '1 -1\r', '2 2\r', '3 3' ]

let n = Number(input[0]);

let data = [];

for (let i = 1; i <= n; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  data.push([x, y]);
}
// [ [ 0, 4 ], [ 1, 2 ], [ 1, -1 ], [ 2, 2 ], [ 3, 3 ] ]

function compare(a, b) {
  if (a[1] != b[1]) return a[1] - b[1];
  // y좌표 기준 오름차순: 음수가 된다면 작은 것이 앞에 온다.
  else return a[0] - b[0]; //  y가 같으면 x좌표 기준 오름차순
}

data.sort(compare); // 정렬수행

console.log(data);

// [ [ 1, -1 ], [ 1, 2 ], [ 2, 2 ], [ 3, 3 ], [ 0, 4 ] ]

let answer = ""; // 정렬 결과 출력
for (let point of data) {
  answer += point[0] + " " + point[1] + "\n";
}
console.log(answer);

// 1 -1
// 1 2
// 2 2
// 3 3
// 0 4

/*


1. 인풋을 개행문자 단위로 잘라냄
2. 첫 번째 요소 값은 배열의 길이값으로 사용함.
3. 빈 배열을 만듬
4. 반복문을 사용하여 인풋 데이터의 요소를 [x, y] 하여 빈 배열에 담아냄
    const [x, y] = input[i].split(" ").map(Number)'  // ["1","-1"]과 같은 배열이 생성되고, map(Number)하여 숫자로 바꾼 뒤, [x, y]배열에 구조분해 할당된다.
5. sort함수의 파라미터가 될 함수를 작성한다. 이 함수는 음의 정수, 0, 양의 정수를 반환한다.
    (sort함수는 음의 정수를 받으면 작은 것을 앞에, 양의 정수인 경우는 작은 것을 뒤에 배치한다. 0을 받으면 유지한다. 이는 함수 약속(규칙)이다 )

6. 파라미터로 들어갈 함수는 아래와 같다.
    const compare = (a, b) => {
        if(a[1] != b[1]) {
            return (a[1] - b[1])
        }else {
            return (a[0] - b[0])
        }
    }

7.  배열.sort(compare) 하여 정렬한다.
8. let 변수 = "" 에 개별원소(배열)의 인덱스를 분리해 붙여 넣어가면서 출력


*/
