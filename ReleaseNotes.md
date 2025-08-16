# v2.3.3.5 (2025-08-16)

## English

* Added support for x86 CPU devices
* **\[Tap Anywhere]** Moved the Tap Anywhere settings out of *Dictionary Settings* into a standalone settings page
* **\[Tap Anywhere]** Disabled in-app detection for DictTango by default (since in-app already has Tap-to-Translate functionality)
* **\[Tap Anywhere]** Disabled text input box detection by default
* **\[Dictionary Display]** Added option to set the number of WebView caches in waterfall mode. Higher values make scrolling smoother but increase performance cost
* Added global CSS file support

  * File name should be `global.css` or `global_<theme>.css`, placed under `SD Card\DictTango\UserAssets`
  * Theme-specific CSS loads first; if not found, fallback to `global.css`.
    Example: in dark mode, the app will look for `global_dark.css`; if not found, it loads `global.css`.
* Fixed minor issues and improved stability

---

## 简体中文

* 添加 x86 CPU 设备支持
* **\[Tap Anywhere]** 将 Tap Anywhere 的设置项移出「词典设置」，做成独立的设置页面
* **\[Tap Anywhere]** 默认禁止 DictTango 应用内检测（因为应用内已经有点译功能）
* **\[Tap Anywhere]** 默认禁止检测文本输入框
* **\[词典显示]** 可设置瀑布流模式下的 WebView 缓存数量，数值越大，瀑布流滑动越流畅，但性能开销也会随之增加
* 添加全局 CSS 文件功能

  * 文件名为 `global.css` 或 `global_<theme>.css`，放在 `SD Card\DictTango\UserAssets` 下
  * 主题相关的 CSS 会优先加载，如果没有，则加载 `global.css`。
    例如当前主题为暗黑模式，会优先寻找 `global_dark.css`；如果找不到，则加载 `global.css`。
* 修复了一些其他小问题，提高稳定性

---

## 繁體中文

* 添加 x86 CPU 裝置支援
* **\[Tap Anywhere]** 將 Tap Anywhere 的設定項移出「詞典設定」，做成獨立的設定頁面
* **\[Tap Anywhere]** 預設禁止 DictTango 應用內檢測（因為應用內已經有點譯功能）
* **\[Tap Anywhere]** 預設禁止檢測文字輸入框
* **\[詞典顯示]** 可設定瀑布流模式下的 WebView 快取數量，數值越大，瀑布流滑動越流暢，但效能開銷也會隨之增加
* 添加全域 CSS 檔案功能

  * 檔名為 `global.css` 或 `global_<theme>.css`，放在 `SD Card\DictTango\UserAssets` 下
  * 主題相關的 CSS 會優先載入，若找不到，則載入 `global.css`。
    例如當前主題為暗黑模式，會優先尋找 `global_dark.css`；若找不到，則載入 `global.css`。
* 修復了一些其他小問題，提升穩定性



# 2.3.3.4

日期: 07月26日 - v2.3.3.4
- [查词] 修正了直接查词时在结果页滑动会自动返回到搜索界面的问题
- [Tap Anywhere] 优化了Tap Anywhere面板的显示, 添加了文字检测长度和显示超时的设置项
- [界面] 修正横屏模式时设置按钮的颜色问题

**English:**
- [Word Lookup] Fixed an issue where scrolling on the result page during word lookup would automatically return to the search page.
- [Tap Anywhere] Optimized the display of the Tap Anywhere panel; added settings for text detection length cap and display timeout.
- [Interface] Fixed the color issue of the settings button in landscape mode.

---

**Traditional Chinese:**
- 【查詞】修正了直接查詞時，在結果頁滑動會自動返回搜尋介面的問題。
- 【Tap Anywhere】優化了 Tap Anywhere 面板的顯示，新增了文字偵測長度與顯示逾時的設定項目。
- 【介面】修正在橫屏模式下設定按鈕顏色的問題。
  
