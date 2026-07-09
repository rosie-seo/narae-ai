/* ============================================================
   조직 데이터 (3 depth)
   depth0 실  →  depth1 관/국  →  depth2 과/담당관(leaf)
   ============================================================ */
const ORG = [
  { name:"기획조정실", children:[
    { name:"정책기획관", children:[
      { name:"기획예산담당관", members:[
        { name:"김민준", role:"과장",  position:"서기관",     email:"minjun.kim@gov.kr",    phone:"02-1234-5601" },
        { name:"이서연", role:"담당자", position:"행정주사",   email:"seoyeon.lee@gov.kr",   phone:"02-1234-5602" },
        { name:"박지훈", role:"담당자", position:"행정주사",   email:"jihun.park@gov.kr",    phone:"02-1234-5603" },
        { name:"최수아", role:"담당자", position:"행정서기",   email:"sua.choi@gov.kr",      phone:"02-1234-5604" },
        { name:"정태양", role:"담당자", position:"행정주사보", email:"taeyang.jung@gov.kr",  phone:"02-1234-5605" },
        { name:"한도윤", role:"담당자", position:"행정주사",   email:"doyun.han@gov.kr",     phone:"02-1234-5606" },
        { name:"오시우", role:"담당자", position:"행정서기",   email:"siwoo.oh@gov.kr",      phone:"02-1234-5607" },
        { name:"임나은", role:"담당자", position:"행정주사보", email:"naeun.lim@gov.kr",     phone:"02-1234-5608" },
      ], tasks:[
        { title:"2025년 예산안 편성 및 배분 계획 수립",   status:"progress", owner:"이서연", start:"2025-01-01", end:"2025-12-31" },
        { title:"재정성과 평가 체계 개선",                status:"wait",     owner:"박지훈", start:"2025-03-01", end:"2025-09-30" },
        { title:"2024년 결산 검토 및 보고",               status:"done",     owner:"최수아", start:"2024-10-01", end:"2025-02-28" },
        { title:"2026년도 예산안 사전 기획 및 지침 수립", status:"progress", owner:"정태양", start:"2025-11-01", end:"2026-05-07" },
        { title:"2026년 상반기 재정집행 점검 및 분석",    status:"progress", owner:"한도윤", start:"2026-03-01", end:"2026-06-30" },
        { title:"디지털 예산관리 시스템 구축 기본계획",   status:"progress", owner:"오시우", start:"2026-01-15", end:"2026-06-20" },
        { title:"2025년 국가재정운용계획 의견 제출",      status:"done",     owner:"박지훈", start:"2025-02-01", end:"2025-04-30" },
        { title:"재정집행 모니터링 체계 개편",            status:"progress", owner:"임나은", start:"2025-06-01", end:"2025-11-30" },
        { title:"특별교부세 배분 및 정산 관리",           status:"done",     owner:"최수아", start:"2025-01-10", end:"2025-03-31" },
        { title:"예산편성 기준 매뉴얼 개정",              status:"wait",     owner:"이서연", start:"2026-02-01", end:"2026-05-31" },
      ]},
      { name:"혁신행정담당관", members:[
        { name:"강현우", role:"과장",  position:"서기관",     email:"hyunwoo.kang@gov.kr",  phone:"02-1234-5701" },
        { name:"윤지아", role:"담당자", position:"행정주사",   email:"jia.yoon@gov.kr",      phone:"02-1234-5702" },
        { name:"장민서", role:"담당자", position:"행정주사",   email:"minseo.jang@gov.kr",   phone:"02-1234-5703" },
        { name:"조하은", role:"담당자", position:"행정서기",   email:"haeun.jo@gov.kr",      phone:"02-1234-5704" },
        { name:"신예준", role:"담당자", position:"행정주사보", email:"yejun.shin@gov.kr",    phone:"02-1234-5705" },
        { name:"류채원", role:"담당자", position:"행정서기",   email:"chaewon.ryu@gov.kr",   phone:"02-1234-5706" },
      ], tasks:[
        { title:"정부혁신 실행계획 수립 및 추진",      status:"progress", owner:"윤지아", start:"2025-02-01", end:"2025-11-30" },
        { title:"업무프로세스 재설계 추진",            status:"wait",     owner:"장민서", start:"2025-04-01", end:"2025-10-31" },
        { title:"민원서비스 만족도 조사",              status:"done",     owner:"조하은", start:"2024-09-01", end:"2025-01-31" },
        { title:"스마트 행정 혁신방안 수립",           status:"progress", owner:"신예준", start:"2026-02-01", end:"2026-06-15" },
        { title:"행정서비스 품질 개선 종합계획",       status:"wait",     owner:"류채원", start:"2026-04-01", end:"2026-06-30" },
        { title:"규제혁신 추진과제 발굴 및 이행점검",  status:"progress", owner:"윤지아", start:"2025-05-01", end:"2025-12-31" },
        { title:"행정절차 간소화 방안 연구",           status:"done",     owner:"조하은", start:"2025-01-01", end:"2025-05-31" },
        { title:"공공서비스 디자인 개선 시범사업",     status:"wait",     owner:"장민서", start:"2025-09-01", end:"2026-02-28" },
        { title:"정부혁신 우수사례 경진대회 운영",     status:"progress", owner:"류채원", start:"2026-03-01", end:"2026-06-20" },
      ]},
      { name:"정보화담당관", members:[
        { name:"이준혁", role:"과장",  position:"서기관",     email:"junhyuk.lee@gov.kr",   phone:"02-1234-5801" },
        { name:"김아린", role:"담당자", position:"행정주사",   email:"arin.kim@gov.kr",      phone:"02-1234-5802" },
        { name:"박서준", role:"담당자", position:"공업주사",   email:"seojun.park@gov.kr",   phone:"02-1234-5803" },
        { name:"최유나", role:"담당자", position:"행정주사",   email:"yuna.choi@gov.kr",     phone:"02-1234-5804" },
        { name:"정우진", role:"담당자", position:"공업서기",   email:"woojin.jung@gov.kr",   phone:"02-1234-5805" },
        { name:"한소율", role:"담당자", position:"행정주사보", email:"soyul.han@gov.kr",     phone:"02-1234-5806" },
        { name:"오지민", role:"담당자", position:"행정서기",   email:"jimin.oh@gov.kr",      phone:"02-1234-5807" },
      ], tasks:[
        { title:"정보화 기본계획 수립",                    status:"progress", owner:"김아린", start:"2025-01-15", end:"2025-06-30" },
        { title:"행정정보시스템 고도화 사업",              status:"progress", owner:"박서준", start:"2025-03-01", end:"2025-12-31" },
        { title:"개인정보 보호 실태점검",                  status:"done",     owner:"최유나", start:"2024-11-01", end:"2025-02-28" },
        { title:"AI 기반 민원처리 시스템 구축 계획",       status:"progress", owner:"정우진", start:"2026-01-01", end:"2026-06-30" },
        { title:"클라우드 전환 기본계획 수립",             status:"progress", owner:"한소율", start:"2026-03-01", end:"2026-06-25" },
        { title:"정보화사업 예산 심의 및 조정",            status:"done",     owner:"김아린", start:"2025-02-01", end:"2025-04-30" },
        { title:"전자정부 표준프레임워크 전환 지원",        status:"wait",     owner:"박서준", start:"2025-08-01", end:"2025-12-31" },
        { title:"공공 SW 사업 품질관리 가이드라인 수립",   status:"progress", owner:"오지민", start:"2025-06-01", end:"2025-10-31" },
        { title:"행정망 장애 대응 훈련 실시",              status:"done",     owner:"최유나", start:"2025-03-10", end:"2025-03-31" },
        { title:"정보자원 통합관리 체계 개선",             status:"wait",     owner:"정우진", start:"2026-04-01", end:"2026-06-30" },
      ]},
    ]},
    { name:"국제협력관", children:[
      { name:"국제협력담당관", members:[
        { name:"송민재", role:"과장",  position:"서기관",     email:"minjae.song@gov.kr",   phone:"02-1234-5901" },
        { name:"배하늘", role:"담당자", position:"행정주사",   email:"haneul.bae@gov.kr",    phone:"02-1234-5902" },
        { name:"심수현", role:"담당자", position:"외무주사",   email:"suhyun.shim@gov.kr",   phone:"02-1234-5903" },
        { name:"고태민", role:"담당자", position:"행정주사보", email:"taemin.ko@gov.kr",     phone:"02-1234-5904" },
        { name:"문지수", role:"담당자", position:"행정서기",   email:"jisu.moon@gov.kr",     phone:"02-1234-5905" },
      ], tasks:[
        { title:"국제기구 연계 협력과제 발굴",     status:"progress", owner:"배하늘", start:"2025-02-01", end:"2025-10-31" },
        { title:"해외 정책 연수 프로그램 운영",    status:"wait",     owner:"심수현", start:"2025-05-01", end:"2025-08-31" },
        { title:"국제협력 성과보고서 작성",        status:"done",     owner:"고태민", start:"2024-12-01", end:"2025-03-31" },
        { title:"하반기 국제회의 운영계획 수립",   status:"wait",     owner:"문지수", start:"2026-04-01", end:"2026-06-10" },
        { title:"ODA 협력사업 중간점검 및 평가",   status:"progress", owner:"고태민", start:"2026-02-01", end:"2026-06-20" },
        { title:"OECD 회의 참가 계획 및 결과 보고",status:"done",     owner:"배하늘", start:"2025-04-01", end:"2025-06-30" },
        { title:"다자협력체 가입 검토 및 추진",    status:"wait",     owner:"심수현", start:"2025-09-01", end:"2026-02-28" },
        { title:"해외 우수정책 벤치마킹 보고서",   status:"progress", owner:"문지수", start:"2025-07-01", end:"2025-12-31" },
        { title:"국제협약 이행상황 연차 점검",     status:"done",     owner:"고태민", start:"2025-01-01", end:"2025-03-31" },
      ]},
      { name:"통상지원담당관", members:[
        { name:"권나래", role:"과장",  position:"서기관",     email:"narae.kwon@gov.kr",    phone:"02-1234-6001" },
        { name:"안재원", role:"담당자", position:"행정주사",   email:"jaewon.an@gov.kr",     phone:"02-1234-6002" },
        { name:"남가은", role:"담당자", position:"행정서기",   email:"gaeun.nam@gov.kr",     phone:"02-1234-6003" },
        { name:"서동현", role:"담당자", position:"행정주사보", email:"donghyun.seo@gov.kr",  phone:"02-1234-6004" },
      ], tasks:[
        { title:"통상협력 지원체계 구축",                  status:"progress", owner:"안재원", start:"2025-01-01", end:"2025-09-30" },
        { title:"수출기업 애로사항 해소 TF 운영",          status:"wait",     owner:"남가은", start:"2025-04-01", end:"2025-12-31" },
        { title:"2026년 통상환경 분석 보고서 작성",        status:"progress", owner:"안재원", start:"2026-01-01", end:"2026-06-30" },
        { title:"중소기업 수출역량 강화 프로그램 운영",    status:"wait",     owner:"서동현", start:"2026-03-01", end:"2026-06-15" },
        { title:"수출규제 대응 모니터링 체계 강화",        status:"progress", owner:"남가은", start:"2025-05-01", end:"2025-10-31" },
        { title:"통상분쟁 대응 TF 운영",                   status:"done",     owner:"안재원", start:"2024-11-01", end:"2025-02-28" },
        { title:"FTA 활용 지원 프로그램 기획",             status:"wait",     owner:"서동현", start:"2025-08-01", end:"2026-01-31" },
        { title:"글로벌 공급망 리스크 분석 보고서",        status:"progress", owner:"남가은", start:"2026-02-01", end:"2026-06-20" },
      ]},
    ]},
  ]},
  { name:"운영지원실", children:[
    { name:"총무국", children:[
      { name:"인사과", members:[
        { name:"황민호", role:"과장",  position:"서기관",     email:"minho.hwang@gov.kr",   phone:"02-1234-6101" },
        { name:"천소희", role:"담당자", position:"행정주사",   email:"sohee.chun@gov.kr",    phone:"02-1234-6102" },
        { name:"변준서", role:"담당자", position:"행정주사",   email:"junseo.byun@gov.kr",   phone:"02-1234-6103" },
        { name:"석다은", role:"담당자", position:"행정서기",   email:"daeun.suk@gov.kr",     phone:"02-1234-6104" },
        { name:"방태현", role:"담당자", position:"행정주사보", email:"taehyun.bang@gov.kr",  phone:"02-1234-6105" },
        { name:"도지원", role:"담당자", position:"행정주사",   email:"jiwon.do@gov.kr",      phone:"02-1234-6106" },
        { name:"표미래", role:"담당자", position:"행정서기",   email:"mirae.pyo@gov.kr",     phone:"02-1234-6107" },
        { name:"구하준", role:"담당자", position:"행정주사보", email:"hajun.goo@gov.kr",     phone:"02-1234-6108" },
        { name:"허세진", role:"담당자", position:"행정서기",   email:"sejin.heo@gov.kr",     phone:"02-1234-6109" },
      ], tasks:[
        { title:"인사혁신 중장기 계획 수립",          status:"progress", owner:"천소희", start:"2025-01-01", end:"2025-12-31" },
        { title:"성과평가 제도 개선 TF 운영",         status:"progress", owner:"변준서", start:"2025-03-01", end:"2025-09-30" },
        { title:"2024년 인사통계 연보 작성",          status:"done",     owner:"석다은", start:"2024-11-01", end:"2025-02-28" },
        { title:"비공개 채용 절차 개선 연구",          status:"wait",     owner:"방태현", start:"2025-06-01", end:"2025-11-30" },
        { title:"하반기 공개채용 계획 수립",          status:"progress", owner:"도지원", start:"2026-03-01", end:"2026-06-20" },
        { title:"직급별 역량교육 체계 개편",          status:"wait",     owner:"표미래", start:"2026-04-01", end:"2026-06-30" },
        { title:"복무관리 실태점검 및 개선 방안 수립", status:"done",     owner:"구하준", start:"2025-02-01", end:"2025-04-30" },
        { title:"공무원 전문역량 인증제 도입 연구",   status:"wait",     owner:"허세진", start:"2025-07-01", end:"2025-12-31" },
        { title:"인사교류 활성화 방안 수립",          status:"progress", owner:"천소희", start:"2025-09-01", end:"2026-02-28" },
        { title:"2025년 승진심사 기준 및 계획 수립",  status:"done",     owner:"변준서", start:"2025-01-01", end:"2025-03-31" },
      ]},
      { name:"재무과", members:[
        { name:"진수빈", role:"과장",  position:"서기관",     email:"subin.jin@gov.kr",     phone:"02-1234-6201" },
        { name:"마이준", role:"담당자", position:"세무주사",   email:"ijun.ma@gov.kr",       phone:"02-1234-6202" },
        { name:"선가람", role:"담당자", position:"행정주사",   email:"garam.sun@gov.kr",     phone:"02-1234-6203" },
        { name:"용태민", role:"담당자", position:"세무서기",   email:"taemin.yong@gov.kr",   phone:"02-1234-6204" },
        { name:"엄서아", role:"담당자", position:"행정주사보", email:"seoa.um@gov.kr",       phone:"02-1234-6205" },
        { name:"태준호", role:"담당자", position:"행정서기",   email:"junho.tae@gov.kr",     phone:"02-1234-6206" },
        { name:"봉지연", role:"담당자", position:"세무주사보", email:"jiyeon.bong@gov.kr",   phone:"02-1234-6207" },
      ], tasks:[
        { title:"회계제도 개선 TF 운영",              status:"progress", owner:"마이준", start:"2025-02-01", end:"2025-08-31" },
        { title:"예산절감 추진계획 수립",              status:"wait",     owner:"선가람", start:"2025-04-01", end:"2025-10-31" },
        { title:"2024 회계연도 결산",                 status:"done",     owner:"용태민", start:"2025-01-01", end:"2025-04-30" },
        { title:"2025 회계연도 결산 최종 보고",       status:"progress", owner:"봉지연", start:"2026-04-01", end:"2026-06-30" },
        { title:"재무위험 관리체계 구축 기획",        status:"wait",     owner:"엄서아", start:"2026-02-01", end:"2026-06-15" },
        { title:"세입징수 관리 강화 방안 수립",       status:"done",     owner:"마이준", start:"2025-01-01", end:"2025-03-31" },
        { title:"계약제도 운영 실태 점검",            status:"progress", owner:"태준호", start:"2025-05-01", end:"2025-09-30" },
        { title:"회계검사 사전점검 실시",             status:"done",     owner:"용태민", start:"2025-03-01", end:"2025-05-31" },
        { title:"부처 합동 재무위험 세미나 개최",     status:"wait",     owner:"선가람", start:"2025-10-01", end:"2025-11-30" },
      ]},
      { name:"총무과", members:[
        { name:"은도현", role:"과장",  position:"서기관",     email:"dohyun.eun@gov.kr",    phone:"02-1234-6301" },
        { name:"가민주", role:"담당자", position:"행정주사",   email:"minju.ga@gov.kr",      phone:"02-1234-6302" },
        { name:"나지훈", role:"담당자", position:"행정서기",   email:"jihun.na@gov.kr",      phone:"02-1234-6303" },
        { name:"다하은", role:"담당자", position:"행정주사보", email:"haeun.da@gov.kr",      phone:"02-1234-6304" },
        { name:"라세은", role:"담당자", position:"행정서기",   email:"seun.ra@gov.kr",       phone:"02-1234-6305" },
        { name:"마지호", role:"담당자", position:"행정주사",   email:"jiho.ma@gov.kr",       phone:"02-1234-6306" },
      ], tasks:[
        { title:"청사 시설관리 현대화 계획",       status:"progress", owner:"가민주", start:"2025-01-01", end:"2025-12-31" },
        { title:"친환경 사무환경 조성 사업",       status:"wait",     owner:"나지훈", start:"2025-05-01", end:"2025-10-31" },
        { title:"물품 재고 실태조사",              status:"done",     owner:"다하은", start:"2025-01-15", end:"2025-03-31" },
        { title:"청사 에너지 절감 대책 수립",      status:"progress", owner:"마지호", start:"2026-03-01", end:"2026-06-25" },
        { title:"사무환경 표준화 매뉴얼 제작",     status:"wait",     owner:"라세은", start:"2026-04-01", end:"2026-06-10" },
        { title:"공용차량 운영 효율화 방안 수립",  status:"done",     owner:"나지훈", start:"2025-02-01", end:"2025-04-30" },
        { title:"보안점검 및 문서관리 강화 계획",  status:"progress", owner:"다하은", start:"2025-06-01", end:"2025-11-30" },
        { title:"청사 이전 기획 및 사전 준비",    status:"wait",     owner:"가민주", start:"2025-09-01", end:"2026-03-31" },
        { title:"비품·물품 구매 계획 및 조달 관리",status:"done",     owner:"마지호", start:"2025-01-01", end:"2025-02-28" },
      ]},
    ]},
    { name:"정보관리국", children:[
      { name:"시스템운영과", members:[
        { name:"백현준", role:"과장",  position:"서기관",     email:"hyunjun.baek@gov.kr",  phone:"02-1234-6401" },
        { name:"채태양", role:"담당자", position:"전산주사",   email:"taeyang.chae@gov.kr",  phone:"02-1234-6402" },
        { name:"지민아", role:"담당자", position:"공업주사",   email:"mina.ji@gov.kr",       phone:"02-1234-6403" },
        { name:"차정우", role:"담당자", position:"전산서기",   email:"jungwoo.cha@gov.kr",   phone:"02-1234-6404" },
        { name:"하율이", role:"담당자", position:"공업주사보", email:"yuri.ha@gov.kr",       phone:"02-1234-6405" },
        { name:"서연이", role:"담당자", position:"전산주사",   email:"seoyoni.seo@gov.kr",   phone:"02-1234-6406" },
        { name:"지아름", role:"담당자", position:"전산서기",   email:"areum.ji@gov.kr",      phone:"02-1234-6407" },
        { name:"류성민", role:"담당자", position:"전산주사보", email:"sungmin.ryu@gov.kr",   phone:"02-1234-6408" },
      ], tasks:[
        { title:"노후 서버 교체 사업",              status:"progress", owner:"채태양", start:"2025-02-01", end:"2025-11-30" },
        { title:"사이버보안 강화 대책 수립",        status:"progress", owner:"지민아", start:"2025-01-01", end:"2025-06-30" },
        { title:"전산장비 유지보수 계약",           status:"done",     owner:"차정우", start:"2024-12-01", end:"2025-01-31" },
        { title:"재해복구 시스템 점검",             status:"wait",     owner:"하율이", start:"2025-07-01", end:"2025-09-30" },
        { title:"정보시스템 통합 보안점검",         status:"progress", owner:"서연이", start:"2026-02-01", end:"2026-06-30" },
        { title:"망분리 고도화 사업 추진",          status:"progress", owner:"지아름", start:"2026-01-01", end:"2026-06-20" },
        { title:"IT 서비스 데스크 운영 개선 방안",  status:"done",     owner:"류성민", start:"2025-03-01", end:"2025-06-30" },
        { title:"전산실 환경안전 점검 및 조치",     status:"done",     owner:"하율이", start:"2025-01-10", end:"2025-02-28" },
        { title:"소프트웨어 라이선스 관리 체계 강화",status:"wait",    owner:"채태양", start:"2025-08-01", end:"2025-12-31" },
        { title:"업무용 PC 보안설정 일제 점검",     status:"progress", owner:"지민아", start:"2025-10-01", end:"2025-11-30" },
      ]},
      { name:"데이터관리과", members:[
        { name:"나민재", role:"과장",  position:"서기관",     email:"minjae.na@gov.kr",     phone:"02-1234-6501" },
        { name:"황나래", role:"담당자", position:"전산주사",   email:"narae.hwang@gov.kr",   phone:"02-1234-6502" },
        { name:"임서준", role:"담당자", position:"행정주사",   email:"seojun.lim@gov.kr",    phone:"02-1234-6503" },
        { name:"전유나", role:"담당자", position:"전산서기",   email:"yuna.jeon@gov.kr",     phone:"02-1234-6504" },
        { name:"홍우진", role:"담당자", position:"전산주사보", email:"woojin.hong@gov.kr",   phone:"02-1234-6505" },
        { name:"류소율", role:"담당자", position:"행정서기",   email:"soyul.ryu@gov.kr",     phone:"02-1234-6506" },
      ], tasks:[
        { title:"공공데이터 개방 확대 계획",                   status:"progress", owner:"황나래", start:"2025-01-01", end:"2025-12-31" },
        { title:"데이터 품질 관리 체계 구축",                  status:"progress", owner:"임서준", start:"2025-03-01", end:"2025-09-30" },
        { title:"개인정보 비식별 처리 가이드라인 수립",         status:"done",     owner:"전유나", start:"2024-10-01", end:"2025-01-31" },
        { title:"빅데이터 플랫폼 구축 1단계",                  status:"progress", owner:"홍우진", start:"2026-02-01", end:"2026-06-30" },
        { title:"공공데이터 품질 개선 중간점검",               status:"progress", owner:"류소율", start:"2026-03-01", end:"2026-06-15" },
        { title:"행정데이터 분류체계 표준화 작업",             status:"done",     owner:"임서준", start:"2025-01-01", end:"2025-04-30" },
        { title:"정보공개 청구 처리 현황 분석 및 보고",        status:"progress", owner:"전유나", start:"2025-05-01", end:"2025-10-31" },
        { title:"데이터 거버넌스 위원회 운영 및 안건 관리",    status:"wait",     owner:"황나래", start:"2025-07-01", end:"2025-12-31" },
        { title:"공공데이터 활용 우수사례 경진대회 운영",      status:"wait",     owner:"류소율", start:"2025-09-01", end:"2025-11-30" },
      ]},
    ]},
  ]},
  { name:"감사실", children:[
    { name:"감사담당관", children:[
      { name:"일반감사과", members:[
        { name:"배민호", role:"과장",  position:"서기관",     email:"minho.bae@gov.kr",     phone:"02-1234-6601" },
        { name:"신소희", role:"담당자", position:"감사주사",   email:"sohee.shin@gov.kr",    phone:"02-1234-6602" },
        { name:"장준서", role:"담당자", position:"행정주사",   email:"junseo.jang@gov.kr",   phone:"02-1234-6603" },
        { name:"조다은", role:"담당자", position:"행정서기",   email:"daeun.jo@gov.kr",      phone:"02-1234-6604" },
        { name:"강태현", role:"담당자", position:"감사주사보", email:"taehyun.kang@gov.kr",  phone:"02-1234-6605" },
      ], tasks:[
        { title:"2025년 정기감사 계획 수립",           status:"progress", owner:"신소희", start:"2025-01-01", end:"2025-06-30" },
        { title:"감사결과 이행 점검",                  status:"progress", owner:"장준서", start:"2025-02-01", end:"2025-12-31" },
        { title:"2024년 감사 결과보고서 작성",         status:"done",     owner:"조다은", start:"2024-11-01", end:"2025-03-31" },
        { title:"상반기 기획감사 결과 보고",           status:"progress", owner:"강태현", start:"2026-04-01", end:"2026-06-30" },
        { title:"내부감사 제도 개선 연구",             status:"wait",     owner:"장준서", start:"2026-02-01", end:"2026-06-20" },
        { title:"기관 합동감사 계획 수립 및 사전 조율",status:"done",     owner:"신소희", start:"2025-03-01", end:"2025-05-31" },
        { title:"감사 지적사항 개선 이행점검 강화",    status:"progress", owner:"조다은", start:"2025-06-01", end:"2025-12-31" },
        { title:"수시감사 추진 방안 수립",             status:"wait",     owner:"강태현", start:"2025-09-01", end:"2025-12-31" },
        { title:"외부감사 결과 이행 관리 체계 개선",   status:"wait",     owner:"장준서", start:"2025-10-01", end:"2026-02-28" },
      ]},
      { name:"청렴조사과", members:[
        { name:"윤지원", role:"과장",  position:"서기관",     email:"jiwon.yoon@gov.kr",    phone:"02-1234-6701" },
        { name:"오미래", role:"담당자", position:"행정주사",   email:"mirae.oh@gov.kr",      phone:"02-1234-6702" },
        { name:"문하준", role:"담당자", position:"감사서기",   email:"hajun.moon@gov.kr",    phone:"02-1234-6703" },
        { name:"정세진", role:"담당자", position:"행정주사보", email:"sejin.jung@gov.kr",    phone:"02-1234-6704" },
      ], tasks:[
        { title:"청렴도 향상 종합대책 수립",           status:"progress", owner:"오미래", start:"2025-01-01", end:"2025-12-31" },
        { title:"부패취약분야 집중 점검",              status:"wait",     owner:"문하준", start:"2025-05-01", end:"2025-08-31" },
        { title:"청렴 교육 프로그램 운영",             status:"done",     owner:"정세진", start:"2024-09-01", end:"2025-02-28" },
        { title:"상반기 청렴도 자체평가",              status:"progress", owner:"오미래", start:"2026-04-01", end:"2026-06-30" },
        { title:"부패신고 처리실태 집중 점검",         status:"wait",     owner:"문하준", start:"2026-03-01", end:"2026-06-10" },
        { title:"공익신고자 보호 강화 방안 수립",      status:"done",     owner:"정세진", start:"2025-01-01", end:"2025-03-31" },
        { title:"청렴 서약 및 공직윤리 강령 제·개정",  status:"progress", owner:"오미래", start:"2025-07-01", end:"2025-12-31" },
        { title:"직원 청렴 실천 교육 계획 수립",       status:"done",     owner:"문하준", start:"2025-02-01", end:"2025-04-30" },
        { title:"부패방지 자체 평가 점검 및 환류",     status:"wait",     owner:"정세진", start:"2025-09-01", end:"2025-11-30" },
      ]},
    ]},
  ]},
  { name:"정책홍보실", children:[
    { name:"홍보전략관", children:[
      { name:"언론홍보과", members:[
        { name:"박정우", role:"과장",  position:"서기관",     email:"jungwoo.park@gov.kr",  phone:"02-1234-7101" },
        { name:"유서아", role:"담당자", position:"홍보주사",   email:"seoa.yu@gov.kr",       phone:"02-1234-7102" },
        { name:"이수민", role:"담당자", position:"행정주사",   email:"sumin.lee@gov.kr",     phone:"02-1234-7103" },
        { name:"한여울", role:"담당자", position:"홍보서기",   email:"yorul.han@gov.kr",     phone:"02-1234-7104" },
        { name:"전다은", role:"담당자", position:"행정주사보", email:"daeun.jeon@gov.kr",    phone:"02-1234-7105" },
        { name:"오규민", role:"담당자", position:"행정서기",   email:"gyumin.oh@gov.kr",     phone:"02-1234-7106" },
      ], tasks:[
        { title:"2025년 홍보 종합계획 수립",             status:"done",     owner:"유서아", start:"2024-12-01", end:"2025-01-31" },
        { title:"정례 브리핑 운영 및 관리 체계 개선",   status:"progress", owner:"이수민", start:"2025-02-01", end:"2025-12-31" },
        { title:"미디어 모니터링 체계 구축",             status:"done",     owner:"한여울", start:"2025-01-01", end:"2025-04-30" },
        { title:"보도자료 품질 관리 가이드라인 제정",    status:"progress", owner:"전다은", start:"2025-05-01", end:"2025-09-30" },
        { title:"언론 인터뷰 지원 및 일정 조정",         status:"wait",     owner:"오규민", start:"2025-07-01", end:"2025-12-31" },
        { title:"주요 정책 홍보 캠페인 기획 및 실행",    status:"progress", owner:"유서아", start:"2025-06-01", end:"2025-11-30" },
        { title:"2026년 언론홍보 연간 계획 수립",        status:"wait",     owner:"이수민", start:"2025-10-01", end:"2025-12-31" },
        { title:"기자단 간담회 운영 계획 수립",          status:"done",     owner:"한여울", start:"2025-03-01", end:"2025-06-30" },
        { title:"정책 설명자료 표준화 가이드 수립",      status:"wait",     owner:"전다은", start:"2026-01-01", end:"2026-03-31" },
        { title:"TV·라디오 홍보 매체 활용 계획",         status:"progress", owner:"오규민", start:"2026-02-01", end:"2026-06-30" },
      ]},
      { name:"뉴미디어담당관", members:[
        { name:"최민재", role:"과장",  position:"서기관",     email:"minjae.choi@gov.kr",   phone:"02-1234-7201" },
        { name:"김소현", role:"담당자", position:"홍보주사",   email:"sohyun.kim@gov.kr",    phone:"02-1234-7202" },
        { name:"장태준", role:"담당자", position:"전산주사",   email:"taejun.jang@gov.kr",   phone:"02-1234-7203" },
        { name:"임지아", role:"담당자", position:"홍보서기",   email:"jia.lim@gov.kr",       phone:"02-1234-7204" },
        { name:"류하늘", role:"담당자", position:"행정주사보", email:"haneul.ryu@gov.kr",    phone:"02-1234-7205" },
      ], tasks:[
        { title:"공식 SNS 채널 운영 전략 수립",          status:"progress", owner:"김소현", start:"2025-01-01", end:"2025-06-30" },
        { title:"정책 홍보 영상 제작 기획",              status:"progress", owner:"장태준", start:"2025-03-01", end:"2025-08-31" },
        { title:"유튜브 채널 개선 및 구독자 확대 방안", status:"done",     owner:"임지아", start:"2024-10-01", end:"2025-02-28" },
        { title:"인터넷 여론 분석 시스템 구축",          status:"wait",     owner:"류하늘", start:"2025-07-01", end:"2025-12-31" },
        { title:"디지털 홍보 성과 측정 체계 개선",       status:"progress", owner:"김소현", start:"2025-06-01", end:"2025-10-31" },
        { title:"뉴미디어 홍보 우수사례 발굴 및 공유",   status:"done",     owner:"장태준", start:"2025-02-01", end:"2025-05-31" },
        { title:"2026년 온라인 홍보 전략 수립",          status:"wait",     owner:"임지아", start:"2025-09-01", end:"2025-12-31" },
        { title:"AI 기반 콘텐츠 생성 도구 도입 검토",    status:"wait",     owner:"류하늘", start:"2026-01-01", end:"2026-04-30" },
      ]},
    ]},
    { name:"대국민소통관", children:[
      { name:"민원지원과", members:[
        { name:"이준태", role:"과장",  position:"서기관",     email:"juntae.lee@gov.kr",    phone:"02-1234-7301" },
        { name:"서가은", role:"담당자", position:"행정주사",   email:"gaeun.seo@gov.kr",     phone:"02-1234-7302" },
        { name:"안하준", role:"담당자", position:"행정주사",   email:"hajun.an@gov.kr",      phone:"02-1234-7303" },
        { name:"문미래", role:"담당자", position:"행정서기",   email:"mirae.moon@gov.kr",    phone:"02-1234-7304" },
        { name:"정세율", role:"담당자", position:"행정주사보", email:"seyul.jung@gov.kr",    phone:"02-1234-7305" },
        { name:"박민서", role:"담당자", position:"행정서기",   email:"minseo.park@gov.kr",   phone:"02-1234-7306" },
      ], tasks:[
        { title:"민원처리 현황 분석 및 개선 방안 도출",  status:"progress", owner:"서가은", start:"2025-01-01", end:"2025-06-30" },
        { title:"고충민원 해소 TF 운영",                 status:"wait",     owner:"안하준", start:"2025-04-01", end:"2025-10-31" },
        { title:"민원 만족도 조사 및 결과 분석",         status:"done",     owner:"문미래", start:"2024-11-01", end:"2025-02-28" },
        { title:"복합민원 처리 절차 간소화 방안",        status:"progress", owner:"정세율", start:"2025-05-01", end:"2025-11-30" },
        { title:"전화민원 응대 교육 실시",               status:"done",     owner:"박민서", start:"2025-02-10", end:"2025-03-31" },
        { title:"온라인 민원 창구 개편 기획",            status:"progress", owner:"서가은", start:"2025-07-01", end:"2025-12-31" },
        { title:"민원 처리 연간 성과 보고",              status:"wait",     owner:"안하준", start:"2026-01-01", end:"2026-03-31" },
        { title:"취약계층 민원지원 서비스 강화 방안",    status:"wait",     owner:"정세율", start:"2026-03-01", end:"2026-06-30" },
      ]},
      { name:"소통협력과", members:[
        { name:"강지원", role:"과장",  position:"서기관",     email:"jiwon.kang@gov.kr",    phone:"02-1234-7401" },
        { name:"황민서", role:"담당자", position:"행정주사",   email:"minseo.hwang@gov.kr",  phone:"02-1234-7402" },
        { name:"염수희", role:"담당자", position:"행정주사",   email:"suhee.yum@gov.kr",     phone:"02-1234-7403" },
        { name:"설준혁", role:"담당자", position:"행정서기",   email:"junhyuk.seol@gov.kr",  phone:"02-1234-7404" },
        { name:"모하은", role:"담당자", position:"행정주사보", email:"haeun.mo@gov.kr",      phone:"02-1234-7405" },
      ], tasks:[
        { title:"부처 합동 소통 행사 기획 및 운영",      status:"progress", owner:"황민서", start:"2025-02-01", end:"2025-06-30" },
        { title:"정책 공청회 운영 지원 매뉴얼 제작",     status:"done",     owner:"염수희", start:"2024-12-01", end:"2025-02-28" },
        { title:"시민 참여 정책 개발 프로그램 운영",     status:"progress", owner:"설준혁", start:"2025-04-01", end:"2025-10-31" },
        { title:"소통 채널 통합 관리 방안 수립",         status:"wait",     owner:"모하은", start:"2025-07-01", end:"2025-12-31" },
        { title:"부처 내 의견수렴 절차 개선 방안",       status:"done",     owner:"황민서", start:"2025-01-01", end:"2025-04-30" },
        { title:"대국민 소통 성과 보고서 작성",          status:"progress", owner:"염수희", start:"2026-01-01", end:"2026-03-31" },
        { title:"지역사회 협력 네트워크 구축 기획",      status:"wait",     owner:"설준혁", start:"2026-02-01", end:"2026-06-30" },
      ]},
    ]},
  ]},
  { name:"연구기획실", children:[
    { name:"정책연구관", children:[
      { name:"정책분석과", members:[
        { name:"조재현", role:"과장",  position:"서기관",     email:"jaehyun.jo@gov.kr",    phone:"02-1234-7501" },
        { name:"권민아", role:"담당자", position:"행정주사",   email:"mina.kwon@gov.kr",     phone:"02-1234-7502" },
        { name:"도준서", role:"담당자", position:"행정주사",   email:"junseo.do@gov.kr",     phone:"02-1234-7503" },
        { name:"배지호", role:"담당자", position:"행정서기",   email:"jiho.bae@gov.kr",      phone:"02-1234-7504" },
        { name:"임태양", role:"담당자", position:"행정주사보", email:"taeyang.lim@gov.kr",   phone:"02-1234-7505" },
        { name:"전하은", role:"담당자", position:"행정서기",   email:"haeun.jeon@gov.kr",    phone:"02-1234-7506" },
      ], tasks:[
        { title:"정책효과 분석 모델 개발",                status:"progress", owner:"권민아", start:"2025-01-01", end:"2025-09-30" },
        { title:"국내외 정책 동향 비교 분석 보고서",      status:"progress", owner:"도준서", start:"2025-02-01", end:"2025-07-31" },
        { title:"현안 정책 쟁점 연구 보고서 작성",        status:"done",     owner:"배지호", start:"2024-10-01", end:"2025-02-28" },
        { title:"정책 성과지표 개발 및 검증",             status:"progress", owner:"임태양", start:"2025-05-01", end:"2025-11-30" },
        { title:"빅데이터 기반 정책 수요 분석",           status:"wait",     owner:"전하은", start:"2025-08-01", end:"2026-01-31" },
        { title:"민간 연구기관 협업 과제 기획",           status:"done",     owner:"권민아", start:"2025-01-01", end:"2025-04-30" },
        { title:"부처 간 정책 연계 방안 연구",            status:"progress", owner:"도준서", start:"2025-09-01", end:"2026-02-28" },
        { title:"중장기 정책 로드맵 수립 지원",           status:"wait",     owner:"임태양", start:"2026-01-01", end:"2026-06-30" },
        { title:"정책연구 연차보고서 발간",               status:"done",     owner:"배지호", start:"2025-01-01", end:"2025-03-31" },
      ]},
      { name:"입법연구과", members:[
        { name:"윤민재", role:"과장",  position:"서기관",     email:"minjae.yoon@gov.kr",   phone:"02-1234-7601" },
        { name:"심서아", role:"담당자", position:"법무주사",   email:"seoa.shim@gov.kr",     phone:"02-1234-7602" },
        { name:"노준혁", role:"담당자", position:"행정주사",   email:"junhyuk.no@gov.kr",    phone:"02-1234-7603" },
        { name:"성소율", role:"담당자", position:"법무서기",   email:"soyul.sung@gov.kr",    phone:"02-1234-7604" },
        { name:"차하은", role:"담당자", position:"행정주사보", email:"haeun.cha@gov.kr",     phone:"02-1234-7605" },
      ], tasks:[
        { title:"법령 정비 수요 조사 및 분석",            status:"progress", owner:"심서아", start:"2025-01-01", end:"2025-06-30" },
        { title:"주요 개정 법안 영향 분석 보고서",        status:"progress", owner:"노준혁", start:"2025-03-01", end:"2025-09-30" },
        { title:"법령 해석 사례집 발간",                  status:"done",     owner:"성소율", start:"2024-09-01", end:"2025-01-31" },
        { title:"입법예고 의견 수렴 및 정리",             status:"wait",     owner:"차하은", start:"2025-06-01", end:"2025-11-30" },
        { title:"규제 영향 분석 체계 개선",               status:"progress", owner:"심서아", start:"2025-07-01", end:"2025-12-31" },
        { title:"행정규칙 정비 계획 수립",                status:"done",     owner:"노준혁", start:"2025-01-15", end:"2025-04-30" },
        { title:"법령 DB 현행화 및 관리 체계 강화",       status:"wait",     owner:"성소율", start:"2025-09-01", end:"2026-02-28" },
        { title:"2026년 주요 입법 과제 발굴",             status:"wait",     owner:"차하은", start:"2025-10-01", end:"2025-12-31" },
      ]},
    ]},
    { name:"미래전략관", children:[
      { name:"미래전략과", members:[
        { name:"장민호", role:"과장",  position:"서기관",     email:"minho.jang@gov.kr",    phone:"02-1234-7701" },
        { name:"구소희", role:"담당자", position:"행정주사",   email:"sohee.ku@gov.kr",      phone:"02-1234-7702" },
        { name:"남준서", role:"담당자", position:"행정주사",   email:"junseo.nam@gov.kr",    phone:"02-1234-7703" },
        { name:"주다은", role:"담당자", position:"행정서기",   email:"daeun.joo@gov.kr",     phone:"02-1234-7704" },
        { name:"허태현", role:"담당자", position:"행정주사보", email:"taehyun.heo@gov.kr",   phone:"02-1234-7705" },
        { name:"위서연", role:"담당자", position:"행정서기",   email:"seoyeon.wi@gov.kr",    phone:"02-1234-7706" },
      ], tasks:[
        { title:"행정환경 변화 대응 미래 전략 수립",      status:"progress", owner:"구소희", start:"2025-01-01", end:"2025-12-31" },
        { title:"디지털 전환 중장기 로드맵 작성",         status:"progress", owner:"남준서", start:"2025-03-01", end:"2025-10-31" },
        { title:"부처 미래 인력 수급 예측 연구",          status:"done",     owner:"주다은", start:"2024-11-01", end:"2025-03-31" },
        { title:"기후변화 대응 행정 혁신 방안 연구",      status:"wait",     owner:"허태현", start:"2025-06-01", end:"2025-12-31" },
        { title:"위기관리 시나리오 분석 및 대응 전략",    status:"progress", owner:"구소희", start:"2025-05-01", end:"2025-11-30" },
        { title:"신기술 도입 타당성 조사 및 검토",        status:"wait",     owner:"남준서", start:"2025-08-01", end:"2026-01-31" },
        { title:"지속가능발전 목표(SDGs) 이행점검",       status:"done",     owner:"주다은", start:"2025-01-01", end:"2025-05-31" },
        { title:"미래전략 연간 보고서 작성 및 발간",      status:"progress", owner:"위서연", start:"2025-10-01", end:"2025-12-31" },
        { title:"2030 행정혁신 비전 수립 기획",           status:"wait",     owner:"허태현", start:"2026-01-01", end:"2026-06-30" },
      ]},
    ]},
  ]},
];

