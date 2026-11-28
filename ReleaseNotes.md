# v2.4.0.2  (2026-11-27)

### English

### Changelog

* Redesigned the **zoom** panel in the result view, the floating window and **Reading Mode**. Choose **All dictionaries** to change the zoom of every dictionary without its own, or **This dictionary** to give the dictionary on screen a zoom of its own. The panel opens on the one that controls the page you're looking at. Tap the percentage to type an exact value from 50 to 200; the slider now moves in 1% steps and − and + go to the next multiple of 10. **Follow global** makes a dictionary use the global zoom again. On Android 12 and later the panel is frosted glass.
* Fixed the zoom slider doing nothing on a dictionary with its own zoom: it only changed the global zoom, which that dictionary doesn't use. Changing the global zoom now also updates every entry on screen that follows it, not just the current one. **Reading Mode** now uses a dictionary's own zoom too.
* In a dictionary's settings, **Zoom** is now a choice between **Follow global** and **Its own zoom**, with − and + buttons, instead of a number field where 0 meant follow global.
* Redesigned the **Change dictionary** panel that opens from the dictionary button. It slides up from the bottom; drag its top edge up or down to change its height, or all the way down to close it. The height is remembered as a share of the screen, so the panel is the same size in the floating window, and **Dictionary picker height** in the user interface settings now means a percentage of the screen. The dictionary on screen is marked **On screen**, and the list is more compact. At the bottom, the group button shows the current group and opens the group list, and a filter field appears for groups with more than 6 dictionaries. Each group shows its first few dictionaries and how many it has. **Dictionaries** and **Manage groups** open the editors. While you type in the filter, the panel stays above the keyboard.
* Redesigned the **AI Word Lookup** window. The answer fills the window, with a progress line instead of a waiting dialog; the passage sits in a card near your thumb, can be expanded, and highlights the word. The bottom bar has page up and down, **Answer in** and the lookup settings. Changing the language, AI website or AI service asks again right away, and a new website no longer needs the window reopened.
* Added a **Stop** button to the **AI Word Lookup** window that ends an answer from an AI service (OpenAI, Google AI or the on-device model). The window also no longer closes itself while you choose an AI service.


---
### 更新日志
* 重新设计了结果页、浮动窗口和“阅读模式”中的“缩放”面板。选择“所有词典”可调整所有未单独设置缩放的词典，选择“当前词典”可为屏幕上的词典单独设置缩放。面板打开时会选中决定当前页面缩放的那一项。点按百分比可输入 50 到 200 之间的精确数值；滑块现在以 1% 为单位移动，“−”和“+”跳到下一个 10 的倍数。“跟随全局”会让词典重新使用全局缩放。在 Android 12 及更新版本中，面板为毛玻璃效果。
* 修复了在单独设置了缩放的词典上拖动缩放滑块无效的问题：滑块只会修改全局缩放，而该词典并不使用全局缩放。现在修改全局缩放时，屏幕上所有跟随全局缩放的词条都会更新，而不只是当前词条。“阅读模式”现在也会使用词典单独设置的缩放。
* 词典设置中的“缩放”现在可在“跟随全局”和“单独设置”之间选择，并带有“−”和“+”按钮，取代了原来填 0 表示跟随全局的数字输入框。
* 重新设计了点按词典按钮打开的“切换词典”面板。面板从底部滑出；上下拖动面板顶部可调整高度，一直向下拖动即可关闭。高度按屏幕的比例保存，因此在浮动窗口中面板大小相同；界面设置中的“词典选择器高度”现在表示占屏幕的百分比。屏幕上正在显示的词典会标有“正在显示”，列表也更紧凑。底部的分组按钮显示当前分组，点按可打开分组列表；词典多于 6 部的分组还会显示筛选框。每个分组会显示其中的前几部词典及词典数量。“组内词典”和“管理分组”可打开相应的编辑页面。在筛选框中输入时，面板会停留在键盘上方。
* 重新设计了“AI查词”窗口。回答占满整个窗口，并以进度条取代了等待对话框；原文显示在靠近拇指的卡片中，可以展开，并会高亮所查的词。底部栏提供上下翻页、“回答语言”和查词设置。更改语言、AI网站或AI服务后会立即重新提问，更换网站后也无需重新打开窗口。
* “AI查词”窗口新增“停止”按钮，可中止 AI 服务（OpenAI、Google AI 或本地模型）的回答。另外，选择 AI 服务时窗口不会再自行关闭。


---

### 繁體

### 更新日誌

* 重新設計了結果頁、浮動視窗和「閱讀模式」中的「縮放」面板。選擇「所有詞典」可調整所有未單獨設定縮放的詞典，選擇「目前詞典」可為螢幕上的詞典單獨設定縮放。面板開啟時會選取決定目前頁面縮放的那一項。點按百分比可輸入 50 到 200 之間的精確數值；滑桿現在以 1% 為單位移動，「−」和「+」跳到下一個 10 的倍數。「跟隨全域」會讓詞典重新使用全域縮放。在 Android 12 及更新版本中，面板為毛玻璃效果。
* 修正了在單獨設定了縮放的詞典上拖動縮放滑桿無效的問題：滑桿只會修改全域縮放，而該詞典並不使用全域縮放。現在修改全域縮放時，螢幕上所有跟隨全域縮放的詞條都會更新，而不只是目前詞條。「閱讀模式」現在也會使用詞典單獨設定的縮放。
* 詞典設定中的「縮放」現在可在「跟隨全域」和「單獨設定」之間選擇，並附有「−」和「+」按鈕，取代了原本填 0 表示跟隨全域的數字輸入框。
* 重新設計了點按詞典按鈕開啟的「切換詞典」面板。面板從底部滑出；上下拖動面板頂部可調整高度，一直向下拖動即可關閉。高度按螢幕的比例儲存，因此在浮動視窗中面板大小相同；介面設定中的「詞典選擇器高度」現在表示佔螢幕的百分比。螢幕上正在顯示的詞典會標示「正在顯示」，清單也更精簡。底部的分組按鈕顯示目前分組，點按可開啟分組清單；詞典多於 6 部的分組還會顯示篩選框。每個分組會顯示其中的前幾部詞典及詞典數量。「組內詞典」和「管理分組」可開啟對應的編輯頁面。在篩選框中輸入時，面板會停留在鍵盤上方。
* 重新設計了「AI查詞」視窗。回答佔滿整個視窗，並以進度條取代了等待對話框；原文顯示在靠近拇指的卡片中，可以展開，並會醒目標示所查的詞。底部列提供上下翻頁、「回答語言」和查詞設定。變更語言、AI網站或AI服務後會立即重新提問，更換網站後也無需重新開啟視窗。
* 「AI查詞」視窗新增「停止」按鈕，可中止 AI 服務（OpenAI、Google AI 或本機模型）的回答。另外，選擇 AI 服務時視窗不會再自行關閉。

---

# v2.3.9.8  (2026-11-25)

### English

### Changelog

* Fixed entries in **List View** being cut short with Android System WebView 157 or later: an entry, often the first one, showed only part of its content.
* Online dictionaries have a new **Fit page width** option in their settings, off by default. Turn it on for a site without a mobile layout to open its pages zoomed out to fit the screen. Online dictionaries now open at the site's normal size until you turn it on, and with it on, their entries can be cut short in List View with WebView 157 or later.


---
### 更新日志
* 修复了使用 Android System WebView 157 及更新版本时，“列表视图”中的词条显示不全的问题：词条（通常是第一个）只显示了部分内容。
* 在线词典的设置中新增“缩小页面以适应宽度”选项，默认关闭。网站没有手机版页面时可开启，页面会缩小到适合屏幕宽度。在线词典现在默认以网站的正常大小打开；开启此选项后，在 WebView 157 及更新版本中，列表视图里的词条可能显示不全。


---

### 繁體

### 更新日誌

* 修正了使用 Android System WebView 157 及更新版本時，「清單檢視」中的詞條顯示不全的問題：詞條（通常是第一個）只顯示了部分內容。
* 線上辭典的設定中新增「縮小頁面以符合寬度」選項，預設關閉。網站沒有手機版頁面時可開啟，頁面會縮小到符合螢幕寬度。線上辭典現在預設以網站的正常大小開啟；開啟此選項後，在 WebView 157 及更新版本中，清單檢視裡的詞條可能顯示不全。

---

# v2.3.9.7  (2026-11-24)

### English

### Changelog

* Redesigned the **first-run setup**. It now takes four short steps with a progress bar, Back and Skip: the app language, the theme (shown as previews) and screen orientation, the lookup screen (search bar at the bottom or top, results as a list or sliding, with sliding sideways or up and down, Direct Lookup and Minimalist Mode), and finding dictionaries on your device. The last step sums up your choices, each with an **Edit** button. Choosing a language shows the rest of setup in it right away.
* **LiteRT-LM** and **Local LLM** AI services can now download models from Hugging Face: tap **Download from Hugging Face** under the model file to search models, see each model’s files and sizes and download one. LiteRT-LM lists the litert-community models; Local LLM lists GGUF models that fit your phone from well-known publishers, with each quantization (Q4_K_M is recommended) and a warning for files too large for your phone’s memory or models this version can’t run. Downloads keep going in the background with a notification, resume where they stopped, and are saved in **UserAssets/Models** (change it in the menu). Where huggingface.co can’t be reached, the hf-mirror.com mirror is used automatically, or you can choose the source in the menu. Gated models, such as Gemma 3, need a Hugging Face access token, which you can add in the menu.
* Redesigned **Ask AI Online**: it opens as a sheet with the web app button, **Reload** and **Hide**, a **Your text** box for the selected or shared text, the page with a loading bar, chips for your first three prompts and **All prompts**. If the page fails to load you can retry or switch web apps, and a prompt picked while the page is loading is sent once it has loaded. A chat in progress is no longer lost when the screen rotates. The prompt picker can search your prompts and lets you change the text before sending. The prompt list and the prompt edit page are redesigned too, with a warning when a prompt has no {INPUT_CONTENT} placeholder.
* Fixed **@** dictionary lookups in **AI Chat** failing with thinking models on OpenAI API services, such as DeepSeek in thinking mode and Gemini.


---
### 更新日志
* 重新设计了“首次启动设置”：分为四个简短步骤，带进度条、返回和跳过按钮：应用语言；主题（以预览图显示）和屏幕方向；查词界面（搜索栏在底部或顶部，结果以列表或滑动方式显示，滑动可选左右或上下，以及直接查词和极简模式）；查找本机上的词典。最后一步汇总你的选择，每项都有“修改”按钮。选择语言后，后续设置会立即以该语言显示。
* LiteRT-LM 和本地大语言模型 AI 服务现在可以从 Hugging Face 下载模型：点按模型文件下方的“从 Hugging Face 下载”，即可搜索模型，查看每个模型的文件和大小并下载。LiteRT-LM 列出 litert-community 的模型；本地大语言模型列出知名发布者提供、适合本机的 GGUF 模型，并列出各量化版本（推荐 Q4_K_M），文件超出手机内存或此版本无法运行的模型会有提示。下载会在后台继续并显示通知，中断后可从断点继续，模型保存在 UserAssets/Models（可在菜单中更改）。无法连接 huggingface.co 时会自动改用 hf-mirror.com 镜像，也可以在菜单中选择下载来源。Gemma 3 等需授权的模型需要 Hugging Face 访问令牌，可在菜单中添加
* 重新设计了“在线问AI”：以底部面板打开，包含网页应用按钮、“重新加载”和“隐藏”，显示所选或分享文字的“你的文字”框，带加载进度条的网页，前三个提示词的快捷按钮和“全部提示词”。网页加载失败时可以重试或切换网页应用；网页加载时选择的提示词会在加载完成后发送。屏幕旋转时不会再丢失进行中的对话。提示词选择器可以搜索提示词，并可在发送前修改文字。提示词列表和提示词编辑页也重新设计了，提示词缺少 {INPUT_CONTENT} 占位符时会给出提醒。
* 修复了“AI 聊天”使用 OpenAI API 服务的思考模型（如思考模式下的 DeepSeek 和 Gemini）时，@ 词典查询失败的问题。


