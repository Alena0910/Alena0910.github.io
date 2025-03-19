index 中有一則關於 nodejs

![nodejs](/CTFWriteup/picoCTF2025/Web/assets/head-dump/image.png)

source code 裡面可以看到`#API Documentation`可以連結到`/api-docs`

![api docs](/CTFWriteup/picoCTF2025/Web/assets/head-dump/image-1.png)

![swagger](/CTFWriteup/picoCTF2025/Web/assets/head-dump/image-2.png)

在 swagger 中發現 `Diagnosing /heapdump`

![heapdump](/CTFWriteup/picoCTF2025/Web/assets/head-dump/image-4.png)

按下 Download file

在檔案中找到 flag

![flag](/CTFWriteup/picoCTF2025/Web/assets/head-dump/image-5.png)

```
picoCTF{Pat!3nt_15_Th3_K3y_13d135dd}
```
