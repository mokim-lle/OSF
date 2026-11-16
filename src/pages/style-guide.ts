/* ============================================================
   Style Guide 頁面 — 完整視覺化 Atoms Color 與 Typography
   ============================================================ */
import './style-guide.css';

export function styleGuidePage(): string {
  return `
    <div class="style-guide-container">
      <div class="sg-header">
        <span class="sg-badge">DESIGN SYSTEM</span>
        <h1>OSF 官網樣式規範 (Style Guide)</h1>
        <p>依據最新 UI/UX 設計稿標準建立之色彩 Atoms Color、排版階層 Typography 與按鈕規範。</p>
      </div>

      <!-- ==========================================
           SECTION 1: ATOMS COLOR
           ========================================== -->
      <section class="sg-section">
        <div class="sg-section-title">
          <small class="sublabel">Atoms</small>
          <h2>Color</h2>
        </div>

        <!-- 1. Ocean Blue -->
        <div class="color-palette-group">
          <div class="palette-header">
            <h3>Ocean Blue</h3>
            <span class="palette-desc">內容層級、切換反饋、品牌主色</span>
          </div>
          <div class="swatches-grid">
            <div class="swatch-item">
              <div class="swatch-box" style="background: #E7EDF5;"></div>
              <div class="swatch-info"><span class="level">50</span><span class="hex">E7EDF5</span></div>
            </div>
            <div class="swatch-item">
              <div class="swatch-box" style="background: #CEDBEC;"></div>
              <div class="swatch-info"><span class="level">100</span><span class="hex">CEDBEC</span></div>
            </div>
            <div class="swatch-item">
              <div class="swatch-box" style="background: #B5C9E3;"></div>
              <div class="swatch-info"><span class="level">200</span><span class="hex">B5C9E3</span></div>
            </div>
            <div class="swatch-item featured">
              <div class="swatch-box" style="background: #87ABD2;"></div>
              <div class="swatch-info">
                <span class="level">300</span>
                <span class="hex">87ABD2</span>
                <span class="role-badge">highlight<br/>裝飾色</span>
              </div>
            </div>
            <div class="swatch-item">
              <div class="swatch-box" style="background: #598DC1;"></div>
              <div class="swatch-info"><span class="level">400</span><span class="hex">598DC1</span></div>
            </div>
            <div class="swatch-item featured primary-focus">
              <div class="swatch-box" style="background: #2B6EB0;">
                <span class="star-icon">✦</span>
              </div>
              <div class="swatch-info">
                <span class="level">500</span>
                <span class="hex">2B6EB0</span>
                <span class="role-badge primary">brand-primary<br/>品牌預設</span>
              </div>
            </div>
            <div class="swatch-item">
              <div class="swatch-box" style="background: #25598E;"></div>
              <div class="swatch-info"><span class="level">600</span><span class="hex">25598E</span></div>
            </div>
            <div class="swatch-item featured">
              <div class="swatch-box" style="background: #1F446C;"></div>
              <div class="swatch-info">
                <span class="level">700</span>
                <span class="hex">1F446C</span>
                <span class="role-badge">brand-hover<br/>Hover</span>
              </div>
            </div>
            <div class="swatch-item featured">
              <div class="swatch-box" style="background: #1A2F4A;"></div>
              <div class="swatch-info">
                <span class="level">800</span>
                <span class="hex">1A2F4A</span>
                <span class="role-badge">brand-active<br/>背景/邊框點選</span>
              </div>
            </div>
            <div class="swatch-item">
              <div class="swatch-box" style="background: #14253A;"></div>
              <div class="swatch-info"><span class="level">900</span><span class="hex">14253A</span></div>
            </div>
            <div class="swatch-item featured">
              <div class="swatch-box" style="background: #0D1B2A;"></div>
              <div class="swatch-info">
                <span class="level">950</span>
                <span class="hex">0D1B2A</span>
                <span class="role-badge">bg-dark<br/>深底色</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 2. Steel Blue -->
        <div class="color-palette-group">
          <div class="palette-header">
            <h3>Steel Blue</h3>
            <span class="palette-desc">輔助色</span>
          </div>
          <div class="swatches-grid">
            <div class="swatch-item">
              <div class="swatch-box" style="background: #EDF3F7;"></div>
              <div class="swatch-info"><span class="level">50</span><span class="hex">EDF3F7</span></div>
            </div>
            <div class="swatch-item">
              <div class="swatch-box" style="background: #DDE7EE;"></div>
              <div class="swatch-info"><span class="level">100</span><span class="hex">DDE7EE</span></div>
            </div>
            <div class="swatch-item">
              <div class="swatch-box" style="background: #C1CFDB;"></div>
              <div class="swatch-info"><span class="level">200</span><span class="hex">C1CFDB</span></div>
            </div>
            <div class="swatch-item">
              <div class="swatch-box" style="background: #95ACC0;"></div>
              <div class="swatch-info"><span class="level">300</span><span class="hex">95ACC0</span></div>
            </div>
            <div class="swatch-item">
              <div class="swatch-box" style="background: #6989A5;"></div>
              <div class="swatch-info"><span class="level">400</span><span class="hex">6989A5</span></div>
            </div>
            <div class="swatch-item featured primary-focus">
              <div class="swatch-box" style="background: #3D668A;">
                <span class="star-icon">✦</span>
              </div>
              <div class="swatch-info">
                <span class="level">500</span>
                <span class="hex">3D668A</span>
                <span class="role-badge sec">sec<br/>系統預設</span>
              </div>
            </div>
            <div class="swatch-item">
              <div class="swatch-box" style="background: #2F4F6C;"></div>
              <div class="swatch-info"><span class="level">600</span><span class="hex">2F4F6C</span></div>
            </div>
            <div class="swatch-item featured">
              <div class="swatch-box" style="background: #22394E;"></div>
              <div class="swatch-info">
                <span class="level">700</span>
                <span class="hex">22394E</span>
                <span class="role-badge">sec-hover<br/>Hover</span>
              </div>
            </div>
            <div class="swatch-item featured">
              <div class="swatch-box" style="background: #152330;"></div>
              <div class="swatch-info">
                <span class="level">800</span>
                <span class="hex">152330</span>
                <span class="role-badge">sec-active<br/>背景/邊框點選</span>
              </div>
            </div>
            <div class="swatch-item">
              <div class="swatch-box" style="background: #080D12;"></div>
              <div class="swatch-info"><span class="level">900</span><span class="hex">080D12</span></div>
            </div>
            <div class="swatch-item">
              <div class="swatch-box" style="background: #05080B;"></div>
              <div class="swatch-info"><span class="level">950</span><span class="hex">05080B</span></div>
            </div>
          </div>
        </div>

        <!-- 3. Gray -->
        <div class="color-palette-group">
          <div class="palette-header">
            <h3>Gray</h3>
            <span class="palette-desc">內容層級、切換反饋、灰階中性色</span>
          </div>
          <div class="swatches-grid">
            <div class="swatch-item featured">
              <div class="swatch-box" style="background: #F2F2F7; border: 1px solid #E3E4E8;"></div>
              <div class="swatch-info">
                <span class="level">50</span>
                <span class="hex">F2F2F7</span>
                <span class="role-badge">bg-light<br/>淺底色</span>
              </div>
            </div>
            <div class="swatch-item featured">
              <div class="swatch-box" style="background: #E3E4E8;"></div>
              <div class="swatch-info">
                <span class="level">100</span>
                <span class="hex">E3E4E8</span>
                <span class="role-badge">board-light<br/>淺邊框</span>
              </div>
            </div>
            <div class="swatch-item">
              <div class="swatch-box" style="background: #CECFD4;"></div>
              <div class="swatch-info"><span class="level">200</span><span class="hex">CECFD4</span></div>
            </div>
            <div class="swatch-item featured">
              <div class="swatch-box" style="background: #ACAEB3;"></div>
              <div class="swatch-info">
                <span class="level">300</span>
                <span class="hex">ACAEB3</span>
                <span class="role-badge">board<br/>邊框</span>
              </div>
            </div>
            <div class="swatch-item featured">
              <div class="swatch-box" style="background: #8A8D92;"></div>
              <div class="swatch-info">
                <span class="level">400</span>
                <span class="hex">8A8D92</span>
                <span class="role-badge">Text-300<br/>補充說明</span>
              </div>
            </div>
            <div class="swatch-item">
              <div class="swatch-box" style="background: #686C71;"></div>
              <div class="swatch-info"><span class="level">500</span><span class="hex">686C71</span></div>
            </div>
            <div class="swatch-item featured primary-focus">
              <div class="swatch-box" style="background: #464B50;">
                <span class="star-icon">✦</span>
              </div>
              <div class="swatch-info">
                <span class="level">600</span>
                <span class="hex">464B50</span>
                <span class="role-badge primary">Text-200<br/>內文</span>
              </div>
            </div>
            <div class="swatch-item">
              <div class="swatch-box" style="background: #323539;"></div>
              <div class="swatch-info"><span class="level">700</span><span class="hex">323539</span></div>
            </div>
            <div class="swatch-item featured">
              <div class="swatch-box" style="background: #1E1F22;"></div>
              <div class="swatch-info">
                <span class="level">800</span>
                <span class="hex">1E1F22</span>
                <span class="role-badge">Text-100<br/>起始首篇/標題</span>
              </div>
            </div>
            <div class="swatch-item">
              <div class="swatch-box" style="background: #090A0B;"></div>
              <div class="swatch-info"><span class="level">900</span><span class="hex">090A0B</span></div>
            </div>
            <div class="swatch-item">
              <div class="swatch-box" style="background: #0D1B2A;"></div>
              <div class="swatch-info"><span class="level">950</span><span class="hex">0D1B2A</span></div>
            </div>
          </div>
        </div>

        <!-- 4. Green -->
        <div class="color-palette-group">
          <div class="palette-header">
            <h3>Green</h3>
            <span class="palette-desc">狀態成功、數值成長..</span>
          </div>
          <div class="swatches-grid">
            <div class="swatch-item">
              <div class="swatch-box" style="background: #EFF8F3;"></div>
              <div class="swatch-info"><span class="level">50</span><span class="hex">EFF8F3</span></div>
            </div>
            <div class="swatch-item">
              <div class="swatch-box" style="background: #D7F4E0;"></div>
              <div class="swatch-info"><span class="level">100</span><span class="hex">D7F4E0</span></div>
            </div>
            <div class="swatch-item featured">
              <div class="swatch-box" style="background: #B3E7C6;"></div>
              <div class="swatch-info">
                <span class="level">200</span>
                <span class="hex">B3E7C6</span>
                <span class="role-badge">Success-bg<br/>輕微底色</span>
              </div>
            </div>
            <div class="swatch-item">
              <div class="swatch-box" style="background: #81D4A4;"></div>
              <div class="swatch-info"><span class="level">300</span><span class="hex">81D4A4</span></div>
            </div>
            <div class="swatch-item">
              <div class="swatch-box" style="background: #4BDA7E;"></div>
              <div class="swatch-info"><span class="level">400</span><span class="hex">4BDA7E</span></div>
            </div>
            <div class="swatch-item">
              <div class="swatch-box" style="background: #1BB04F;"></div>
              <div class="swatch-info"><span class="level">500</span><span class="hex">1BB04F</span></div>
            </div>
            <div class="swatch-item featured primary-focus">
              <div class="swatch-box" style="background: #189D47;">
                <span class="star-icon">✦</span>
              </div>
              <div class="swatch-info">
                <span class="level">600</span>
                <span class="hex">189D47</span>
                <span class="role-badge success">Success<br/>系統預設</span>
              </div>
            </div>
            <div class="swatch-item">
              <div class="swatch-box" style="background: #166641;"></div>
              <div class="swatch-info"><span class="level">700</span><span class="hex">166641</span></div>
            </div>
            <div class="swatch-item featured">
              <div class="swatch-box" style="background: #11432D;"></div>
              <div class="swatch-info">
                <span class="level">800</span>
                <span class="hex">11432D</span>
                <span class="role-badge">Success-hover<br/>Hover</span>
              </div>
            </div>
            <div class="swatch-item featured">
              <div class="swatch-box" style="background: #0B261A;"></div>
              <div class="swatch-info">
                <span class="level">900</span>
                <span class="hex">0B261A</span>
                <span class="role-badge">Success-active<br/>背景/邊框點選</span>
              </div>
            </div>
            <div class="swatch-item">
              <div class="swatch-box" style="background: #2D313E;"></div>
              <div class="swatch-info"><span class="level">950</span><span class="hex">2D313E</span></div>
            </div>
          </div>
        </div>

        <!-- 5. Yellow -->
        <div class="color-palette-group">
          <div class="palette-header">
            <h3>Yellow</h3>
            <span class="palette-desc">警示警告、中度狀態、特賣..</span>
          </div>
          <div class="swatches-grid">
            <div class="swatch-item">
              <div class="swatch-box" style="background: #FFFCE8;"></div>
              <div class="swatch-info"><span class="level">50</span><span class="hex">FFFCE8</span></div>
            </div>
            <div class="swatch-item">
              <div class="swatch-box" style="background: #FFF5C5;"></div>
              <div class="swatch-info"><span class="level">100</span><span class="hex">FFF5C5</span></div>
            </div>
            <div class="swatch-item featured">
              <div class="swatch-box" style="background: #FFE685;"></div>
              <div class="swatch-info">
                <span class="level">200</span>
                <span class="hex">FFE685</span>
                <span class="role-badge">Warning-bg<br/>輕微底色</span>
              </div>
            </div>
            <div class="swatch-item">
              <div class="swatch-box" style="background: #FFDA46;"></div>
              <div class="swatch-info"><span class="level">300</span><span class="hex">FFDA46</span></div>
            </div>
            <div class="swatch-item">
              <div class="swatch-box" style="background: #FFC710;"></div>
              <div class="swatch-info"><span class="level">400</span><span class="hex">FFC710</span></div>
            </div>
            <div class="swatch-item featured primary-focus">
              <div class="swatch-box" style="background: #FFA900;">
                <span class="star-icon">✦</span>
              </div>
              <div class="swatch-info">
                <span class="level">500</span>
                <span class="hex">FFA900</span>
                <span class="role-badge warning">Warning<br/>系統預設</span>
              </div>
            </div>
            <div class="swatch-item featured">
              <div class="swatch-box" style="background: #E28100;"></div>
              <div class="swatch-info">
                <span class="level">600</span>
                <span class="hex">E28100</span>
                <span class="role-badge">Warning-hover<br/>Hover</span>
              </div>
            </div>
            <div class="swatch-item">
              <div class="swatch-box" style="background: #BB5620;"></div>
              <div class="swatch-info"><span class="level">700</span><span class="hex">BB5620</span></div>
            </div>
            <div class="swatch-item featured">
              <div class="swatch-box" style="background: #984406;"></div>
              <div class="swatch-info">
                <span class="level">800</span>
                <span class="hex">984406</span>
                <span class="role-badge">Warning-active<br/>背景/邊框點選</span>
              </div>
            </div>
            <div class="swatch-item">
              <div class="swatch-box" style="background: #7C3600;"></div>
              <div class="swatch-info"><span class="level">900</span><span class="hex">7C3600</span></div>
            </div>
            <div class="swatch-item">
              <div class="swatch-box" style="background: #4B1C00;"></div>
              <div class="swatch-info"><span class="level">950</span><span class="hex">4B1C00</span></div>
            </div>
          </div>
        </div>

        <!-- 6. Red -->
        <div class="color-palette-group">
          <div class="palette-header">
            <h3>Red</h3>
            <span class="palette-desc">重要警示、破壞性動作..</span>
          </div>
          <div class="swatches-grid">
            <div class="swatch-item">
              <div class="swatch-box" style="background: #FDF3F3;"></div>
              <div class="swatch-info"><span class="level">50</span><span class="hex">FDF3F3</span></div>
            </div>
            <div class="swatch-item">
              <div class="swatch-box" style="background: #F5CACA;"></div>
              <div class="swatch-info"><span class="level">100</span><span class="hex">F5CACA</span></div>
            </div>
            <div class="swatch-item featured">
              <div class="swatch-box" style="background: #EBA5A5;"></div>
              <div class="swatch-info">
                <span class="level">200</span>
                <span class="hex">EBA5A5</span>
                <span class="role-badge">Error-bg<br/>輕微底色</span>
              </div>
            </div>
            <div class="swatch-item">
              <div class="swatch-box" style="background: #D47070;"></div>
              <div class="swatch-info"><span class="level">300</span><span class="hex">D47070</span></div>
            </div>
            <div class="swatch-item">
              <div class="swatch-box" style="background: #B73A3A;"></div>
              <div class="swatch-info"><span class="level">400</span><span class="hex">B73A3A</span></div>
            </div>
            <div class="swatch-item featured primary-focus">
              <div class="swatch-box" style="background: #A80000;">
                <span class="star-icon">✦</span>
              </div>
              <div class="swatch-info">
                <span class="level">500</span>
                <span class="hex">A80000</span>
                <span class="role-badge error">Error<br/>系統預設</span>
              </div>
            </div>
            <div class="swatch-item featured">
              <div class="swatch-box" style="background: #8A0000;"></div>
              <div class="swatch-info">
                <span class="level">600</span>
                <span class="hex">8A0000</span>
                <span class="role-badge">Error-hover<br/>Hover</span>
              </div>
            </div>
            <div class="swatch-item">
              <div class="swatch-box" style="background: #6E0000;"></div>
              <div class="swatch-info"><span class="level">700</span><span class="hex">6E0000</span></div>
            </div>
            <div class="swatch-item featured">
              <div class="swatch-box" style="background: #520000;"></div>
              <div class="swatch-info">
                <span class="level">800</span>
                <span class="hex">520000</span>
                <span class="role-badge">Error-active<br/>背景/邊框點選</span>
              </div>
            </div>
            <div class="swatch-item">
              <div class="swatch-box" style="background: #380000;"></div>
              <div class="swatch-info"><span class="level">900</span><span class="hex">380000</span></div>
            </div>
            <div class="swatch-item">
              <div class="swatch-box" style="background: #1A0000;"></div>
              <div class="swatch-info"><span class="level">950</span><span class="hex">1A0000</span></div>
            </div>
          </div>
        </div>
      </section>

      <!-- ==========================================
           SECTION 2: TYPOGRAPHY
           ========================================== -->
      <section class="sg-section">
        <div class="sg-section-title">
          <small class="sublabel">Foundations</small>
          <h2>Typography</h2>
        </div>

        <!-- 字體家族 -->
        <div class="sg-card">
          <h3 class="sg-card-title">字體家族 (Font Families)</h3>
          <div class="sg-font-families">
            <div class="font-fam-item">
              <span class="sublabel">英文 / 數字</span>
              <div class="font-fam-name" style="font-family: var(--font-en);">Inter</div>
              <p class="font-fam-sample" style="font-family: var(--font-en);">ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789</p>
            </div>
            <div class="font-fam-item">
              <span class="sublabel">中文</span>
              <div class="font-fam-name" style="font-family: var(--font-zh);">Noto Sans CJK (TC)</div>
              <p class="font-fam-sample" style="font-family: var(--font-zh);">陪伴醫師精準掌握每一次治療・歐舒福生技股份有限公司</p>
            </div>
          </div>
        </div>

        <!-- 字體大小 -->
        <div class="sg-card">
          <h3 class="sg-card-title">字體大小 (Font Sizes)</h3>
          <div class="type-table">
            <div class="type-row">
              <div class="type-meta"><code>text-xs</code><span class="px">12px</span><span class="tag">&lt;small&gt;</span></div>
              <div class="type-role">Sublabel 小標籤</div>
              <div class="type-preview text-xs">Small Sublabel 小標籤文字預覽</div>
            </div>

            <div class="type-row">
              <div class="type-meta"><code>text-sm</code><span class="px">14px</span><span class="tag">&lt;span&gt;</span></div>
              <div class="type-role">Label 標籤</div>
              <div class="type-preview text-sm">Label 標籤與輔助說明文字</div>
            </div>

            <div class="type-row">
              <div class="type-meta"><code>text-base</code><span class="px">16px</span><span class="tag">&lt;p&gt;</span></div>
              <div class="type-role">Body 內文</div>
              <div class="type-preview text-base">Body 內文標準尺寸，本公司致力於輔助牙科植體與再生醫材之多元發展。</div>
            </div>

            <div class="type-row">
              <div class="type-meta"><code>text-lg</code><span class="px">18px</span><span class="tag">&lt;h6&gt;</span></div>
              <div class="type-role">Emphasized 強調內文</div>
              <div class="type-preview text-lg font-semibold">Emphasized 強調內文標題文字</div>
            </div>

            <div class="type-row">
              <div class="type-meta"><code>text-xl</code><span class="px">20px</span><span class="tag">&lt;h5&gt;</span></div>
              <div class="type-role">Subheading 小標題</div>
              <div class="type-preview text-xl font-medium">Subheading 小標題與卡片主要標題</div>
            </div>

            <div class="type-row">
              <div class="type-meta"><code>text-2xl</code><span class="px">24px</span><span class="tag">&lt;h4&gt;</span></div>
              <div class="type-role">Heading 標題</div>
              <div class="type-preview text-2xl font-bold">Heading 區塊主題與重要標題</div>
            </div>

            <div class="type-row">
              <div class="type-meta"><code>text-3xl</code><span class="px">36px</span><span class="tag">&lt;h3&gt;</span></div>
              <div class="type-role">Subtitle 副標題</div>
              <div class="type-preview text-3xl font-bold">Subtitle 副標題</div>
            </div>

            <div class="type-row">
              <div class="type-meta"><code>text-4xl</code><span class="px">48px</span><span class="tag">&lt;h2&gt;</span></div>
              <div class="type-role">Title Page 頁面標題</div>
              <div class="type-preview text-4xl font-bold">Title Page 頁面標題</div>
            </div>

            <div class="type-row">
              <div class="type-meta"><code>text-5xl</code><span class="px">64px</span><span class="tag">&lt;h1&gt;</span></div>
              <div class="type-role">Title Hero 主視覺標題</div>
              <div class="type-preview text-5xl font-bold">Title Hero 主視覺標題</div>
            </div>
          </div>
        </div>

        <!-- 字重 -->
        <div class="sg-card">
          <h3 class="sg-card-title">字重 (Font Weights)</h3>
          <div class="weight-table">
            <div class="weight-row">
              <div class="weight-meta"><code>font-Light</code><span class="num">300</span></div>
              <div class="weight-preview font-light">Light - 標注、裝飾輔助文字 (Weight 300)</div>
            </div>
            <div class="weight-row">
              <div class="weight-meta"><code>font-normal</code><span class="num">400</span></div>
              <div class="weight-preview font-normal">Normal - 一般文字、正文內容 (Weight 400)</div>
            </div>
            <div class="weight-row">
              <div class="weight-meta"><code>font-medium</code><span class="num">500</span></div>
              <div class="weight-preview font-medium">Medium - 按鈕文字、小標題 (Weight 500)</div>
            </div>
            <div class="weight-row">
              <div class="weight-meta"><code>font-semibold</code><span class="num">600</span></div>
              <div class="weight-preview font-semibold">Semibold - 標籤、強調文字 (Weight 600)</div>
            </div>
            <div class="weight-row">
              <div class="weight-meta"><code>font-bold</code><span class="num">700</span></div>
              <div class="weight-preview font-bold">Bold - 主要標題、重點強調 (Weight 700)</div>
            </div>
          </div>
        </div>
      </section>

      <!-- ==========================================
           SECTION 3: COMPONENTS DEMO
           ========================================== -->
      <section class="sg-section">
        <div class="sg-section-title">
          <small class="sublabel">Components</small>
          <h2>Buttons & Badges</h2>
        </div>

        <div class="sg-card">
          <h3 class="sg-card-title">按鈕系統 (Button System)</h3>
          <div class="components-demo-grid">
            <div class="comp-group">
              <span class="label">Brand Primary</span>
              <div class="btn-cluster">
                <button class="btn btn-primary">品牌主按鈕</button>
              </div>
            </div>
            <div class="comp-group">
              <span class="label">Secondary (Steel Blue)</span>
              <div class="btn-cluster">
                <button class="btn btn-sec">次要按鈕</button>
              </div>
            </div>
            <div class="comp-group">
              <span class="label">Outline</span>
              <div class="btn-cluster">
                <button class="btn btn-outline" style="color:var(--brand-primary);border-color:var(--brand-primary);">外框按鈕</button>
              </div>
            </div>
            <div class="comp-group">
              <span class="label">Success</span>
              <div class="btn-cluster">
                <button class="btn btn-success">成功狀態</button>
              </div>
            </div>
            <div class="comp-group">
              <span class="label">Warning</span>
              <div class="btn-cluster">
                <button class="btn btn-warning">警示狀態</button>
              </div>
            </div>
            <div class="comp-group">
              <span class="label">Error</span>
              <div class="btn-cluster">
                <button class="btn btn-error">錯誤狀態</button>
              </div>
            </div>
          </div>
        </div>

        <div class="sg-card">
          <h3 class="sg-card-title">標籤徽章 (Badges)</h3>
          <div class="badges-demo-cluster">
            <span class="badge badge-brand">Brand Badge</span>
            <span class="badge badge-sec">Secondary</span>
            <span class="badge badge-success">Success Active</span>
            <span class="badge badge-warning">Warning State</span>
            <span class="badge badge-error">Danger Action</span>
          </div>
        </div>
      </section>
    </div>
  `;
}
