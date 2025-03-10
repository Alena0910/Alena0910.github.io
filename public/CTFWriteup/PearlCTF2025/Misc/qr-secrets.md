這一題用到工具 [QRazyBox](https://merri.cx/qrazybox/)

原圖把 qr code 可以辨識的地方都塗掉了，從橫向去數就會發現這是33\*33，且邊緣可以對照出是 ver.4，然後慢慢把其他黑白區域填回去

![version and size](/CTFWriteup/PearlCTF2025/Misc/assets/qr-secrets/image-1.png)

![qrcode solved](/CTFWriteup/PearlCTF2025/Misc/assets/qr-secrets/image.png)

就能得到 flag

![flag](/CTFWriteup/PearlCTF2025/Misc/assets/qr-secrets/image-2.png)

```
pearl{unl0ck_s3cr3ts_scan_2_find}
```

#PearlCTF 2025 #Misc
