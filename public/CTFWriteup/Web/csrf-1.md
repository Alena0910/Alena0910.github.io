這次是會檢查透過 bot 進入到 `/admin/notice_flag` 頁面的參數有沒有包含 userid = "admin"

```javascript
<img src="/admin/notice_flag?userid=admin">
```

得到 flag

![flag](/CTFWriteup/Web/assets/csrf/image.png)

```
DH{11a230801ad0b80d52b996cbe203e83d}
```

#Dreamhack #Web
