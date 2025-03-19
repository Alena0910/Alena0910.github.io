可以在 `red.png` 中找到一首詩

```
Crimson heart, vibrant and bold,
Hearts flutter at your sight.
Evenings glow softly red,
Cherries burst with sweet life.
Kisses linger with your warmth.
Love deep as merlot.
Scarlet leaves falling softly,
Bold in every stroke.
```

仔細看就會發現是藏頭詩，拼起來就是`check LSB`

用工具[pylsb](https://github.com/RenanTKN/pylsb)

```sh
python3 pylsb.py -i red.png -r
```

得到很多看起來像 base64 的字串，拿去解密

![result](/CTFWriteup/picoCTF2025/Forensics/assets/RED/image.png)

得到 flag

![flag](/CTFWriteup/picoCTF2025/Forensics/assets/RED/image-1.png)

```
picoCTF{r3d_1s_th3_ult1m4t3_cur3_f0r_54dn355_}
```