---

### 繁體

### 更新日誌

* 重新設計了「首次啟動設定」：分為四個簡短步驟，附進度條、返回和略過按鈕：應用程式語言；主題（以預覽圖顯示）和螢幕方向；查詞介面（搜尋列在底部或頂部，結果以清單或滑動方式顯示，滑動可選左右或上下，以及直接查詞和極簡模式）；尋找本機上的詞典。最後一步彙總你的選擇，每項都有「修改」按鈕。選擇語言後，後續設定會立即以該語言顯示。
* LiteRT-LM 和本地大語言模型 AI 服務現在可以從 Hugging Face 下載模型：點按模型檔案下方的「從 Hugging Face 下載」，即可搜尋模型，查看每個模型的檔案和大小並下載。LiteRT-LM 列出 litert-community 的模型；本地大語言模型列出知名發布者提供、適合本機的 GGUF 模型，並列出各量化版本（推薦 Q4_K_M），檔案超出手機記憶體或此版本無法執行的模型會有提示。下載會在背景繼續並顯示通知，中斷後可從中斷處繼續，模型儲存在 UserAssets/Models（可在選單中變更）。無法連線 huggingface.co 時會自動改用 hf-mirror.com 鏡像，也可以在選單中選擇下載來源。Gemma 3 等需授權的模型需要 Hugging Face 存取權杖，可在選單中新增。
* 重新設計了「在線問AI」：以底部面板開啟，包含網頁應用程式按鈕、「重新載入」和「隱藏」，顯示所選或分享文字的「你的文字」框，附載入進度條的網頁，前三個提示詞的快捷按鈕和「全部提示詞」。網頁載入失敗時可以重試或切換網頁應用程式；網頁載入時選擇的提示詞會在載入完成後送出。螢幕旋轉時不會再遺失進行中的對話。提示詞選擇器可以搜尋提示詞，並可在送出前修改文字。提示詞列表和提示詞編輯頁也重新設計了，提示詞缺少 {INPUT_CONTENT} 佔位符時會給出提醒。
* 修正了「AI 聊天」使用 OpenAI API 服務的思考模型（如思考模式下的 DeepSeek 和 Gemini）時，@ 辭典查詢失敗的問題。


# v2.3.9.6  (2026-11-22)

### English

### Changelog

* Redesigned **Full Text Search**: a setup page with a large search box, your recent searches, a one dictionary or dictionary group switch that shows how many local dictionaries will be searched, and cards for where to look, the search mode (with a line explaining each) and switches for whole words, match case and HTML tags. While searching, every dictionary shows whether it is done, being searched (with a progress bar) or waiting, with its count of matches; **Show results now** stops early and shows what was found. Results are grouped by dictionary, with chips to show one dictionary, and the matched text is highlighted. An entry shows how many matches are highlighted and **Next match** jumps between them; **Previous** and **Next** buttons move through the results, and the speak and add to word book buttons are at the top.
* Redesigned the **Smart Viewer**. Opened from the home screen it shows a start page with **Open a file**, **Web page** and **Type text**, a card for opening text on your clipboard, and a **Recent** list of what you read (long-press an item to remove it). The top bar shows what is open, such as the word count of text or the name of a PDF, and **Find in page** highlights matches with previous and next buttons. Edit, Copy and Translate sit in a floating bar at the bottom, and Translate opens one sheet with your installed translator apps and your online dictionaries. Text has wider margins and more space between lines, and follows dark mode.
* Fixed opening a picture in the **Smart Viewer** (and other places that recognize text in photos): the screen for cropping the picture and extracting its text closed without doing anything.
* Turning off the Smart Viewer in the text selection menu (**Settings → User interface**) still removes it from Share and Open with, but no longer stops the **Smart Viewer** button and shortcut from opening it.
* **AI Chat** with an on-device LiteRT-LM model can now look words up in your dictionaries. When a question is about a word, the model searches the dictionaries of your current lookup group (online dictionaries are skipped) and answers from their entries, showing **Looking up “…” in your dictionaries…** while it searches. Turn it on or off with the new **Tools** button next to the message box: it has a **Tool calling** switch and a switch for each tool group, starting with **Dictionary Tools**. It needs a model with tool calling, such as Gemma 4. You can also ask for one dictionary by name (“What does Oxford say about *apple*?”), even one outside the current group, or ask which dictionaries you have.
* Type **@** in **AI Chat** to pick a dictionary from a searchable list (with Dictionary Tools on). Recognised dictionary names turn bold and coloured, and sending always looks the word up in that dictionary: write **@Dictionary apple** or ask a question such as “What does @Dictionary say about apples?”. You can name up to three dictionaries and ask follow-ups such as “and its plural?” in Chat mode. If the model adds nothing, the dictionary entry itself is shown.
* Tool calling and **@** also work with **OpenAI API** services in AI Chat, including compatible servers such as llama.cpp. It is off for online services until you turn it on with the **Tools** button, because the dictionary entries and dictionary names the tools return are then sent to that service.
* Fixed **AI Chat** with OpenAI API services: errors are shown instead of hanging or closing the app, **Stop** works at once, and an API URL that is just a server or ends in /v1 works.
* Fixed replies in AI Chat being able to run scripts through math formulas, formulas containing “<” showing wrongly, and a stopped reply leaving its typing dots on screen.
* Added **AI Chat** to the **PC Console** for OpenAI API services and on-device models (LiteRT-LM and llama.cpp), with dictionary lookup and **@** for all but llama.cpp models. On-device models run on the phone, one reply at a time, and using a model on the phone stops the reply in the console. Your API keys stay on the phone. It is off until you turn on **Allow AI Chat in PC Console** in **Foreground service**, which needs the console login.
* Redesigned the **AI Chat** message box: your message is on top, and below it are round buttons for prompt templates and **Tools**, a chip with the AI service and mode (tap it to switch), and the send button.
* Fixed the search box on the home screen staying disabled after deleting a dictionary group that was in use.
* Fixed choosing a group for the lookup screen in **Dictionary Groups** also moving the floating window to it, when no group had been chosen for the floating window.
* **AI Chat** now says so when the model ends without an answer, instead of leaving “Looking up…” showing.
* Fixed AI prompts with a local llama model failing the second time in a row, and starting a new chat while a local llama model was replying causing errors.
* Fixed **AI Chat** sometimes closing when you switched AI services while an on-device LiteRT-LM model was still replying, and a local llama model staying on “replying…” after you switched away from it and back.


---
### 更新日志
* 重新设计了“全文检索”：设置页面有大号搜索框和最近检索记录，可在单个词典和词典分组间切换并显示将检索的本地词典数，另有检索内容、检索模式（每种模式附说明）以及全字匹配、匹配大小写和忽略 HTML 标记的开关。检索时每部词典都显示已完成、正在检索（带进度条）或等待中，以及找到的数量；“查看结果”可提前停止并显示已找到的词条。结果按词典分组，可用标签只看一部词典，匹配的文字会高亮显示。词条页面显示已标出的匹配数，“下一处”可在匹配之间跳转；“上一个”“下一个”按钮在结果间切换，发音和加入单词本按钮位于顶部
* 重新设计了“智能查看器”：从主屏幕打开时显示起始页，提供“打开文件”“网页”和“输入文字”，可一键打开剪贴板中的文字，并有阅读过的“最近”列表（长按项目可移除）。顶部栏显示当前打开的内容，如文字的词数或 PDF 的文件名；“页内查找”会高亮匹配并可上下跳转。编辑、复制和翻译位于底部的浮动栏，“翻译”会打开一个面板，列出已安装的翻译应用和在线词典。文字页面边距更宽、行距更大，并支持深色模式
* 修复了在“智能查看器”（以及其他识别照片文字的地方）打开图片时，裁剪和提取文字的页面直接关闭的问题
* 在“设置 → 用户界面”中关闭文字选择菜单里的智能查看器后，它仍会从“分享”和“打开方式”中移除，但主界面的“智能查看器”按钮和快捷方式仍可打开它
* 使用本机 LiteRT-LM 模型的“AI 聊天”现在可以在你的词典中查词。问题涉及某个单词时，模型会搜索当前查词分组中的词典（不含在线词典），并根据词条内容回答，搜索时显示“正在词典中查找“…”…”。可通过输入框旁新增的“工具”按钮开关此功能：其中有“工具调用”总开关和每个工具组的开关，目前提供“词典工具”。需要支持工具调用的模型，例如 Gemma 4。也可以指定某部词典（如“牛津词典怎么解释 apple？”），包括当前分组以外的词典，或询问你有哪些词典
* 在“AI 聊天”中输入 @ 可从可搜索的列表中选择词典（需开启“词典工具”）。识别出的词典名称会以粗体和彩色显示，发送时一定会在该词典中查词：可以输入“@词典名 apple”，也可以提问，如“@词典名 怎么解释 apple？”。最多可同时指定三部词典，在对话模式下还可以追问，如“它的复数呢？”。模型没有补充说明时，会直接显示词条内容
* “AI 聊天”中的 OpenAI API 服务（包括 llama.cpp 等兼容服务器）也支持工具调用和 @。由于工具返回的词条和词典名称会发送到该服务，在线服务默认关闭此功能，可通过“工具”按钮开启
* 修复了“AI 聊天”使用 OpenAI API 服务时的问题：出错时会显示原因，不再卡住或闪退；“停止”立即生效；API 地址只填服务器或以 /v1 结尾时也可使用
* 修复了“AI 聊天”的回复可通过数学公式运行脚本、含“<”的公式显示错误，以及停止回复后输入动画不消失的问题
* “PC 控制台”新增“AI 聊天”，支持 OpenAI API 服务和本机模型（LiteRT-LM 和 llama.cpp），除 llama.cpp 模型外均可查词典和使用 @。本机模型在手机上运行，一次只生成一条回复；在手机上使用模型时，控制台中的回复会停止。API 密钥只保存在手机上。此功能默认关闭，需在前台服务设置中允许，并且必须启用控制台登录
* 重新设计了“AI 聊天”的输入框：消息在上方，下方是提示词模板和“工具”的圆形按钮、显示 AI 服务和模式的标签（点按可切换），以及发送按钮
* 修复了删除正在使用的词典分组后，主界面搜索框一直无法使用的问题
* 修复了在“词典分组”中为查词界面选择分组时，若浮动窗口从未单独选择过分组，浮动窗口也会一起切换的问题
* 模型没有给出回答时，“AI 聊天”会显示提示，而不是一直停在“正在查找…”
* 修复了连续第二次使用本地 llama 模型运行 AI 提示词时失败，以及在本地 llama 模型回复时开始新对话会出错的问题
* 修复了在本机 LiteRT-LM 模型回复时切换 AI 服务，“AI 聊天”有时会闪退的问题，以及切换到其他服务再切回本地 llama 模型后一直显示“正在回复…”的问题


---

### 繁體

### 更新日誌