# 2.3.3.3
日期: 07月22日 - v2.3.3.3
1) [AI] 修正了调用OPEN AI API时的Content Type问题
2) [Tap Anywhere]添加了 "Tap Anywhere"功能
- 启用后在大多数应用中只要选择了单词, 就可以直接在底部弹出的Tap Anywhere面板显示词典的简要解释(需要设置词典分组的概述分组)
- 点击Tap Anywhere弹出面板上的简要解释可以打开浮动窗口并显示详细内容
- 点击Tap Anywhere弹出面板上左边的应用图标可以打开主查询窗口并显示详细内容
- 点击Tap Anywhere弹出面板上右边的查词图标, 可以根据选中的单词以及单词所在段落进行AI情景查词



1) [AI] Fixed the Content-Type issue when calling the OpenAI API.
2) [Tap Anywhere] Added the "Tap Anywhere" feature:
- Once enabled, selecting a word in most apps will directly display a brief dictionary explanation in the Tap Anywhere pop-up panel at the bottom (requires configuring the brief dictionary for dictionary group of floating window).
- Tapping the brief explanation in the Tap Anywhere pop-up panel opens a floating window with detailed content.
- Tapping the app icon on the left side of the Tap Anywhere panel opens the main lookup window with detailed content.
- Tapping the word lookup icon on the right side of the Tap Anywhere panel initiates an AI contextual word lookup based on the selected word and the paragraph it appears in.


1) [AI] 修正了調用 OpenAI API 時的 Content-Type 問題
2) [Tap Anywhere] 新增了 "Tap Anywhere" 功能：
- 啟用後，在大多數應用中只要選取了單詞，就可以直接在底部彈出的 Tap Anywhere 面板中顯示詞典的簡要解釋（需要設定詞典分組的概覽分組）
- 點擊 Tap Anywhere 彈出面板上的簡要解釋可以開啟浮動視窗並顯示詳細內容
- 點擊 Tap Anywhere 彈出面板左側的應用圖示可以開啟主查詢視窗並顯示詳細內容
- 點擊 Tap Anywhere 彈出面板右側的查詞圖示，可以根據選中的單詞以及其所在段落進行 AI 情境查詞

# 2.3.3.1
日期: 07月20日 - v2.3.3.1
- [阅读模式] 优化了全屏模式的显示
- [Mdx] 优化mdx文件的读写，提升全文检索和查词性能

Date: July 20 – v2.3.3.1
- [Reading Mode] Optimized fullscreen display
- [Mdx] Improved reading and writing of .mdx files, enhancing full-text search and word lookup performance

日期：7月20日 – v2.3.3.1
-[閱讀模式] 優化了全螢幕模式的顯示
-[Mdx] 優化了 .mdx 檔案的讀寫，提升全文搜尋與查詞效能

# 2.3.3.0
日期: 06月29日 - v2.3.3.0
- [LLM] 添加Gemma 3n支持并优化输出速度
- [查词] 查词历史添加排序功能
- [查词] 优化查词输入框动画

Gemma 3n模型下载: https://huggingface.co/collections/ggml-org/gemma-3n-685d6fc0843071be9e77b6f7,
如果本地模型文件名没有包含"gemma"和"3n", 可以在模型参数中设置Override Tensors为per_layer_token_embd.weight=CPU启用输出优化


Date: June 29th - v2.3.3.0
- [LLM] Added support for Gemma 3n and optimized output speed
- [Dictionary] Added sorting function to lookup history
- [Dictionary] Optimized input box animation for word lookup

日期： 6月29日 - v2.3.3.0
- 【LLM】新增對 Gemma 3n 的支援，並優化輸出速度
- 【查詞】查詞歷史新增排序功能
- 【查詞】優化查詞輸入框動畫

# 2.3.2.9
日期: 05月03日 - v2.3.2.9
- [查词] AI 上下文查词支持流式输出，提升使用流畅度
- [查词] 增加查词历史管理功能（支持搜索、删除、导出 JSON），并移除设置中的“清除查词历史”选项
- [备份与恢复] 自动备份机制调整为每日生成新文件，并以每周为周期进行循环备份
- [本地 LLM] 新增对 Qwen3 模型的支持



Date: 3rd May  - v2.3.2.9
- [Word Lookup] AI context-based word lookup now supports streaming output for smoother interaction
- [Word Lookup] Added history management features (search, delete, export to JSON), and removed the "Clear Lookup History" option from Settings
- [Backup & Restore] Auto-backup now generates a new file daily, with a weekly rotation strategy
- [Local LLM] Added support for the Qwen3 model


