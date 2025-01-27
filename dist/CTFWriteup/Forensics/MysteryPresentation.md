拿到一個pptx

![pptx](/CTFWriteup/Forensics/assets/MysteryPresentation/image-1.png)

![openPPTX](/CTFWriteup/Forensics/assets/MysteryPresentation/image.png)

透過開頭的`pk`以及`docMetadata/LabelInfo.xml`判斷這個pptx是壓縮檔，所以對pptx解壓縮

![secret_data](/CTFWriteup/Forensics/assets/MysteryPresentation/image-2.png)

解壓縮後可以看到一個`secret_data.7z`，解壓縮後得到flag.txt

![flag](/CTFWriteup/Forensics/assets/MysteryPresentation/image-3.png)

```
TUCTF{p01yg10+_fi1e5_hiddin9_in_p1@in_5i9h+}
```

#TUCTF2025 #Forensics
