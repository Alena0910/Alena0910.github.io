---
title: PearlCTF 2025
published: 2025-03-10
updated: 2025-07-09
description: 'PearlCTF 2025 writeup'
image: ''
tags: ["CTF Writeup"]
category: 'CTF Writeup'
draft: false 
---

# Pearl CTF 2025

## Forensics

### HTTP Carrier Pigeons
透過題目給的網站 [連結](https://fingerprint.byu.edu)，去對照兩份request

![request1](/assets/PearlCTF2025/Forensics/HTTPCarrierPigeons/image.png)  
![request2](/assets/PearlCTF2025/Forensics/HTTPCarrierPigeons/image-1.png)

```
pearl{haproxy_evilginx}
```

## Misc

### qr-secrets

這一題用到工具 [QRazyBox](https://merri.cx/qrazybox/)

原圖把 qr code 可以辨識的地方都塗掉了，從橫向去數就會發現這是33\*33，且邊緣可以對照出是 ver.4，然後慢慢把其他黑白區域填回去

![version and size](/assets/PearlCTF2025/Misc/qr-secrets/image-1.png)

![qrcode solved](/assets/PearlCTF2025/Misc/qr-secrets/image.png)

就能得到 flag

![flag](/assets/PearlCTF2025/Misc/qr-secrets/image-2.png)

```
pearl{unl0ck_s3cr3ts_scan_2_find}
```