日期： 5月03日 - v2.3.2.9
- [查詞] AI 上下文查詞支援串流輸出，提升使用流暢度
- [查詞] 新增查詞歷史管理功能（支援搜尋、刪除、匯出 JSON），並移除設定中的「清除查詞歷史」選項
- [備份與還原] 自動備份機制調整為每日產生新檔案，並以每週為循環進行備份
- [本地 LLM] 新增支援 Qwen3 模型
  
# 2.3.2.8
日期: 04月21日 - v2.3.2.8
- [查词]重新布局"AI上下文查词", 实现更方便的和AI进行沟通
- [本地LLM]升级llama.ccp内核到最新版本

Date: April 21 - v2.3.2.8
- [Word Lookup] Redesigned layout for "AI Contextual Word Lookup" to enable easier communication with AI
- [Local LLM] Upgraded llama.cpp core to the latest version


日期： 4月21日 - v2.3.2.8
- 【查詞】 重新設計「AI 上下文查詞」的版面配置，讓與 AI 的溝通更便利
- 【本地 LLM】 將 llama.cpp 核心升級至最新版本


# 2.3.2.7
**日期: 03月31日**
- [查词]添加了"AI查词"功能, 支持进行上下文查词, 详情可参考Github Wiki
- [本地LLM]添加了对Gemma 3的支持
- 解决了一些小问题

**English:**
**Date: March 31**
- [Word Lookup] Added "AI Word Lookup" feature, supporting contextual word search. See GitHub Wiki for details.
- [Local LLM] Added support for Gemma 3.
- Fixed some minor issues.

**Traditional Chinese:**
**日期: 03月31日**
- [查詞] 新增「AI 查詞」功能，支援上下文查詞，詳情可參考 GitHub Wiki。
- [本地 LLM] 新增對 Gemma 3 的支援。
- 修復了一些小問題。

# 2.3.2.3
**日期: 03月08日**
- [本地LLM]添加了对DeepScaleR的支持
- [本地LLM]优化了DeepseekR1的系统角色，强制它逐步推理
- [本地LLM]添加了sampler的设置选项，默认为greedy,设置成dist可以减少重复输出
- [在线问AI]添加了DeepSeek的官方网站支持0
- 解决了一些小问题

**English:**
**Date: March 8**
- [Local LLM]Added support for DeepScaleR.
- [Local LLM]Optimized the system role of DeepseekR1, forcing it to reason step by step.
- [Local LLM]Added a sampler setting option, defaulting to "greedy"; setting it to "dist" can reduce repetitive output.
- [Ask AI Online]Aded support for DeepSeek's official website.
- Fixed some minor issues.

**Traditional Chinese:**
**日期: 03月08日**
- [本地 LLM] 優化了對 DeepScaleR 的支援。
- [本地 LLM] 優化了 DeepseekR1 的系統角色，強制其逐步推理。
- [本地 LLM] 添加了 sampler 的設定選項，預設為 "greedy"，設定為 "dist" 可減少重複輸出。
- [在線問 AI] 添加了對 DeepSeek 官方網站的支援。
- 修復了一些小問題。

