剛開始試過 sql injection，但發現不是，接著去看程式碼

發現有一個secretbackdoor123

把phpsessid改成secretbackdoor123

![cookies](/CTFWriteup/Web/MDImages/BeIDol/image.png)

進入到檔案管理系統

![fileExplorer](/CTFWriteup/Web/MDImages/BeIDol/image-1.png)

用script去掃所有檔案

file 11001

```
database:
  host: localhost
  user: admin
  password: [REDACTED]
```

file 11002

```
app_name: FileExplorer
debug: false
max_upload: 100M
```

file 11050

```
192.168.1.1 - - [01/Jan/2024:00:00:00 +0000] "GET / HTTP/1.1" 200
```

file 11051

```
[ERROR] Failed to connect to database
[ERROR] Invalid user input
```

file 11100

```
CREATE TABLE users (id INT, username VARCHAR(50));
INSERT INTO users VALUES (1, 'admin');
```

file 11500

```
<?php
function check_auth() { /* ... */ }
?>
```

file 11999

```
DB_PASSWORD=secret123
API_KEY=abcd1234
DEBUG=false
```

file 12001

```
        <!DOCTYPE html>
        <html>
        <head>
            <title>System Command Interface</title>
            <style>
                body { font-family: monospace; background: #1e1e1e; color: #d4d4d4; padding: 20px; }
                pre { background: #2d2d2d; padding: 10px; border-radius: 5px; }
                .output { margin-top: 10px; }
            </style>
        </head>
        <body>
            <h2>System Command Interface</h2>
            <form method="GET">
                <input type="hidden" name="file_id" value="12001">
                Command: <input type="text" name="cmd" style="width: 300px;" value="">
                <input type="submit" value="Execute">
            </form>
            <div class="output">
                <pre>Try some commands:
ls -la
pwd
cat /etc/passwd</pre>            </div>
        </body>
        </html>

```

根據第12001找到的檔案輸入網址

![12001](/CTFWriteup/Web/MDImages/BeIDol/image-2.png)

按照給的提示試試看
![passwd](/CTFWriteup/Web/MDImages/BeIDol/image-3.png)

![ls-al](/CTFWriteup/Web/MDImages/BeIDol/image-4.png)

![index](/CTFWriteup/Web/MDImages/BeIDol/image-5.png)

![login](/CTFWriteup/Web/MDImages/BeIDol/image-6.png)

![jsscript](/CTFWriteup/Web/MDImages/BeIDol/image-7.png)

基本上沒有看到甚麼重要的東西，找找看有沒有flag.txt

```
find / -name "flag*" 2>/dev/null
```

![findFLAG](/CTFWriteup/Web/MDImages/BeIDol/image-8.png)

印出/opt/flag/flag.txt的內容

![flag](/CTFWriteup/Web/MDImages/BeIDol/image-9.png)

```
TSC{You_can_be_ID0R_12353oujhefrgiuoewihoqweihfo}
```

#TSCCTF2025 #Web