* 重新設計了「全文檢索」：設定頁面有大號搜尋框和最近檢索記錄，可在單個詞典和詞典分組間切換並顯示將檢索的本地詞典數，另有檢索內容、檢索模式（每種模式附說明）以及全字匹配、匹配大小寫和忽略 HTML 標記的開關。檢索時每部詞典都顯示已完成、正在檢索（附進度條）或等待中，以及找到的數量；「查看結果」可提前停止並顯示已找到的詞條。結果按詞典分組，可用標籤只看一部詞典，匹配的文字會醒目顯示。詞條頁面顯示已標出的匹配數，「下一處」可在匹配之間跳轉；「上一個」「下一個」按鈕在結果間切換，發音和加入單詞本按鈕位於頂部。
* 重新設計了「智能查看器」：從主畫面打開時顯示起始頁，提供「打開檔案」「網頁」和「輸入文字」，可一鍵打開剪貼簿中的文字，並有閱讀過的「最近」列表（長按項目可移除）。頂部欄顯示目前打開的內容，如文字的詞數或 PDF 的檔名；「頁內查找」會醒目顯示匹配並可上下跳轉。編輯、複製和翻譯位於底部的浮動欄，「翻譯」會打開一個面板，列出已安裝的翻譯應用程式和線上詞典。文字頁面邊距更寬、行距更大，並支援深色模式。
* 修正了在「智能查看器」（以及其他辨識照片文字的地方）打開圖片時，裁剪和擷取文字的頁面直接關閉的問題。
* 在「設定 → 使用者介面」中關閉文字選取選單裡的智能查看器後，它仍會從「分享」和「開啟方式」中移除，但主畫面的「智能查看器」按鈕和捷徑仍可打開它。
* 使用本機 LiteRT-LM 模型的「AI 聊天」現在可以在你的辭典中查詞。問題涉及某個單詞時，模型會搜尋目前查詞群組中的辭典（不含線上辭典），並根據詞條內容回答，搜尋時顯示「正在辭典中查詢「…」…」。可透過輸入框旁新增的「工具」按鈕開關此功能：其中有「工具呼叫」總開關和每個工具群組的開關，目前提供「辭典工具」。需要支援工具呼叫的模型，例如 Gemma 4。也可以指定某部辭典（如「牛津辭典怎麼解釋 apple？」），包括目前群組以外的辭典，或詢問你有哪些辭典。
* 在「AI 聊天」中輸入 @ 可從可搜尋的列表中選擇辭典（需開啟「辭典工具」）。識別出的辭典名稱會以粗體和彩色顯示，傳送時一定會在該辭典中查詞：可以輸入「@辭典名 apple」，也可以提問，如「@辭典名 怎麼解釋 apple？」。最多可同時指定三部辭典，在對話模式下還可以追問，如「它的複數呢？」。模型沒有補充說明時，會直接顯示詞條內容。
* 「AI 聊天」中的 OpenAI API 服務（包括 llama.cpp 等相容伺服器）也支援工具呼叫和 @。由於工具傳回的詞條和辭典名稱會傳送到該服務，線上服務預設關閉此功能，可透過「工具」按鈕開啟。
* 修正了「AI 聊天」使用 OpenAI API 服務時的問題：出錯時會顯示原因，不再卡住或閃退；「停止」立即生效；API 位址只填伺服器或以 /v1 結尾時也可使用。
* 修正了「AI 聊天」的回覆可透過數學公式執行指令碼、含「<」的公式顯示錯誤，以及停止回覆後輸入動畫不消失的問題。
* 「PC 控制台」新增「AI 聊天」，支援 OpenAI API 服務和本機模型（LiteRT-LM 和 llama.cpp），除 llama.cpp 模型外均可查辭典和使用 @。本機模型在手機上執行，一次只產生一則回覆；在手機上使用模型時，控制台中的回覆會停止。API 金鑰只儲存在手機上。此功能預設關閉，需在前台服務設定中允許，並且必須啟用控制台登入。
* 重新設計了「AI 聊天」的輸入框：訊息在上方，下方是提示詞範本和「工具」的圓形按鈕、顯示 AI 服務和模式的標籤（輕觸可切換），以及傳送按鈕。
* 修正了刪除正在使用的詞典分組後，主畫面搜尋框一直無法使用的問題。
* 修正了在「詞典分組」中為查詞介面選擇分組時，若浮動窗口從未單獨選擇過分組，浮動窗口也會一起切換的問題。
* 模型沒有給出回答時，「AI 聊天」會顯示提示，而不是一直停在「正在查詢…」。
* 修正了連續第二次使用本機 llama 模型執行 AI 提示詞時失敗，以及在本機 llama 模型回覆時開始新對話會出錯的問題。
* 修正了在本機 LiteRT-LM 模型回覆時切換 AI 服務，「AI 聊天」有時會閃退的問題，以及切換到其他服務再切回本機 llama 模型後一直顯示「正在回覆…」的問題。



# v2.3.9.2  (2026-11-20)

### English

### Changelog

* Sliding View can now stack the dictionaries vertically (**Settings → User interface → Sliding View Direction → Vertical**). Read a dictionary to its end and keep dragging: the next dictionary slides up behind your finger, and a **Release for …** hint shows when letting go will open it (dragging down at the top goes back). A short pull springs back, and quick flings never change the page. The next dictionary opens at its top, the previous one at its bottom. **Vertical Paging Sensitivity** sets how far you need to pull: Low, Medium or High.
* In Sliding View, **Next dictionary** now moves on with the first tap when the first dictionary is set to start collapsed.
* The floating window can use Sliding View too: set **Content Present Mode** under **Floating Window UI**, or turn on the present mode button under **Bottom bar icons on floating window**. It is separate from the main window's setting.
* The Sliding View settings now have their own **Sliding View** section in **Settings → User interface**, which shows only the settings for the chosen direction: **Vertical Paging Sensitivity** for vertical, **Animation** and **Drag Sensitivity** for horizontal.
* Redesigned the **Word Book** list: a rounded search box, category chips with word counts, a sort button, and card rows that show the picture (or the first letter), category, lookups, date and the start of your note. Tap a word to see its definition; tap ⋯ or long-press it for a sheet with Definition, Edit, Picture, Memorised and Delete. Memorised words get a badge. **Read words** and **Hangman** are now buttons at the bottom of the list.
* Redesigned the **Word Book** edit page: change, search for or remove the word's picture there, pick a category or type a new one, write a longer note, mark the word as memorised or delete it. It shows how often you looked the word up and when you added it, and asks before leaving with unsaved changes.
* Redesigned **Read words**: a setup page with the number of words, a one-tap **Resume where you stopped**, steppers for the start word and repeats, a five-way pause picker (including Manual), and switches for spelling and text-to-speech. While reading, a progress bar and counter sit at the top, letters light up as a word is spelled, your note and the chosen dictionary's definition show below, and **Previous**, **Pause** and **Next** work at any time (Manual mode has **Say it again** and **Next word**). Pausing part-way reads the word again when you continue, and the last word shows a **Read again** button.
* Redesigned **Add to word book** as a bottom sheet: tap a category chip (the last one you used is picked), add a new category right in the sheet, and write an optional note. For a word that is already in your word book it shows how often you looked it up and when you added it, and offers **Save** and **Remove**.


---
### 更新日志
* 滑动视图现在可以垂直排列词典（“设置 → 用户界面 → 滑动视图方向 → 垂直”）。读到一部词典末尾后继续向上拖动，下一部词典会跟随手指滑入，出现“松开切换到 …”提示时松手即可切换（在顶部向下拖动则返回上一部）。拉动较短会自动弹回，快速滑动不会翻页。下一部词典从顶部开始显示，上一部从底部开始显示。“垂直翻页灵敏度”可设置需要拉动的距离：低、中、高
* 浮动窗口也可以使用滑动视图：在“浮动窗口界面”中设置“内容显示模式”，或在“浮动窗口底部栏”中打开内容显示模式按钮。它与主查词界面的设置互不影响
* 滑动视图的设置现在集中在“设置 → 用户界面”中单独的“滑动视图”分类，只显示当前方向适用的设置：垂直方向显示“垂直翻页灵敏度”，水平方向显示“滑动视图动画”和“滑动视图灵敏度”
* 重新设计了“单词本”列表：圆角搜索框、带单词数的类别标签、排序按钮，以及显示图片（或首字母）、类别、查询次数、日期和备注开头的卡片。点按单词查看释义；点按 ⋯ 或长按打开包含释义、编辑、图片、已记住和删除的面板。已记住的单词会显示标记。“朗读单词”和“猜单词游戏”改为列表底部的按钮
* 重新设计了“单词本”编辑页面：可在此更换、在线搜索或移除单词的图片，选择类别或输入新类别，写更长的备注，标记为已记住或删除单词。页面显示查询次数和加入日期，有未保存的修改时离开前会询问
* 重新设计了“朗读单词”：设置页面显示单词数，可一键“从上次停下的地方继续”，用加减按钮设置起始单词和朗读遍数，用五档选择单词间停顿（含手动），并可开关拼读和文字转语音。朗读时顶部显示进度条和计数，拼读时字母逐个点亮，下方显示你的备注和所选词典的释义；“上一个”“暂停”“下一个”随时可用（手动模式有“再读一遍”和“下一个”）。中途暂停后继续会重读当前单词，读完最后一个单词后可“重新朗读”
* 重新设计了“添加到单词本”，改为底部面板：点按类别标签即可选择（默认选中上次用的类别），可直接在面板中新建类别，并可写备注。单词已在单词本中时，会显示查询次数和加入日期，并提供“保存”和“移除”
* 修复了在滑动视图中，若第一部词典设为默认收起，“下一部词典”按钮需要点击两次才切换的问题


---

### 繁體

### 更新日誌

* 滑動視圖現在可以垂直排列詞典（「設置 → 用戶界面 → 滑動視圖方向 → 垂直」）。讀到一部詞典末尾後繼續向上拖動，下一部詞典會跟隨手指滑入，出現「放開切換到 …」提示時放開即可切換（在頂部向下拖動則返回上一部）。拉動較短會自動彈回，快速滑動不會翻頁。下一部詞典從頂部開始顯示，上一部從底部開始顯示。「垂直翻頁靈敏度」可設定需要拉動的距離：低、中、高。
* 在滑動視圖中，若第一部詞典設為預設收起，「下一部詞典」按鈕現在第一次輕觸就會切換。
* 浮動窗口也可以使用滑動視圖：在「浮動窗口界面」中設定「內容顯示模式」，或在「浮動窗口底部欄」中開啟內容顯示模式按鈕。它與主查詞介面的設定互不影響。
* 滑動視圖的設定現在集中在「設置 → 用戶界面」中單獨的「滑動視圖」分類，只顯示目前方向適用的設定：垂直方向顯示「垂直翻頁靈敏度」，水平方向顯示「滑動視圖動畫」和「滑動視圖靈敏度」。
* 重新設計了「單詞本」列表：圓角搜尋框、附單詞數的類別標籤、排序按鈕，以及顯示圖片（或首字母）、類別、查詢次數、日期和備註開頭的卡片。輕觸單詞查看釋義；輕觸 ⋯ 或長按開啟包含釋義、編輯、圖片、已記住和刪除的面板。已記住的單詞會顯示標記。「朗讀單詞」和「猜單詞遊戲」改為列表底部的按鈕。
* 重新設計了「單詞本」編輯頁面：可在此更換、線上搜尋或移除單詞的圖片，選擇類別或輸入新類別，寫更長的備註，標記為已記住或刪除單詞。頁面顯示查詢次數和加入日期，有未儲存的修改時離開前會詢問。
* 重新設計了「朗讀單詞」：設定頁面顯示單詞數，可一鍵「從上次停下的地方繼續」，用加減按鈕設定起始單詞和朗讀遍數，用五檔選擇單詞間停頓（含手動），並可開關拼讀和文字轉語音。朗讀時頂部顯示進度條和計數，拼讀時字母逐個點亮，下方顯示你的備註和所選詞典的釋義；「上一個」「暫停」「下一個」隨時可用（手動模式有「再讀一遍」和「下一個」）。中途暫停後繼續會重讀目前單詞，讀完最後一個單詞後可「重新朗讀」。
* 重新設計了「添加到單詞本」，改為底部面板：輕觸類別標籤即可選擇（預設選中上次用的類別），可直接在面板中新增類別，並可寫備註。單詞已在單詞本中時，會顯示查詢次數和加入日期，並提供「儲存」和「移除」。