# 2.3.2.0
日期: 01月26日
- 本地大模型会话添加了对Deepseek-R1的支持 (https://huggingface.co/bartowski/DeepSeek-R1-Distill-Qwen-1.5B-GGUF)
- 解决了控制台查词的跳转问题
- 解决了AI Prompt的弹出窗口不能手动选择文字复制的问题
- 升级llama.cpp组件库
- 解决了llama.android中的闪退问题
- 解决了一些查词问题
  
Date: 26 Jan
- AI services and local AI chat now support Deepseek-R1.
- Resolved the issue with the dictionary navigation in the PC console.
- Fixed the problem where text could not be manually selected and copied in the AI Prompt pop-up window.
- Upgraded the llama.cpp component library.
- Fixed the crash issue in llama.android.

- AI服務及本地大模型會話新增對Deepseek-R1的支持。
- 解決了控制台查詞跳轉的問題。
- 解決了AI Prompt彈出窗口無法手動選取並複製文字的問題。
- 升級了llama.cpp組件庫。
- 修復了llama.android中的閃退問題。


# 2.3.1.6
日期: 11月29日
- 词典管理中添加了"健康检查"功能，可以检查一些由于编码导致的问题(例如单词含有有不可见字符，或者UTF BOM格式）
- 解决了些音频播放问题

<img src="https://github.com/user-attachments/assets/15ebbdd9-c790-4aa2-91cb-e215b53edd22" width="200">

<img src="https://github.com/user-attachments/assets/8a62d857-6340-4b0a-927e-126ef84bcb57" width="200">




**English:**
- The "Health CheckUp" feature has been added to the dictionary management, which can check for issues caused by encoding (e.g., words containing invisible characters or UTF BOM pattern).
- Some audio playback issues have been resolved.

# 2.3.1.3
日期: 11月25日
- 解决了一些spx格式不能播放的问题
- 优化了本地AI会话的界面，可以实现代码高亮
- AI Prompt改为直接与指定AI服务关联

Date: November 25
- Resolved issues where some SPX format files could not be played.
- Optimized the interface for local AI chat, enabling code highlighting.
- AI Prompt is now directly associated with a specified AI service.



# 2.3.0.7
日期: 11月09日 - v2.3.0.7
- 解决了当升级安卓系统中的Android System Webview到1.3.0后，导致"entry://"无法正确跳转的问题 (https://github.com/Jimex/DictTango-Android/issues/52)
- 解决了控制台中无法查询AI词典的问题


Date: November9 - v2.3.0.7
- Fixed the issue where upgrading Android System WebView to 1.3.0 in the Android system caused "entry://" links to fail to redirect correctly (https://github.com/Jimex/DictTango-Android/issues/52).
- Fixed the issue where the AI dictionary could not be work in the PC Console.


# 2.3.0.6
日期: 11月07日 - v2.3.0.6
- AI会话中支持和ChatGPT API的流式会话
- 可以在AI会话中切换AI服务
- 本地AI会话可以选择聊天模式或者问答模式

Date: November 7 - v2.3.0.6
- Streamed conversations with ChatGPT API are now supported in AI Chat.
- AI services can be switched within an AI Chat.
- AI Chat now allow selection between Chat Mode and Q&A Mode.

# 2.3.0.0 - 2.3.0.3
日期: 11月03日 - v2.3.0.0
- AI服务添加了调用本地大语言模型文件的功能，可以实现AI Prompt的本地化
- 添加了AI会话的功能，可以直接跟本地本地大语言模型对话
- 用户界面设置中加入"极简模式”选项，可以隐藏主页一切非词典的功能
- 用户界面设置中加入"直接查词”选项，可以在主页初始化后直接打开查词界面

Date: November 3 - v2.3.0.0
- Added a "Minimalist Mode" option in the user interface settings, allowing all non-dictionary features on the home page to be hidden.
- Added a "Direct Search" option in the user interface settings, enabling the dictionary search interface to open immediately after the home page is initialized.
- The AI service now supports calling local large language model files, allowing AI prompts to be processed locally.
- Added an AI conversation feature, enabling direct interaction with the local large language model.

## 大语言模型下载方法
1. 可以直接使用Ollma中的模型 https://ollama.com/library
2. TinyLlama 1.1B (f16, 2.2 GiB): https://huggingface.co/ggml-org/models/resolve/main/tinyllama-1.1b/ggml-model-f16.gguf?download=true
3. Phi-2 7B (Q4_0, 1.6 GiB):https://huggingface.co/ggml-org/models/resolve/main/phi-2/ggml-model-q4_0.gguf?download=true
4. Phi 2 DPO (Q3_K_M, 1.48 GiB):https://huggingface.co/TheBloke/phi-2-dpo-GGUF/resolve/main/phi-2-dpo.Q3_K_M.gguf?download=true

## 调用本地大语言模型文件步骤
1) 下载本地大语言模型文件并保存到手机
2) 在DictTango中添加AI服务器，服务提供者选"本地大模型"
3) 添加AI Prompt或者直接在首页点击"AI会话" 

日期: 10月26日 - v2.2.9.0
- 可以将在词典的的查找与替换功能中使用AI Prompt
- 修正了全文检索中缩放不生效的问题
- 修正了阅读模式下词典名称搜索不支持简繁通查的问题
- 尝试解决某些重音字符的搜索（此功能是实验性能，如果因此导致闪退，可能会撤回）

日期: 9月8日 - v2.2.8.8
- 添加了FTP上传词典的功能，可在"前台服务"中开启
- 可以在用户界面设置中修改主页状态栏的颜色
- 可设置最近阅读的词典图标居中适应
- 提升了TangoDict的查询性能
- 修正了一些问题

日期: 8月30日 - v2.2.8.6
- 添加了拆分字体文件的功能，此功能跟字体精简器不同的地方是，字体精简器按词典内容精简，字体拆分器是按字体容量来拆分，比如说一个字体文件是50mb,那么拆分两个后就是差不多25mb一个文件

日期: 8月17日 - v2.2.8.3
- 由于Luvvoice突然加上了页面验证导致自动获取音频失败，改用微软大声朗读进行替代（和Luvvoice同一TTS源）

日期: 8月15日 - v2.2.8.0
- 为词典内容在暗黑模式下显示添加“系统配色”的全局选项（此选项可解决某些词典内容显示不全的问题, 但android 13以下的配色效果一般）
- 普通查词模式下，长按"上一词典”图标可以跳到第一本词典，长按"下一词典”图标可以跳到最后一本词典
- 修正了混合语言时TTS语言识别的问题
- 修正了图片查看器中tif图片的显示问题
- 修复了一些小问题

日期: 8月9日 - v2.2.7.6
- 词典内容html中加入disable-tap-translate可以避免被点译触发
- tts长文朗读时显示播放条
- 加入Luvvoice TTS发音选项
- 修复了一些小问题

日期: 8月1日 - v2.2.7.1
- 优化全屏模式, 退出全屏模式后在工具显示进行全屏模式的图标
- 优化图片浏览器
- 在设置添加过滤图片点击的尺寸限制
- 修复了图片浏览器的一些问题

日期: 7月30日 - v2.2.7.0
1. 词典编辑中添加Html语言的设置，用于设置html的lang属性以修正浏览器的汉字显示
2. 优化图片浏览器速度
3. ASK AI添加文心一言，但不支持自动注入Prompt, 只能从剪贴板复制

日期: 7月29日 - v2.2.6.9
1. 添加了ASK AI功能，可以以上下文方式访问AI网站(暂时支持ChatGPT, Gemini, Claude)
2. 可能管理ASK AI的Prompt，支持直接去AI网站发送生成的Prompt(暂时支持ChatGPT, Claude, Gemini会发送到剪贴板)
3. 可以在前台服务中开启ASK AI悬浮按钮
4. 增强图片浏览器的功能，左右滑动切换同一词典内的图片，可以通过缩略图切换
5. 解决了普通查词模式下AI Prompt结果导致CSS失效的问题


日期: 7月26日 - v2.2.6.8

普通查词模式加入AI功能
AI Prompt加入缓存功能，可以设置缓存时间或者永久缓存，提供清除缓存功能
完善输入插件功能
阅读模式界面加入了全屏模式（在用户界面配置里设定），全屏模式下可以通过左下角的半透明按钮切换上下工具栏的显示和隐藏
解决了文件浏览器中相同拼音的文件夹只显示一个并显示错误文件的问题
解决了包含重音字符的词典闪退问题

日期: 7月21日 - v2.2.6.6

1. 增加了输入插件的功能，用户可以自己自定义插件（目前仅在普通查词界面有效）
2. 增加了"上下翻页"的方式
3. 可以自定义翻页触控区域的百分比
4. 解决了图片时和滚动事件冲突的问题
5. 解决了长截屏的一些问题

日期: 7月7日 - v2.2.6.3

1) 可以把AI Prompt加为在线词典
2) 修正了一些小问题

日期: 7月5日 - v2.2.6.2

1) 修正了词典内容重复显示的问题
2) 不再对mdd中的css和js进行缓存

日期: 5月30日 - v2.2.6.1

1) 添加了俄语和保加利亚语的应用语言
2) 修复了一些小问题


日期: 5月19日 - v2.2.6.01) 修复全文检索时，正则表达式匹配中文的问题
