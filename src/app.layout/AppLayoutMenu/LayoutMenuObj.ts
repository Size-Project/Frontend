export const MenuObj: any = [
  { id: 'community', name: '커뮤니티' },
  { id: 'store', name: '스토어' },
  { id: 'experts', name: '인테리어시공' },
];

export const SubMenuObj: any = {
  community: [
    { id: 1, name: '홈', path: '/' },
    { id: 2, name: '팔로잉', path: '/' },
    { id: 3, name: '사진', path: '/' },
    { id: 4, name: '집들이', path: '/' },
    { id: 5, name: '노하우', path: '/' },
    { id: 6, name: '전문가집들이', path: '/' },
    { id: 7, name: '셀프가이드', path: '/' },
    { id: 8, name: '질문과답변', path: '/' },
    { id: 9, name: '이벤트', path: '/' },
  ],
  store: [
    { id: 10, name: '스토어홈', path: '/', subPath: '/production' },
    { id: 11, name: '카테고리', path: '/category', params: '?id=1' },
    // { id: 12, name: '베스트', path: '/' },
    // { id: 13, name: '오늘의딜', path: '/' },
    // { id: 14, name: '방한템특가', path: '/' },
    // { id: 15, name: '블프세일', path: '/' },
    // { id: 16, name: '지정일배송', path: '/' },
    // { id: 17, name: '프리미엄', path: '/' },
    // { id: 18, name: '기획전', path: '' },
  ],
  experts: [
    { id: 19, name: '시공업체 찾기', path: '/' },
    { id: 20, name: '간편상담신청', path: '/' },
    { id: 21, name: '견적계산', path: '/' },
    { id: 22, name: '설치/수리대행', path: '/' },
  ],
};