/* ---- 인원 합산 + id 부여 + 부모 추적 ---- */
let _id = 0;
function prepare(nodes, depth, parent) {
  let total = 0;
  for (const n of nodes) {
    n._id     = "n" + (_id++);
    n._depth  = depth;
    n._parent = parent || null;
    if (n.children && n.children.length) {
      n.head = prepare(n.children, depth + 1, n);
    } else {
      n.head = n.members ? n.members.length : 0;
    }
    total += n.head;
  }
  return total;
}
const TOTAL_HEAD = prepare(ORG, 0, null);
const TOTAL_SIL  = ORG.length;

/* ---- 엘리먼트 ---- */
const tree    = document.getElementById("navTree");
const empty   = document.getElementById("navEmpty");
const search  = document.getElementById("navSearch");
const clear   = document.getElementById("navClear");
const summary = document.getElementById("navSummary");

const caretSVG = '<svg viewBox="0 0 20 20" width="16" height="16" fill="none" aria-hidden="true"><path d="M6 8L10 12L14 8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const arrowSVG = '<svg viewBox="0 0 20 20" width="20" height="20" fill="none" aria-hidden="true"><path d="M8 5l5 5-5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

let selectedId = null;
let currentView = 'list';

/* ---- 헬퍼 ---- */
function getAllLeaves(node) {
  if (!node.children || node.children.length === 0) return [node];
  return node.children.flatMap(c => getAllLeaves(c));
}