# v2.3.9.1  (2026-11-18)

### English

### Changelog


* Redesigned **AI Chat**: the title shows the AI service and mode, and tapping it opens a sheet to switch the service or choose Chat or Q&A. Messages have a cleaner look in light and dark themes, a new chat shows your first prompt templates, and the message box has a round send button that turns into Stop while a reply is written. Prompt templates open in a sheet that marks the ones that ask for input. A **Jump to latest** button appears when you scroll up during a reply.
* Added a **LiteRT-LM** AI service for running `.litertlm` models (such as Gemma and Qwen) on the phone. Choose it as the provider when adding an AI service, pick the model file and, optionally, let it use the GPU; it falls back to the CPU when the phone or model doesn't support the GPU. It works in AI Chat and for AI prompts. It needs a 64-bit ARM phone.
* Added **Ask about a Photo**: point the camera at something (or choose a photo), optionally type or say a question, and an on-device AI model answers as your language teacher and makes a word card in the language you are learning, with an example sentence. Speak the word, look it up in your dictionaries, add it to a word book with the photo, or ask follow-up questions. Choose your language, the language to learn and one of four teacher personas (Buddy, Nerdy, Secret Agent, Wizard), whose prompts you can edit. It needs a LiteRT-LM AI service with a model that takes images, such as Gemma 4 E2B or E4B. Open it from the home menu, or from the new icon in the search box, which shows once you have a LiteRT-LM service.
* You can download LiteRT-LM models, including Gemma 4 E2B and E4B for Ask about a Photo, from Hugging Face: https://huggingface.co/collections/litert-community/gemma-family
* Redesigned the **AI Service** and **AI Prompt** lists and edit pages in the style of the display font screens: numbered rows with each provider's icon, a details sheet with Edit, Move to top and Delete, drag handles in reorder mode, and card-style edit pages with help text and checks before saving.
* Fixed a crash when sorting the dictionaries of a large group by name.

---
### 更新日志
* 重新设计了“AI 对话”：标题显示当前 AI 服务和模式，点按标题可切换服务或选择“对话”“问答”模式。消息在浅色和深色主题下都更清爽，新对话会显示前几个提示词模板，输入框改用圆形发送按钮，生成回复时变为“停止”。提示词模板改在底部面板中打开，并标出需要输入的模板。回复过程中向上滚动时会出现“跳到最新”按钮
* 新增 **LiteRT-LM** AI 服务，可在手机上运行 `.litertlm` 模型（如 Gemma、Qwen）。添加 AI 服务时选择它作为服务提供方，选择模型文件，并可选择使用 GPU；手机或模型不支持 GPU 时会自动改用 CPU。可用于 AI 对话和 AI 提示词。需要 64 位 ARM 手机
* 新增“看图学单词”：用相机对准一样东西（或选择一张照片），可先输入或说出问题，本机上的 AI 模型会以语言老师的身份回答，并用你正在学的语言生成带例句的单词卡。可朗读单词、在你的词典中查找、连同照片加入单词本，也可继续追问。可选择你的语言、要学的语言以及四种老师角色之一（小伙伴、学霸、特工、巫师），角色的提示词可以编辑。需要一个模型能读图片的 LiteRT-LM AI 服务，例如 Gemma 4 E2B 或 E4B。可从首页菜单打开；添加 LiteRT-LM 服务后，搜索框中也会出现新图标
* LiteRT-LM 模型（包括“看图学单词”所需的 Gemma 4 E2B 和 E4B）可从 https://huggingface.co/collections/litert-community/gemma-family 下载
* 重新设计了“AI 服务”和“AI 提示词”列表及编辑页面，与“显示字体”界面风格一致：带序号和服务提供方图标的列表、包含编辑、移到顶部和删除的详情面板、排序模式下的拖动手柄，以及带说明文字和保存前检查的卡片式编辑页面
* 修复了对大型词典分组按名称排序时闪退的问题


---

### 繁體

### 更新日誌

* 重新設計了「AI 對話」：標題顯示目前的 AI 服務和模式，輕觸標題可切換服務或選擇「對話」「問答」模式。訊息在淺色和深色主題下都更清爽，新對話會顯示前幾個提示詞範本，輸入框改用圓形傳送按鈕，產生回覆時變為「停止」。提示詞範本改在底部面板中開啟，並標出需要輸入的範本。回覆過程中向上捲動時會出現「跳到最新」按鈕。
* 新增 **LiteRT-LM** AI 服務，可在手機上執行 `.litertlm` 模型（如 Gemma、Qwen）。新增 AI 服務時選擇它作為服務提供者，選擇模型檔案，並可選擇使用 GPU；手機或模型不支援 GPU 時會自動改用 CPU。可用於 AI 對話和 AI 提示詞。需要 64 位元 ARM 手機。
* 新增「看圖學單字」：用相機對準一樣東西（或選擇一張照片），可先輸入或說出問題，本機上的 AI 模型會以語言老師的身分回答，並用你正在學的語言產生附例句的單字卡。可朗讀單字、在你的字典中查詢、連同照片加入單詞本，也可繼續追問。可選擇你的語言、要學的語言以及四種老師角色之一（小夥伴、學霸、特務、巫師），角色的提示詞可以編輯。需要一個模型能讀圖片的 LiteRT-LM AI 服務，例如 Gemma 4 E2B 或 E4B。可從首頁選單開啟；新增 LiteRT-LM 服務後，搜尋框中也會出現新圖示。
* LiteRT-LM 模型（包括「看圖學單字」所需的 Gemma 4 E2B 和 E4B）可從 https://huggingface.co/collections/litert-community/gemma-family 下載。
* 重新設計了「AI 服務」和「AI 提示詞」列表及編輯頁面，與「顯示字體」介面風格一致：附序號和服務提供者圖示的列表、包含編輯、移到頂部和刪除的詳情面板、排序模式下的拖動把手，以及附說明文字和儲存前檢查的卡片式編輯頁面。
* 修復了對大型詞典分組按名稱排序時閃退的問題。

---

# v2.3.9.0  (2026-11-16)

### English

### Changelog


* Redesigned the **Dictionary Group** list: each group shows tags for where it is used (lookup screen, floating window, default), its dictionary count and brief dictionary, and small icons of its first dictionaries. Groups are added with the new **New Group** button, and reorder mode has drag handles. Tap a group, including the Default Group, for a sheet with Dictionaries, Reorder, Rename, **Use** for the lookup screen or floating window, the brief dictionary and Delete group.
* Redesigned the list of dictionaries in a group: each dictionary shows its position, icon and its states as tags (starts collapsed or open, always open, no header, brief). Tapping a dictionary opens a sheet with switches for these states, Move to top and Remove from this group. In selection mode, **More** opens the same sheet for all selected dictionaries. Dictionaries are added with the **Add dictionaries** button.
* Added an **MDict key sort order** option to the **Edit dictionary** page: Auto, MdxBuilder or MdictUtils. Auto detects the tool that built the .mdx file from its header, as before; if some words in a dictionary can't be found because the detection was wrong, choose the other tool. MdictUtils only applies to UTF-8 dictionaries.

---
### 更新日志
* 重新设计了“词典分组”列表：每个分组以标签显示其用途（查词界面、浮动窗口、默认），并显示词典数量、简明词典和前几部词典的小图标。添加分组改用新的“新建分组”按钮，排序模式新增拖动手柄。点按分组（包括默认分组）会打开详情面板，可进入词典列表、排序、重命名、“使用”于查词界面或浮动窗口、设置简明词典和删除分组
* 重新设计了分组内的词典列表：每部词典显示序号、图标，并以标签显示其状态（默认折叠或展开、始终展开、无标题栏、简明词典）。点按词典会打开详情面板，可用开关切换这些状态，也可移到顶部或从该分组移除。在多选模式下，“更多”会为所有选中的词典打开同一面板。添加词典改用“添加词典”按钮
* “编辑词典”页面新增“MDict 词条排序方式”选项：自动、MdxBuilder 或 MdictUtils。“自动”与以前一样，根据文件头判断生成 .mdx 文件所用的工具；如果因判断有误导致词典中有些词条查不到，可改选另一种工具。MdictUtils 仅适用于 UTF-8 编码的词典


---

### 繁體

### 更新日誌

* 重新設計了「詞典分組」列表：每個分組以標籤顯示其用途（查詞介面、浮動視窗、預設），並顯示詞典數量、簡明詞典和前幾部詞典的小圖示。新增分組改用新的「新建分組」按鈕，排序模式新增拖動把手。輕觸分組（包括預設分組）會開啟詳情面板，可進入詞典列表、排序、重新命名、「使用」於查詞介面或浮動視窗、設定簡明詞典和刪除分組。
* 重新設計了分組內的詞典列表：每部詞典顯示序號、圖示，並以標籤顯示其狀態（預設摺疊或展開、始終展開、無標題列、簡明詞典）。輕觸詞典會開啟詳情面板，可用開關切換這些狀態，也可移到頂部或從該分組移除。在多選模式下，「更多」會為所有選取的詞典開啟同一面板。新增詞典改用「新增詞典」按鈕。
* 「編輯詞典」頁面新增「MDict 詞條排序方式」選項：自動、MdxBuilder 或 MdictUtils。「自動」與以前一樣，根據檔案標頭判斷產生 .mdx 檔案所用的工具；如果因判斷有誤導致詞典中有些詞條查不到，可改選另一種工具。MdictUtils 僅適用於 UTF-8 編碼的詞典。


# v2.3.8.9  (2026-11-15)

### English

### Changelog


* Fixed the PC Console's **File Manager** showing a broken preview for images whose names have Chinese characters or spaces; opening such files in the browser now shows them instead of "unknown content type".
* Redesigned the **Display Font** list: each font shows its priority, a preview drawn in the font itself, the file name, size and folder, and a "Part 1 of 2" tag for split font files. Tap a font for a details sheet with a larger preview, your own preview text, Edit, Move to top and Remove. Reorder mode has drag handles, and fonts are added with the new **Add font** button.
* Font names are now read from the font's family name. Fonts that were named after their copyright notice are renamed automatically.
* Redesigned the **Edit font** page: settings are grouped into cards, weight, style and font display are chosen with buttons, and the Unicode range and weight are checked before saving.
* Redesigned the **Audio Resource** and **Linked Resources** screens in the same style. Audio packs have a new **Test pronunciation** action that plays a word from that pack alone.
* Redesigned the **Dictionary List**: search is always shown, with filters for type, sort order and dictionary group; dictionaries are added with the **Add dictionary** button; and tapping a dictionary opens a details sheet with its actions.
* Reorganized the **Edit dictionary** page into cards, with buttons and switches in place of drop-down lists.
* Dictionaries without a cover now show the first character of their name on a coloured tile, instead of the same "M" icon for all.

---
### 更新日志
* 修复了电脑控制台“文件管理”中，文件名含中文或空格的图片预览无法显示的问题；在浏览器中打开这类文件时，也不再提示无法识别的文件类型
* 重新设计了“显示字体”列表：每个字体显示优先级、用字体本身绘制的预览、文件名、大小和所在文件夹，拆分的字体文件会标注“第 1 部分，共 2 部分”。点按字体可打开详情面板，查看较大的预览、设置自己的预览文字，以及编辑、移到顶部和移除。排序模式新增拖动手柄，添加字体改用新的“添加字体”按钮
* 字体名称改为读取字体的字体族名称；以前被命名为版权声明的字体会自动改回正确的名称
* 重新设计了“编辑字体”页面：设置按卡片分组，粗细、样式和字体显示方式改用按钮选择，保存前会检查 Unicode 范围和粗细值
* 以同样的风格重新设计了“音频资源”和“链接资源”界面。音频包新增“试听发音”，只从该音频包播放单词
* 重新设计了“词典列表”：搜索栏常驻显示，并可按类型、排序方式和词典分组筛选；添加词典改用“添加词典”按钮；点按词典会打开包含各项操作的详情面板
* “编辑词典”页面改为卡片布局，下拉列表改为按钮和开关
* 没有封面的词典改为在彩色方块上显示名称的第一个字，不再全部显示相同的“M”图标




