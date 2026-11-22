# DictTango Android

## Introduction

## Key Features

### Dictionaries and Lookup
* Supports TangoDict dictionaries (including entry editing) and is compatible with MDict dictionaries
* Supports adding online dictionaries
* Dictionary groups, with separate groups for the main lookup screen and the floating window, and an optional brief dictionary per group to show definitions in search results
* Custom rules to name and group newly added dictionaries automatically
* Look up several dictionaries at once, shown in List View or Sliding View (horizontal or vertical)
* Tap Translate, floating window lookup, and Tap Anywhere to look up words you select in other apps
* Cross Chinese Searching (Simplified and Traditional), spellcheck, search text replacement, and base-form lookup for English and Japanese (Japanese requires separate Sudachi dictionary files)
* Full Text Search across one dictionary or a group, with regular expressions (MDict only), live progress and highlighted matches

### Reading and Learning
* Reading Mode for reading a single dictionary, with pinyin sorting of Chinese MDict entries, a table of contents and Picture Mode
* Smart Viewer for web pages, text, images (OCR), PDF, EPUB and HTML files, with tap-to-translate, find in page and translation
* Camera Mode for looking up printed words, recognizing Chinese, English and other Latin-script languages, Japanese and Korean
* Custom pronunciation packs (MDD/ZIP), system TTS and Microsoft Edge TTS
* User comments on dictionary entries
* Word Book with categories, notes, online pictures, spelling and continuous read-aloud, import and export, and a Hangman game
* Ask about a Photo: take or choose a photo and get a vocabulary card from an on-device vision model, with follow-up questions and several teacher personas

### AI
* AI Chat with OpenAI API and compatible services (such as DeepSeek, OpenRouter and LM Studio), or with GGUF (llama.cpp) and LiteRT-LM models running on your phone
* AI Chat can answer from your local dictionaries, and typing @ picks a dictionary (requires an OpenAI API service or LiteRT-LM model that supports tool calling)
* Custom AI Prompts using OpenAI API, Google AI, on-device models or the built-in Tango Assistant (Simplified/Traditional conversion, OCR of dictionary images, sandboxed JavaScript), which can also be added as online dictionaries
* AI contextual word lookup, and Ask AI online for quick access to sites such as ChatGPT, Gemini, Claude, ERNIE Bot and DeepSeek

### Display and Customization
* Several display layouts (Original, Page White, Clean Linen Book Page, Warm Paper Book Page), with dark mode and e-ink support
* A global font, plus multiple fonts for each dictionary
* On-demand loading of fonts over 30 MB, with a Font Subsetter and a Font File Splitter
* Custom CSS, JavaScript and linked resources for each dictionary
* Adjustable home menus and toolbars, wallpaper and Minimalist Mode

### PC Connection and Tools
* PC Console: look up words, run full-text searches, manage dictionaries and groups, upload and download files, and optionally use AI Chat from a computer's browser
* Built-in FTP server with a read-only mode
* App File Explorer to view and edit CSS and JS files with syntax highlighting
* MDD Viewer to browse, preview and export files inside MDD archives

### Security and Data
* Web Shield detects trackers and malicious scripts in dictionaries, and network access for dictionaries can be blocked
* Backup and restore, with automatic backup
  
## Difference between the version here and the Google Play Store version
Starting from Android 11, all Android apps are no longer allowed to access files outside their designated app folders on the SD Card (located under the /Android/data directory). Although adding global file management permissions can resolve this issue, the Google Play Store does not allow regular apps to have this permission. However, this version includes the additional permission, so after user authorization, it can access all files on the SD Card.

Please note, however, not to upgrade this version to the one from the Google Play Store, as this will cause the loss of global file management permissions, preventing access to dictionary files on the SD Card.

## Why did the Google Play version disappear?
It’s not because I dislike Google’s restrictions on SD card access — on the contrary, I fully support them, as they help protect users’ devices. That’s why even in the full-featured version, access to any file on the SD card is merely an optional setting and is disabled by default. For the reason why the Google Play version was removed, please refer to: https://github.com/Jimex/DictTango-Android/issues/73.


## DictTango Windows Version
https://github.com/Jimex/DictTango-Windows




# DictTango Android版

## 主要功能