function findNodeById(id) {
  function search(nodes) {
    for (const n of nodes) {
      if (n._id === id) return n;
      if (n.children) { const f = search(n.children); if (f) return f; }
    }
    return null;
  }
  return search(ORG);
}

function openAncestorsOf(node) {
  let cur = node._parent;
  while (cur) {
    const li = tree.querySelector('[data-id="' + cur._id + '"]');
    if (li && !li.classList.contains('is-open')) toggle(li);
    cur = cur._parent;
  }
}

/* ---- 트리 렌더 ---- */
function renderNodes(nodes) {
  const ul = document.createElement("ul");
  ul.setAttribute("role", "group");
  for (const n of nodes) {
    const isLeaf = !n.children || n.children.length === 0;

    const li = document.createElement("li");
    li.className    = "nav-node nav-node--depth" + n._depth + (isLeaf ? " nav-node--leaf" : "");
    li.dataset.id   = n._id;
    li.dataset.name = n.name;
    li.setAttribute("role", "treeitem");
    if (!isLeaf) li.setAttribute("aria-expanded", "false");

    const row = document.createElement("div");
    row.className = "nav-node__row";
    row.style.setProperty("--depth", n._depth);
    row.tabIndex  = 0;
    row.innerHTML =
      '<span class="nav-node__caret">' + caretSVG + '</span>' +
      '<span class="nav-node__label">' + escapeHtml(n.name) + '</span>' +
      '<span class="nav-node__count">' + n.head + '명</span>';

    row.addEventListener("click", () => {
      if (isLeaf) {
        activateNode(li, row, n);
      } else {
        toggle(li);
        activateNode(li, row, n);
      }
    });
    row.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); row.click(); }
    });

    li.appendChild(row);
    if (!isLeaf) {
      const box = document.createElement("div");
      box.className = "nav-node__children";
      box.appendChild(renderNodes(n.children));
      li.appendChild(box);
    }
    ul.appendChild(li);
  }
  return ul;
}

