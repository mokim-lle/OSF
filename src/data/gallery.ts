/**
 * Gallery 活動資料設定檔
 * 新增活動時：在對應 theme 的 events 陣列加入一筆，imageCount 填照片張數
 * 照片命名規則：{folder}-01.jpg, {folder}-02.jpg, ...
 */

export interface GalleryEvent {
  id: string;           // 資料夾名稱 (對應 public/images/gallery/{theme}/{id}/)
  title: string;        // 活動名稱 (顯示用)
  year: string;         // 年份 (顯示用)，無年份填 ''
  imageCount: number;   // 照片張數
  coverIndex: number;   // 封面圖序號 (從 1 開始)
}

export interface GalleryTheme {
  key: string;          // 資料夾名稱 (exhibition / workshop / symposium)
  label: string;        // 頁籤文字 (中文)
  events: GalleryEvent[];
}

export const galleryData: GalleryTheme[] = [
  {
    key: 'exhibition',
    label: '牙材展',
    events: [
      {
        id: '2024-taipei-dental-expo',
        title: 'OSF 大台北牙材展',
        year: '2024',
        imageCount: 0,   // ← 照片放好後改成實際張數
        coverIndex: 1,
      },
      {
        id: '2023-taipei-dental-expo',
        title: 'OSF 大台北牙材展',
        year: '2023',
        imageCount: 40,  // ← 你目前的 40 張
        coverIndex: 1,
      },
    ],
  },
  {
    key: 'workshop',
    label: '課程工作坊',
    events: [
      {
        id: '2026-osseofuse-immediate-implant-and-dinner',
        title: 'OsseoFuse 英文即拔即植課程 + 會員交流晚宴',
        year: '2026',
        imageCount: 0,
        coverIndex: 1,
      },
      {
        id: '2023-osseofuse-sinus-course',
        title: 'OsseoFuse 陳俊龍博士 口鼻相通課程',
        year: '2023',
        imageCount: 0,
        coverIndex: 1,
      },
    ],
  },
  {
    key: 'symposium',
    label: '學術研討',
    events: [
      {
        id: '2026-osseofuse-12-whats',
        title: 'OsseoFuse 陳俊龍博士 12個What 分享',
        year: '2026',
        imageCount: 0,
        coverIndex: 1,
      },
      {
        id: '2025-taichung-dental-case-sharing',
        title: 'OSF 台中牙醫師公會案例分享',
        year: '2025',
        imageCount: 0,
        coverIndex: 1,
      },
      {
        id: 'osseofuse-member-lecturer-sharing',
        title: 'OsseoFuse 一鑽植牙會員講師使用分享',
        year: '',
        imageCount: 0,
        coverIndex: 1,
      },
    ],
  },
];

/** 取得某活動的圖片 URL 陣列 */
export function getEventImages(themeKey: string, event: GalleryEvent): string[] {
  if (event.imageCount === 0) return [];
  return Array.from({ length: event.imageCount }, (_, i) => {
    const index = String(i + 1).padStart(2, '0');
    return `/images/gallery/${themeKey}/${event.id}/${event.id}-${index}.jpg`;
  });
}

/** 取得全部照片 (合併所有主題) */
export function getAllImages(): { src: string; title: string; year: string }[] {
  const all: { src: string; title: string; year: string }[] = [];
  for (const theme of galleryData) {
    for (const event of theme.events) {
      const imgs = getEventImages(theme.key, event);
      for (const src of imgs) {
        all.push({ src, title: event.title, year: event.year });
      }
    }
  }
  return all;
}
