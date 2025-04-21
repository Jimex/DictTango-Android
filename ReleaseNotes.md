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