function toggle(li) {
  const open = li.classList.toggle("is-open");
  li.setAttribute("aria-expanded", open ? "true" : "false");
}

/* 사이드바 선택 상태 갱신 + 컨텐츠 렌더 */
function activateNode(li, row, nodeData) {
  if (selectedId) {
    const prev = tree.querySelector('[data-id="' + selectedId + '"] > .nav-node__row');
    if (prev) prev.classList.remove("is-selected");
  }
  row.classList.add("is-selected");
  selectedId = li.dataset.id;
  if (currentView === 'org') {
    navigateOrgChartTo(nodeData);
  } else {
    renderContent(nodeData);
  }
}

/* 카드 클릭으로 해당 노드로 이동 (사이드바 + 컨텐츠 동기화) */
function selectNode(nodeData) {
  openAncestorsOf(nodeData);
  const navLi = tree.querySelector('[data-id="' + nodeData._id + '"]');
  if (!navLi) return;
  const navRow = navLi.querySelector(':scope > .nav-node__row');
  if (nodeData.children && !navLi.classList.contains('is-open')) toggle(navLi);
  navRow.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  activateNode(navLi, navRow, nodeData);
}

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
}

/* 이름 해시 → av-0 ~ av-4 (KRDS 팔레트) */
function ownerColorClass(name) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (Math.imul(31, h) + name.charCodeAt(i)) | 0;
  return 'av-' + (Math.abs(h) % 4);
}

