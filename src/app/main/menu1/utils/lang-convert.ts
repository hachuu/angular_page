// 키보드 자판
// englishKey: 키보드 배열 ㄱ~ㅣ까지 영어자판 표기
// koreanKey: 키보드 배열 ㄱ~ㅣ까지 한글자판 표기
const englishKey = 'rRseEfaqQtTdwWczxvgkoiOjpuPhynbml';
const koreanKey = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎㅏㅐㅑㅒㅓㅔㅕㅖㅗㅛㅜㅠㅡㅣ';

// initialData: 초성, neutralData: 중성, lastData: 종성
const initialData = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ';
const neutralData = 'ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ';
const lastData = 'ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ';

// 알파벳 소문자
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';

// CAPSLOCK 켜져있는 경우 reverse처리
export const changeUpperToLower = (inputStringVal: string) => {
  let newEnglishText = '';
  for (let i = 0; i < inputStringVal.length; i++) {
    const ch = inputStringVal.charAt(i);
    if (lowerCase.indexOf(ch) !== -1) {
      newEnglishText += ch.toUpperCase();
    } else {
      newEnglishText += ch.toLowerCase();
    }
  }
  return newEnglishText;
  // return inputStringVal.toLowerCase(); => 입력값 모두 소문자로 변환
};

// 영어를 한글로 변환
export const eng2Kor = (src: string) => {
  let res = '';
  if (src.length === 0) {
    return res;
  }

  let initial = -1; // 초성
  let neutral = -1; // 중성
  let last = -1;		// 종성

  for (let i = 0; i < src.length; i++) {
    const ch = src.charAt(i);
    const p = englishKey.indexOf(ch);
    if (p === -1) {// 한글O
      // 남아있는 한글이 있으면 처리
      if (initial !== -1) {
        if (neutral !== -1) {         // 초성+중성+(종성)
          res += makeKorean(initial, neutral, last);
        } else {                      // 초성만
          res += initialData.charAt(initial);
        }
      } else {
        if (neutral !== -1) {         // 중성만
          res += neutralData.charAt(neutral);
        } else if (last !== -1) {			// 복자음
          res += lastData.charAt(last);
        }
      }
      initial = -1;
      neutral = -1;
      last = -1;
      res += ch;
    } else if (p < 19) {              // 자음
      if (neutral !== -1) {
        if (initial === -1) {					// 중성만 입력됨, 초성으로
          res += neutralData.charAt(neutral);
          neutral = -1;
          initial = initialData.indexOf(koreanKey.charAt(p));
        } else {							        // 종성이다
          if (last === -1) {			  	// 종성 입력 중
            last = lastData.indexOf(koreanKey.charAt(p));
            if (last === -1) {			  // 종성이 아니라 초성이다
              res += makeKorean(initial, neutral, last);
              initial = initialData.indexOf(koreanKey.charAt(p));
              neutral = -1;
            }
          } else if (last === 0 && p === 9) {			// ㄳ
            last = 2;
          } else if (last === 3 && p === 12) {		// ㄵ
            last = 4;
          } else if (last === 3 && p === 18) {		// ㄶ
            last = 5;
          } else if (last === 7 && p === 0) {			// ㄺ
            last = 8;
          } else if (last === 7 && p === 6) {			// ㄻ
            last = 9;
          } else if (last === 7 && p === 7) {			// ㄼ
            last = 10;
          } else if (last === 7 && p === 9) {			// ㄽ
            last = 11;
          } else if (last === 7 && p === 16) {		// ㄾ
            last = 12;
          } else if (last === 7 && p === 17) {		// ㄿ
            last = 13;
          } else if (last === 7 && p === 18) {		// ㅀ
            last = 14;
          } else if (last === 16 && p === 9) {		// ㅄ
            last = 17;
          } else {						        // 종성 입력 끝, 초성으로
            res += makeKorean(initial, neutral, last);
            initial = initialData.indexOf(koreanKey.charAt(p));
            neutral = -1;
            last = -1;
          }
        }
      } else {								        // 초성 또는 (단/복)자음이다
        if (initial === -1) {					// 초성 입력 시작
          if (last !== -1) {				  // 복자음 후 초성
            res += lastData.charAt(last);
            last = -1;
          }
          initial = initialData.indexOf(koreanKey.charAt(p));
        } else if (initial === 0 && p === 9) {		// ㄳ
          initial = -1;
          last = 2;
        } else if (initial === 2 && p === 12) {		// ㄵ
          initial = -1;
          last = 4;
        } else if (initial === 2 && p === 18) {		// ㄶ
          initial = -1;
          last = 5;
        } else if (initial === 5 && p === 0) {		// ㄺ
          initial = -1;
          last = 8;
        } else if (initial === 5 && p === 6) {		// ㄻ
          initial = -1;
          last = 9;
        } else if (initial === 5 && p === 7) {		// ㄼ
          initial = -1;
          last = 10;
        } else if (initial === 5 && p === 9) {		// ㄽ
          initial = -1;
          last = 11;
        } else if (initial === 5 && p === 16) {		// ㄾ
          initial = -1;
          last = 12;
        } else if (initial === 5 && p === 17) {		// ㄿ
          initial = -1;
          last = 13;
        } else if (initial === 5 && p === 18) {		// ㅀ
          initial = -1;
          last = 14;
        } else if (initial === 7 && p === 9) {		// ㅄ
          initial = -1;
          last = 17;
        } else {						        	// 단자음을 연타
          res += initialData.charAt(initial);
          initial = initialData.indexOf(koreanKey.charAt(p));
        }
      }
    } else {									        // 모음
      if (last !== -1) {						  // (앞글자 종성), 초성+중성
        // 복자음 다시 분해
        let newCho;			              // (임시용) 초성
        if (last === 2) {				    	// ㄱ, ㅅ
          last = 0;
          newCho = 9;
        } else if (last === 4) {			// ㄴ, ㅈ
          last = 3;
          newCho = 12;
        } else if (last === 5) {			// ㄴ, ㅎ
          last = 3;
          newCho = 18;
        } else if (last === 8) {			// ㄹ, ㄱ
          last = 7;
          newCho = 0;
        } else if (last === 9) {			// ㄹ, ㅁ
          last = 7;
          newCho = 6;
        } else if (last === 10) {			// ㄹ, ㅂ
          last = 7;
          newCho = 7;
        } else if (last === 11) {			// ㄹ, ㅅ
          last = 7;
          newCho = 9;
        } else if (last === 12) {			// ㄹ, ㅌ
          last = 7;
          newCho = 16;
        } else if (last === 13) {			// ㄹ, ㅍ
          last = 7;
          newCho = 17;
        } else if (last === 14) {			// ㄹ, ㅎ
          last = 7;
          newCho = 18;
        } else if (last === 17) {			// ㅂ, ㅅ
          last = 16;
          newCho = 9;
        } else {						        	// 복자음 아님
          newCho = initialData.indexOf(lastData.charAt(last));
          last = -1;
        }
        if (initial !== -1) {			    // 앞글자가 초성+중성+(종성)
          res += makeKorean(initial, neutral, last);
        } else {                      // 복자음만 있음
          res += lastData.charAt(last);
        }
        initial = newCho;
        neutral = -1;
        last = -1;
      }
      if (neutral === -1) {						// 중성 입력 중
        neutral = neutralData.indexOf(koreanKey.charAt(p));
      } else if (neutral === 8 && p === 19) {            // ㅘ
        neutral = 9;
      } else if (neutral === 8 && p === 20) {            // ㅙ
        neutral = 10;
      } else if (neutral === 8 && p === 32) {            // ㅚ
        neutral = 11;
      } else if (neutral === 13 && p === 23) {           // ㅝ
        neutral = 14;
      } else if (neutral === 13 && p === 24) {           // ㅞ
        neutral = 15;
      } else if (neutral === 13 && p === 32) {           // ㅟ
        neutral = 16;
      } else if (neutral === 18 && p === 32) {           // ㅢ
        neutral = 19;
      } else {			                  // 조합 안되는 모음 입력
        if (initial !== -1) {			    // 초성+중성 후 중성
          res += makeKorean(initial, neutral, last);
          initial = -1;
        } else {						          // 중성 후 중성
          res += neutralData.charAt(neutral);
        }
        neutral = -1;
        res += koreanKey.charAt(p);
      }
    }
  }

  // 마지막 한글이 있으면 처리
  if (initial !== -1) {
    if (neutral !== -1) {		// 초성+중성+(종성)
      res += makeKorean(initial, neutral, last);
    } else {             		// 초성만
      res += initialData.charAt(initial);
    }
  } else {
    if (neutral !== -1) {		// 중성만
      res += neutralData.charAt(neutral);
    } else {						    // 복자음
      if (last !== -1) {
        res += lastData.charAt(last);
      }
    }
  }

  return res;
};

