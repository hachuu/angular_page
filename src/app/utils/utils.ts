export function getShortAirportName(airportName: string, airportCode: string, type?: string, areaCode?: string) {
  let rename = airportName;

  if (!!rename) {
    // if (airportCode === 'ICN' || airportCode === 'GMP' || airportCode === 'sel') {
    if (airportCode === 'ICN' || airportCode === 'GMP') {// 김근혜차장 요청 sel 도 '서울' 만 표출 20200727 - baek
      rename = rename.split(',')[0];
      return rename;
    }

    if (type === 'B') {
      if (areaCode === undefined) {
        throw new Error('areaCode 값을 넘기십시오. 파이프를 사용하면 마지막 파마리터에 areaCode를 넘기십시오.');
      }
      if (areaCode === 'EAA') {
        rename = rename.split(',')[0];
      }
    } else if (type === 'C') {
      const lastCommaIdx = rename.lastIndexOf(',');
      if (lastCommaIdx !== -1) {
        rename = rename.substring(0, lastCommaIdx);
      }
    } else if (type === 'D') {
      rename = rename.split(',')[0];
    } else {
      rename = rename.split(',')[0];
      rename = rename.split('/')[0];
    }
  }

  return rename;
}