### 词典与查词
* 支持TangoDict格式词典（含词条编辑），同时兼容MDict词典
* 支持添加在线词典
* 支持词典分组，主查词界面和浮动窗口可使用不同分组，并可为分组指定概述词典，在搜索结果里显示单词释义
* 支持按自定义规则为新添加的词典自动命名和分组
* 支持多词典联合查询，可用瀑布流或滑动视图（水平/垂直）查看词典内容
* 支持点译、浮动窗口查词，以及在其它应用中选词即查（Tap Anywhere）
* 支持简繁通查、拼写纠错、输入替换，以及英语和日语单词原形还原（日语需另备Sudachi词典）
* 全文检索：可检索单个词典或词典分组，支持正则表达式（仅MDict）、实时进度和匹配高亮

### 阅读与学习
* 阅读模式方便阅读单本词典，MDict中文词条按拼音排序，并提供章节列表和图片词典模式
* 智能查看器：查看网页、文本、图片（OCR）、PDF、EPUB和HTML文件并即点即译，支持页内查找和翻译
* 相机取词，支持中文、英文及拉丁文、日文和韩文识别
* 支持自定义发音库（MDD/ZIP）、系统TTS和微软大声朗读
* 用户批注功能
* 单词本：支持分类、备注、在线配图、拼读和连续朗读、导入导出，并附带猜单词小游戏
* 看图学单词：拍照或选择照片，由本机视觉模型生成单词卡，支持追问和多种老师角色

### AI功能
* AI聊天：支持OpenAI API及其兼容服务（如DeepSeek、OpenRouter、LM Studio），也可在手机上运行GGUF（llama.cpp）和LiteRT-LM模型
* AI聊天可调用本地词典查词并根据词条回答，输入@可指定词典（需OpenAI API服务或LiteRT-LM模型，且模型支持工具调用）
* 自定义AI Prompt：支持OpenAI API、Google AI、本机模型及内置的Tango助手（简繁转换、词典图片OCR、在沙盒中运行JS脚本），并可把AI Prompt添加为在线词典
* AI语境查词，以及可快速访问ChatGPT、Gemini、Claude、文心一言、DeepSeek等网站的“在线问AI”

### 显示与个性化
* 多种词典显示布局（原始、纯白页面、素雅亚麻书页、暖色纸张书页），支持暗黑模式和墨水屏显示
* 可设置全局字体，也可为每本词典设置多个字体
* 支持按需加载30MB以上的大字体，并提供字体精简器和字体拆分器
* 可为词典单独设置CSS、JS脚本和关联资源库
* 可调整主页菜单和工具栏、更换壁纸，并提供极简模式

### 电脑互联与工具
* 电脑控制台：在电脑浏览器中查词、全文检索、管理词典与分组、上传和下载文件，开启后还可使用AI聊天
* 内置FTP服务器，支持只读模式
* 应用内文件浏览器，可查看、编辑并高亮显示CSS和JS文件
* MDD文件浏览器，可直接浏览、预览和导出MDD中的文件

### 安全与数据
* 网盾可检测词典中的追踪和恶意脚本，也可禁止词典连接外部网络
* 支持数据备份与恢复、自动备份

## 这里的版本与Google Play Store版本的区别
从安卓11开始，所有Android应用将不再支持访问SD Card上非应用文件夹（位于/Andoid/data目录下）以外的文件，虽然添加全局文件管理权限可以解决这个问题，但Google Play Store不允许一般应用有这个权限。而这里的版本额外添加了这个权限，所以从这里下载的版本通过用户授权后是可以访问SD Card上所有的文件的。

但要切记不要从这里版本升级到谷歌市场的版本，否则会失去全局文件管理的权限而导致不能访问SD Card上的词典文件。

## 为什么 Google Play 版本消失了？  
这并不是因为我不喜欢 Google 对 SD 卡访问的限制, 相反我很拥护这个限制，因为它对用户手机起到了保护作用，所以即使在全功能的版本中，访问SD 卡中任意文件的功能只是一个选项，而且默认是没有启用的。至于Google Play版本下架的原因，可以参考：https://github.com/Jimex/DictTango-Android/issues/73


## DictTango Windows版

https://github.com/Jimex/DictTango-Windows