/* ---- 콘텐츠 렌더 ---- */
function getBreadcrumbPath(node) {
  const path = [];
  let cur = node;
  while (cur) { path.unshift(cur.name); cur = cur._parent; }
  return path;
}

function memberCardHTML(m) {
  return `<li class="member-card">
    <span class="member-card__avatar ${ownerColorClass(m.name)}">${escapeHtml(m.name.slice(0, 1))}</span>
    <div class="member-card__info">
      <p class="member-card__name">${escapeHtml(m.name)}</p>
      <p class="member-card__position">${escapeHtml(m.position)}</p>
      <p class="member-card__contact">
        ${escapeHtml(m.email)}<span class="member-card__sep">|</span>${escapeHtml(m.phone)}
      </p>
    </div>
  </li>`;
}

const STATUS_LABEL = { wait:"대기", progress:"진행중", done:"종결" };
const STATUS_CLASS = { wait:"krds-badge bg-light-gray", progress:"krds-badge bg-light-secondary", done:"krds-badge bg-light-success" };

/* ── 세부 과업 생성 (결정론적 의사난수) ─────────────────────────── */
function getSubtasks(task) {
  // 타이틀 기반 시드 – 같은 업무는 항상 같은 세부과업
  let h = 0;
  for (let i = 0; i < task.title.length; i++)
    h = (Math.imul(31, h) + task.title.charCodeAt(i)) | 0;
  const r = () => {
    h = (Math.imul(h ^ (h >>> 16), 0x45d9f3b)) | 0;
    return (h >>> 0) / 0x100000000;
  };

  const TYPES = ['내부 업무', '외부 업무', '협업 업무', '지원 업무', '검토 업무', '조정 업무'];
  const RISKS = ['선행업무 미완료', '일정지연', '병목', '리소스 부족', '검토 지연', '이해관계자 미합의', '예산 부족', '법령 미정비'];
  const PRIOS = ['high', 'mid', 'low'];

  // 업무 진행 단계 세트 – 각 8단계
  const PHASE_SETS = [
    ['현황 조사 및 기초분석', '과제 범위 확정', '추진 계획 수립', '관련 부서 협의', '초안 작성', '초안 검토 및 수정', '최종안 확정', '최종 보고 및 결재'],
    ['수요 조사', '예산 검토 및 확보', '추진 일정 확정', '담당자 배정', '실행', '중간 점검', '성과 분석', '보고 및 환류'],
    ['법령·규정 검토', '문제 현황 파악', '기획안 작성', '내부 검토', '의견 수렴', '수정 및 보완', '부서장 결재', '완료 보고'],
    ['사전 준비 및 자료수집', '분석 및 방안 도출', '부서 간 조율', '계획 확정', '1차 실행', '중간 모니터링', '2차 실행 및 보완', '결과 보고'],
    ['목표 설정', '세부 추진과제 도출', '담당자 배정', '착수 보고', '1단계 진행', '중간 평가', '2단계 진행', '완료 및 성과 평가'],
    ['현안 파악 및 이슈 정리', '대응 방향 수립', '내부 검토 회의', '외부 기관 협의', '방안 확정', '시범 적용', '결과 분석', '제도화 및 보고'],
    ['기초 자료 수집', '현황 분석', '개선 방향 도출', '관계 부서 의견 청취', '개선안 작성', '검토 및 수정', '승인 및 확정', '이행 및 사후관리'],
    ['착수 준비', '요구사항 분석', '계획 수립', '1차 추진', '점검 및 조정', '2차 추진', '검수 및 확인', '완료 보고 및 결재'],
  ];

  const phaseSet = PHASE_SETS[Math.floor(r() * PHASE_SETS.length)];
  const count    = 5 + Math.floor(r() * 4);  // 5~8개
  const phases   = phaseSet.slice(0, count);

  const startMs   = new Date(task.start).getTime();
  const endMs     = new Date(task.end).getTime();
  const span      = (endMs - startMs) / count;
  const doneFrac  = task.status === 'done' ? 1 : task.status === 'progress' ? 0.25 + r() * 0.4 : 0;
  const doneCount = Math.round(count * doneFrac);

  return phases.map((phase, i) => {
    const subEnd = new Date(startMs + span * (i + 1)).toISOString().slice(0, 10);
    const isDone = i < doneCount;
    const isCurr = !isDone && i === doneCount;

    let stage, approval;
    if (isDone)      { stage = '완료'; approval = '결재완료'; }
    else if (isCurr) { stage = '검토'; approval = '상신완료'; }
    else             { stage = '접수';  approval = '미상신'; }

    return {
      name:     phase,
      type:     TYPES[Math.floor(r() * TYPES.length)],
      assignee: task.owner,
      deadline: subEnd,
      stage,
      approval,
      priority: PRIOS[Math.floor(r() * PRIOS.length)],
      risks:    isDone ? [] : [RISKS[Math.floor(r() * RISKS.length)]],
    };
  });
}

function taskCardHTML(t) {
  return `<li class="task-card">
    <span class="${STATUS_CLASS[t.status]}">${STATUS_LABEL[t.status]}</span>
    <span class="task-card__title">${escapeHtml(t.title)}</span>
    <span class="task-card__meta">
      <span class="task-card__owner">${escapeHtml(t.owner)}</span>
      <span class="task-card__sep">·</span>
      <span class="task-card__date">${escapeHtml(t.start)} ~ ${escapeHtml(t.end)}</span>
    </span>
    <span class="task-card__arrow">${arrowSVG}</span>
  </li>`;
}

/* ============================================================
   주간보고 — ORG 데이터 기반 생성 (조직도/업무와 동일한 소스 공유)
   ============================================================ */
const REPORT_STATUS_LABEL = { submitted: "제출완료", draft: "작성중", missing: "미제출" };
const REPORT_STATUS_CLASS = { submitted: "krds-badge bg-light-success", draft: "krds-badge bg-light-secondary", missing: "krds-badge bg-light-gray" };

function getWeekRange(offsetWeeks) {
  const now = new Date();
  const day = now.getDay(); // 0=일 ~ 6=토
  const diffToMonday = (day === 0 ? -6 : 1 - day);
  const monday = new Date(now.getFullYear(), now.getMonth(), now.getDate() + diffToMonday + offsetWeeks * 7);
  const friday = new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + 4);
  return { start: monday, end: friday };
}

function fmtYMD(d) {
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}

function buildWeeklyReports() {
  const { start, end } = getWeekRange(0);
  const weekStart = fmtYMD(start), weekEnd = fmtYMD(end);
  const reports = [];

  ORG.forEach(sil => {
    getAllLeaves(sil).forEach(leaf => {
      if (!leaf.members || !leaf.members.length) return;

      // 부서명을 시드로 한 결정적 제출 상태
      let h = 0;
      for (let i = 0; i < leaf.name.length; i++) h = (Math.imul(31, h) + leaf.name.charCodeAt(i)) | 0;
      const r = Math.abs(h) % 10;
      const status = r < 6 ? "submitted" : r < 8 ? "draft" : "missing";

      const manager = leaf.members.find(m => m.role === "과장") || leaf.members[0];
      const tasks = (leaf.tasks || []);
      const doneCount = tasks.filter(t => t.status === "done").length;
      const progressCount = tasks.filter(t => t.status === "progress").length;

      // 보고 일자 — 해당 주(월~금) 중 결정적으로 배정된 제출일
      const submittedDate = new Date(start.getFullYear(), start.getMonth(), start.getDate() + (Math.abs(h) % 5));
      const submittedAt = fmtYMD(submittedDate);

      reports.push({
        id: "wr-" + leaf._id,
        dept: leaf.name,
        sil: sil.name,
        author: manager.name,
        authorRole: manager.role,
        weekStart,
        weekEnd,
        submittedAt,
        status,
        memberCount: leaf.members.length,
        totalCount: tasks.length,
        doneCount,
        progressCount,
        tasks,
      });
    });
  });

  return reports;
}

function reportCardHTML(r) {
  return `<li class="task-card">
    <span class="${REPORT_STATUS_CLASS[r.status]}">${REPORT_STATUS_LABEL[r.status]}</span>
    <span class="task-card__title">${escapeHtml(r.dept)} 주간보고</span>
    <span class="task-card__meta">
      <span class="task-card__owner">${escapeHtml(r.author)} ${escapeHtml(r.authorRole)}</span>
      <span class="task-card__sep">·</span>
      <span class="task-card__date">보고일 ${r.submittedAt}</span>
    </span>
    <span class="task-card__arrow">${arrowSVG}</span>
  </li>`;
}

function renderContent(node) {
  /* 제목 */
  const titleEl = document.querySelector(".organization-title");
  if (titleEl) titleEl.textContent = node.name;

  /* 상단 뱃지 인원수 */
  const badge = document.querySelector(".krds-badge.small");
  if (badge) badge.textContent = "총 " + node.head + "명";

  /* breadcrumb */
  const bc = document.querySelector("#breadcrumb .breadcrumb");
  if (bc) {
    const path = getBreadcrumbPath(node);
    bc.innerHTML = path.map(name =>
      `<li><a href="#" class="txt">${escapeHtml(name)}</a></li>`
    ).join("");
  }

  const isLeaf = !node.children || node.children.length === 0;
  if (isLeaf) {
    renderLeafMembers(node);
    renderLeafTasks(node);
  } else {
    renderParentMembers(node);
    renderParentTasks(node);
  }
}

/* 과 단위 팀원 구성 */
function renderLeafMembers(node) {
  const memberSection = document.querySelector(".member-section");
  if (!memberSection) return;
  if (!node.members) { memberSection.innerHTML = ""; return; }
  const managers = node.members.filter(m => m.role === "과장");
  const workers  = node.members.filter(m => m.role === "담당자");
  let html = "";
  if (managers.length) {
    html += `<div class="member-group">
      <div class="member-group__head"><span class="krds-badge outline-primary">과장</span></div>
      <ul class="member-list">${managers.map(memberCardHTML).join("")}</ul>
    </div>`;
  }
  if (workers.length) {
    html += `<div class="member-group">
      <div class="member-group__head">
        <span class="krds-badge outline-secondary">담당자</span>
        <span class="member-group__count">(${workers.length}명)</span>
      </div>
      <ul class="member-list">${workers.map(memberCardHTML).join("")}</ul>
    </div>`;
  }
  memberSection.innerHTML = html;
}

/* 과 단위 연계과제 */
function attachTaskNav(containerEl, flatTasks) {
  containerEl.querySelectorAll('.task-card').forEach((card, i) => {
    const t = flatTasks[i];
    if (!t) return;
    card.addEventListener('click', () => {
      sessionStorage.setItem('krds_selected_task', JSON.stringify(t));
      window.location.href = '/resources/pages/operating-detail.html';
    });
  });
}

function renderLeafTasks(node) {
  const taskList = document.getElementById("taskList");
  if (!taskList) return;
  taskList.classList.remove("task-list--grouped");
  if (node.tasks && node.tasks.length) {
    taskList.innerHTML = node.tasks.map(taskCardHTML).join("");
    attachTaskNav(taskList, node.tasks);
  } else {
    taskList.innerHTML = `<li class="task-empty">등록된 연계과제가 없습니다.</li>`;
  }
}