---

### 繁體中文

### 更新日誌

* 修復了電腦控制台「檔案管理」中，檔名含中文或空格的圖片預覽無法顯示的問題；在瀏覽器中開啟這類檔案時，也不再提示無法識別的檔案類型。
* 重新設計了「顯示字體」列表：每個字體顯示優先順序、用字體本身繪製的預覽、檔名、大小和所在資料夾，拆分的字體檔案會標註「第 1 部分，共 2 部分」。輕觸字體可開啟詳情面板，查看較大的預覽、設定自己的預覽文字，以及編輯、移到頂部和移除。排序模式新增拖動把手，新增字體改用新的「新增字體」按鈕。
* 字體名稱改為讀取字體的字體族名稱；以前被命名為版權聲明的字體會自動改回正確的名稱。
* 重新設計了「編輯字體」頁面：設定按卡片分組，粗細、樣式和字體顯示方式改用按鈕選擇，儲存前會檢查 Unicode 範圍和粗細值。
* 以同樣的風格重新設計了「音訊資源」和「連結資源」介面。音訊包新增「試聽發音」，只從該音訊包播放單字。
* 重新設計了「詞典列表」：搜尋列常駐顯示，並可按類型、排序方式和詞典群組篩選；新增詞典改用「新增詞典」按鈕；輕觸詞典會開啟包含各項操作的詳情面板。
* 「編輯詞典」頁面改為卡片版面，下拉清單改為按鈕和開關。
* 沒有封面的詞典改為在彩色方塊上顯示名稱的第一個字，不再全部顯示相同的「M」圖示。

# v2.3.8.8  (2026-11-13)

### English

### Changelog

* Fixed **Reading Mode** freezing while it opens: the dictionary, its icon and each entry now load in the background, so the app no longer shows a "not responding" prompt.
* **Reading Mode** has a tidier look: the header shows the word with the dictionary name under it, and Edit User Comment, Print and Developer Tools are now in its **More** menu.
* Reading Mode's bottom toolbar is now a floating bar with the same buttons as the lookup screen's. Buttons that don't fit move into a **More** menu at the end of the bar instead of running off it.
* New **Fixed bottom bar** setting for Reading Mode (Settings → User interface → Reading Mode UI), like the one for the lookup screen: turn it on to keep the toolbar on screen while you scroll.
* New **Show Tap-Translate results on the lookup screen** setting (Settings → Dictionary Settings → Touch Control): turn it on to look up a tapped word right on the lookup screen instead of in a floating window.

---
### 更新日志
* 修复了“阅读模式”打开时卡顿的问题：词典、词典图标和词条现在在后台加载，应用不再提示“无响应”
* “阅读模式”界面更简洁：顶栏显示单词及其下方的词典名称，“编辑用户批注”、“打印”和“开发者工具”移入了“更多”菜单
* 阅读模式的底部工具栏改为浮动工具栏，按钮样式与查词界面一致；放不下的按钮会移入工具栏末尾的“更多”菜单，不再超出工具栏
* 阅读模式新增“固定底部栏”设置（设置 → 用户界面 → 阅读模式界面），与查词界面的同名设置相同：开启后，滚动时工具栏会保持显示
* 新增“在查词界面显示点译结果”设置（设置 → 词典设置 → 触控）：开启后，在查词界面点译单词时直接在该界面查词，而不是打开浮动窗口


---

### 繁體中文

### 更新日誌

* 修復了「閱讀模式」開啟時卡頓的問題：詞典、詞典圖示和詞條現在在背景載入，應用程式不再提示「沒有回應」。
* 「閱讀模式」介面更簡潔：頂欄顯示單字及其下方的詞典名稱，「編輯用戶批注」、「列印」和「開發者工具」移入了「更多」選單。
* 閱讀模式的底部工具列改為浮動工具列，按鈕樣式與查詞介面一致；放不下的按鈕會移入工具列末端的「更多」選單，不再超出工具列。
* 閱讀模式新增「固定底部欄」設定（設定 → 用戶界面 → 閱讀模式界面），與查詞介面的同名設定相同：開啟後，捲動時工具列會保持顯示。
* 新增「在查詞介面顯示點譯結果」設定（設定 → 詞典設置 → 觸控）：開啟後，在查詞介面點譯單字時直接在該介面查詞，而不是開啟浮動視窗。

# v2.3.8.7 (2026-11-13)
### English

### Changelog

* Fixed the **Direct Lookup** setting: with it on, the app did not open the lookup screen at launch and the home screen did not finish loading.
* Fixed the floating lookup window not releasing its pages when it closed while Direct Lookup was off.

---
### 更新日志
* 修复了“直接查词”设置：开启后，应用启动时不会进入查词界面，主页也无法完成加载
* 修复了“直接查词”关闭时，浮动查词窗口关闭后未释放其页面的问题




---

### 繁體中文

### 更新日誌

* 修復了「直接查詞」設定：開啟後，應用程式啟動時不會進入查詞介面，首頁也無法完成載入。
* 修復了「直接查詞」關閉時，浮動查詞視窗關閉後未釋放其頁面的問題。

---

# v2.3.8.6 (2026-11-12)

### English

### Changelog

* New **Display layout** setting (Settings → Dictionary View Color Scheme): show each dictionary's entry in the Original list, on a Page White background, or as Clean Linen or Warm Paper Book Page cards, with an optional card shadow.
* New PC Console: a redesigned browser console that works on computers and phones, with dark mode, quicker word lookup and full-text search, links you can bookmark, and a file manager with drag-and-drop uploads and per-file progress. The previous console is still available at /classic/ for this release.
* PC Console: edit dictionary groups: create, rename and delete groups, add and remove dictionaries, and drag them into the order words are looked up in. A group can also be made the console's lookup group.
* PC Console: refreshed look, with a clearer sidebar, full-width pages, and the lookup group's dictionaries on the dashboard.
* PC Console: fixed security issues: it could reach files outside the DictTango folder, and other websites could send it requests.
* PC Console: full-text search can search a single dictionary, like the app's Search Source option.
* PC Console: faster entry pages, faster uploads, resumable downloads, and correct names for downloaded files with non-ASCII names.
* PC Console: fixed words containing "/" or "+" not opening, search history recording the wrong word, and search matches not being highlighted in entries.
* PC Console: deleting a dictionary or group now updates the app right away; the default group can no longer be deleted.

---
### 更新日志
* 新增“显示布局”设置（设置 → 词典视图配色）：词条可按原始列表、纯白页面显示，或显示为素雅亚麻、暖色纸张书页卡片，并可开启卡片阴影
* 全新电脑控制台：重新设计的浏览器控制台，可在电脑和手机上使用，支持深色模式，查词和全文检索更快，网址可加入书签，文件管理器支持拖放上传并显示每个文件的进度。本版本仍可在 /classic/ 使用旧版控制台
* 电脑控制台：可编辑词典分组：新建、重命名和删除分组，添加和移出词典，并拖动调整查词顺序；也可将分组设为控制台的查词分组
* 电脑控制台：界面焕新，侧边栏更清晰，页面占满窗口宽度，仪表板显示查词分组中的词典
* 电脑控制台：修复了安全问题：可访问 DictTango 文件夹以外的文件，以及其他网站可向其发送请求
* 电脑控制台：全文检索可只搜索单个词典，与应用中的“搜索源”选项相同
* 电脑控制台：词条页面和上传更快，下载可续传，非英文文件名下载后名称正确
* 电脑控制台：修复了含“/”或“+”的单词无法打开、搜索历史记录了错误的单词、词条中搜索结果未高亮的问题
* 电脑控制台：删除词典或分组后应用会立即更新；默认分组不能再被删除




---

### 繁體中文

### 更新日誌

* 新增「顯示佈局」設定（設定 → 詞典視圖配色）：詞條可按原始列表、純白頁面顯示，或顯示為素雅亞麻、暖色紙張書頁卡片，並可開啟卡片陰影。
* 全新電腦控制台：重新設計的瀏覽器控制台，可在電腦和手機上使用，支援深色模式，查詞和全文檢索更快，網址可加入書籤，檔案管理器支援拖放上傳並顯示每個檔案的進度。本版本仍可在 /classic/ 使用舊版控制台。
* 電腦控制台：可編輯詞典分組：新增、重新命名和刪除分組，加入和移出詞典，並拖曳調整查詞順序；也可將分組設為控制台的查詞分組。
* 電腦控制台：介面煥新，側邊欄更清晰，頁面佔滿視窗寬度，儀表板顯示查詞分組中的詞典。
* 電腦控制台：修復了安全問題：可存取 DictTango 資料夾以外的檔案，以及其他網站可向其傳送請求。
* 電腦控制台：全文檢索可只搜尋單一詞典，與應用程式中的「搜尋來源」選項相同。
* 電腦控制台：詞條頁面和上傳更快，下載可續傳，非英文檔名下載後名稱正確。
* 電腦控制台：修復了含「/」或「+」的單字無法開啟、搜尋紀錄記錄了錯誤的單字、詞條中搜尋結果未醒目提示的問題。
* 電腦控制台：刪除詞典或分組後應用程式會立即更新；預設分組不能再被刪除。

  
# v2.3.8.3 (2026-10-25)
### English
English: Fixed an issue with loading the Japanese spelling dictionary.

---
### 更新日志
修正了日语拼写词典的读取问题

---

### 繁體中文
### 更新日誌
修正了日語拼寫詞典的讀取問題。

# v2.3.8.2 (2026-10-16)
### English
Fixed TTS issue

---
### 更新日志
修复了TTS的问题

---

### 繁體中文
### 更新日誌
修復了TTS的問題


# v2.3.8.1 (2026-10-13)
### English

### Changelog

* Changing the dark mode or the app language now takes effect immediately, without restarting the app.
* When dark mode is set to **Follow System**, the app now also switches when the system dark mode changes while the app is open.
* Fixed dictionaries added or deleted from the PC Console sometimes being processed more than once.
* Fixed the search result list sometimes showing the previous search's results overlapping the current ones in the lookup window and the floating window.

---
### 更新日志
* 切换暗黑模式或应用语言后立即生效，无需重启应用
* 暗黑模式设为“跟随系统”时，应用打开期间系统切换暗黑模式，应用也会随之切换
* 修复了从电脑控制台添加或删除词典时，有时会被重复处理的问题
* 修复了查词窗口和浮动窗口中，搜索结果列表有时与上一次搜索的结果重叠显示的问题


---

### 繁體中文

### 更新日誌

* 切換暗黑模式或應用語言後立即生效，無需重啟應用。
* 暗黑模式設為「跟隨系統」時，應用開啟期間系統切換暗黑模式，應用也會隨之切換。
* 修復了從電腦控制台添加或刪除詞典時，有時會被重複處理的問題。
* 修復了查詞窗口和浮動窗口中，搜尋結果列表有時與上一次搜尋的結果重疊顯示的問題。


# v2.3.8.0 (2026-10-11)
### English

### Changelog