export const kor2Eng = (src) => {
  let res = '';
  if (src.length === 0) {
    return res;
  }

  for (let i = 0; i < src.length; i++) {
    const ch = src.charAt(i);
    let nCode = ch.charCodeAt(0);
    const initial = initialData.indexOf(ch);
    const neutral = neutralData.indexOf(ch);
    const last = lastData.indexOf(ch);
    const arrKeyIndex = [-1, -1, -1, -1, -1];

    if (0xac00 <= nCode && nCode <= 0xd7a3) {
      nCode -= 0xac00;
      arrKeyIndex[0] = Math.floor(nCode / (21 * 28));			// 초성
      arrKeyIndex[1] = Math.floor(nCode / 28) % 21;			  // 중성
      arrKeyIndex[3] = nCode % 28 - 1;						        // 종성
    } else if (initial !== -1) {			                    // 초성 자음
      arrKeyIndex[0] = initial;
    } else if (neutral !== -1) {	                        // 중성
      arrKeyIndex[1] = neutral;
    } else if (last !== -1) {		                          // 종성 자음
      arrKeyIndex[3] = last;
    } else {							                                // 한글이 아님
      res += ch;
    }

    // 실제 Key Index로 변경. 초성은 순서 동일
    if (arrKeyIndex[1] !== -1) {
      if (arrKeyIndex[1] === 9) {				    	// ㅘ
        arrKeyIndex[1] = 27;
        arrKeyIndex[2] = 19;
      } else if (arrKeyIndex[1] === 10) {			// ㅙ
        arrKeyIndex[1] = 27;
        arrKeyIndex[2] = 20;
      } else if (arrKeyIndex[1] === 11) {			// ㅚ
        arrKeyIndex[1] = 27;
        arrKeyIndex[2] = 32;
      } else if (arrKeyIndex[1] === 14) {			// ㅝ
        arrKeyIndex[1] = 29;
        arrKeyIndex[2] = 23;
      } else if (arrKeyIndex[1] === 15) {			// ㅞ
        arrKeyIndex[1] = 29;
        arrKeyIndex[2] = 24;
      } else if (arrKeyIndex[1] === 16) {			// ㅟ
        arrKeyIndex[1] = 29;
        arrKeyIndex[2] = 32;
      } else if (arrKeyIndex[1] === 19) {			// ㅢ
        arrKeyIndex[1] = 31;
        arrKeyIndex[2] = 32;
      } else {
        arrKeyIndex[1] = koreanKey.indexOf(neutralData.charAt(arrKeyIndex[1]));
        arrKeyIndex[2] = -1;
      }
    }
    if (arrKeyIndex[3] !== -1) {
      if (arrKeyIndex[3] === 2) {					// ㄳ
        arrKeyIndex[3] = 0;
        arrKeyIndex[4] = 9;
      } else if (arrKeyIndex[3] === 4) {			// ㄵ
        arrKeyIndex[3] = 2;
        arrKeyIndex[4] = 12;
      } else if (arrKeyIndex[3] === 5) {			// ㄶ
        arrKeyIndex[3] = 2;
        arrKeyIndex[4] = 18;
      } else if (arrKeyIndex[3] === 8) {			// ㄺ
        arrKeyIndex[3] = 5;
        arrKeyIndex[4] = 0;
      } else if (arrKeyIndex[3] === 9) {			// ㄻ
        arrKeyIndex[3] = 5;
        arrKeyIndex[4] = 6;
      } else if (arrKeyIndex[3] === 10) {			// ㄼ
        arrKeyIndex[3] = 5;
        arrKeyIndex[4] = 7;
      } else if (arrKeyIndex[3] === 11) {			// ㄽ
        arrKeyIndex[3] = 5;
        arrKeyIndex[4] = 9;
      } else if (arrKeyIndex[3] === 12) {			// ㄾ
        arrKeyIndex[3] = 5;
        arrKeyIndex[4] = 16;
      } else if (arrKeyIndex[3] === 13) {			// ㄿ
        arrKeyIndex[3] = 5;
        arrKeyIndex[4] = 17;
      } else if (arrKeyIndex[3] === 14) {			// ㅀ
        arrKeyIndex[3] = 5;
        arrKeyIndex[4] = 18;
      } else if (arrKeyIndex[3] === 17) {			// ㅄ
        arrKeyIndex[3] = 7;
        arrKeyIndex[4] = 9;
      } else {
        arrKeyIndex[3] = koreanKey.indexOf(lastData.charAt(arrKeyIndex[3]));
        arrKeyIndex[4] = -1;
      }
    }

    for (let j = 0; j < 5; j++) {
      if (arrKeyIndex[j] !== -1) {
        res += englishKey.charAt(arrKeyIndex[j]);
      }
    }
  }
  return res;
};

// 유니코드 한글변환
const makeKorean = (initial, neutral, last) => {
  return String.fromCharCode(0xac00 + initial * 21 * 28 + neutral * 28 + last + 1);
};