/* 실/관 단위 — 하위 조직 카드 개요 */
function renderParentMembers(node) {
  const memberSection = document.querySelector(".member-section");
  if (!memberSection) return;

  const isDepth0 = node._depth === 0;
  const childLabel = isDepth0 ? "관" : "과";
  const totalTasks = getAllLeaves(node).reduce((s, l) => s + (l.tasks ? l.tasks.length : 0), 0);

  const statsHtml = `<div class="org-stats">
    <span class="org-stat"><b>${node.children.length}</b>개 ${childLabel}</span>
    <span class="org-stat__sep">·</span>
    <span class="org-stat"><b>${node.head}</b>명</span>
    <span class="org-stat__sep">·</span>
    <span class="org-stat">연계과제 <b>${totalTasks}</b>건</span>
  </div>`;

  const cardsHtml = node.children.map(child => {
    if (isDepth0) {
      // 실 → 관 카드: 하위 과 이름 목록
      const subNames = child.children
        ? child.children.map(g => escapeHtml(g.name)).join(' · ')
        : '';
      return `<div class="child-card" data-child-id="${child._id}" role="button" tabindex="0">
        <div class="child-card__body">
          <p class="child-card__name">${escapeHtml(child.name)}</p>
          <p class="child-card__sub">${subNames}</p>
        </div>
        <div class="child-card__right">
          <span class="krds-badge small bg-light-gray">총 ${child.head}명</span>
          <span class="child-card__arrow">${arrowSVG}</span>
        </div>
      </div>`;
    } else {
      // 관 → 과 카드: 과장 이름
      const manager = child.members ? child.members.find(m => m.role === "과장") : null;
      const managerInfo = manager ? `과장 · ${escapeHtml(manager.name)}` : '';
      return `<div class="child-card" data-child-id="${child._id}" role="button" tabindex="0">
        <div class="child-card__body">
          <p class="child-card__name">${escapeHtml(child.name)}</p>
          ${managerInfo ? `<p class="child-card__sub">${managerInfo}</p>` : ''}
        </div>
        <div class="child-card__right">
          <span class="krds-badge small bg-light-gray">총 ${child.head}명</span>
          <span class="child-card__arrow">${arrowSVG}</span>
        </div>
      </div>`;
    }
  }).join('');

  memberSection.innerHTML = statsHtml + `<div class="child-grid">${cardsHtml}</div>`;

  memberSection.querySelectorAll('.child-card').forEach(card => {
    const childNode = findNodeById(card.dataset.childId);
    if (!childNode) return;
    card.addEventListener('click', () => selectNode(childNode));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectNode(childNode); }
    });
  });
}

/* 실/관 단위 — 하위 과제 집계 (과별 그룹) */
function renderParentTasks(node) {
  const taskList = document.getElementById("taskList");
  if (!taskList) return;

  const grouped = getAllLeaves(node).filter(l => l.tasks && l.tasks.length);
  taskList.classList.toggle("task-list--grouped", grouped.length > 0);

  if (!grouped.length) {
    taskList.innerHTML = `<li class="task-empty">등록된 연계과제가 없습니다.</li>`;
    return;
  }

  taskList.innerHTML = grouped.map(leaf => `
    <li class="task-group">
      <div class="task-group__head">
        <span class="task-group__name">${escapeHtml(leaf.name)}</span>
        <span class="krds-badge small bg-light-gray">${leaf.tasks.length}건</span>
      </div>
      <ul class="task-list task-list--nested">
        ${leaf.tasks.map(taskCardHTML).join('')}
      </ul>
    </li>
  `).join('');

  const flatTasks = grouped.flatMap(leaf => leaf.tasks);
  attachTaskNav(taskList, flatTasks);
}

/* ---- 검색 ---- */
function applySearch(q) {
  q = q.trim().toLowerCase();
  clear.classList.toggle("is-visible", q.length > 0);

  const allNodes = tree.querySelectorAll(".nav-node");

  if (!q) {
    allNodes.forEach(li => {
      li.style.display = "";
      li.classList.remove("is-open");
      if (li.hasAttribute("aria-expanded")) li.setAttribute("aria-expanded", "false");
      restoreLabel(li);
    });
    const firstSil = tree.querySelector(".nav-node--depth0");
    if (firstSil) { firstSil.classList.add("is-open"); firstSil.setAttribute("aria-expanded", "true"); }
    empty.classList.remove("is-visible");
    return;
  }

  let anyMatch = false;
  allNodes.forEach(li => {
    const name      = li.dataset.name.toLowerCase();
    const selfMatch = name.includes(q);
    const descMatch = [...li.querySelectorAll(".nav-node")].some(d => d.dataset.name.toLowerCase().includes(q));

    if (selfMatch || descMatch) {
      li.style.display = "";
      if (li.hasAttribute("aria-expanded")) {
        li.classList.add("is-open");
        li.setAttribute("aria-expanded", "true");
      }
      highlightLabel(li, q, selfMatch);
      anyMatch = true;
    } else {
      li.style.display = "none";
      restoreLabel(li);
    }
  });

  empty.classList.toggle("is-visible", !anyMatch);
}

function highlightLabel(li, q, match) {
  const label = li.querySelector(":scope > .nav-node__row > .nav-node__label");
  const name  = li.dataset.name;
  if (match) {
    const i = name.toLowerCase().indexOf(q);
    label.innerHTML =
      escapeHtml(name.slice(0, i)) +
      '<mark class="nav-mark">' + escapeHtml(name.slice(i, i + q.length)) + '</mark>' +
      escapeHtml(name.slice(i + q.length));
  } else {
    label.textContent = name;
  }
}

function restoreLabel(li) {
  const label = li.querySelector(":scope > .nav-node__row > .nav-node__label");
  if (label) label.textContent = li.dataset.name;
}

/* ---- 초기화: 조직도 페이지 ---- */
if (tree) {
  const builtUl = renderNodes(ORG);
  while (builtUl.firstChild) { tree.appendChild(builtUl.firstChild); }

  const firstSil = tree.querySelector(".nav-node--depth0");
  if (firstSil) {
    toggle(firstSil);
    const firstSilRow = firstSil.querySelector(":scope > .nav-node__row");
    activateNode(firstSil, firstSilRow, ORG[0]);
  }

  summary.innerHTML = '<b>' + TOTAL_SIL + '</b>개 실 · <b>' + TOTAL_HEAD + '</b>명';

  search.addEventListener("input",  e => applySearch(e.target.value));
  clear.addEventListener("click", () => { search.value = ""; applySearch(""); search.focus(); });
}

/* ---- 초기화: 업무 페이지 ---- */
const operatingTaskList = document.getElementById("operatingTaskList");
if (operatingTaskList) {
  const allLeaves         = ORG.flatMap(sil => getAllLeaves(sil)).filter(l => l.tasks && l.tasks.length);
  const PAGE_SIZE         = 10;
  let filteredTasks       = [];
  let currentPage         = 1;
  let currentStatusFilter = 'all';

  const pagination = document.querySelector('.krds-pagination');
  const pageLinks  = pagination?.querySelector('.page-links');
  const prevNav    = pagination?.querySelector('.page-navi.prev');
  const nextNav    = pagination?.querySelector('.page-navi.next');

  /* ---- 페이지 렌더 ---- */
  function renderPage() {
    const totalPages = Math.max(1, Math.ceil(filteredTasks.length / PAGE_SIZE));
    const slice = filteredTasks.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

    operatingTaskList.className = 'task-list';
    operatingTaskList.innerHTML = slice.length
      ? slice.map(taskCardHTML).join('')
      : '<li class="task-empty">해당하는 업무가 없습니다.</li>';

    if (slice.length) {
      operatingTaskList.querySelectorAll('.task-card').forEach((card, i) => {
        card.addEventListener('click', () => {
          sessionStorage.setItem('krds_selected_task', JSON.stringify(slice[i]));
          window.location.href = '/resources/pages/operating-detail.html';
        });
      });
    }

    if (prevNav) prevNav.classList.toggle('disabled', currentPage === 1);
    if (nextNav) nextNav.classList.toggle('disabled', currentPage >= totalPages);

    if (!pageLinks) return;
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('…');
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) pages.push(i);
      if (currentPage < totalPages - 2) pages.push('…');
      pages.push(totalPages);
    }
    pageLinks.innerHTML = pages.map(p =>
      p === '…'
        ? '<span class="page-link link-dot"></span>'
        : `<a class="page-link${p === currentPage ? ' active' : ''}" href="#" data-page="${p}">${p === currentPage ? '<span class="sr-only">현재페이지 </span>' : ''}${p}</a>`
    ).join('');
  }

  /* ---- 통합 필터 ---- */
  function applyFilters() {
    const teamVal  = document.getElementById('filterTeam')?.value || '';
    const rawStart = document.getElementById('filterDateStart')?.value || '';
    const rawEnd   = document.getElementById('filterDateEnd')?.value || '';
    const startVal = rawStart.replace(/\./g, '-');  // KRDS sets "YYYY.MM.DD" → compare as "YYYY-MM-DD"
    const endVal   = rawEnd.replace(/\./g, '-');

    let tasks = allLeaves.flatMap(leaf =>
      (teamVal && leaf.name !== teamVal) ? [] : leaf.tasks
    );
    if (currentStatusFilter !== 'all') tasks = tasks.filter(t => t.status === currentStatusFilter);
    if (startVal || endVal) {
      tasks = tasks.filter(t => {
        const afterStart = !startVal || t.end >= startVal;
        const beforeEnd  = !endVal   || t.start <= endVal;
        return afterStart && beforeEnd;
      });
    }

    filteredTasks = tasks.sort((a, b) => a.start < b.start ? -1 : a.start > b.start ? 1 : 0);
    currentPage = 1;
    renderPage();
  }

  /* ---- 팀 선택 ---- */
  const teamSelect   = document.getElementById('filterTeam');
  const teamDropdown = document.getElementById('filterTeamDd');
  if (teamSelect) {
    allLeaves.forEach(leaf => {
      const opt = document.createElement('option');
      opt.value = leaf.name;
      opt.textContent = leaf.name;
      teamSelect.appendChild(opt);
      if (teamDropdown) {
        const div = document.createElement('div');
        div.className = 'dropdown-item';
        div.textContent = leaf.name;
        div.onclick = () => selectFilterTeam(div, leaf.name);
        teamDropdown.appendChild(div);
      }
    });
    teamSelect.addEventListener('change', applyFilters);
  }

  /* ---- 날짜 input 클릭 시 달력 열기 ---- */
  const calTriggerBtn = document.querySelector('.calendar-conts .form-btn-datepicker');
  ['filterDateStart', 'filterDateEnd'].forEach(id => {
    document.getElementById(id)?.addEventListener('click', () => calTriggerBtn?.click());
  });

  /* ---- KRDS 기간 선택: 확인 클릭 후 필터 적용 ---- */
  const calConfirmBtn = document.querySelector('.krds-calendar-area .calendar-btn-wrap .krds-btn.primary');
  if (calConfirmBtn) {
    calConfirmBtn.addEventListener('click', () => setTimeout(applyFilters, 0));
  }

  /* ---- 날짜 초기화 ---- */
  document.getElementById('calDateReset')?.addEventListener('click', () => {
    const start = document.getElementById('filterDateStart');
    const end   = document.getElementById('filterDateEnd');
    if (start) start.value = '';
    if (end)   end.value   = '';
    applyFilters();
  });

  /* ---- 탭 ---- */
  applyFilters();

  document.querySelectorAll('.tab-bar .tab[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-bar .tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentStatusFilter = btn.dataset.filter;
      applyFilters();
    });
  });

  /* ---- 페이지네이션 ---- */
  if (pagination) {
    pagination.addEventListener('click', e => {
      e.preventDefault();
      const totalPages = Math.max(1, Math.ceil(filteredTasks.length / PAGE_SIZE));
      const link = e.target.closest('[data-page]');
      if (link) {
        currentPage = parseInt(link.dataset.page, 10);
      } else if (e.target.closest('.page-navi.prev:not(.disabled)')) {
        currentPage = Math.max(1, currentPage - 1);
      } else if (e.target.closest('.page-navi.next:not(.disabled)')) {
        currentPage = Math.min(totalPages, currentPage + 1);
      } else {
        return;
      }
      renderPage();
    });
  }
}