* Added **Auto Naming and Grouping Rules** in Dictionary settings: name and group dictionaries automatically when they are added, by file path, file name or internal name.
* Newly added dictionaries (MDX and .dc) are now named after their internal name (unless it is empty or the Mdx Builder placeholder), otherwise after the file name. This default rule can be edited, disabled or deleted. Existing dictionaries are not renamed.
* Adding several dictionaries no longer stops at the first file that cannot be opened: the other files are added and the failed ones are reported.
* Dictionary rules can be exported to and imported from a JSON file (select rules, then Export; Import adds new rules and skips duplicates).
* The dictionary scan can be limited to MDict or TangoDict files; the chosen type is remembered for the next scan.
* New rule template variables: ${MATCH_1}, ${MATCH_2}… (regular expression capture groups), ${PARENT_FOLDER}, and for a custom folder scan ${RELATIVE_PATH}, ${RELATIVE_FOLDER_1}, ${RELATIVE_FOLDER_2}… (folders below the scanned folder).
* The scan result list shows the name each dictionary will get and the groups it will join before it is added.
* The Dictionaries screen shows the groups each dictionary is in (the default group is not shown).
* Rules can be applied to dictionaries already added (Apply Rules to Existing Dictionaries in the rules menu): review the proposed renames and groups, untick any you do not want, then apply.
* A grouping rule can add several groups: separate them with | in the template. Write $$ for a literal $ and $| for a literal |.
* The rule editor has three tabs: Rule, Test (enter a sample file path, and optionally the internal name and scanned folder, to see the name or groups the rule produces) and Guide (how rules work, every template variable with examples, and sample rules).
* Restore Default Rule in the rules menu adds the default naming rule again after it was deleted.
* Adding dictionaries now always runs in the background, so a slow rule or a large file no longer freezes the screen. Generated names are limited to 200 characters.
* Redesigned the dictionary scan screen: a progress bar is shown while scanning, the result list has more room, and the whole "Select all" row can be tapped.
* Fixed the dictionary scan list showing the MDict badge for TangoDict (.dc) files.
* Fixed a crash when choosing Ask AI from another app's text selection menu.

---
### 更新日志
* 词典设置和词典管理中中新增“自动命名与分组规则”：添加词典时，可根据文件路径、文件名或内部名字自动设置名称和分组
* 新添加的词典（MDX 和 .dc）默认使用其内部名字命名（为空或为 Mdx Builder 默认占位符时使用文件名）。此默认规则可编辑、停用或删除，已有词典不会被重命名
* 批量添加词典时，遇到无法打开的文件不再中断：其余文件会继续添加，并提示添加失败的文件
* 词典规则可导出为 JSON 文件，或从 JSON 文件导入（选择规则后点“导出”；导入时添加新规则并跳过重复规则）
* 扫描词典时可只扫描 MDict 或 TangoDict 文件，所选类型会在下次扫描时保留
* 规则模板新增变量：${MATCH_1}、${MATCH_2}…（正则表达式捕获组）、${PARENT_FOLDER}，以及自定义扫描时可用的 ${RELATIVE_PATH}、${RELATIVE_FOLDER_1}、${RELATIVE_FOLDER_2}…（扫描文件夹下的子文件夹）
* 扫描结果列表在添加前即显示词典将使用的名称和将加入的分组
* 词典管理界面显示每本词典所在的分组（不显示默认分组）
* 规则可应用到已添加的词典（规则菜单中的“对已有词典应用规则”）：查看将要进行的重命名和分组，取消勾选不需要的项后应用
* 分组规则可以加入多个分组：在模板中用 | 分隔。用 $$ 表示 $ 本身，用 $| 表示 | 本身
* 规则编辑界面分为“规则”“测试”“说明”三个标签页：“测试”中输入示例文件路径（可选填内部名字和扫描文件夹）即可查看规则生成的名称或分组；“说明”介绍规则的工作方式、每个模板变量及示例规则
* 规则菜单中的“恢复默认规则”可在默认命名规则被删除后重新添加
* 添加词典现在始终在后台进行，规则较慢或文件较大时界面不再卡住。生成的名称最长 200 个字符
* 重新设计了扫描词典界面：扫描时显示进度条，结果列表的显示空间更大，点击整行“全选”即可全选
* 修复了扫描词典列表中，TangoDict（.dc）文件显示为 MDict 标识的问题
* 修复了在其他应用的文本选择菜单中选择“问 AI”时程序崩溃的问题


---

### 繁體中文

### 更新日誌

* 詞典設定中新增 **自動命名與分組規則**：添加詞典時，可根據文件路徑、文件名或內部名字自動設定名稱和分組。
* 新添加的詞典（MDX 和 .dc）預設使用其內部名字命名（為空或為 Mdx Builder 預設佔位符時使用文件名）。此預設規則可編輯、停用或刪除，已有詞典不會被重新命名。
* 批量添加詞典時，遇到無法開啟的文件不再中斷：其餘文件會繼續添加，並提示添加失敗的文件。
* 詞典規則可導出為 JSON 文件，或從 JSON 文件導入（選擇規則後點「導出」；導入時添加新規則並跳過重複規則）。
* 掃描詞典時可只掃描 MDict 或 TangoDict 文件，所選類型會在下次掃描時保留。
* 規則模板新增變數：${MATCH_1}、${MATCH_2}…（正則表達式捕獲組）、${PARENT_FOLDER}，以及自定義掃描時可用的 ${RELATIVE_PATH}、${RELATIVE_FOLDER_1}、${RELATIVE_FOLDER_2}…（掃描文件夾下的子文件夾）。
* 掃描結果列表在添加前即顯示詞典將使用的名稱和將加入的分組。
* 詞典管理介面顯示每本詞典所在的分組（不顯示預設分組）。
* 規則可套用到已添加的詞典（規則選單中的「對已有詞典套用規則」）：查看將要進行的重新命名和分組，取消勾選不需要的項目後套用。
* 分組規則可以加入多個分組：在模板中用 | 分隔。用 $$ 表示 $ 本身，用 $| 表示 | 本身。
* 規則編輯介面分為「規則」「測試」「說明」三個標籤頁：「測試」中輸入範例文件路徑（可選填內部名字和掃描文件夾）即可查看規則產生的名稱或分組；「說明」介紹規則的運作方式、每個模板變數及範例規則。
* 規則選單中的「還原預設規則」可在預設命名規則被刪除後重新新增。
* 添加詞典現在始終在背景進行，規則較慢或文件較大時介面不再卡住。產生的名稱最長 200 個字元。
* 重新設計了掃描詞典介面：掃描時顯示進度條，結果列表的顯示空間更大，點擊整行「全選」即可全選。
* 修復了掃描詞典列表中，TangoDict（.dc）文件顯示為 MDict 標識的問題。
* 修復了在其他應用的文字選取選單中選擇「問 AI」時程式當機的問題。


# v2.3.7.8 (2026-06-07)

**English：** Minor UI Improvements

**简体中文：** 小幅调整用户界面

**繁體中文：** 小幅調整使用者介面


### Changelog
# v2.3.7.7 (2026-06-07)

### English

### Changelog

* Automatically detects whether a dictionary was created using **Mdx Builder** or **Mdict Utils**, and applies the corresponding sorting rules for binary search based on the creation method.
* Fixed an issue where some interface elements were not displayed completely during full-text searches.
* Fixed several spelling errors.

---
### 更新日志
* 自动检测词典是使用 Mdx Builder 还是 Mdict Utils 制作的，并根据不同的制作方式采用相应的排序规则进行二分法查询
* 修复了全文搜索时，部分界面显示不全的问题
* 修复了一些拼写错误

---

### 繁體中文

### 更新日誌

* 自動檢測詞典是使用 **Mdx Builder** 還是 **Mdict Utils** 製作的，並根據不同的製作方式採用相應的排序規則進行二分搜尋。
* 修復了進行全文搜尋時，部分介面顯示不完整的問題。
* 修復了一些拼寫錯誤。


# v2.3.7.6 (2026-06-07)
## English

### Changelog

* Fixed the issue of TTS icon not displaying fully

---

### 更新日志
* 修复了TTS图标显示不全的问题

---

### 更新日誌

* 修復了TTS圖標顯示不全的問題


  
# v2.3.7.5 (2026-05-14)
## English

### Changelog

* Added an "Enable Authentication" feature to the PC Console, allowing access to the console to require a username and password for improved security.
* Improved the file management functionality in the PC Console, increasing file upload speeds by approximately 2–4 times.
* Added a Dictionary Content Retrieval API to the PC Console, allowing other applications to retrieve dictionary content via API for easier integration and usage.
* Fixed some minor issues.

---

### 更新日志
* PC控制台新增"开启验证"功能，允许设置需要用户名和密码才可以访问控制台，提升安全性
* 改善PC控制台中的文件管理功能，文件上传速度大概提升了2-4倍
* PC控制台添加了词典内容获取API, 允许其它应用通过API获取词典内容，方便集成和使用
* 修复了一些小问题

---

### 更新日誌

* PC 控制台新增「啟用驗證」功能，可設定需輸入使用者名稱與密碼才能存取控制台，提升安全性。
* 改善 PC 控制台中的檔案管理功能，檔案上傳速度約提升 2–4 倍。
* PC 控制台新增詞典內容取得 API，允許其他應用程式透過 API 取得詞典內容，方便整合與使用。
* 修復一些小問題。



# v2.3.7.3 (2026-05-14)

## English

* Added several JavaScript AI functions, allowing users to use AI Prompt features in dictionaries for translation, explanations, example sentence generation, and more.

* Introduced a new WebView preloading mechanism to improve dictionary content loading speed and overall user experience.

* Improved the display effect of floating windows in landscape mode.

* Added the ability to set an individual zoom percentage for each dictionary in the dictionary details page, adapting to different dictionary display requirements.

* Added a “Direct Exit on Back Press” toggle in User Interface settings, allowing users to choose whether pressing the Back button exits the lookup interface directly instead of returning to the previous entry list.

### 更新日志
* 添加了几个js的AI函数，允许用户在词典中使用AI Prompt功能进行翻译、解释和例句生成等操作
* 引入Webview新预热机制，提升词典内容的加载速度和用户体验
* 改善横屏模式下浮动窗口的显示效果
* 可以在词典详情中单独设置词典的缩放百分比，以适应不同词典的显示需求
* 用户界面设置中添加"按返回键时直接退出"开关，允许用户选择是否在按下返回键时直接退出查词界面，而不是返回上词条列表
### 更新日誌

* 新增多個 JavaScript AI 函式，允許使用者在詞典中使用 AI Prompt 功能進行翻譯、解釋與例句生成等操作。

* 引入新的 WebView 預熱機制，提升詞典內容的載入速度與整體使用體驗。

* 改善橫向模式下浮動視窗的顯示效果。

* 可在詞典詳情中單獨設定詞典的縮放百分比，以適應不同詞典的顯示需求。

* 在使用者介面設定中新增「按返回鍵時直接退出」開關，允許使用者選擇按下返回鍵時是否直接退出查詞介面，而非返回上一詞條列表。


# v2.3.7.0 (2026-05-07)
**English:**
* Added Security Settings in Settings, allowing users to enable NetShield and check whether dictionary content has potential data leakage risks based on specific filtering rules. Several preset filtering rules are also provided for users to choose from.
* Added an option in Security Settings that allows users to enable or disable JavaScript Fetch API monitoring. This enables users to monitor whether dictionary content uses Fetch API, XMLHttpRequest, or WebSocket for network requests during display, and records related request information for user review.
* The in-page search function is no longer displayed by default in the standard dictionary lookup interface, in order to reduce interface complexity and improve user experience.
* Added an option in User Interface Settings that allows users to choose whether to enable the in-page search function.



---
### 更新日志
* 在设置中添加安全设置，允许用户启用网盾并根据一定的过滤规则来检查词典内容是否有数据泄露的风险，并提供了一些预设的过滤规则供用户选择
* 安全设置中添加了一个选项，允许用户选择是否启用Javascript Fetch API监控功能，以便用户可以监控词典内容显示示时是否有使用Fetch API,XMLHttpRequest及WebSocket进行网络请求，并记录相关的请求信息以供用户查看
* 普通查词界面默认不再显示页内查找功能，以减少界面复杂度和提升用户体验
* 在用户界面设置中添加了一个选项，允许用户选择是否启用页内查找功能


