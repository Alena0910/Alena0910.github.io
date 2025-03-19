![start](/CTFWriteup/picoCTF2025/Crypto/assets/hashcrack/image.png)

題目提到`weakly hashed`，直接查詢`482c811da5d5b4bc6d497ffa98491e38`

![search](/CTFWriteup/picoCTF2025/Crypto/assets/hashcrack/image-1.png)

可知這就是`password123`

![second hash](/CTFWriteup/picoCTF2025/Crypto/assets/hashcrack/image-2.png)

用線上工具[SHA-1 Center](https://sha1.gromweb.com/)

![result2](/CTFWriteup/picoCTF2025/Crypto/assets/hashcrack/image-3.png)

`b7a875fc1ea228b9061041b7cec4bd3c52ab3ce3`是`letmein`

![third hash](/CTFWriteup/picoCTF2025/Crypto/assets/hashcrack/image-5.png)

用線上工具[CrackStation](https://crackstation.net/)

![result3](/CTFWriteup/picoCTF2025/Crypto/assets/hashcrack/image-4.png)

`916e8c4f79b25028c9e467f1eb8eee6d6bbdff965f9928310ad30a8d88697745`是`qwerty098`

![flag](/CTFWriteup/picoCTF2025/Crypto/assets/hashcrack/image-6.png)

```
picoCTF{UseStr0nG_h@shEs_&PaSswDs!_23622a7e}
```
