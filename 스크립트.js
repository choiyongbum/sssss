'엄격한 사용';
var id_week_number = 문서. getElementById('주 번호' );
var id_date = 문서. 겟엘리먼트바이드('날짜' );

함수는 도약(년) {
    (연도  % 400 == 0) true 반환;
    (연도  % 100 == 0) 거짓 반환;
    (연도  % 4 == 0) true 반환;
     거짓 반환;
}

기능 pYear(연도)) {
    반환 (년 + 수학. 플로어(연도/4년 )
                 - 수학. 플로어(연도/100년  )
                 + 수학.  플로어(연도/400) ) % 7;
}

지난 주기능 (년) {
      (1년)=4     |[1년][1년]   ===3 )
        반환 53;
    반환 52;
}

기능 오디날데이(날짜)) {
    var ordinal_table = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];

    if (isLeap (날짜. getFullYear()))
        용 (var i = 2; i & ordinal_table. 길이; i++)
            ordinal_table[i] += 1;

    반환 ordinal_table[날짜. getMonth() + 날짜. getDate();
}

기능 주간 번호(날짜)) {
    var ordinal_day = 종일(날짜));
    var current_year = 날짜. getFullYear();
    var 평일 = 날짜. 겟데이();
    var 주 = 수학. 플로어(ordinal_day  - 평일 + 10) / 7);

    if (주 & 1) 지난 주 반환 (current_year- 1);
    if (주 > 지난주(current_year)) 반환 1 ;
    돌아오는 주;
}

함수 렌더페이지(날짜)) {
    var week_number = 주 번호(날짜);

    id_week_number. 내부텍스트 = week_number;
    id_date. innerText = 날짜입니다.  에로컬스트링();
}

문서. 추가 이벤트 청취자('DOMContentLoaded', 기능 () {
    var 날짜 = 새 날짜();
    렌더페이지(날짜));
    세트간격(기능) () {
        var 지금 = 새 날짜();
        id_date. innerText = 지금. 에로컬스트링();

        if (지금. . getDate != 날짜. getDate) {
            날짜 = 지금;
            렌더페이지(날짜));
        }
    }, 1000);
});