### 更新日誌
* 在設定中新增了安全設定，允許使用者啟用網盾，並根據特定的過濾規則檢查詞典內容是否存在資料洩漏風險，同時提供了一些預設的過濾規則供使用者選擇。
* 在安全設定中新增了一個選項，允許使用者選擇是否啟用 JavaScript Fetch API 監控功能，以便使用者可以監控詞典內容顯示時是否使用 Fetch API、XMLHttpRequest 及 WebSocket 進行網路請求，並記錄相關的請求資訊供使用者查看。
* 普通查詞介面預設不再顯示頁內查找功能，以減少介面複雜度並提升使用者體驗。
* 在使用者介面設定中新增了一個選項，允許使用者選擇是否啟用頁內查找功能。
* 
# v2.3.6.9 (2026-04-11)
#### Update Log
* Minor bugs fixed
---
### 更新日志
* 修复了一些小问题
---
#### 更新日誌
* 修復了一些小問題

## v2.3.6.8 (2026-04-03)

### Update Log

* **[Regular Lookup]** If an HTML element contains the `"tap-translate"` attribute, clicking it will trigger lookup for all text within the element instead of relying on the browser’s default behavior
* **[Regular Lookup]** Added a “Pop Out” option in the dictionary menu, allowing dictionary content to be displayed in a new window
* **[AI PROMPT]** Supports copying output results to the clipboard
* **[Regular Lookup]** Fixed an issue where the in-page search toolbar could not be displayed correctly in the sliding view
* **[Regular Lookup]** Fine-tuned the accuracy of anchor jumping

### 更新日志
* **[普通查词]** 如果html元素中带有"tap-translate"属性，点击时会触发元素中全部文字的查词功能，而非由浏览器决定
* **[普通查词]** 词典菜单中添加"单独打开"菜单，可以在新的窗口中显示词典内容
* **[AI PROMPT]** 输出时支持复制结果到剪贴板
* **[普通查词]** 修正了滑动视图中页内查找工具栏无法正确显示的问题
* **[普通查词]** 微调了一下锚跳的精确度


### 更新日誌

* **[一般查詞]** 若 HTML 元素包含「tap-translate」屬性，點擊時將觸發該元素內所有文字的查詞功能，而非由瀏覽器預設行為決定
* **[一般查詞]** 詞典選單中新增「單獨開啟」選項，可在新視窗中顯示詞典內容
* **[AI PROMPT]** 支援將輸出結果複製到剪貼簿
* **[一般查詞]** 修正滑動視圖中頁內搜尋工具列無法正確顯示的問題
* **[一般查詞]** 微調了錨點跳轉的精確度

## v2.3.6.6 (2026-03-24)


### **English**

### Update Log

* **[Regular Lookup]** Improved the lookup speed of MDX dictionaries. With 300 dictionaries in a single group, the time for a single lookup has been reduced from 285 ms to 180 ms.

---

### 更新日志
* **[普通查词]** 提高mdx词典的查词速度，在单个分组300本词典的情况下，单次查词的用时从285毫秒降到180毫秒
  
---

### **繁體中文 (Traditional Chinese)**

### 更新日誌

* **[一般查詞]** 提升 MDX 詞典的查詞速度，在單一分組包含 300 本詞典的情況下，單次查詞時間由 285 毫秒降低至 180 毫秒。



## v2.3.6.3 (2026-03-20)

### Changelog

* **[Local Large Model]** Upgraded the llama.cpp library to version b8429
* **[Local Large Model]** Added support for Qwen 3.5

---

### 更新日志

* **[本地大模型]** 升级llama.cpp库版本到b8429
* **[本地大模型]** 添加对Qwen3.5的支持
  
---

### 更新日誌

* **[本地大型模型]** 將 llama.cpp 函式庫升級至 b8429 版本
* **[本地大型模型]** 新增對 Qwen 3.5 的支援


## v2.3.6.2 (2026-03-18)

### Changelog

* **[E-ink Mode]**
  Improved display for e-ink devices; dark mode is now automatically disabled in e-ink mode for better readability.

* **[Standard Lookup]**
  Added a new option “Keep dictionary collapsed state” under **Settings → Dictionary Settings**:

  * When enabled: remembers the expand/collapse state of dictionary entries
  * When disabled: resets to the default collapsed state each time
    (Enabled by default)

* **[Standard Lookup]**
  Fixed an issue where dictionaries encoded in UTF-16LE could not return results when MDict official sorting mode was enabled.

* **[Reading Mode]**
  Regex search is only supported for TangoDict format dictionaries; the option is automatically hidden when using MDict format.

---

### 更新日志

* **[墨水屏场景]**
  优化墨水屏显示效果；在墨水屏模式下自动禁用深色模式，以提升阅读体验。

* **[普通查词]**
  在「设置 → 词典设置」中新增“保持词典折叠状态”选项：

  * 启用时：自动记忆词典的展开/折叠状态
  * 禁用时：每次打开词条都会重置为默认折叠状态
    （默认开启）

* **[普通查词]**
  修复在启用 MDict 官方排序模式后，使用 UTF-16LE 编码的词典无法正常查词的问题。

* **[阅读模式]**
  正则搜索仅支持 TangoDict 格式词典；当当前词典为 MDict 格式时，将自动隐藏正则搜索选项。

---

### 更新日誌

* **[墨水屏場景]**
  優化墨水屏顯示效果；在墨水屏模式下自動停用深色模式，以提升閱讀體驗。

* **[一般查詞]**
  在「設定 → 詞典設定」中新增「保持詞典折疊狀態」選項：

  * 啟用時：自動記住詞典的展開／折疊狀態
  * 停用時：每次開啟詞條都會重置為預設折疊狀態
    （預設為啟用）

* **[一般查詞]**
  修正啟用 MDict 官方排序模式後，使用 UTF-16LE 編碼的詞典無法正常查詢的問題。

* **[閱讀模式]**
  正則搜尋僅支援 TangoDict 格式詞典；當目前使用 MDict 格式時，將自動隱藏正則搜尋選項。



# v2.3.6.1 (2026-02-10)

#### Update Log
* **[Regular Lookup]** Added a quick settings button next to the lookup input box for fast adjustment of commonly used parameters
* **[Regular Lookup]** Supports long-pressing the dictionary list icon to directly open the group switching window
* **[Backup & Restore]** Added the linked resource library to the backup/restore list
* **[Spelling Language]** Fixed the issue where Japanese lemmatization could only load a fixed Sudachi dictionary filename, and added support for loading user dictionaries

#### 更新日志
* [普通查词]在查词输入框旁边新增了快捷设置按钮，方便快速调整常用参数
* [普通查词]支持长按词典列表图标，直接弹出分组切换窗口
* [备份与恢复]备份/恢复列表中加入关联资源库
* [拼写语言]修复了日语还原只能加载固定 Sudachi 词典文件名的问题, 并支持用户词典加载

#### 更新日誌
* **[一般查詞]** 在查詞輸入框旁新增了快捷設定按鈕，方便快速調整常用參數
* **[一般查詞]** 支援長按詞典列表圖示，直接彈出分組切換視窗
* **[備份與還原]** 在備份／還原清單中加入關聯資源庫
* **[拼寫語言]** 修正了日語還原只能載入固定 Sudachi 詞典檔名的問題，並支援使用者詞典載入
  
# v2.3.6.0 (2026-01-31)
#### Update Log
* Include SearchTextReplacement into auto backup
* Add Japanese Word Deinflection (Settings → Spelling & Language → Restore Japanese words to original form)
  
Japanese Word Deinflection: https://github.com/Jimex/DictTango-Android/wiki/Japanese-Word-Deinflection

#### 更新日志
* 将 SearchTextReplacement 纳入自动备份
* 新增日语词形还原功能（设置 → 拼写与语言 → 还原日语单词原形）

#### 更新日誌
* 將 SearchTextReplacement 納入自動備份
* 新增日語詞形還原功能（設定 → 拼字與語言 → 還原日語單詞原形）

# v2.3.5.8 (2026-01-20)
#### Update Log
* Fixed Edge TTS 403 issue

### 更新日志
* 修复了微软大声朗读的403问题

#### 更新日誌
* 修復了微軟大聲朗讀的 403 問題
  

# v2.3.5.7 (2026-01-17)
#### Update Log
* This version no longer supports systems below Android 10.
* Fixed an issue with the TTS locale
* Fixed pagination issues in the word book
* Squashed a few other minor bugs
---
### 更新日志
* 此版本不再支持安卓10以下系统
* 修复了 TTS 语言区域的问题
* 修复了单词本分页的问题
* 修复了一些其他小问题
---
#### 更新日誌
* 此版本不再支援 Android 10 以下的系統
* 修復了 TTS 語言區域的問題
* 修復了單字本分頁的問題
* 修復了一些其他小問題
* 
# v2.3.5.6 (2025-12-23)


#### Update Log

* Fixed crash issues
* When installing and opening the app for the first time, a setup screen will appear to guide users to select basic parameters and complete initialization

### 更新日志
* 修复了闪退问题
* 初次安装并首次打开应用时，会弹出界面引导用户选择基本参数完成初始化

#### 更新日誌
* 修復了閃退問題
* 初次安裝並首次開啟應用程式時，將會彈出引導介面，指引使用者選擇基本參數以完成初始化
  
# v2.3.5.5 (2025-12-20)

### Update Log

* You can now configure the top bar background mode in the normal word lookup window through the user interface settings (transparent gradient, fully transparent, solid color).
* In the normal word lookup window, clicking the dictionary name button in the top bar will open the dictionary menu.
* When scanning to add dictionaries, they can be grouped according to the location of the folder they are in (current level, one level up, two levels up, three levels up).
* **[Experimental Feature]** WebView preloading to improve performance.

