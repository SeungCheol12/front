// fetch

// 페이지가 로드되면
// 1. 어제 날짜를 보여주기
const txtYear = document.querySelector("#txtYear");
const selMon = document.querySelector("#selMon");
const selDay = document.querySelector("#selDay");

const init = () => {
  const now = new Date();
  console.log(now); //2025-11-21T08:12:07.120Z
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // 월 0 부터 시작함
  const day = now.getDate() - 1; // 어제 날짜
  console.log(year, month, day);

  // 2. 구한 어제 날짜를 화면에 보여주기

  //
  txtYear.value = year;
  selMon.value = month < 10 ? "0" + month : month;
  selDay.value = day < 10 ? "0" + day : day;
};
init();

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  const date = txtYear.value + selMon.value + selDay.value;
  console.log(date);
  const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=991213d2e6b4f89c718f13696e40fe5d&targetDt=${date}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // movieCd, movieNm, rank, rankInten
      const dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
      let contents = "";
      dailyBoxOfficeList.forEach((item) => {
        console.log(item.movieCd, item.movieNm, item.rank, item.rankInten);
        // 1 위키드: 포 굿(0)
        // 7 세계:의 주인(▲ 1)
        // 9 퍼스트 라이드(▼ -2)
        contents += `${item.rank} 위 `;
        contents += `<a href =${item.movieCd}>${item.movieNm}</a>`;
        contents += `(`;

        if (item.rankInten > 0) {
          contents += `▲ ${item.rankInten}`;
        } else if (item.rankInten < 0) {
          contents += `▼ ${item.rankInten}`;
        } else {
          contents += `${item.rankInten}`;
        }

        contents += `)`;
        contents += `<br>`;
      });
      document.querySelector("#msg").innerHTML = contents;
      // console.log();
    });
});

// 영화 제목 클릭 시
// 영화 상세정보 요청
// http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=991213d2e6b4f89c718f13696e40fe5d&movieCd=20255381

// a 태그 기능 중지
// movieCd 값 가지고 오기

document.querySelector("#msg").addEventListener("click", (e) => {
  e.preventDefault();

  // 이벤트 대상 확인
  console.log(e.target);
  console.log(e.target.href); // http://121.160.42.79:5501/ajax/20256757
  console.log(e.target.getAttribute("href")); // 주소에서 20256757 값만 가져온다

  const movieCd = e.target.getAttribute("href");
  const url = ` http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=991213d2e6b4f89c718f13696e40fe5d&movieCd=${movieCd}`;

  let det = `<ul>`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const movieInfo = data.movieInfoResult.movieInfo;
      console.log(movieInfo.movieNm);
      // 한글제목 : 위키드: 포 굿
      // 영어제목 : wicked: For Good
      // 상영시간 : 137분
      // 장르 : 판타지, 뮤지컬, 어드벤처
      // 감독 : 존 추
      // 배우 : 신시아 에리보, 아리아나 그란데, 조나단 베일리

      det += `<li>한글제목 : ${movieInfo.movieNm}</li>`;
      det += `<li>영어제목 : ${movieInfo.movieNmEn}</li>`;
      det += `<li>상영시간 : ${movieInfo.showTm}</li>`;

      let genres = "";
      movieInfo.genres.forEach((genre) => {
        genres += `${genre.genreNm},`;
      });
      det += `<li>장르 : ${genres}</li>`;

      let directors = "";
      movieInfo.directors.forEach((director) => {
        directors += `${director.peopleNm},`;
      });
      det += `<li>감독 : ${directors}</li>`;

      let actors = "";
      movieInfo.actors.forEach((actor) => {
        actors += `${actor.peopleNm},`;
      });
      det += `<li>배우 : ${actors}</li>`;
      det += `</ul>`;
      document.querySelector("#detail").innerHTML = det;
    });
});
