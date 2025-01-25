![index](/CTFWriteup/Web/MDImages/AveMujica/image.png)

進入網頁後開F12，可以觀察到所有圖片的來源都是由 `image?name=example.webp` 取得

![src](/CTFWriteup/Web/MDImages/AveMujica/image-1.png)

接下來去嘗試相對路徑可不可以取得一些敏感檔案

![mygo](/CTFWriteup/Web/MDImages/AveMujica/image-3.png)

經過嘗試後找到`image?name=../../../proc/self/environ`，打開檔案後就可以看到flag

![flag](/CTFWriteup/Web/MDImages/AveMujica/image-2.png)

```
TSC{敬愛爽🍷}
```

#TSCCTF2025 #Web