### 更新日志
* 可以在用户界面配置中设置普通查词窗口中的调整顶部栏背景模式(透明渐进，全透明，纯色)
* 普通查词窗口中点击顶部词典名称按钮可以弹出词典菜单
* 扫描添加词典时, 可以按照词典所在文件夹的位置进行分组(当前，上一级，上两级，上三级）
* [实验性功能]WebView预加载以提高性能


### 更新日誌

* 可以在用戶界面配置中設置普通查詞窗口中的調整頂部欄背景模式(透明漸進，全透明，純色)
* 在普通查詞視窗中點擊頂部的詞典名稱按鈕，可彈出詞典選單
* 掃描新增詞典時，可依照詞典所在資料夾的位置進行分組（目前、上一層、上兩層、上三層）
* **【實驗性功能】** WebView 預先載入以提升效能

  
## v2.3.5.3（2025-12-13）

### Updates

* **[New]** In Reading Mode, entries now support Simplified–Traditional Chinese cross-search
  (currently only supports one-to-one Simplified–Traditional conversion)

* **[New]** In Reading Mode, built-in dictionaries can now directly display their **“Table of Content Pages”**

* **[New]** In the entry list of Reading Mode, **long-press an entry** to set it as the dictionary’s **“Table of Content Entry”**, or add it directly as a **“Table of Content Words”**

* **[New]** When editing dictionary details, you can also manually specify a **“Table of Content Entry”** or **“Table of Content Words”**

* **[Fix]** Fixed issues with phrase conversion during Simplified–Traditional cross-search

---

### Terminology

* **Table of Content Entry**

  This can be understood as the main entry point for all chapters in a dictionary.

  Each dictionary can have **only one** Table of Content Entry.

  Once set, the Table of Content Page can be displayed separately in Reading Mode.

  When this entry point is tapped, the main dictionary content view will jump to the corresponding chapter, while the Table of Content Page will remain visible.

* **Table of Content Words**

  Entries that belong to chapter content, excluding the Table of Content Entry Word.

  A dictionary can have **multiple** Chapter Entries.

  When these entries are tapped within the separately displayed Chapter Page, navigation occurs only within the Chapter Page and does not affect the main dictionary content view.

---


### 更新内容

* [新功能]阅读模式下的词条现在支持简繁通查(暂时只支持一对一简繁转换)
* [新功能]阅读模式里可以直接显示内置词典的「章节页面」
* [新功能]在阅读模式的词条列表里，**长按某个词条**，可以把它设为词典的「章节入口词条」，或者直接加入「章节词条」
* [新功能]在编辑词典详情时，也可以手动指定「章节入口词条」或「章节词条」
* [修复] 修正了简繁通查时的词组转换问题

### 名词说明

* **章节入口词条**
  可以理解为词典里“章节的总入口”。
  每本词典只能有 **一个** 章节入口词条。
  设置之后，阅读模式下就能单独显示章节页；
  点击这个入口词条时，会在主词典内容窗口里跳转到对应章节，同时章节页也会一直保留显示。

* **章节词条**
  除了章节入口词条以外，其他属于章节内容的词条。
  一本词典可以有 **多个** 章节词条。
  在单独显示的章节页里点击这些词条时，只会在章节页内部跳转，不会影响主词典内容窗口。

  ---
  

## **繁體中文翻譯**

## v2.3.5.3（2025-12-13）

### 更新內容

* **[新功能]** 閱讀模式下的詞條現在支援簡繁通查
  （暫時只支援一對一的簡繁轉換）

* **[新功能]** 閱讀模式中可直接顯示內建詞典的「章節頁面」

* **[新功能]** 在閱讀模式的詞條列表中，**長按某個詞條**，即可將其設為詞典的「章節入口詞條」，或直接加入為「章節詞條」

* **[新功能]** 在編輯詞典詳情時，也可手動指定「章節入口詞條」或「章節詞條」

* **[修復]** 修正了簡繁通查時詞組轉換的問題

---

### 名詞說明

* **章節入口詞條**

  可理解為詞典中「章節的總入口」。

  每本詞典只能有 **一個** 章節入口詞條。

  設定後，閱讀模式下即可單獨顯示章節頁；

  點擊此入口詞條時，主詞典內容視窗會跳轉至對應章節，同時章節頁將持續顯示。

* **章節詞條**

  除章節入口詞條以外，其他屬於章節內容的詞條。

  一本詞典可包含 **多個** 章節詞條。

  在單獨顯示的章節頁中點擊這些詞條時，只會在章節頁內部跳轉，不會影響主詞典內容視窗。


# v2.3.5.2 (2025-11-23)
### Changelog
* Added a selectable option for the official MDict sorting mode (experimental feature; accuracy may vary).
* Added new tap actions for dictionary content in listview mode:
  * **Two-finger tap**: Open the current dictionary content in a separate window
  * **Three-finger tap**: Bring up the dictionary-related menu

### 更新日志
* 新增 MDict 官方排序模式可选项（实验性功能，准确度可能有所偏差）。
* 在瀑布流模式下新增词典内容的点击操作：
  * **双指点击**：在独立窗口中打开当前词典内容
  * **三指点击**：唤出词典相关菜单

### 更新日誌
* 新增可選的 MDict 官方排序模式（實驗性功能，準確度可能會有偏差）。
* 在瀑布流模式下新增詞典內容的點擊操作：
  * **雙指點擊**：在獨立視窗中開啟當前詞典內容
  * **三指點擊**：喚出詞典相關選單
    
# v2.3.5.1 (2025-11-15)
### Changelog

* Improved performance of the floating window and the main window
* Improved visual effects during dictionary loading
* The floating window no longer collapses dictionary content by default (can be enabled in settings)
* In waterfall mode, the current dictionary is now displayed at the top (can be disabled in settings)
* Fixed some UI issues and other problems

### 更新日志
- 改善浮动窗口和主窗口的性能
- 改善词典加载时的视觉效果
- 浮动窗口默认不再折叠词典内容(可在设置中启用)
- 瀑布流模式下，在顶部显示当前词典(可在设置中关闭）
- 修正了一些界面问题和其它问题

### 更新日誌

* 改善浮動視窗和主視窗的效能
* 改善載入詞典時的視覺效果
* 浮動視窗預設不再折疊詞典內容（可在設定中啟用）
* 瀑布流模式下會在頂部顯示當前詞典（可在設定中關閉）
* 修正了一些介面問題及其他問題

# v2.3.4.6 (2025-11-09)

### Update Log

* You can move the normal search input bar to the top (Settings → User Interface Settings)
* Added volume key page turning (Settings → Dictionary Settings)
* You can hide the user annotation button (Settings → User Interface Settings)
* Added support for Qwen3 VL
* Improved floating window interface
* Fixed some interface and other issues

### 更新日志
- 可以把普通查词输入栏移到顶部（设置->用户界面设置）
- 添加音量键翻页（设置->词典设置）
- 可以隐藏用户批注按钮（设置->用户界面设置）
- 添加对Qwen3 VL支持
- 改善浮动窗口界面
- 修正了一些界面问题和其它问题


### 更新日誌

* 可以將普通查詞輸入欄移到頂部（設定→使用者介面設定）
* 新增音量鍵翻頁功能（設定→詞典設定）
* 可以隱藏使用者批註按鈕（設定→使用者介面設定）
* 新增對 Qwen3 VL 的支援
* 改善浮動視窗介面
* 修正了一些介面問題及其他問題


# v2.3.4.3 (2025-11-06)

### Update Notes

* Improved dark mode display
* Fixed an issue where a green background flickered when returning from the word lookup screen to the main screen
* Replaced external bottom sheet component with a native one to reduce dependencies
* Fixed an issue where the font *Family Name* was read incorrectly when adding external fonts
* Resolved issues related to scroll views

#### Word Lookup Screen Redesign

1. Moved the search input box to just above the keyboard for a smoother typing experience
2. Optimized layout to free up more space for displaying dictionary content
3. Redesigned the bottom toolbar
4. Added **Previous Dictionary / Next Dictionary** navigation:

   * **Previous Dictionary**: Press and swipe up; a short swipe scrolls up one page, while a long swipe returns to the top of the current dictionary
   * **Next Dictionary**: Press and swipe up; a short swipe scrolls down one page, while a long swipe jumps to the bottom of the current dictionary

### 更新日志

* 优化暗黑模式的显示效果
* 修复从查词界面返回主界面时绿色背景闪烁的问题
* 改用原生底部弹出菜单，减少外部组件依赖
* 修复添加外部字体时无法正确读取字体 Family Name 的问题
* 修正滑动视图相关问题

#### 普通查词界面重构

1. 查词输入框移至键盘上方，提升输入体验
2. 优化布局，释放更多空间用于展示词典内容
3. 重构底部操作栏
4. 新增“上一词典 / 下一词典”的滑动操作：

   * **上一词典**：按住按钮上滑后松手，短滑可上翻一页，长滑可返回当前词典顶部
   * **下一词典**：按住按钮上滑后松手，短滑可下翻一页，长滑可跳至当前词典底部

---

## 繁體中文版本

### 更新日誌

* 優化暗黑模式的顯示效果
* 修復從查詞介面返回主介面時綠色背景閃爍的問題
* 改用原生底部彈出選單，減少外部元件依賴
* 修復新增外部字體時無法正確讀取字體 Family Name 的問題
* 修正滑動視圖相關問題

#### 一般查詞介面重構

1. 查詞輸入框移至鍵盤上方，提升輸入體驗
2. 優化版面配置，釋放更多空間以顯示字典內容
3. 重構底部操作欄
4. 新增「上一字典／下一字典」操作：

   * **上一字典**：長按按鈕並上滑後放開，短滑可上翻一頁，長滑可返回目前字典頂部
   * **下一字典**：長按按鈕並上滑後放開，短滑可下翻一頁，長滑可跳至目前字典底部


# v2.3.4.0 (2025-09-20)

* Improve overall app response speed
* Improve reading mode indexing speed and shorten loading time
* Upgrade interface to Material 3 Expressive
* Add DictTango to the system text selection toolbar shortcuts for "Translate" and "Define"
* Add direct access to the GitHub Wiki in Help
* If a word is already added to the wordbook, the wordbook icon will look different
* Optimize the loading of the spell-check dictionary

---
## **简体中文**
- 提升应用的整体响应速度
- 提升阅读模式的索引速度和缩短加载时间
- 升级界面到Material 3 Expressive
- 把DictTango加到系统的文字选择菜单工具条上的"翻译“和”定义“的快捷方式中
- 帮助中添加了直接访问Github Wiki的入口
- 如果单词已经添加到单词本，添加单词本的图标会不一样
- 优化拼写检查词典的加载
  
---
## 繁體中文

* 提升應用的整體回應速度
* 提升閱讀模式的索引速度並縮短載入時間
* 將介面升級至 Material 3 Expressive
* 將 DictTango 加入系統文字選取工具列上的「翻譯」和「定義」捷徑
* 在說明中新增直接存取 GitHub Wiki 的入口
* 如果單詞已經加入單詞本，單詞本圖示會有所不同
* 優化拼字檢查字典的載入

---

Would you like me to also make this into a **release note style list** (with numbering and concise phrasing), so it looks more like a professional update log?


# v2.3.3.8 (2025-08-31)

- Added spellcheck (Settings -> Spelling & Language -> Spellcheck), using SymSpell. Users can customize dictionaries. Dictionary file download: [https://github.com/wolfgarbe/SymSpell/tree/master/SymSpell.FrequencyDictionary](https://github.com/wolfgarbe/SymSpell/tree/master/SymSpell.FrequencyDictionary)
- Added search text replacement feature (Settings -> Spelling & Language -> Search Text Replacement). Simple letters can replace characters that are hard to type (such as diacritics), e.g., use **aa*- to represent **ā**
- Option to set whether to restore the base form of English words for searching if no match is found (Settings -> Spelling & Language -> Spellcheck)
- Added simplified-traditional cross search with one-to-many phrase mapping, e.g., searching **艳丽*- can also find **豔麗*- and **艷麗*- (users need to create their own mapping file)
- Added function to check for updates and download the app installation file (manual installation required after download)

## **简体中文**
- 添加了拼写检查(设置->拼写与语言->拼写检查),使用SymSpell, 用户可自定义词典, 词典文件下载地址： https://github.com/wolfgarbe/SymSpell/tree/master/SymSpell.FrequencyDictionary
- 添加了查词输入文本替换功能(设置->拼写与语言->搜索文本替换)，可用简单字母代替难输入的字符（如重音符号），例如用 aa 表示 ā
- 可以设置查不到词时，是否还原英语单词原型再查询(设置->拼写与语言->拼写检查)
- 简繁通查功能添加词组一对多映射，例如：艳丽可以查“豔麗”和“艷麗” (用户需要自己自定义映射文件）
- 添加了检查更新并下载应用安装文件的功能（下载完成需要手动点击安装）

## 繁體中文
- 添加了拼寫檢查（設定 -> 拼寫與語言 -> 拼寫檢查），使用 SymSpell，用戶可自定義詞典，詞典文件下載地址： [https://github.com/wolfgarbe/SymSpell/tree/master/SymSpell.FrequencyDictionary](https://github.com/wolfgarbe/SymSpell/tree/master/SymSpell.FrequencyDictionary)
- 添加了查詞輸入文本替換功能（設定 -> 拼寫與語言 -> 搜索文本替換），可用簡單字母代替難輸入的字符（如重音符號），例如用 **aa*- 表示 **ā**
- 可以設定在查不到詞時，是否還原英語單詞原型再查詢（設定 -> 拼寫與語言 -> 拼寫檢查）
- 簡繁通查功能新增詞組一對多映射，例如：**豔麗**可以查「豔麗」和「艷麗」（用戶需要自行定義映射文件）
- 添加了檢查更新並下載應用安裝文件的功能（下載完成後需要手動點擊安裝）
- 
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