/* ---- 조직도 뷰 ---- */

const ocCanvas  = document.getElementById('ocCanvas');
const ocGrid    = document.getElementById('ocGrid');
const ocLines   = document.getElementById('ocLines');
const ocWrapper = document.getElementById('ocWrapper');

/* 레이아웃 상수 */
const BOX_W = 144;
const BOX_H = 64;
const H_GAP = 24;   // 같은 레벨 박스 간 수평 간격
const V_GAP = 80;   // 레벨 간 수직 간격
const PAD   = 56;   // 캔버스 외부 여백

/* zoom / pan 상태 */
let ocScale = 1;
let ocTx = 0, ocTy = 0;

function updateOcTransform() {
  ocCanvas.style.transform = `translate(${ocTx}px,${ocTy}px) scale(${ocScale})`;
  const el = document.getElementById('ocZoomLevel');
  if (el) el.textContent = Math.round(ocScale * 100) + '%';
}

function zoomAt(factor, cx, cy) {
  const s = Math.max(0.15, Math.min(3, ocScale * factor));
  ocTx = cx - (cx - ocTx) * (s / ocScale);
  ocTy = cy - (cy - ocTy) * (s / ocScale);
  ocScale = s;
  updateOcTransform();
}

function fitOrgChart(cw, ch) {
  const ww = ocWrapper.offsetWidth;
  const wh = ocWrapper.offsetHeight;
  ocScale = Math.max(0.15, Math.min(1, Math.min(ww / (cw + 80), wh / (ch + 80)) * 0.92));
  ocTx = (ww - cw * ocScale) / 2;
  ocTy = (wh - ch * ocScale) / 2;
  updateOcTransform();
}

/* 각 노드의 leaf 컬럼 번호 (1-based) */
const colMap = new Map();

function assignColumns(node, col) {
  if (!node.children || node.children.length === 0) {
    colMap.set(node._id, { start: col, end: col });
    return col + 1;
  }
  const start = col;
  let next = col;
  for (const c of node.children) next = assignColumns(c, next);
  colMap.set(node._id, { start, end: next - 1 });
  return next;
}

/* 절대 좌표 계산 */
function calcPositions() {
  const pos = new Map();

  function calc(node, depth) {
    const isLeaf = !node.children || node.children.length === 0;
    if (isLeaf) {
      const col = colMap.get(node._id).start;
      pos.set(node._id, {
        x: PAD + (col - 1) * (BOX_W + H_GAP),
        y: PAD + depth * (BOX_H + V_GAP)
      });
      return;
    }
    for (const child of node.children) calc(child, depth + 1);
    const fc = pos.get(node.children[0]._id);
    const lc = pos.get(node.children[node.children.length - 1]._id);
    pos.set(node._id, {
      x: fc.x + (lc.x + BOX_W - fc.x) / 2 - BOX_W / 2,
      y: PAD + depth * (BOX_H + V_GAP)
    });
  }

  for (const sil of ORG) calc(sil, 0);
  return pos;
}

function buildOrgChart() {
  colMap.clear();
  let col = 1;
  for (const sil of ORG) col = assignColumns(sil, col);
  const leafCount = col - 1;
  const maxDepth  = 2;

  const canvasW = PAD * 2 + leafCount * (BOX_W + H_GAP) - H_GAP;
  const canvasH = PAD * 2 + maxDepth  * (BOX_H + V_GAP);

  ocCanvas.style.width  = canvasW + 'px';
  ocCanvas.style.height = canvasH + 'px';
  ocLines.style.width   = canvasW + 'px';
  ocLines.style.height  = canvasH + 'px';
  ocLines.setAttribute('viewBox', `0 0 ${canvasW} ${canvasH}`);

  const positions = calcPositions();
  ocGrid.innerHTML  = '';
  ocLines.innerHTML = '';

  /* 모든 노드 수집 */
  const allNodes = [];
  (function collect(nodes) {
    for (const n of nodes) {
      allNodes.push(n);
      if (n.children) collect(n.children);
    }
  })(ORG);

  /* 박스 렌더 */
  for (const n of allNodes) {
    const p = positions.get(n._id);
    const isLeaf = !n.children || n.children.length === 0;

    const box = document.createElement('div');
    box.className = 'oc-box oc-box--depth' + n._depth + (isLeaf ? ' oc-box--leaf' : '');
    box.dataset.id = n._id;
    box.style.left = p.x + 'px';
    box.style.top  = p.y + 'px';

    const label = isLeaf
      ? `<span class="oc-badge oc-badge--leaf">${n._depth === 2 ? '과' : '관'}</span>`
      : (n._depth === 0
          ? `<span class="oc-badge oc-badge--sil">실</span>`
          : `<span class="oc-badge oc-badge--gwan">관</span>`);

    box.innerHTML =
      `<div class="oc-box__inner">
         ${label}
         <span class="oc-box__name">${escapeHtml(n.name)}</span>
       </div>
       <span class="oc-box__count">${n.head}명</span>`;

    box.addEventListener('click', () => { switchView('list'); selectNode(n); });
    ocGrid.appendChild(box);
  }

  /* SVG 연결선 */
  for (const n of allNodes) {
    if (!n.children) continue;
    const pp = positions.get(n._id);
    const px = pp.x + BOX_W / 2;
    const py = pp.y + BOX_H;

    for (const child of n.children) {
      const cp = positions.get(child._id);
      const cx = cp.x + BOX_W / 2;
      const cy = cp.y;
      const my = py + (cy - py) * 0.45;

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', `M${px},${py} C${px},${my} ${cx},${my} ${cx},${cy}`);
      path.setAttribute('class', 'oc-line');
      ocLines.appendChild(path);
    }
  }

  fitOrgChart(canvasW, canvasH);
}

/* 사이드 네비게이션 선택 노드를 조직도에서 중앙 줌 인 */
function navigateOrgChartTo(node) {
  const box = ocGrid.querySelector('[data-id="' + node._id + '"]');
  if (!box) return;

  const bx = parseFloat(box.style.left) + BOX_W / 2;
  const by = parseFloat(box.style.top)  + BOX_H / 2;

  const TARGET_SCALES = [0.85, 1.2, 1.6];
  const targetScale = Math.max(0.15, Math.min(3, TARGET_SCALES[node._depth] !== undefined ? TARGET_SCALES[node._depth] : 1.2));

  const ww = ocWrapper.offsetWidth;
  const wh = ocWrapper.offsetHeight;

  ocScale = targetScale;
  ocTx = ww / 2 - bx * ocScale;
  ocTy = wh / 2 - by * ocScale;

  ocCanvas.style.transition = 'transform 0.45s cubic-bezier(0.4,0,0.2,1)';
  updateOcTransform();
  setTimeout(() => { ocCanvas.style.transition = ''; }, 500);

  ocGrid.querySelectorAll('.oc-box--selected').forEach(b => b.classList.remove('oc-box--selected'));
  box.classList.add('oc-box--selected');
}

/* 뷰 전환 */
function switchView(view) {
  currentView = view;
  const listBtn   = document.getElementById('btnListView');
  const orgBtn    = document.getElementById('btnOrgView');
  const listPanel = document.getElementById('listViewContent');
  const orgPanel  = document.getElementById('orgChartPanel');
  const contents  = document.querySelector('.organization-contents');

  if (view === 'org') {
    listPanel.style.display = 'none';
    orgPanel.style.display  = 'block';
    contents.classList.add('is-orgchart');
    listBtn.classList.remove('is-active');
    orgBtn.classList.add('is-active');
    buildOrgChart();
    if (selectedId) {
      const sel = findNodeById(selectedId);
      if (sel) navigateOrgChartTo(sel);
    }
  } else {
    orgPanel.style.display  = 'none';
    listPanel.style.display = 'block';
    contents.classList.remove('is-orgchart');
    orgBtn.classList.remove('is-active');
    listBtn.classList.add('is-active');
    if (selectedId) {
      const sel = findNodeById(selectedId);
      if (sel) renderContent(sel);
    }
  }
}

document.getElementById('btnListView')?.addEventListener('click', () => switchView('list'));
document.getElementById('btnOrgView')?.addEventListener('click',  () => switchView('org'));

/* 줌 / 팬 이벤트 (최초 한 번만) */
if (ocWrapper) (function initOcEvents() {
  /* 마우스 휠 줌 */
  ocWrapper.addEventListener('wheel', e => {
    e.preventDefault();
    const r = ocWrapper.getBoundingClientRect();
    zoomAt(e.deltaY < 0 ? 1.12 : 1 / 1.12, e.clientX - r.left, e.clientY - r.top);
  }, { passive: false });

  /* 드래그 팬 */
  let drag = null;
  ocWrapper.addEventListener('mousedown', e => {
    if (e.button !== 0 || e.target.closest('.oc-box') || e.target.closest('.oc-controls')) return;
    drag = { mx: e.clientX, my: e.clientY, tx: ocTx, ty: ocTy };
    ocWrapper.classList.add('is-dragging');
  });
  window.addEventListener('mousemove', e => {
    if (!drag) return;
    ocTx = drag.tx + (e.clientX - drag.mx);
    ocTy = drag.ty + (e.clientY - drag.my);
    updateOcTransform();
  });
  window.addEventListener('mouseup', () => {
    drag = null;
    ocWrapper.classList.remove('is-dragging');
  });

  /* 터치 팬/핀치 줌 */
  let lastT = null;
  ocWrapper.addEventListener('touchstart', e => { lastT = e.touches; }, { passive: true });
  ocWrapper.addEventListener('touchmove', e => {
    e.preventDefault();
    if (e.touches.length === 1 && lastT.length === 1) {
      ocTx += e.touches[0].clientX - lastT[0].clientX;
      ocTy += e.touches[0].clientY - lastT[0].clientY;
      updateOcTransform();
    } else if (e.touches.length === 2 && lastT.length >= 2) {
      const prev = Math.hypot(lastT[0].clientX - lastT[1].clientX, lastT[0].clientY - lastT[1].clientY);
      const curr = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
      const r = ocWrapper.getBoundingClientRect();
      const cx = (e.touches[0].clientX + e.touches[1].clientX) / 2 - r.left;
      const cy = (e.touches[0].clientY + e.touches[1].clientY) / 2 - r.top;
      if (prev > 0) zoomAt(curr / prev, cx, cy);
    }
    lastT = e.touches;
  }, { passive: false });

  /* 버튼 */
  document.getElementById('ocZoomIn').addEventListener('click',  () => zoomAt(1.25, ocWrapper.offsetWidth / 2, ocWrapper.offsetHeight / 2));
  document.getElementById('ocZoomOut').addEventListener('click', () => zoomAt(1 / 1.25, ocWrapper.offsetWidth / 2, ocWrapper.offsetHeight / 2));
  document.getElementById('ocFit').addEventListener('click', () => {
    const cw = parseInt(ocCanvas.style.width)  || 800;
    const ch = parseInt(ocCanvas.style.height) || 400;
    fitOrgChart(cw, ch);
  });
})();

/* ---- 초기화: 업무 캘린더 페이지 ---- */
const ocWeeksEl = document.querySelector('.oc-weeks');
if (ocWeeksEl) {
  const calLeaves = ORG.flatMap(sil => getAllLeaves(sil)).filter(l => l.tasks && l.tasks.length);
  const calTasks  = calLeaves.flatMap(leaf => leaf.tasks.map(t => Object.assign({}, t, { dept: leaf.name })));

  const CAL_CHIP = { progress: 'chip-blue', done: 'chip-green', wait: 'chip-orange' };
  const DAY_KO   = ['일', '월', '화', '수', '목', '금', '토'];
  const todayKey = (function() {
    const n = new Date();
    return n.getFullYear() + '-' + String(n.getMonth() + 1).padStart(2, '0') + '-' + String(n.getDate()).padStart(2, '0');
  })();

  let calDate = new Date();
  let calView = 'month';

  function toKey(d) {
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }

  function buildTaskMap() {
    const map = {};
    calTasks.forEach(t => { if (!map[t.end]) map[t.end] = []; map[t.end].push(t); });
    return map;
  }

  function getWeekMonday(d) {
    const c = new Date(d);
    c.setDate(c.getDate() - (c.getDay() + 6) % 7);
    return c;
  }

  function makeChip(t, extraClass) {
    const idx = calTasks.indexOf(t);
    return `<div class="oc-chip ${CAL_CHIP[t.status] || 'chip-blue'}${extraClass ? ' ' + extraClass : ''}" data-task-i="${idx}" title="${escapeHtml(t.dept + ' · ' + t.owner)}">` +
      `<span class="chip-dot"></span><span class="chip-name">${escapeHtml(t.title)}</span></div>`;
  }

  /* ── Month ── */
  function renderCalMonth() {
    const y = calDate.getFullYear(), m = calDate.getMonth();
    const first = new Date(y, m, 1);
    const cells = [];
    for (let i = (first.getDay() + 6) % 7; i > 0; i--)
      cells.push({ d: new Date(y, m, 1 - i), other: true });
    const days = new Date(y, m + 1, 0).getDate();
    for (let i = 1; i <= days; i++)
      cells.push({ d: new Date(y, m, i), other: false });
    const tail = (7 - (cells.length % 7)) % 7;
    for (let i = 1; i <= tail; i++)
      cells.push({ d: new Date(y, m + 1, i), other: true });

    const taskMap = buildTaskMap();
    const MAX = 3;
    let html = '';
    for (let r = 0; r < cells.length; r += 7) {
      html += '<div class="oc-week-row">';
      for (let c = 0; c < 7; c++) {
        const { d, other } = cells[r + c];
        const key = toKey(d), isToday = key === todayKey;
        const ts  = taskMap[key] || [];
        const extra = Math.max(0, ts.length - MAX);
        html += `<div class="oc-cell${other ? ' other-month' : ''}${isToday ? ' today' : ''}">` +
          `<div class="oc-date-num${isToday ? ' today-circle' : ''}">${d.getDate()}</div>` +
          (ts.length ? `<div class="oc-events">${ts.slice(0, MAX).map(t => makeChip(t)).join('')}${extra ? `<button class="oc-more" data-key="${key}" type="button">+${extra} 더보기</button>` : ''}</div>` : '') +
          `</div>`;
      }
      html += '</div>';
    }
    ocWeeksEl.innerHTML = html;
  }

  /* ── Week ── */
  function renderCalWeek() {
    const mon = getWeekMonday(calDate);
    const taskMap = buildTaskMap();
    let hdr = '<div class="oc-week-col-headers">';
    let cols = '<div class="oc-week-cols">';
    for (let i = 0; i < 7; i++) {
      const d = new Date(mon); d.setDate(d.getDate() + i);
      const key = toKey(d), isToday = key === todayKey;
      const ts = taskMap[key] || [];
      hdr += `<div class="oc-week-col-header${isToday ? ' today' : ''}">` +
        `<span class="oc-wch-day">${DAY_KO[d.getDay()]}</span>` +
        `<span class="oc-wch-date${isToday ? ' today-circle' : ''}">${d.getDate()}</span></div>`;
      cols += `<div class="oc-week-col${isToday ? ' today' : ''}">${ts.map(t => makeChip(t, 'oc-chip--block')).join('')}</div>`;
    }
    hdr += '</div>'; cols += '</div>';
    ocWeeksEl.innerHTML = '<div class="oc-view-week">' + hdr + cols + '</div>';
  }

  /* ── Day ── */
  function renderCalDay() {
    const ts = (buildTaskMap()[toKey(calDate)] || []);
    let html = '<div class="oc-view-day">';
    if (ts.length) {
      html += ts.map(t =>
        `<div class="oc-day-task ${CAL_CHIP[t.status] || 'chip-blue'}">` +
          `<span class="chip-dot oc-day-dot"></span>` +
          `<div class="oc-day-task__info">` +
            `<span class="oc-day-task__title">${escapeHtml(t.title)}</span>` +
            `<span class="oc-day-task__meta">${escapeHtml(t.dept)} · ${escapeHtml(t.owner)}</span>` +
          `</div></div>`
      ).join('');
    } else {
      html += '<div class="oc-day-empty">이 날 마감되는 업무가 없습니다.</div>';
    }
    ocWeeksEl.innerHTML = html + '</div>';
  }

  /* ── Label ── */
  function updateLabel() {
    const el = document.querySelector('.oc-month-label');
    if (!el) return;
    if (calView === 'month') {
      el.textContent = calDate.getFullYear() + '년 ' + (calDate.getMonth() + 1) + '월';
    } else if (calView === 'week') {
      const mon = getWeekMonday(calDate);
      const sun = new Date(mon); sun.setDate(sun.getDate() + 6);
      const m1 = mon.getMonth() + 1, d1 = mon.getDate();
      const m2 = sun.getMonth() + 1, d2 = sun.getDate();
      el.textContent = calDate.getFullYear() + '년 ' +
        (m1 === m2 ? `${m1}월 ${d1}–${d2}일` : `${m1}월 ${d1}일 – ${m2}월 ${d2}일`);
    } else {
      el.textContent = calDate.getFullYear() + '년 ' + (calDate.getMonth() + 1) + '월 ' +
        calDate.getDate() + '일 (' + DAY_KO[calDate.getDay()] + ')';
    }
  }

  /* ── Render dispatcher ── */
  function render() {
    updateLabel();
    if (calView === 'week')      renderCalWeek();
    else if (calView === 'day')  renderCalDay();
    else                         renderCalMonth();
  }

  /* ── Navigation ── */
  document.querySelectorAll('.oc-nav-btn').forEach((btn, i) => {
    btn.addEventListener('click', () => {
      const dir = i === 0 ? -1 : 1;
      if (calView === 'month') {
        calDate = new Date(calDate.getFullYear(), calDate.getMonth() + dir, 1);
      } else if (calView === 'week') {
        calDate = new Date(calDate); calDate.setDate(calDate.getDate() + dir * 7);
      } else {
        calDate = new Date(calDate); calDate.setDate(calDate.getDate() + dir);
      }
      render();
    });
  });

  /* ── View selector ── */
  document.querySelectorAll('.oc-view-selector button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.oc-view-selector button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const txt = btn.textContent.trim().toLowerCase();
      calView = txt === 'day' ? 'day' : txt === 'week' ? 'week' : 'month';
      render();
    });
  });

  render();

  /* ── 더보기 팝업 ── */
  const DAY_KO_POPUP = ['일', '월', '화', '수', '목', '금', '토'];

  const popupOverlay = document.createElement('div');
  popupOverlay.id = 'oc-day-popup';
  popupOverlay.className = 'oc-popup-overlay';
  popupOverlay.hidden = true;
  popupOverlay.setAttribute('role', 'dialog');
  popupOverlay.setAttribute('aria-modal', 'true');
  popupOverlay.setAttribute('aria-labelledby', 'oc-popup-title');
  popupOverlay.innerHTML =
    `<div class="oc-popup">
      <div class="oc-popup__head">
        <h2 class="oc-popup__title" id="oc-popup-title"></h2>
        <button class="oc-popup__close" aria-label="닫기">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
      <ul class="oc-popup__body" id="oc-popup-body"></ul>
    </div>`;
  document.body.appendChild(popupOverlay);

  function openDayPopup(key) {
    const tasks = buildTaskMap()[key] || [];
    const [y, m, d] = key.split('-').map(Number);
    const dayName = DAY_KO_POPUP[new Date(y, m - 1, d).getDay()];

    document.getElementById('oc-popup-title').innerHTML =
      escapeHtml(m + '월 ' + d + '일 (' + dayName + ')') +
      `<span class="oc-popup__count">총 ${tasks.length}건</span>`;

    document.getElementById('oc-popup-body').innerHTML = tasks.map(t => {
      const chipCls = CAL_CHIP[t.status] || 'chip-blue';
      const idx = calTasks.indexOf(t);
      return `<li class="oc-popup-task" data-task-i="${idx}" style="cursor:pointer">
        <span class="oc-popup-task__dot ${chipCls}"></span>
        <div class="oc-popup-task__info">
          <div class="oc-popup-task__head">
            <span class="${STATUS_CLASS[t.status]}">${STATUS_LABEL[t.status]}</span>
            <span class="oc-popup-task__title">${escapeHtml(t.title)}</span>
          </div>
          <div class="oc-popup-task__meta">
            <span class="oc-popup-task__dept">${escapeHtml(t.dept)}</span>
            <span class="oc-popup-task__sep">·</span>
            <span class="oc-popup-task__owner">${escapeHtml(t.owner)}</span>
            <span class="oc-popup-task__sep">·</span>
            <span class="oc-popup-task__date">${escapeHtml(t.start)} ~ ${escapeHtml(t.end)}</span>
          </div>
        </div>
      </li>`;
    }).join('');

    popupOverlay.hidden = false;
    document.body.style.overflow = 'hidden';
    popupOverlay.querySelector('.oc-popup__close').focus();
  }

  function closeDayPopup() {
    popupOverlay.hidden = true;
    document.body.style.overflow = '';
  }

  function goToDetail(t) {
    sessionStorage.setItem('krds_selected_task', JSON.stringify(t));
    window.location.href = '/resources/pages/operating-detail.html';
  }

  popupOverlay.querySelector('.oc-popup__close').addEventListener('click', closeDayPopup);
  popupOverlay.addEventListener('click', e => {
    if (e.target === popupOverlay) { closeDayPopup(); return; }
    const li = e.target.closest('.oc-popup-task[data-task-i]');
    if (li) { closeDayPopup(); goToDetail(calTasks[+li.dataset.taskI]); }
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !popupOverlay.hidden) closeDayPopup(); });

  ocWeeksEl.addEventListener('click', e => {
    const chip = e.target.closest('.oc-chip[data-task-i]');
    if (chip) { goToDetail(calTasks[+chip.dataset.taskI]); return; }
    const btn = e.target.closest('.oc-more');
    if (btn?.dataset.key) openDayPopup(btn.dataset.key);
  });
}

/* ---- 탭 전환 ---- */
document.querySelectorAll(".krds-tab-area.layer").forEach(tabArea => {
  const tabs   = tabArea.querySelectorAll(".tab > ul > li");
  const panels = tabArea.querySelectorAll(".tab-conts-wrap > .tab-conts");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const targetId = tab.getAttribute("aria-controls");

      tabs.forEach(t => { t.classList.remove("active"); t.setAttribute("aria-selected", "false"); });
      panels.forEach(p => p.classList.remove("active"));

      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      const panel = document.getElementById(targetId);
      if (panel) panel.classList.add("active");
    });
  });
});

/* ===== GNB 현재 페이지 active ===== */
function setGnbActive() {
  const path = window.location.pathname;
  document.querySelectorAll('.gnb-menu a.gnb-main-trigger').forEach(function (a) {
    const href = a.getAttribute('href') || '';
    const match =
      (href.includes('organization')   && path.includes('organization')) ||
      (href.includes('operating')      && path.includes('operating')) ||
      (href.includes('policy')         && path.includes('policy')) ||
      (href.includes('weekly-report')  && path.includes('weekly-report'));
    if (match) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    } else {
      a.classList.remove('active');
      a.removeAttribute('aria-current');
    }
  });
}
setGnbActive();
document.addEventListener('ui-include:done', setGnbActive);
